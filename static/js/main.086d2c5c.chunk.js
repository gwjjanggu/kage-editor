(this["webpackJsonpkage-editor"]=this["webpackJsonpkage-editor"]||[]).push([[0],{25:function(e){e.exports=JSON.parse("{}")},29:function(e,t,n){e.exports=n(54)},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(11),l=n.n(o),s=n(6),i=n(4),u=n(3),h=n(1),d=n(2),v=n(21),p=n(12),f=n(22),m=n.n(f);!function(e){e[e.north=0]="north",e[e.south=1]="south",e[e.east=2]="east",e[e.west=3]="west",e[e.southeast=4]="southeast"}(a||(a={}));var b,O=m()("EDITOR"),g={selectSingle:O("SELECT_SINGLE"),selectAddSingle:O("SELECT_ADD_SINGLE"),selectRemoveSingle:O("SELECT_REMOVE_SINGLE"),selectNone:O("SELECT_NONE"),selectAll:O("SELECT_ALL"),selectPrev:O("SELECT_PREV"),selectNext:O("SELECT_NEXT"),startAreaSelect:O("AREA_SELECT_START"),startSelectionDrag:O("SELECTION_DRAG_START"),startPointDrag:O("MOVE_POINT_START"),startResize:O("RESIZE_START"),mouseMove:O("MOUSE_MOVE"),mouseUp:O("MOUSE_UP"),updateCTMInv:O("UPDATE_CTMINV")},j=n(8),y=n(7),S=function(e){switch(e){case 0:case 1:case 9:return 7;case 2:case 3:case 4:return 9;case 6:case 7:case 99:return 11;default:return 0}},M=function(e){var t=e.value.slice();return 99===t[0]&&(t[7]=e.partName||""),t.join(":")},E=function(e,t,n){switch(e.value[0]){case 99:var a=e.value.slice();return a[3]=t(a[3]),a[4]=n(a[4]),a[5]=t(a[5]),a[6]=n(a[6]),{value:a,partName:e.partName};case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var r=e.value.slice(),c=3;c+2<=r.length;c+=2)r[c]=t(r[c]),r[c+1]=n(r[c+1]);return{value:r};default:return e}},w=function(e){var t=e.map((function(e){return Object(d.a)(e,1)[0]})),n=e.map((function(e){return Object(d.a)(e,2)[1]}));return[Math.min.apply(Math,Object(u.a)(t)),Math.min.apply(Math,Object(u.a)(n)),Math.max.apply(Math,Object(u.a)(t)),Math.max.apply(Math,Object(u.a)(n))]},C=function(e){switch(e.value[0]){case 99:return w([[e.value[3],e.value[4]],[e.value[5],e.value[6]]]);case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var t=[],n=3;n+2<=e.value.length;n+=2)t.push([e.value[n],e.value[n+1]]);return w(t);default:return w([])}},x=function(e,t){var n=Object(d.a)(e,4),a=n[0],r=n[1],c=n[2],o=n[3],l=Object(d.a)(t,4),s=l[0],i=l[1],u=l[2],h=l[3];return[Math.min(a,s),Math.min(r,i),Math.max(c,u),Math.max(o,h)]},I=Object(y.a)((function(e){return e.map(C).reduce(x,w([]))}),(function(e,t){var n=Object(d.a)(e,1)[0],a=Object(d.a)(t,1)[0];return n.length===a.length&&n.every((function(e,t){return e===a[t]}))})),T=[[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[12]}],[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[13,313,413]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[22]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[23,24]}]],k=function(e,t){return e.position===t.position&&e.strokeTypes.includes(t.strokeType)&&e.shapeTypes.includes(t.shapeType)},D=function(e){var t=[];switch(e.value[0]){case 1:case 2:case 3:case 4:case 6:case 7:t.push({position:"start",strokeType:e.value[0],shapeType:e.value[1],coord:[e.value[3],e.value[4]],pointIndex:0});var n=(S(e.value[0])-3)/2-1;t.push({position:"end",strokeType:e.value[0],shapeType:e.value[2],coord:[e.value[3+2*n],e.value[3+2*n+1]],pointIndex:n})}return t},N=Object(y.a)((function(e,t){var n,a=[],r=Object(j.a)(t);try{for(r.s();!(n=r.n()).done;){var c,o=n.value,l=o.lineIndex,s=o.pointIndex,i=Object(j.a)(D(e[l]));try{for(i.s();!(c=i.n()).done;){var u=c.value;u.pointIndex===s&&a.push(u)}}catch(v){i.e(v)}finally{i.f()}}}catch(v){r.e(v)}finally{r.f()}var h=[];return e.forEach((function(e,t){var n,r=Object(j.a)(D(e));try{var c=function(){var e=n.value;a.some((function(t){return a=e,(n=t).coord[0]===a.coord[0]&&n.coord[1]===a.coord[1]&&T.some((function(e){var t=Object(d.a)(e,2),r=t[0],c=t[1];return k(r,n)&&k(c,a)||k(c,n)&&k(r,a)}));var n,a}))&&h.push({lineIndex:t,pointIndex:e.pointIndex})};for(r.s();!(n=r.n()).done;)c()}catch(v){r.e(v)}finally{r.f()}})),h}),(function(e,t){var n=Object(d.a)(e,2),a=n[0],r=n[1],c=Object(d.a)(t,2),o=c[0],l=c[1];return a===o&&r.length===l.length&&r.every((function(e,t){return e.lineIndex===l[t].lineIndex&&e.pointIndex===l[t].pointIndex}))})),R=Object(y.a)((function(e,t){var n,a=[],r=Object(j.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value,o=e[c];a.push({lineIndex:c,pointIndex:0}),a.push({lineIndex:c,pointIndex:(S(o.value[0])-3)/2})}}catch(l){r.e(l)}finally{r.f()}return N(e,a).filter((function(e){var n=e.lineIndex;return!t.includes(n)}))})),P=function(e,t,n,a){var r=R(e,t),c=function(e){return Math.round(e+n)},o=function(e){return Math.round(e+a)};return e=function(e,t,n,a){if(0===t.length)return e;var r,c=e.slice(),o=Object(j.a)(t);try{for(o.s();!(r=o.n()).done;){var l=r.value,s=l.lineIndex,i=l.pointIndex,u=c[s],d=u.value.slice();d[3+2*i]=n(d[3+2*i]),d[3+2*i+1]=a(d[3+2*i+1]),c[s]=Object(h.a)(Object(h.a)({},u),{},{value:d})}}catch(v){o.e(v)}finally{o.f()}return c}(e=e.map((function(e,n){return t.includes(n)?E(e,c,o):e})),r,c,o)},A=function(e,t,n,a,r){return e},L=function(e,t,n,a){return e.map((function(e,r){return t.includes(r)?function(e,t,n){var a=Object(d.a)(t,4),r=a[0],c=a[1],o=a[2],l=a[3],s=Object(d.a)(n,4),i=s[0],u=s[1],h=s[2],v=s[3];return E(e,(function(e){return Math.round(i+(e-r)*(h-i)/(o-r))}),(function(e){return Math.round(u+(e-c)*(v-u)/(l-c))}))}(e,n,a):e}))},_=new(n(23).Kage),z=Object(y.a)((function(e){var t=e.map(M);return _.makeGlyphSeparated(t)})),X=new URLSearchParams(window.location.hash.slice(1)),Y=function(e,t,n,r,c){if(1===t.length){var o=e[t[0]];switch(o.value[0]){case 0:case 9:case 99:var l=o.value.slice();switch(n){case a.north:l[4]+=c;break;case a.west:l[3]+=r;break;case a.south:l[6]+=c;break;case a.east:l[5]+=r;break;case a.southeast:l[5]+=r,l[6]+=c}var s=99===o.value[0]?{value:l,partName:o.partName}:{value:l};return e.map((function(e,n){return n===t[0]?s:e}))}}var i=I(t.map((function(t){return e[t]}))),u=i.slice();switch(n){case a.north:u[1]=Math.min(u[1]+c,u[3]-20);break;case a.west:u[0]=Math.min(u[0]+r,u[2]-20);break;case a.south:u[3]=Math.max(u[3]+c,u[1]+20);break;case a.east:u[2]=Math.max(u[2]+r,u[0]+20);break;case a.southeast:u[2]=Math.max(u[2]+r,u[0]+20),u[3]=Math.max(u[3]+c,u[1]+20)}return L(e,t,i,u)},U=function(e){var t=e.glyph;if(e.dragSelection){var n=Object(d.a)(e.dragSelection,4),a=n[0],r=n[1],c=n[2]-a,o=n[3]-r;t=P(e.glyph,e.selection,c,o)}else if(e.dragPoint){var l=Object(d.a)(e.dragPoint,2),s=(l[0],Object(d.a)(l[1],4)),i=s[0],u=s[1];s[2],s[3];t=A(e.glyph,e.selection)}else if(e.resizeSelection){var h=Object(d.a)(e.resizeSelection,2),v=h[0],p=Object(d.a)(h[1],4),f=p[0],m=p[1],b=p[2]-f,O=p[3]-m;t=Y(e.glyph,e.selection,v,b,O)}return t},V={glyph:(b=X.get("data")||"",b.split(/[$\r\n]+/).map((function(e){return function(e){for(var t=e.split(":"),n=+t[0],a=S(n),r=[],c=0;c<a;c++)r.push(Math.floor(+t[c]||0));return 99===r[0]?{value:r,partName:t[7]||""}:{value:r}}(e)})).filter((function(e){return 0!==(t=e).value.length&&(0!==t.value[0]||97===t.value[1]||98===t.value[1]||99===t.value[1]);var t}))),selection:[],areaSelectRect:null,dragSelection:null,dragPoint:null,resizeSelection:null,ctmInv:null},G=Object(v.reducerWithInitialState)(V).case(g.selectSingle,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{selection:[t]})})).case(g.selectAddSingle,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{selection:e.selection.includes(t)?e.selection:e.selection.concat([t])})})).case(g.selectRemoveSingle,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{selection:e.selection.filter((function(e){return t!==e}))})})).case(g.selectAll,(function(e){return Object(h.a)(Object(h.a)({},e),{},{selection:e.glyph.map((function(e,t){return t}))})})).case(g.selectNone,(function(e){return Object(h.a)(Object(h.a)({},e),{},{selection:[]})})).case(g.selectPrev,(function(e){if(0===e.glyph.length)return Object(h.a)(Object(h.a)({},e),{},{selection:[]});var t=0===e.selection.length?0:Math.min.apply(Math,Object(u.a)(e.selection));return Object(h.a)(Object(h.a)({},e),{},{selection:[(t-1+e.glyph.length)%e.glyph.length]})})).case(g.selectNext,(function(e){if(0===e.glyph.length)return Object(h.a)(Object(h.a)({},e),{},{selection:[]});var t=0===e.selection.length?-1:Math.max.apply(Math,Object(u.a)(e.selection));return Object(h.a)(Object(h.a)({},e),{},{selection:[(t+1+e.glyph.length)%e.glyph.length]})})).case(g.startAreaSelect,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(d.a)(n,2),r=a[0],c=a[1];return Object(h.a)(Object(h.a)({},e),{},{areaSelectRect:[r,c,r,c]})})).case(g.startSelectionDrag,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(d.a)(n,2),r=a[0],c=a[1];return Object(h.a)(Object(h.a)({},e),{},{dragSelection:[r,c,r,c]})})).case(g.startPointDrag,(function(e,t){var n=Object(d.a)(t,2),a=n[0],r=n[1];if(!e.ctmInv)return e;var c=e.ctmInv(a.clientX,a.clientY),o=Object(d.a)(c,2),l=o[0],s=o[1];return Object(h.a)(Object(h.a)({},e),{},{dragPoint:[r,[l,s,l,s]]})})).case(g.startResize,(function(e,t){var n=Object(d.a)(t,2),a=n[0],r=n[1];if(!e.ctmInv)return e;var c=e.ctmInv(a.clientX,a.clientY),o=Object(d.a)(c,2),l=o[0],s=o[1];return Object(h.a)(Object(h.a)({},e),{},{resizeSelection:[r,[l,s,l,s]]})})).case(g.mouseMove,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(d.a)(e.areaSelectRect,2),a=n[0],r=n[1],c=e.ctmInv(t.clientX,t.clientY),o=Object(d.a)(c,2),l=o[0],s=o[1];return Object(h.a)(Object(h.a)({},e),{},{areaSelectRect:[a,r,l,s]})}if(e.dragSelection){var i=Object(d.a)(e.dragSelection,2),u=i[0],v=i[1],p=e.ctmInv(t.clientX,t.clientY),f=Object(d.a)(p,2),m=f[0],b=f[1];return Object(h.a)(Object(h.a)({},e),{},{dragSelection:[u,v,m,b]})}if(e.dragPoint){var O=Object(d.a)(e.dragPoint,2),g=O[0],j=Object(d.a)(O[1],2),y=j[0],S=j[1],M=e.ctmInv(t.clientX,t.clientY),E=Object(d.a)(M,2),w=E[0],C=E[1];return Object(h.a)(Object(h.a)({},e),{},{dragPoint:[g,[y,S,w,C]]})}if(e.resizeSelection){var x=Object(d.a)(e.resizeSelection,2),I=x[0],T=Object(d.a)(x[1],2),k=T[0],D=T[1],N=e.ctmInv(t.clientX,t.clientY),R=Object(d.a)(N,2),P=R[0],A=R[1];return Object(h.a)(Object(h.a)({},e),{},{resizeSelection:[I,[k,D,P,A]]})}return e})).case(g.mouseUp,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(d.a)(e.areaSelectRect,2),a=n[0],r=n[1],c=e.ctmInv(t.clientX,t.clientY),o=Object(d.a)(c,2),l=o[0],s=o[1],i=function(e,t,n,a,r){for(var c=z(e),o=[],l=[[t,n],[t,r],[a,r],[a,n],[t,n]],s=0;s<c.length;s++){c[s].array.some((function(e){var t=e.array.map((function(e){return[e.x,e.y]}));return t.push(t[0]),Object(p.a)(l,t)||Object(p.a)(t,l)||Object(p.b)(l,t)}))&&o.push(s)}return o}(e.glyph,a,r,l,s),u=Array.from(new Set(e.selection.concat(i)));return Object(h.a)(Object(h.a)({},e),{},{selection:u,areaSelectRect:null})}if(e.dragSelection){var v=Object(d.a)(e.dragSelection,2),f=v[0],m=v[1],b=e.ctmInv(t.clientX,t.clientY),O=Object(d.a)(b,2),g=O[0],j=O[1],y=P(e.glyph,e.selection,g-f,j-m);return Object(h.a)(Object(h.a)({},e),{},{glyph:y,dragSelection:null})}if(e.dragPoint){var S=Object(d.a)(e.dragPoint,2),M=(S[0],Object(d.a)(S[1],2)),E=(M[0],M[1],e.ctmInv(t.clientX,t.clientY)),w=Object(d.a)(E,2),C=(w[0],w[1],A(e.glyph,e.selection));return Object(h.a)(Object(h.a)({},e),{},{glyph:C,dragPoint:null})}if(e.resizeSelection){var x=Object(d.a)(e.resizeSelection,2),I=x[0],T=Object(d.a)(x[1],2),k=T[0],D=T[1],N=e.ctmInv(t.clientX,t.clientY),R=Object(d.a)(N,2),L=R[0],_=R[1],X=Y(e.glyph,e.selection,I,L-k,_-D);return Object(h.a)(Object(h.a)({},e),{},{glyph:X,resizeSelection:null})}return e})).case(g.updateCTMInv,(function(e,t){return Object(h.a)(Object(h.a)({},e),{},{ctmInv:t})})),K=Object(i.b)({editor:G}),B=(n(47),n(48),function(e){return c.a.createElement(c.a.Fragment,null,e.polygons.array.map((function(e,t){return c.a.createElement("polygon",{key:t,points:e.array.map((function(e){var t=e.x,n=e.y;return"".concat(t,",").concat(n," ")})).join("")})})))}),F=(n(49),function(e){var t=z(e.glyph),n=e.selection,a=t.map((function(e,t){return t})).filter((function(e){return!n.includes(e)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("g",{className:"strokes-deselected"},a.map((function(n){return c.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownDeselectedStroke)||void 0===a?void 0:a.call(e,t,n)}},c.a.createElement(B,{polygons:t[n]}))}))),c.a.createElement("g",{className:"strokes-selected"},n.map((function(n){return c.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownSelectedStroke)||void 0===a?void 0:a.call(e,t,n)}},c.a.createElement(B,{polygons:t[n]}))}))))}),J=(n(50),function(e){if(!e.rect)return null;var t=Object(d.a)(e.rect,4),n=t[0],a=t[1],r=t[2],o=t[3];if(n>r){var l=n;n=r,r=l}if(a>o){var s=a;a=o,o=s}return c.a.createElement("rect",{className:"areaselect-rect",x:n,y:a,width:r-n,height:o-a})}),W=n(24),H=(n(51),function(e){return c.a.createElement("rect",{x:e.x-4,y:e.y-4,width:8,height:8,className:"controlpoint-rect ".concat(e.className||""),onMouseDown:e.handleMouseDown})}),$=(n(52),function(e){return c.a.createElement(c.a.Fragment,null,e.rectControl&&c.a.createElement(c.a.Fragment,null,c.a.createElement("rect",{className:"selection-rect",x:e.rectControl.coords[0],y:e.rectControl.coords[1],width:e.rectControl.coords[2]-e.rectControl.coords[0],height:e.rectControl.coords[3]-e.rectControl.coords[1]}),c.a.createElement(H,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[1],className:"north",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.north)}}),c.a.createElement(H,{x:e.rectControl.coords[0],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"west",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.west)}}),c.a.createElement(H,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[3],className:"south",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.south)}}),c.a.createElement(H,{x:e.rectControl.coords[2],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"east",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.east)}}),c.a.createElement(H,{x:e.rectControl.coords[2],y:e.rectControl.coords[3],className:"southeast",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.southeast)}})),e.pointControl.map((function(t,n){var a=t.x,r=t.y,o=t.className;return c.a.createElement(H,{key:n,x:a,y:r,className:o,handleMouseDown:function(t){return e.handleMouseDownPointControl(t,n)}})})))}),Z=Object(W.a)([function(e){return U(e.editor)},function(e){return e.editor.selection}],(function(e,t){if(0===t.length)return{rectControl:null,pointControl:[]};if(t.length>1){var n=t.map((function(t){return e[t]}));return{rectControl:{multiSelect:!0,coords:I(n)},pointControl:[]}}var a=e[t[0]];switch(a.value[0]){case 0:case 9:case 99:return{rectControl:{multiSelect:!1,coords:[a.value[3],a.value[4],a.value[5],a.value[6]]},pointControl:[]};case 1:case 2:case 3:case 4:case 6:case 7:for(var r=[],c=3;c+2<=a.value.length;c+=2)r.push({x:a.value[c],y:a.value[c+1],className:""});return{rectControl:null,pointControl:r};default:return{rectControl:null,pointControl:[]}}})),q=Object(s.b)(Z,(function(e){return{handleMouseDownRectControl:function(t,n){e(g.startResize([t,n])),t.stopPropagation()},handleMouseDownPointControl:function(t,n){e(g.startPointDrag([t,n])),t.stopPropagation()}}}))($),Q=(n(53),function(e){var t=e.handleMouseMove,n=e.handleMouseUp;return Object(r.useEffect)((function(){return document.addEventListener("mousemove",t),document.addEventListener("mouseup",n),function(){document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n)}}),[t,n]),c.a.createElement("div",{className:"glyph-area"},c.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-20 -20 500 240",onMouseDownCapture:e.handleMouseDownCapture,onMouseDown:e.handleMouseDownBackground},c.a.createElement("rect",{x:"0",y:"0",width:"200",height:"200",className:"glyph-boundary"}),c.a.createElement("rect",{x:"12",y:"12",width:"176",height:"176",className:"glyph-guide"}),c.a.createElement(F,{glyph:e.glyph,selection:e.selection,handleMouseDownDeselectedStroke:e.handleMouseDownDeselectedStroke,handleMouseDownSelectedStroke:e.handleMouseDownSelectedStroke}),c.a.createElement(q,null),c.a.createElement(J,{rect:e.areaSelectRect})))}),ee=Object(s.b)((function(e){return Object(h.a)(Object(h.a)({},e.editor),{},{glyph:U(e.editor)})}),(function(e){return{handleMouseDownCapture:function(t){if(t.target instanceof SVGSVGElement){var n=t.target.getScreenCTM();if(n){var a=t.target.createSVGPoint();e(g.updateCTMInv((function(e,t){a.x=e,a.y=t;var r=a.matrixTransform(n.inverse());return[r.x,r.y]})))}}},handleMouseDownBackground:function(t){t.shiftKey||t.ctrlKey||e(g.selectNone()),e(g.startAreaSelect(t))},handleMouseDownDeselectedStroke:function(t,n){t.shiftKey||t.ctrlKey?e(g.selectAddSingle(n)):e(g.selectSingle(n)),e(g.startSelectionDrag(t)),t.stopPropagation()},handleMouseDownSelectedStroke:function(t,n){(t.shiftKey||t.ctrlKey)&&e(g.selectRemoveSingle(n)),e(g.startSelectionDrag(t)),t.stopPropagation()},handleMouseMove:function(t){e(g.mouseMove(t))},handleMouseUp:function(t){e(g.mouseUp(t))}}}))(Q);var te=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(ee,null),c.a.createElement("div",{className:"editor-controls"}),c.a.createElement("div",{className:"parts-list-area"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(16),ae=n(56),re={ja:{translation:n(25)}},ce=X.get("host"),oe="ja";if(ce)switch(ce.split(".")[0]){case"en":oe="en";break;case"ko":oe="ko";break;case"zhs":oe="zh-Hans";break;case"zht":oe="zh-Hant"}ne.a.use(ae.a).init({resources:re,lng:oe,returnObjects:!0,interpolation:{escapeValue:!1}});ne.a;var le=Object(i.c)(K);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,{store:le},c.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.086d2c5c.chunk.js.map