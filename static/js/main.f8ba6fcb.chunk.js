(this["webpackJsonpkage-editor"]=this["webpackJsonpkage-editor"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"undo":"\u5143\u306b\u623b\u3059","redo":"\u3084\u308a\u76f4\u3059","select all":"\u3059\u3079\u3066\u3092\u9078\u629e","invert selection":"\u9078\u629e\u7bc4\u56f2\u3092\u53cd\u8ee2","copy":"\u30b3\u30d4\u30fc","paste":"\u8cbc\u308a\u4ed8\u3051","cut":"\u5207\u308a\u53d6\u308a","start freehand":"\u624b\u66f8\u304d\u958b\u59cb","end freehand":"\u624b\u66f8\u304d\u7d42\u4e86","decompose":"\u90e8\u54c1\u5206\u89e3","options":"\u8868\u793a\u8a2d\u5b9a...","finish edit":"\u7de8\u96c6\u7d42\u4e86"}')},34:function(e,t,n){e.exports=n(66)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(14),l=n.n(o),u=n(5),i=n(8),s=n(3),d=n(1),h=n(2),f=n(26),p=n(17),v=n(27),b=n.n(v);!function(e){e[e.north=0]="north",e[e.south=1]="south",e[e.east=2]="east",e[e.west=3]="west",e[e.southeast=4]="southeast"}(a||(a={}));var m,O=b()("EDITOR"),g={selectSingle:O("SELECT_SINGLE"),selectAddSingle:O("SELECT_ADD_SINGLE"),selectRemoveSingle:O("SELECT_REMOVE_SINGLE"),selectNone:O("SELECT_NONE"),selectAll:O("SELECT_ALL"),selectDeselected:O("SELECT_TOGGLE_ALL"),selectPrev:O("SELECT_PREV"),selectNext:O("SELECT_NEXT"),startAreaSelect:O("AREA_SELECT_START"),startSelectionDrag:O("SELECTION_DRAG_START"),startPointDrag:O("MOVE_POINT_START"),startResize:O("RESIZE_START"),mouseMove:O("MOUSE_MOVE"),mouseUp:O("MOUSE_UP"),updateCTMInv:O("UPDATE_CTMINV"),loadedBuhin:O("LOAD_BUHIN_DATA"),loadedStretchParam:O("LOAD_STRETCH_PARAM"),undo:O("UNDO"),redo:O("REDO"),paste:O("PASTE"),copy:O("COPY_SELECTION"),cut:O("CUT_SELECTION"),decomposeSelected:O("DECOMPOSE_SELECTION"),toggleFreehand:O("TOGGLE_FREEHAND_MODE"),openOptionModal:O("OPEN_OPTION_MODAL"),closeOptionModal:O("CLOSE_OPTION_MODAL")},j=function(e){switch(e){case 0:case 1:case 9:return 7;case 2:case 3:case 4:return 9;case 6:case 7:case 99:return 11;default:return 0}},y=function(e){var t=e.value.slice();return 99===t[0]&&(t[7]=e.partName||""),t.join(":")},M=function(e){return e.split(/[$\r\n]+/).map((function(e){return function(e){for(var t=e.split(":"),n=+t[0],a=j(n),r=[],c=0;c<a;c++)r.push(Math.floor(+t[c]||0));return 99===r[0]?{value:r,partName:t[7]||""}:{value:r}}(e)})).filter((function(e){return 0!==(t=e).value.length&&(0!==t.value[0]||97===t.value[1]||98===t.value[1]||99===t.value[1]);var t}))},E=n(6),S=function(e){var t=e.map((function(e){return Object(h.a)(e,1)[0]})),n=e.map((function(e){return Object(h.a)(e,2)[1]}));return[Math.min.apply(Math,Object(s.a)(t)),Math.min.apply(Math,Object(s.a)(n)),Math.max.apply(Math,Object(s.a)(t)),Math.max.apply(Math,Object(s.a)(n))]},w=function(e){switch(e.value[0]){case 99:return S([[e.value[3],e.value[4]],[e.value[5],e.value[6]]]);case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var t=[],n=3;n+2<=e.value.length;n+=2)t.push([e.value[n],e.value[n+1]]);return S(t);default:return S([])}},C=function(e,t){var n=Object(h.a)(e,4),a=n[0],r=n[1],c=n[2],o=n[3],l=Object(h.a)(t,4),u=l[0],i=l[1],s=l[2],d=l[3];return[Math.min(a,u),Math.min(r,i),Math.max(c,s),Math.max(o,d)]},x=Object(E.a)((function(e){return e.map(w).reduce(C,S([]))}),(function(e,t){var n=Object(h.a)(e,1)[0],a=Object(h.a)(t,1)[0];return n.length===a.length&&n.every((function(e,t){return e===a[t]}))})),D=n(7),I=[[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[12]}],[{position:"start",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[13,313,413]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"start",strokeTypes:[1,2,3,4,6,7],shapeTypes:[22]}],[{position:"end",strokeTypes:[1],shapeTypes:[2]},{position:"end",strokeTypes:[1],shapeTypes:[23,24]}]],k=function(e,t){return e.position===t.position&&e.strokeTypes.includes(t.strokeType)&&e.shapeTypes.includes(t.shapeType)},T=function(e){var t=[];switch(e.value[0]){case 1:case 2:case 3:case 4:case 6:case 7:t.push({position:"start",strokeType:e.value[0],shapeType:e.value[1],coord:[e.value[3],e.value[4]],pointIndex:0});var n=(j(e.value[0])-3)/2-1;t.push({position:"end",strokeType:e.value[0],shapeType:e.value[2],coord:[e.value[3+2*n],e.value[3+2*n+1]],pointIndex:n})}return t},N=Object(E.a)((function(e,t){var n,a=[],r=Object(D.a)(t);try{for(r.s();!(n=r.n()).done;){var c,o=n.value,l=o.lineIndex,u=o.pointIndex,i=Object(D.a)(T(e[l]));try{for(i.s();!(c=i.n()).done;){var s=c.value;s.pointIndex===u&&a.push(s)}}catch(f){i.e(f)}finally{i.f()}}}catch(f){r.e(f)}finally{r.f()}var d=[];return e.forEach((function(e,t){var n,r=Object(D.a)(T(e));try{var c=function(){var e=n.value;a.some((function(t){return a=e,(n=t).coord[0]===a.coord[0]&&n.coord[1]===a.coord[1]&&I.some((function(e){var t=Object(h.a)(e,2),r=t[0],c=t[1];return k(r,n)&&k(c,a)||k(c,n)&&k(r,a)}));var n,a}))&&d.push({lineIndex:t,pointIndex:e.pointIndex})};for(r.s();!(n=r.n()).done;)c()}catch(f){r.e(f)}finally{r.f()}})),d}),(function(e,t){var n=Object(h.a)(e,2),a=n[0],r=n[1],c=Object(h.a)(t,2),o=c[0],l=c[1];return a===o&&r.length===l.length&&r.every((function(e,t){return e.lineIndex===l[t].lineIndex&&e.pointIndex===l[t].pointIndex}))})),P=Object(E.a)((function(e,t){var n,a=[],r=Object(D.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value,o=e[c];a.push({lineIndex:c,pointIndex:0}),a.push({lineIndex:c,pointIndex:(j(o.value[0])-3)/2-1})}}catch(l){r.e(l)}finally{r.f()}return N(e,a).filter((function(e){var n=e.lineIndex;return!t.includes(n)}))})),R=function(e,t,n){switch(e.value[0]){case 99:var a=e.value.slice();return a[3]=t(a[3]),a[4]=n(a[4]),a[5]=t(a[5]),a[6]=n(a[6]),{value:a,partName:e.partName};case 0:case 1:case 2:case 3:case 4:case 6:case 7:case 9:for(var r=e.value.slice(),c=3;c+2<=r.length;c+=2)r[c]=t(r[c]),r[c+1]=n(r[c+1]);return{value:r};default:return e}},A=function(e,t,n,a){if(0===t.length)return e;var r,c=e.slice(),o=Object(D.a)(t);try{for(o.s();!(r=o.n()).done;){var l=r.value,u=l.lineIndex,i=l.pointIndex,s=c[u],h=s.value.slice();h[3+2*i]=n(h[3+2*i]),h[3+2*i+1]=a(h[3+2*i+1]),c[u]=Object(d.a)(Object(d.a)({},s),{},{value:h})}}catch(f){o.e(f)}finally{o.f()}return c},_=function(e,t,n,a){var r=P(e,t),c=function(e){return Math.round(e+n)},o=function(e){return Math.round(e+a)};return e=e.map((function(e,n){return t.includes(n)?R(e,c,o):e})),e=A(e,r,c,o)},L=function(e,t,n,a,r){if(0===t.length)return e;var c=t[0],o={lineIndex:c,pointIndex:n},l=N(e,[o]).filter((function(e){return e.lineIndex!==c}));l.push(o);return e=A(e,l,(function(e){return Math.round(e+a)}),(function(e){return Math.round(e+r)}))},z=function(e,t,n,a){return e.map((function(e,r){return t.includes(r)?function(e,t,n){var a=Object(h.a)(t,4),r=a[0],c=a[1],o=a[2],l=a[3],u=Object(h.a)(n,4),i=u[0],s=u[1],d=u[2],f=u[3];return R(e,(function(e){return Math.round(i+(e-r)*(d-i)/(o-r))}),(function(e){return Math.round(s+(e-c)*(f-s)/(l-c))}))}(e,n,a):e}))},U=n(28),X=n(4),Y=n.n(X),B=n(12),F=function(){var e=Object(B.a)(Y.a.mark((function e(t){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://asia-northeast1-ku6goma.cloudfunctions.net/gwproxy"+t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("API error occurred");case 5:return e.t0=URLSearchParams,e.next=8,n.text();case 8:return e.t1=e.sent,e.abrupt("return",new e.t0(e.t1));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(B.a)(Y.a.mark((function e(t){var n;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F("/get_source.cgi?name=".concat(encodeURIComponent(t)));case 2:return n=e.sent,e.abrupt("return",n.get("data"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=new U.Kage,V=new Set,H=Object(E.a)((function(e,t){var n=e.map(y);return K.kBuhin.search=function(e){var n=t.get(e);return"undefined"===typeof n?(function(e){V.has(e)||(V.add(e),G(e).then((function(t){if("string"!==typeof t)throw new Error("failed to get buhin source of ".concat(e));var n=/^0:1:0:(-?\d+):(-?\d+):(-?\d+):(-?\d+)(?=$|\$)/.exec(t);if(n){var a=[+n[1]||0,+n[2]||0,+n[3]||0,+n[4]||0];ae.dispatch(g.loadedStretchParam([e,a]))}ae.dispatch(g.loadedBuhin([e,t])),V.delete(e)})).catch((function(e){return console.error(e)})))}(e),""):n},K.makeGlyphSeparated(n)})),$=function(e){return 99!==e.value[0]?null:[e.value[9],e.value[10],e.value[1],e.value[2]]},J=function(e){var t=Object(h.a)(e,4),n=t[0],a=t[1],r=t[2];return r<=100&&(r+=200,n=a=0),[n,a,r,t[3]]},W=function(e,t){if(99!==e.value[0])return[e];var n=t.get(e.partName);if(!n)return[e];var a=!1;K.kBuhin.search=function(e){var n=t.get(e);return"string"!==typeof n?(a=!0,""):n};var r=M(n),c=K.getEachStrokes(function(e){return e.map((function(e){return y(e)})).join("$")}(r)),o=K.getBox(c);if(a)return[e];var l=e.value[3],u=e.value[4],i=e.value[5],s=e.value[6],d=J($(e)),f=Object(h.a)(d,4),p=f[0],v=f[1],b=f[2],m=f[3],O=!(p===b-200&&v===m);return r.map((function(e){var t=R(e,(function(e){var t=O?K.stretch(b-200,p,e,o.minX,o.maxX):e;return Math.round(t/200*(i-l)+l)}),(function(e){var t=O?K.stretch(m,v,e,o.minY,o.maxY):e;return Math.round(t/200*(s-u)+u)}));if(!O||99!==t.value[0])return t;var n=J($(t)),a=Object(h.a)(n,4),r=a[0],c=a[1],d=a[2],f=a[3];if(r!==d-200||c!==f)return t;var g=t.value[3],j=t.value[4],y=t.value[5],M=t.value[6];if(g===y||j===M)return t;var E=function(e){return(e-g)/(y-g)*200},S=function(e){return(e-j)/(M-j)*200};return function(e,t){if(99!==e.value[0])return e;var n=Object(h.a)(t,4),a=n[0],r=n[1],c=n[2],o=n[3],l=e.value.slice();return l[9]=a,l[10]=r,l[1]=c,l[2]=o,{value:l,partName:e.partName}}(t,[E(r+100),S(c+100),E(d-100)+100,S(f+100)])}))},Z=new URLSearchParams(window.location.hash.slice(1)),q=function(e,t,n,r,c){if(1===t.length){var o=e[t[0]];switch(o.value[0]){case 0:case 9:case 99:var l=o.value.slice();switch(n){case a.north:l[4]+=c;break;case a.west:l[3]+=r;break;case a.south:l[6]+=c;break;case a.east:l[5]+=r;break;case a.southeast:l[5]+=r,l[6]+=c}var u=99===o.value[0]?{value:l,partName:o.partName}:{value:l};return e.map((function(e,n){return n===t[0]?u:e}))}}var i=x(t.map((function(t){return e[t]}))),s=i.slice();switch(n){case a.north:s[1]=Math.min(s[1]+c,s[3]-20);break;case a.west:s[0]=Math.min(s[0]+r,s[2]-20);break;case a.south:s[3]=Math.max(s[3]+c,s[1]+20);break;case a.east:s[2]=Math.max(s[2]+r,s[0]+20);break;case a.southeast:s[2]=Math.max(s[2]+r,s[0]+20),s[3]=Math.max(s[3]+c,s[1]+20)}return z(e,t,i,s)},Q=function(e){var t=e.glyph;if(e.dragSelection){var n=Object(h.a)(e.dragSelection,4),a=n[0],r=n[1],c=n[2]-a,o=n[3]-r;t=_(e.glyph,e.selection,c,o)}else if(e.dragPoint){var l=Object(h.a)(e.dragPoint,2),u=l[0],i=Object(h.a)(l[1],4),s=i[0],d=i[1],f=i[2]-s,p=i[3]-d;t=L(e.glyph,e.selection,u,f,p)}else if(e.resizeSelection){var v=Object(h.a)(e.resizeSelection,2),b=v[0],m=Object(h.a)(v[1],4),O=m[0],g=m[1],j=m[2]-O,y=m[3]-g;t=q(e.glyph,e.selection,b,j,y)}return t},ee={glyph:M(Z.get("data")||""),selection:[],areaSelectRect:null,dragSelection:null,dragPoint:null,resizeSelection:null,ctmInv:null,buhinMap:new Map,stretchParamMap:new Map,freehandMode:!1,showOptionModal:!1,clipboard:[]},te=Object(f.reducerWithInitialState)(ee).case(g.selectSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:[t]})})).case(g.selectAddSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:e.selection.includes(t)?e.selection:e.selection.concat([t])})})).case(g.selectRemoveSingle,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{selection:e.selection.filter((function(e){return t!==e}))})})).case(g.selectAll,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:e.glyph.map((function(e,t){return t}))})})).case(g.selectDeselected,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:e.glyph.map((function(e,t){return t})).filter((function(t){return!e.selection.includes(t)}))})})).case(g.selectNone,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:[]})})).case(g.selectPrev,(function(e){if(0===e.glyph.length)return Object(d.a)(Object(d.a)({},e),{},{selection:[]});var t=0===e.selection.length?0:Math.min.apply(Math,Object(s.a)(e.selection));return Object(d.a)(Object(d.a)({},e),{},{selection:[(t-1+e.glyph.length)%e.glyph.length]})})).case(g.selectNext,(function(e){if(0===e.glyph.length)return Object(d.a)(Object(d.a)({},e),{},{selection:[]});var t=0===e.selection.length?-1:Math.max.apply(Math,Object(s.a)(e.selection));return Object(d.a)(Object(d.a)({},e),{},{selection:[(t+1+e.glyph.length)%e.glyph.length]})})).case(g.startAreaSelect,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(h.a)(n,2),r=a[0],c=a[1];return Object(d.a)(Object(d.a)({},e),{},{areaSelectRect:[r,c,r,c]})})).case(g.startSelectionDrag,(function(e,t){if(!e.ctmInv)return e;var n=e.ctmInv(t.clientX,t.clientY),a=Object(h.a)(n,2),r=a[0],c=a[1];return Object(d.a)(Object(d.a)({},e),{},{dragSelection:[r,c,r,c]})})).case(g.startPointDrag,(function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1];if(!e.ctmInv)return e;var c=e.ctmInv(a.clientX,a.clientY),o=Object(h.a)(c,2),l=o[0],u=o[1];return Object(d.a)(Object(d.a)({},e),{},{dragPoint:[r,[l,u,l,u]]})})).case(g.startResize,(function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1];if(!e.ctmInv)return e;var c=e.ctmInv(a.clientX,a.clientY),o=Object(h.a)(c,2),l=o[0],u=o[1];return Object(d.a)(Object(d.a)({},e),{},{resizeSelection:[r,[l,u,l,u]]})})).case(g.mouseMove,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(h.a)(e.areaSelectRect,2),a=n[0],r=n[1],c=e.ctmInv(t.clientX,t.clientY),o=Object(h.a)(c,2),l=o[0],u=o[1];return Object(d.a)(Object(d.a)({},e),{},{areaSelectRect:[a,r,l,u]})}if(e.dragSelection){var i=Object(h.a)(e.dragSelection,2),s=i[0],f=i[1],p=e.ctmInv(t.clientX,t.clientY),v=Object(h.a)(p,2),b=v[0],m=v[1];return Object(d.a)(Object(d.a)({},e),{},{dragSelection:[s,f,b,m]})}if(e.dragPoint){var O=Object(h.a)(e.dragPoint,2),g=O[0],j=Object(h.a)(O[1],2),y=j[0],M=j[1],E=e.ctmInv(t.clientX,t.clientY),S=Object(h.a)(E,2),w=S[0],C=S[1];return Object(d.a)(Object(d.a)({},e),{},{dragPoint:[g,[y,M,w,C]]})}if(e.resizeSelection){var x=Object(h.a)(e.resizeSelection,2),D=x[0],I=Object(h.a)(x[1],2),k=I[0],T=I[1],N=e.ctmInv(t.clientX,t.clientY),P=Object(h.a)(N,2),R=P[0],A=P[1];return Object(d.a)(Object(d.a)({},e),{},{resizeSelection:[D,[k,T,R,A]]})}return e})).case(g.mouseUp,(function(e,t){if(!e.ctmInv)return e;if(e.areaSelectRect){var n=Object(h.a)(e.areaSelectRect,2),a=n[0],r=n[1],c=e.ctmInv(t.clientX,t.clientY),o=Object(h.a)(c,2),l=o[0],u=o[1],i=function(e,t,n,a,r,c){for(var o=H(e,t),l=[],u=[[n,a],[n,c],[r,c],[r,a],[n,a]],i=0;i<o.length;i++){o[i].array.some((function(e){var t=e.array.map((function(e){return[e.x,e.y]}));return t.push(t[0]),Object(p.a)(u,t)||Object(p.a)(t,u)||Object(p.b)(u,t)}))&&l.push(i)}return l}(e.glyph,e.buhinMap,a,r,l,u),s=Array.from(new Set(e.selection.concat(i)));return Object(d.a)(Object(d.a)({},e),{},{selection:s,areaSelectRect:null})}if(e.dragSelection){var f=Object(h.a)(e.dragSelection,2),v=f[0],b=f[1],m=e.ctmInv(t.clientX,t.clientY),O=Object(h.a)(m,2),g=O[0],j=O[1],y=_(e.glyph,e.selection,g-v,j-b);return Object(d.a)(Object(d.a)({},e),{},{glyph:y,dragSelection:null})}if(e.dragPoint){var M=Object(h.a)(e.dragPoint,2),E=M[0],S=Object(h.a)(M[1],2),w=S[0],C=S[1],x=e.ctmInv(t.clientX,t.clientY),D=Object(h.a)(x,2),I=D[0],k=D[1],T=L(e.glyph,e.selection,E,I-w,k-C);return Object(d.a)(Object(d.a)({},e),{},{glyph:T,dragPoint:null})}if(e.resizeSelection){var N=Object(h.a)(e.resizeSelection,2),P=N[0],R=Object(h.a)(N[1],2),A=R[0],z=R[1],U=e.ctmInv(t.clientX,t.clientY),X=Object(h.a)(U,2),Y=X[0],B=X[1],F=q(e.glyph,e.selection,P,Y-A,B-z);return Object(d.a)(Object(d.a)({},e),{},{glyph:F,resizeSelection:null})}return e})).case(g.updateCTMInv,(function(e,t){return Object(d.a)(Object(d.a)({},e),{},{ctmInv:t})})).case(g.loadedBuhin,(function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1],c=new Map(e.buhinMap);return c.set(a,r),Object(d.a)(Object(d.a)({},e),{},{buhinMap:c})})).case(g.loadedStretchParam,(function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1],c=new Map(e.stretchParamMap);return c.set(a,r),Object(d.a)(Object(d.a)({},e),{},{stretchParamMap:c})})).case(g.undo,(function(e){return e})).case(g.redo,(function(e){return e})).case(g.paste,(function(e){return Object(d.a)(Object(d.a)({},e),{},{glyph:e.glyph.concat(e.clipboard),selection:e.clipboard.map((function(t,n){return e.glyph.length+n}))})})).case(g.copy,(function(e){var t=e.selection.map((function(t){return e.glyph[t]})),n=x(t),a=Object(h.a)(n,2),r=a[0],c=a[1],o=function(e){return 230+e-r},l=function(e){return 20+e-c};return Object(d.a)(Object(d.a)({},e),{},{clipboard:e.selection.map((function(t){return R(e.glyph[t],o,l)}))})})).case(g.cut,(function(e){return Object(d.a)(Object(d.a)({},e),{},{glyph:e.glyph.filter((function(t,n){return!e.selection.includes(n)})),clipboard:e.selection.map((function(t){return e.glyph[t]})),selection:[]})})).case(g.decomposeSelected,(function(e){var t=[],n=[];return e.glyph.forEach((function(a,r){if(e.selection.includes(r)){var c=W(a,e.buhinMap);n=n.concat(c.map((function(e,n){return t.length+n}))),t=t.concat(c)}else t.push(a)})),Object(d.a)(Object(d.a)({},e),{},{glyph:t,selection:n})})).case(g.toggleFreehand,(function(e){return Object(d.a)(Object(d.a)({},e),{},{selection:e.freehandMode?e.selection:[],freehandMode:!e.freehandMode})})).case(g.openOptionModal,(function(e){return Object(d.a)(Object(d.a)({},e),{},{showOptionModal:!0})})).case(g.closeOptionModal,(function(e){return Object(d.a)(Object(d.a)({},e),{},{showOptionModal:!1})})),ne=Object(i.b)({editor:te}),ae=Object(i.c)(ne),re=(n(53),function(e){return c.a.createElement(c.a.Fragment,null,e.polygons.array.map((function(e,t){return c.a.createElement("polygon",{key:t,points:e.array.map((function(e){var t=e.x,n=e.y;return"".concat(t,",").concat(n," ")})).join("")})})))}),ce=(n(54),function(e){var t=H(e.glyph,e.buhinMap),n=e.selection,a=t.map((function(e,t){return t})).filter((function(e){return!n.includes(e)}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("g",{className:"strokes-deselected"},a.map((function(n){return c.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownDeselectedStroke)||void 0===a?void 0:a.call(e,t,n)}},c.a.createElement(re,{polygons:t[n]}))}))),c.a.createElement("g",{className:"strokes-selected"},n.map((function(n){return c.a.createElement("g",{key:n,onMouseDown:function(t){var a;return null===(a=e.handleMouseDownSelectedStroke)||void 0===a?void 0:a.call(e,t,n)}},c.a.createElement(re,{polygons:t[n]}))}))))}),oe=(n(55),function(e){if(!e.rect)return null;var t=Object(h.a)(e.rect,4),n=t[0],a=t[1],r=t[2],o=t[3];if(n>r){var l=n;n=r,r=l}if(a>o){var u=a;a=o,o=u}return c.a.createElement("rect",{className:"areaselect-rect",x:n,y:a,width:r-n,height:o-a})}),le=n(15),ue=(n(56),function(e){return c.a.createElement("rect",{x:e.x-4,y:e.y-4,width:8,height:8,className:"controlpoint-rect ".concat(e.className||""),onMouseDown:e.handleMouseDown})}),ie=(n(57),function(e){return c.a.createElement(c.a.Fragment,null,e.rectControl&&c.a.createElement(c.a.Fragment,null,c.a.createElement("rect",{className:"selection-rect",x:e.rectControl.coords[0],y:e.rectControl.coords[1],width:e.rectControl.coords[2]-e.rectControl.coords[0],height:e.rectControl.coords[3]-e.rectControl.coords[1]}),c.a.createElement(ue,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[1],className:"north",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.north)}}),c.a.createElement(ue,{x:e.rectControl.coords[0],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"west",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.west)}}),c.a.createElement(ue,{x:(e.rectControl.coords[0]+e.rectControl.coords[2])/2,y:e.rectControl.coords[3],className:"south",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.south)}}),c.a.createElement(ue,{x:e.rectControl.coords[2],y:(e.rectControl.coords[1]+e.rectControl.coords[3])/2,className:"east",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.east)}}),c.a.createElement(ue,{x:e.rectControl.coords[2],y:e.rectControl.coords[3],className:"southeast",handleMouseDown:function(t){return e.handleMouseDownRectControl(t,a.southeast)}})),e.pointControl.map((function(t,n){var a=t.x,r=t.y,o=t.className;return c.a.createElement(ue,{key:n,x:a,y:r,className:o,handleMouseDown:function(t){return e.handleMouseDownPointControl(t,n)}})})))});!function(e){e[e.none=0]="none",e[e.online=1]="online",e[e.match=2]="match"}(m||(m={}));var se=function(e,t){var n=e[t.lineIndex],a=(j(n.value[0])-3)/2-1;if(0!==t.pointIndex&&t.pointIndex!==a)return m.none;for(var r=n.value[3+2*t.pointIndex],c=n.value[3+2*t.pointIndex+1],o=function(e,t,n,a){return e===n&&e===r&&t<=c&&c<=a||t===a&&t===c&&e<=r&&r<=n},l=m.none,u=0;u<e.length;u++)if(t.lineIndex!==u){var i=e[u];if(![0,9,99].includes(i.value[0])){if(i.value[3]===r&&i.value[4]===c)return m.match;var s=(j(i.value[0])-3)/2-1;if(i.value[3+2*s]===r&&i.value[3+2*s+1]===c)return m.match;switch(i.value[0]){case 3:case 4:(o(i.value[3],i.value[4],i.value[5],i.value[6])||o(i.value[5],i.value[6],i.value[7],i.value[8]))&&(l=m.online);break;case 1:case 7:o(i.value[3],i.value[4],i.value[5],i.value[6])&&(l=m.online)}}}return l},de=Object(le.a)([function(e){return Q(e.editor)},function(e){return e.editor.selection}],(function(e,t){if(0===t.length)return{rectControl:null,pointControl:[]};if(t.length>1){var n=t.map((function(t){return e[t]}));return{rectControl:{multiSelect:!0,coords:x(n)},pointControl:[]}}var a=e[t[0]];switch(a.value[0]){case 0:case 9:case 99:return{rectControl:{multiSelect:!1,coords:[a.value[3],a.value[4],a.value[5],a.value[6]]},pointControl:[]};case 1:case 2:case 3:case 4:case 6:case 7:for(var r=[],c=3;c+2<=a.value.length;c+=2){var o=se(e,{lineIndex:t[0],pointIndex:(c-3)/2}),l="";o===m.match?l="match":o===m.online&&(l="online"),r.push({x:a.value[c],y:a.value[c+1],className:l})}return{rectControl:null,pointControl:r};default:return{rectControl:null,pointControl:[]}}})),he=Object(u.b)(de,(function(e){return{handleMouseDownRectControl:function(t,n){e(g.startResize([t,n])),t.stopPropagation()},handleMouseDownPointControl:function(t,n){e(g.startPointDrag([t,n])),t.stopPropagation()}}}))(ie),fe=(n(58),function(e){var t=e.handleMouseMove,n=e.handleMouseUp;return Object(r.useEffect)((function(){return document.addEventListener("mousemove",t),document.addEventListener("mouseup",n),function(){document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",n)}}),[t,n]),c.a.createElement("div",{className:"glyph-area"},c.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-20 -20 500 240",onMouseDownCapture:e.handleMouseDownCapture,onMouseDown:e.handleMouseDownBackground},c.a.createElement("rect",{x:"0",y:"0",width:"200",height:"200",className:"glyph-boundary"}),c.a.createElement("rect",{x:"12",y:"12",width:"176",height:"176",className:"glyph-guide"}),c.a.createElement(ce,{glyph:e.glyph,buhinMap:e.buhinMap,selection:e.selection,handleMouseDownDeselectedStroke:e.handleMouseDownDeselectedStroke,handleMouseDownSelectedStroke:e.handleMouseDownSelectedStroke}),c.a.createElement(he,null),c.a.createElement(oe,{rect:e.areaSelectRect})))}),pe=Object(u.b)((function(e){return Object(d.a)(Object(d.a)({},e.editor),{},{glyph:Q(e.editor)})}),(function(e){return{handleMouseDownCapture:function(t){var n=t.currentTarget.getScreenCTM();if(n){var a=t.currentTarget.createSVGPoint(),r=n.inverse();e(g.updateCTMInv((function(e,t){a.x=e,a.y=t;var n=a.matrixTransform(r);return[n.x,n.y]})))}},handleMouseDownBackground:function(t){t.shiftKey||t.ctrlKey||e(g.selectNone()),e(g.startAreaSelect(t))},handleMouseDownDeselectedStroke:function(t,n){t.shiftKey||t.ctrlKey?e(g.selectAddSingle(n)):e(g.selectSingle(n)),e(g.startSelectionDrag(t)),t.stopPropagation()},handleMouseDownSelectedStroke:function(t,n){(t.shiftKey||t.ctrlKey)&&e(g.selectRemoveSingle(n)),e(g.startSelectionDrag(t)),t.stopPropagation()},handleMouseMove:function(t){e(g.mouseMove(t))},handleMouseUp:function(t){e(g.mouseUp(t))}}}))(fe),ve=(n(59),n(67)),be=function(e){var t=Object(ve.a)().t;return c.a.createElement("div",{className:"editor-controls"},c.a.createElement("div",{className:"selection-info"},"selection info."),c.a.createElement("div",{className:"control-buttons"},c.a.createElement("button",{disabled:e.undoDisabled,onClick:e.undo},t("undo")),c.a.createElement("button",{disabled:e.redoDisabled,onClick:e.redo},t("redo")),c.a.createElement("button",{disabled:e.freehandMode,onClick:e.selectAll},t("select all")),c.a.createElement("button",{disabled:e.freehandMode,onClick:e.selectDeselected},t("invert selection")),c.a.createElement("button",{disabled:0===e.selection.length,onClick:e.copy},t("copy")),c.a.createElement("button",{disabled:e.pasteDisabled,onClick:e.paste},t("paste")),c.a.createElement("button",{disabled:0===e.selection.length,onClick:e.cut},t("cut")),c.a.createElement("button",{disabled:!0,onClick:e.toggleFreehand},e.freehandMode?t("end freehand"):t("start freehand")),c.a.createElement("button",{disabled:e.decomposeDisabled,onClick:e.decompose},t("decompose")),c.a.createElement("button",{disabled:!0,onClick:e.options},t("options"))),c.a.createElement("div",{className:"preview"},c.a.createElement("svg",{className:"preview-thumbnail",viewBox:"0 0 200 200",width:"50",height:"50"}),c.a.createElement("button",{disabled:!0,onClick:e.finishEdit},t("finish edit"))))},me=Object(le.a)([function(e){return e.editor.glyph},function(e){return e.editor.buhinMap},function(e){return e.editor.selection},function(e){return e.editor.clipboard},function(e){return e.editor.freehandMode}],(function(e,t,n,a,r){return{glyph:e,buhinMap:t,selection:n,undoDisabled:!0,redoDisabled:!0,pasteDisabled:0===a.length,decomposeDisabled:!n.some((function(t){return 99===e[t].value[0]})),freehandMode:r}})),Oe=Object(u.b)(me,(function(e){return{undo:function(){e(g.undo())},redo:function(){e(g.redo())},selectAll:function(){e(g.selectAll())},selectDeselected:function(){e(g.selectDeselected())},copy:function(){e(g.copy())},paste:function(){e(g.paste())},cut:function(){e(g.cut())},toggleFreehand:function(){e(g.toggleFreehand())},decompose:function(){e(g.decomposeSelected())},options:function(){e(g.openOptionModal())},finishEdit:function(){}}}))(be);var ge=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(pe,null),c.a.createElement(Oe,null),c.a.createElement("div",{className:"parts-list-area"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(21),ye=n(13),Me={ja:{translation:n(32)}},Ee=Z.get("host"),Se="ja";if(Ee)switch(Ee.split(".")[0]){case"en":Se="en";break;case"ko":Se="ko";break;case"zhs":Se="zh-Hans";break;case"zht":Se="zh-Hant"}je.a.use(ye.e).init({resources:Me,lng:Se,returnObjects:!0,interpolation:{escapeValue:!1}});je.a,n(65);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u.a,{store:ae},c.a.createElement(ge,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f8ba6fcb.chunk.js.map