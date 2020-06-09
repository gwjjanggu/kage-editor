import { ReducerBuilder } from 'typescript-fsa-reducers';

// @ts-ignore
import { polygonInPolygon, polygonIntersectsPolygon } from 'geometric';

import { dragActions } from '../actions/drag';

import { moveSelectedGlyphLines, moveSelectedPoint } from '../kageUtils/transform';
import { Glyph } from '../kageUtils/glyph';
import { makeGlyphSeparated } from '../kage';

import { AppState } from '.';
import { pushUndo } from './undo';
import { resizeSelected } from '../selectors/draggedGlyph';

const performAreaSelect = (glyph: Glyph, buhinMap: Map<string, string>, x1: number, y1: number, x2: number, y2: number): number[] => {
  const polygonsSep = makeGlyphSeparated(glyph, buhinMap);
  const result = [];

  const gAreaPolygon: [number, number][] = [
    [x1, y1],
    [x1, y2],
    [x2, y2],
    [x2, y1],
    [x1, y1],
  ];

  for (let index = 0; index < polygonsSep.length; index++) {
    const polygons = polygonsSep[index];
    if (polygons.array.some((polygon) => {
      const gPolygon = polygon.array.map(({ x, y }) => [x, y]);
      gPolygon.push(gPolygon[0]); // close polygon

      return (
        polygonInPolygon(gAreaPolygon, gPolygon) ||
        polygonInPolygon(gPolygon, gAreaPolygon) ||
        polygonIntersectsPolygon(gAreaPolygon, gPolygon)
      ) as boolean;
    })) {
      result.push(index);
    }
  }
  return result;
};

export default (builder: ReducerBuilder<AppState>) => builder
  .case(dragActions.startAreaSelect, (state, evt) => {
    if (!state.ctmInv) {
      return state;
    }
    const [x1, y1] = state.ctmInv(evt.clientX, evt.clientY);
    return {
      ...state,
      areaSelectRect: [x1, y1, x1, y1],
    };
  })
  .case(dragActions.startSelectionDrag, (state, evt) => {
    if (!state.ctmInv) {
      return state;
    }
    const [x1, y1] = state.ctmInv(evt.clientX, evt.clientY);
    return {
      ...state,
      dragSelection: [x1, y1, x1, y1],
    };
  })
  .case(dragActions.startPointDrag, (state, [evt, pointIndex]) => {
    if (!state.ctmInv) {
      return state;
    }
    const [x1, y1] = state.ctmInv(evt.clientX, evt.clientY);
    return {
      ...state,
      dragPoint: [pointIndex, [x1, y1, x1, y1]],
    };
  })
  .case(dragActions.startResize, (state, [evt, position]) => {
    if (!state.ctmInv) {
      return state;
    }
    const [x1, y1] = state.ctmInv(evt.clientX, evt.clientY);
    return {
      ...state,
      resizeSelection: [position, [x1, y1, x1, y1]],
    };
  })

  .case(dragActions.mouseMove, (state, evt) => {
    if (!state.ctmInv) {
      return state;
    }
    if (state.areaSelectRect) {
      const [x1, y1] = state.areaSelectRect;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);
      return {
        ...state,
        areaSelectRect: [x1, y1, x2, y2],
      };
    }
    if (state.dragSelection) {
      const [x1, y1] = state.dragSelection;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);
      return {
        ...state,
        dragSelection: [x1, y1, x2, y2],
      };
    }
    if (state.dragPoint) {
      const [pointIndex, [x1, y1]] = state.dragPoint;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);
      return {
        ...state,
        dragPoint: [pointIndex, [x1, y1, x2, y2]],
      };
    }
    if (state.resizeSelection) {
      const [position, [x1, y1]] = state.resizeSelection;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);
      return {
        ...state,
        resizeSelection: [position, [x1, y1, x2, y2]],
      };
    }
    return state;
  })
  .case(dragActions.mouseUp, (state, evt) => {
    if (!state.ctmInv) {
      return state;
    }
    if (state.areaSelectRect) {
      const [x1, y1] = state.areaSelectRect;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);
      const intersections = performAreaSelect(state.glyph, state.buhinMap, x1, y1, x2, y2);

      const newSelection = Array.from(new Set(state.selection.concat(intersections)));
      return {
        ...state,
        selection: newSelection,
        areaSelectRect: null,
      };
    }
    if (state.dragSelection) {
      const [x1, y1] = state.dragSelection;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);

      const newGlyph = moveSelectedGlyphLines(state.glyph, state.selection, x2 - x1, y2 - y1);
      return pushUndo(state, {
        ...state,
        glyph: newGlyph,
        dragSelection: null,
      });
    }
    if (state.dragPoint) {
      const [pointIndex, [x1, y1]] = state.dragPoint;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);

      const newGlyph = moveSelectedPoint(state.glyph, state.selection, pointIndex, x2 - x1, y2 - y1);
      return pushUndo(state, {
        ...state,
        glyph: newGlyph,
        dragPoint: null,
      });
    }
    if (state.resizeSelection) {
      const [position, [x1, y1]] = state.resizeSelection;
      const [x2, y2] = state.ctmInv(evt.clientX, evt.clientY);

      const newGlyph = resizeSelected(state.glyph, state.selection, position, x2 - x1, y2 - y1);
      return pushUndo(state, {
        ...state,
        glyph: newGlyph,
        resizeSelection: null,
      });
    }
    return state;
  })

  .case(dragActions.updateCTMInv, (state, ctmInv) => ({
    ...state,
    ctmInv,
  }));