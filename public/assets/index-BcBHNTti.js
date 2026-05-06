(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Rt="top",Ft="bottom",Bt="right",Ct="left",so="auto",ys=[Rt,Ft,Bt,Ct],xi="start",rs="end",ih="clippingParents",za="viewport",Ki="popper",sh="reference",ya=ys.reduce(function(i,e){return i.concat([e+"-"+xi,e+"-"+rs])},[]),Ga=[].concat(ys,[so]).reduce(function(i,e){return i.concat([e,e+"-"+xi,e+"-"+rs])},[]),rh="beforeRead",oh="read",ah="afterRead",ch="beforeMain",lh="main",uh="afterMain",hh="beforeWrite",dh="write",fh="afterWrite",ph=[rh,oh,ah,ch,lh,uh,hh,dh,fh];function dn(i){return i?(i.nodeName||"").toLowerCase():null}function Ht(i){if(i==null)return window;if(i.toString()!=="[object Window]"){var e=i.ownerDocument;return e&&e.defaultView||window}return i}function yi(i){var e=Ht(i).Element;return i instanceof e||i instanceof Element}function jt(i){var e=Ht(i).HTMLElement;return i instanceof e||i instanceof HTMLElement}function Wa(i){if(typeof ShadowRoot>"u")return!1;var e=Ht(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function rf(i){var e=i.state;Object.keys(e.elements).forEach(function(t){var n=e.styles[t]||{},s=e.attributes[t]||{},r=e.elements[t];!jt(r)||!dn(r)||(Object.assign(r.style,n),Object.keys(s).forEach(function(o){var a=s[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function of(i){var e=i.state,t={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,t.popper),e.styles=t,e.elements.arrow&&Object.assign(e.elements.arrow.style,t.arrow),function(){Object.keys(e.elements).forEach(function(n){var s=e.elements[n],r=e.attributes[n]||{},o=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:t[n]),a=o.reduce(function(c,l){return c[l]="",c},{});!jt(s)||!dn(s)||(Object.assign(s.style,a),Object.keys(r).forEach(function(c){s.removeAttribute(c)}))})}}const mh={name:"applyStyles",enabled:!0,phase:"write",fn:rf,effect:of,requires:["computeStyles"]};function ln(i){return i.split("-")[0]}var pi=Math.max,jr=Math.min,os=Math.round;function Sa(){var i=navigator.userAgentData;return i!=null&&i.brands&&Array.isArray(i.brands)?i.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function gh(){return!/^((?!chrome|android).)*safari/i.test(Sa())}function as(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!1);var n=i.getBoundingClientRect(),s=1,r=1;e&&jt(i)&&(s=i.offsetWidth>0&&os(n.width)/i.offsetWidth||1,r=i.offsetHeight>0&&os(n.height)/i.offsetHeight||1);var o=yi(i)?Ht(i):window,a=o.visualViewport,c=!gh()&&t,l=(n.left+(c&&a?a.offsetLeft:0))/s,u=(n.top+(c&&a?a.offsetTop:0))/r,h=n.width/s,d=n.height/r;return{width:h,height:d,top:u,right:l+h,bottom:u+d,left:l,x:l,y:u}}function Xa(i){var e=as(i),t=i.offsetWidth,n=i.offsetHeight;return Math.abs(e.width-t)<=1&&(t=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:i.offsetLeft,y:i.offsetTop,width:t,height:n}}function _h(i,e){var t=e.getRootNode&&e.getRootNode();if(i.contains(e))return!0;if(t&&Wa(t)){var n=e;do{if(n&&i.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ln(i){return Ht(i).getComputedStyle(i)}function af(i){return["table","td","th"].indexOf(dn(i))>=0}function Zn(i){return((yi(i)?i.ownerDocument:i.document)||window.document).documentElement}function ro(i){return dn(i)==="html"?i:i.assignedSlot||i.parentNode||(Wa(i)?i.host:null)||Zn(i)}function Tc(i){return!jt(i)||Ln(i).position==="fixed"?null:i.offsetParent}function cf(i){var e=/firefox/i.test(Sa()),t=/Trident/i.test(Sa());if(t&&jt(i)){var n=Ln(i);if(n.position==="fixed")return null}var s=ro(i);for(Wa(s)&&(s=s.host);jt(s)&&["html","body"].indexOf(dn(s))<0;){var r=Ln(s);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return s;s=s.parentNode}return null}function Ks(i){for(var e=Ht(i),t=Tc(i);t&&af(t)&&Ln(t).position==="static";)t=Tc(t);return t&&(dn(t)==="html"||dn(t)==="body"&&Ln(t).position==="static")?e:t||cf(i)||e}function $a(i){return["top","bottom"].indexOf(i)>=0?"x":"y"}function ks(i,e,t){return pi(i,jr(e,t))}function lf(i,e,t){var n=ks(i,e,t);return n>t?t:n}function vh(){return{top:0,right:0,bottom:0,left:0}}function Eh(i){return Object.assign({},vh(),i)}function xh(i,e){return e.reduce(function(t,n){return t[n]=i,t},{})}var uf=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Eh(typeof e!="number"?e:xh(e,ys))};function hf(i){var e,t=i.state,n=i.name,s=i.options,r=t.elements.arrow,o=t.modifiersData.popperOffsets,a=ln(t.placement),c=$a(a),l=[Ct,Bt].indexOf(a)>=0,u=l?"height":"width";if(!(!r||!o)){var h=uf(s.padding,t),d=Xa(r),m=c==="y"?Rt:Ct,g=c==="y"?Ft:Bt,_=t.rects.reference[u]+t.rects.reference[c]-o[c]-t.rects.popper[u],p=o[c]-t.rects.reference[c],f=Ks(r),M=f?c==="y"?f.clientHeight||0:f.clientWidth||0:0,E=_/2-p/2,y=h[m],C=M-d[u]-h[g],R=M/2-d[u]/2+E,A=ks(y,R,C),G=c;t.modifiersData[n]=(e={},e[G]=A,e.centerOffset=A-R,e)}}function df(i){var e=i.state,t=i.options,n=t.element,s=n===void 0?"[data-popper-arrow]":n;s!=null&&(typeof s=="string"&&(s=e.elements.popper.querySelector(s),!s)||_h(e.elements.popper,s)&&(e.elements.arrow=s))}const yh={name:"arrow",enabled:!0,phase:"main",fn:hf,effect:df,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function cs(i){return i.split("-")[1]}var ff={top:"auto",right:"auto",bottom:"auto",left:"auto"};function pf(i,e){var t=i.x,n=i.y,s=e.devicePixelRatio||1;return{x:os(t*s)/s||0,y:os(n*s)/s||0}}function bc(i){var e,t=i.popper,n=i.popperRect,s=i.placement,r=i.variation,o=i.offsets,a=i.position,c=i.gpuAcceleration,l=i.adaptive,u=i.roundOffsets,h=i.isFixed,d=o.x,m=d===void 0?0:d,g=o.y,_=g===void 0?0:g,p=typeof u=="function"?u({x:m,y:_}):{x:m,y:_};m=p.x,_=p.y;var f=o.hasOwnProperty("x"),M=o.hasOwnProperty("y"),E=Ct,y=Rt,C=window;if(l){var R=Ks(t),A="clientHeight",G="clientWidth";if(R===Ht(t)&&(R=Zn(t),Ln(R).position!=="static"&&a==="absolute"&&(A="scrollHeight",G="scrollWidth")),R=R,s===Rt||(s===Ct||s===Bt)&&r===rs){y=Ft;var x=h&&R===C&&C.visualViewport?C.visualViewport.height:R[A];_-=x-n.height,_*=c?1:-1}if(s===Ct||(s===Rt||s===Ft)&&r===rs){E=Bt;var b=h&&R===C&&C.visualViewport?C.visualViewport.width:R[G];m-=b-n.width,m*=c?1:-1}}var H=Object.assign({position:a},l&&ff),W=u===!0?pf({x:m,y:_},Ht(t)):{x:m,y:_};if(m=W.x,_=W.y,c){var Z;return Object.assign({},H,(Z={},Z[y]=M?"0":"",Z[E]=f?"0":"",Z.transform=(C.devicePixelRatio||1)<=1?"translate("+m+"px, "+_+"px)":"translate3d("+m+"px, "+_+"px, 0)",Z))}return Object.assign({},H,(e={},e[y]=M?_+"px":"",e[E]=f?m+"px":"",e.transform="",e))}function mf(i){var e=i.state,t=i.options,n=t.gpuAcceleration,s=n===void 0?!0:n,r=t.adaptive,o=r===void 0?!0:r,a=t.roundOffsets,c=a===void 0?!0:a,l={placement:ln(e.placement),variation:cs(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,bc(Object.assign({},l,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:c})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,bc(Object.assign({},l,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Sh={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:mf,data:{}};var or={passive:!0};function gf(i){var e=i.state,t=i.instance,n=i.options,s=n.scroll,r=s===void 0?!0:s,o=n.resize,a=o===void 0?!0:o,c=Ht(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&l.forEach(function(u){u.addEventListener("scroll",t.update,or)}),a&&c.addEventListener("resize",t.update,or),function(){r&&l.forEach(function(u){u.removeEventListener("scroll",t.update,or)}),a&&c.removeEventListener("resize",t.update,or)}}const Mh={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:gf,data:{}};var _f={left:"right",right:"left",bottom:"top",top:"bottom"};function zr(i){return i.replace(/left|right|bottom|top/g,function(e){return _f[e]})}var vf={start:"end",end:"start"};function Ac(i){return i.replace(/start|end/g,function(e){return vf[e]})}function ja(i){var e=Ht(i),t=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:t,scrollTop:n}}function Ya(i){return as(Zn(i)).left+ja(i).scrollLeft}function Ef(i,e){var t=Ht(i),n=Zn(i),s=t.visualViewport,r=n.clientWidth,o=n.clientHeight,a=0,c=0;if(s){r=s.width,o=s.height;var l=gh();(l||!l&&e==="fixed")&&(a=s.offsetLeft,c=s.offsetTop)}return{width:r,height:o,x:a+Ya(i),y:c}}function xf(i){var e,t=Zn(i),n=ja(i),s=(e=i.ownerDocument)==null?void 0:e.body,r=pi(t.scrollWidth,t.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),o=pi(t.scrollHeight,t.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ya(i),c=-n.scrollTop;return Ln(s||t).direction==="rtl"&&(a+=pi(t.clientWidth,s?s.clientWidth:0)-r),{width:r,height:o,x:a,y:c}}function qa(i){var e=Ln(i),t=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(t+s+n)}function Th(i){return["html","body","#document"].indexOf(dn(i))>=0?i.ownerDocument.body:jt(i)&&qa(i)?i:Th(ro(i))}function Vs(i,e){var t;e===void 0&&(e=[]);var n=Th(i),s=n===((t=i.ownerDocument)==null?void 0:t.body),r=Ht(n),o=s?[r].concat(r.visualViewport||[],qa(n)?n:[]):n,a=e.concat(o);return s?a:a.concat(Vs(ro(o)))}function Ma(i){return Object.assign({},i,{left:i.x,top:i.y,right:i.x+i.width,bottom:i.y+i.height})}function yf(i,e){var t=as(i,!1,e==="fixed");return t.top=t.top+i.clientTop,t.left=t.left+i.clientLeft,t.bottom=t.top+i.clientHeight,t.right=t.left+i.clientWidth,t.width=i.clientWidth,t.height=i.clientHeight,t.x=t.left,t.y=t.top,t}function wc(i,e,t){return e===za?Ma(Ef(i,t)):yi(e)?yf(e,t):Ma(xf(Zn(i)))}function Sf(i){var e=Vs(ro(i)),t=["absolute","fixed"].indexOf(Ln(i).position)>=0,n=t&&jt(i)?Ks(i):i;return yi(n)?e.filter(function(s){return yi(s)&&_h(s,n)&&dn(s)!=="body"}):[]}function Mf(i,e,t,n){var s=e==="clippingParents"?Sf(i):[].concat(e),r=[].concat(s,[t]),o=r[0],a=r.reduce(function(c,l){var u=wc(i,l,n);return c.top=pi(u.top,c.top),c.right=jr(u.right,c.right),c.bottom=jr(u.bottom,c.bottom),c.left=pi(u.left,c.left),c},wc(i,o,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function bh(i){var e=i.reference,t=i.element,n=i.placement,s=n?ln(n):null,r=n?cs(n):null,o=e.x+e.width/2-t.width/2,a=e.y+e.height/2-t.height/2,c;switch(s){case Rt:c={x:o,y:e.y-t.height};break;case Ft:c={x:o,y:e.y+e.height};break;case Bt:c={x:e.x+e.width,y:a};break;case Ct:c={x:e.x-t.width,y:a};break;default:c={x:e.x,y:e.y}}var l=s?$a(s):null;if(l!=null){var u=l==="y"?"height":"width";switch(r){case xi:c[l]=c[l]-(e[u]/2-t[u]/2);break;case rs:c[l]=c[l]+(e[u]/2-t[u]/2);break}}return c}function ls(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=n===void 0?i.placement:n,r=t.strategy,o=r===void 0?i.strategy:r,a=t.boundary,c=a===void 0?ih:a,l=t.rootBoundary,u=l===void 0?za:l,h=t.elementContext,d=h===void 0?Ki:h,m=t.altBoundary,g=m===void 0?!1:m,_=t.padding,p=_===void 0?0:_,f=Eh(typeof p!="number"?p:xh(p,ys)),M=d===Ki?sh:Ki,E=i.rects.popper,y=i.elements[g?M:d],C=Mf(yi(y)?y:y.contextElement||Zn(i.elements.popper),c,u,o),R=as(i.elements.reference),A=bh({reference:R,element:E,placement:s}),G=Ma(Object.assign({},E,A)),x=d===Ki?G:R,b={top:C.top-x.top+f.top,bottom:x.bottom-C.bottom+f.bottom,left:C.left-x.left+f.left,right:x.right-C.right+f.right},H=i.modifiersData.offset;if(d===Ki&&H){var W=H[s];Object.keys(b).forEach(function(Z){var D=[Bt,Ft].indexOf(Z)>=0?1:-1,U=[Rt,Ft].indexOf(Z)>=0?"y":"x";b[Z]+=W[U]*D})}return b}function Tf(i,e){e===void 0&&(e={});var t=e,n=t.placement,s=t.boundary,r=t.rootBoundary,o=t.padding,a=t.flipVariations,c=t.allowedAutoPlacements,l=c===void 0?Ga:c,u=cs(n),h=u?a?ya:ya.filter(function(g){return cs(g)===u}):ys,d=h.filter(function(g){return l.indexOf(g)>=0});d.length===0&&(d=h);var m=d.reduce(function(g,_){return g[_]=ls(i,{placement:_,boundary:s,rootBoundary:r,padding:o})[ln(_)],g},{});return Object.keys(m).sort(function(g,_){return m[g]-m[_]})}function bf(i){if(ln(i)===so)return[];var e=zr(i);return[Ac(i),e,Ac(e)]}function Af(i){var e=i.state,t=i.options,n=i.name;if(!e.modifiersData[n]._skip){for(var s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!0:o,c=t.fallbackPlacements,l=t.padding,u=t.boundary,h=t.rootBoundary,d=t.altBoundary,m=t.flipVariations,g=m===void 0?!0:m,_=t.allowedAutoPlacements,p=e.options.placement,f=ln(p),M=f===p,E=c||(M||!g?[zr(p)]:bf(p)),y=[p].concat(E).reduce(function(q,ae){return q.concat(ln(ae)===so?Tf(e,{placement:ae,boundary:u,rootBoundary:h,padding:l,flipVariations:g,allowedAutoPlacements:_}):ae)},[]),C=e.rects.reference,R=e.rects.popper,A=new Map,G=!0,x=y[0],b=0;b<y.length;b++){var H=y[b],W=ln(H),Z=cs(H)===xi,D=[Rt,Ft].indexOf(W)>=0,U=D?"width":"height",k=ls(e,{placement:H,boundary:u,rootBoundary:h,altBoundary:d,padding:l}),X=D?Z?Bt:Ct:Z?Ft:Rt;C[U]>R[U]&&(X=zr(X));var $=zr(X),j=[];if(r&&j.push(k[W]<=0),a&&j.push(k[X]<=0,k[$]<=0),j.every(function(q){return q})){x=H,G=!1;break}A.set(H,j)}if(G)for(var Y=g?3:1,ie=function(ae){var ge=y.find(function(_e){var Ae=A.get(_e);if(Ae)return Ae.slice(0,ae).every(function(Le){return Le})});if(ge)return x=ge,"break"},re=Y;re>0;re--){var z=ie(re);if(z==="break")break}e.placement!==x&&(e.modifiersData[n]._skip=!0,e.placement=x,e.reset=!0)}}const Ah={name:"flip",enabled:!0,phase:"main",fn:Af,requiresIfExists:["offset"],data:{_skip:!1}};function Rc(i,e,t){return t===void 0&&(t={x:0,y:0}),{top:i.top-e.height-t.y,right:i.right-e.width+t.x,bottom:i.bottom-e.height+t.y,left:i.left-e.width-t.x}}function Cc(i){return[Rt,Bt,Ft,Ct].some(function(e){return i[e]>=0})}function wf(i){var e=i.state,t=i.name,n=e.rects.reference,s=e.rects.popper,r=e.modifiersData.preventOverflow,o=ls(e,{elementContext:"reference"}),a=ls(e,{altBoundary:!0}),c=Rc(o,n),l=Rc(a,s,r),u=Cc(c),h=Cc(l);e.modifiersData[t]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const wh={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:wf};function Rf(i,e,t){var n=ln(i),s=[Ct,Rt].indexOf(n)>=0?-1:1,r=typeof t=="function"?t(Object.assign({},e,{placement:i})):t,o=r[0],a=r[1];return o=o||0,a=(a||0)*s,[Ct,Bt].indexOf(n)>=0?{x:a,y:o}:{x:o,y:a}}function Cf(i){var e=i.state,t=i.options,n=i.name,s=t.offset,r=s===void 0?[0,0]:s,o=Ga.reduce(function(u,h){return u[h]=Rf(h,e.rects,r),u},{}),a=o[e.placement],c=a.x,l=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=o}const Rh={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Cf};function Lf(i){var e=i.state,t=i.name;e.modifiersData[t]=bh({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}const Ch={name:"popperOffsets",enabled:!0,phase:"read",fn:Lf,data:{}};function Pf(i){return i==="x"?"y":"x"}function Df(i){var e=i.state,t=i.options,n=i.name,s=t.mainAxis,r=s===void 0?!0:s,o=t.altAxis,a=o===void 0?!1:o,c=t.boundary,l=t.rootBoundary,u=t.altBoundary,h=t.padding,d=t.tether,m=d===void 0?!0:d,g=t.tetherOffset,_=g===void 0?0:g,p=ls(e,{boundary:c,rootBoundary:l,padding:h,altBoundary:u}),f=ln(e.placement),M=cs(e.placement),E=!M,y=$a(f),C=Pf(y),R=e.modifiersData.popperOffsets,A=e.rects.reference,G=e.rects.popper,x=typeof _=="function"?_(Object.assign({},e.rects,{placement:e.placement})):_,b=typeof x=="number"?{mainAxis:x,altAxis:x}:Object.assign({mainAxis:0,altAxis:0},x),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,W={x:0,y:0};if(R){if(r){var Z,D=y==="y"?Rt:Ct,U=y==="y"?Ft:Bt,k=y==="y"?"height":"width",X=R[y],$=X+p[D],j=X-p[U],Y=m?-G[k]/2:0,ie=M===xi?A[k]:G[k],re=M===xi?-G[k]:-A[k],z=e.elements.arrow,q=m&&z?Xa(z):{width:0,height:0},ae=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:vh(),ge=ae[D],_e=ae[U],Ae=ks(0,A[k],q[k]),Le=E?A[k]/2-Y-Ae-ge-b.mainAxis:ie-Ae-ge-b.mainAxis,we=E?-A[k]/2+Y+Ae+_e+b.mainAxis:re+Ae+_e+b.mainAxis,ke=e.elements.arrow&&Ks(e.elements.arrow),O=ke?y==="y"?ke.clientTop||0:ke.clientLeft||0:0,ht=(Z=H==null?void 0:H[y])!=null?Z:0,ye=X+Le-ht-O,Pe=X+we-ht,me=ks(m?jr($,ye):$,X,m?pi(j,Pe):j);R[y]=me,W[y]=me-X}if(a){var et,Oe=y==="x"?Rt:Ct,T=y==="x"?Ft:Bt,v=R[C],I=C==="y"?"height":"width",te=v+p[Oe],J=v-p[T],Q=[Rt,Ct].indexOf(f)!==-1,ve=(et=H==null?void 0:H[C])!=null?et:0,le=Q?te:v-A[I]-G[I]-ve+b.altAxis,de=Q?v+A[I]+G[I]-ve-b.altAxis:J,Se=m&&Q?lf(le,v,de):ks(m?le:te,v,m?de:J);R[C]=Se,W[C]=Se-v}e.modifiersData[n]=W}}const Lh={name:"preventOverflow",enabled:!0,phase:"main",fn:Df,requiresIfExists:["offset"]};function Nf(i){return{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}}function If(i){return i===Ht(i)||!jt(i)?ja(i):Nf(i)}function Of(i){var e=i.getBoundingClientRect(),t=os(e.width)/i.offsetWidth||1,n=os(e.height)/i.offsetHeight||1;return t!==1||n!==1}function Uf(i,e,t){t===void 0&&(t=!1);var n=jt(e),s=jt(e)&&Of(e),r=Zn(e),o=as(i,s,t),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!t)&&((dn(e)!=="body"||qa(r))&&(a=If(e)),jt(e)?(c=as(e,!0),c.x+=e.clientLeft,c.y+=e.clientTop):r&&(c.x=Ya(r))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Ff(i){var e=new Map,t=new Set,n=[];i.forEach(function(r){e.set(r.name,r)});function s(r){t.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!t.has(a)){var c=e.get(a);c&&s(c)}}),n.push(r)}return i.forEach(function(r){t.has(r.name)||s(r)}),n}function Bf(i){var e=Ff(i);return ph.reduce(function(t,n){return t.concat(e.filter(function(s){return s.phase===n}))},[])}function Hf(i){var e;return function(){return e||(e=new Promise(function(t){Promise.resolve().then(function(){e=void 0,t(i())})})),e}}function kf(i){var e=i.reduce(function(t,n){var s=t[n.name];return t[n.name]=s?Object.assign({},s,n,{options:Object.assign({},s.options,n.options),data:Object.assign({},s.data,n.data)}):n,t},{});return Object.keys(e).map(function(t){return e[t]})}var Lc={placement:"bottom",modifiers:[],strategy:"absolute"};function Pc(){for(var i=arguments.length,e=new Array(i),t=0;t<i;t++)e[t]=arguments[t];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ph(i){i===void 0&&(i={});var e=i,t=e.defaultModifiers,n=t===void 0?[]:t,s=e.defaultOptions,r=s===void 0?Lc:s;return function(a,c,l){l===void 0&&(l=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Lc,r),modifiersData:{},elements:{reference:a,popper:c},attributes:{},styles:{}},h=[],d=!1,m={state:u,setOptions:function(f){var M=typeof f=="function"?f(u.options):f;_(),u.options=Object.assign({},r,u.options,M),u.scrollParents={reference:yi(a)?Vs(a):a.contextElement?Vs(a.contextElement):[],popper:Vs(c)};var E=Bf(kf([].concat(n,u.options.modifiers)));return u.orderedModifiers=E.filter(function(y){return y.enabled}),g(),m.update()},forceUpdate:function(){if(!d){var f=u.elements,M=f.reference,E=f.popper;if(Pc(M,E)){u.rects={reference:Uf(M,Ks(E),u.options.strategy==="fixed"),popper:Xa(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(b){return u.modifiersData[b.name]=Object.assign({},b.data)});for(var y=0;y<u.orderedModifiers.length;y++){if(u.reset===!0){u.reset=!1,y=-1;continue}var C=u.orderedModifiers[y],R=C.fn,A=C.options,G=A===void 0?{}:A,x=C.name;typeof R=="function"&&(u=R({state:u,options:G,name:x,instance:m})||u)}}}},update:Hf(function(){return new Promise(function(p){m.forceUpdate(),p(u)})}),destroy:function(){_(),d=!0}};if(!Pc(a,c))return m;m.setOptions(l).then(function(p){!d&&l.onFirstUpdate&&l.onFirstUpdate(p)});function g(){u.orderedModifiers.forEach(function(p){var f=p.name,M=p.options,E=M===void 0?{}:M,y=p.effect;if(typeof y=="function"){var C=y({state:u,name:f,instance:m,options:E}),R=function(){};h.push(C||R)}})}function _(){h.forEach(function(p){return p()}),h=[]}return m}}var Vf=[Mh,Ch,Sh,mh,Rh,Ah,Lh,yh,wh],Ka=Ph({defaultModifiers:Vf});const Dh=Object.freeze(Object.defineProperty({__proto__:null,afterMain:uh,afterRead:ah,afterWrite:fh,applyStyles:mh,arrow:yh,auto:so,basePlacements:ys,beforeMain:ch,beforeRead:rh,beforeWrite:hh,bottom:Ft,clippingParents:ih,computeStyles:Sh,createPopper:Ka,detectOverflow:ls,end:rs,eventListeners:Mh,flip:Ah,hide:wh,left:Ct,main:lh,modifierPhases:ph,offset:Rh,placements:Ga,popper:Ki,popperGenerator:Ph,popperOffsets:Ch,preventOverflow:Lh,read:oh,reference:sh,right:Bt,start:xi,top:Rt,variationPlacements:ya,viewport:za,write:dh},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const In=new Map,yo={set(i,e,t){In.has(i)||In.set(i,new Map);const n=In.get(i);if(!n.has(e)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(e,t)},get(i,e){return In.has(i)&&In.get(i).get(e)||null},remove(i,e){if(!In.has(i))return;const t=In.get(i);t.delete(e),t.size===0&&In.delete(i)}},zf=1e6,Gf=1e3,Ta="transitionend",Nh=i=>(i&&window.CSS&&window.CSS.escape&&(i=i.replace(/#([^\s"#']+)/g,(e,t)=>`#${CSS.escape(t)}`)),i),Wf=i=>i==null?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(),Xf=i=>{do i+=Math.floor(Math.random()*zf);while(document.getElementById(i));return i},$f=i=>{if(!i)return 0;let{transitionDuration:e,transitionDelay:t}=window.getComputedStyle(i);const n=Number.parseFloat(e),s=Number.parseFloat(t);return!n&&!s?0:(e=e.split(",")[0],t=t.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(t))*Gf)},Ih=i=>{i.dispatchEvent(new Event(Ta))},wn=i=>!i||typeof i!="object"?!1:(typeof i.jquery<"u"&&(i=i[0]),typeof i.nodeType<"u"),Yn=i=>wn(i)?i.jquery?i[0]:i:typeof i=="string"&&i.length>0?document.querySelector(Nh(i)):null,Ss=i=>{if(!wn(i)||i.getClientRects().length===0)return!1;const e=getComputedStyle(i).getPropertyValue("visibility")==="visible",t=i.closest("details:not([open])");if(!t)return e;if(t!==i){const n=i.closest("summary");if(n&&n.parentNode!==t||n===null)return!1}return e},qn=i=>!i||i.nodeType!==Node.ELEMENT_NODE||i.classList.contains("disabled")?!0:typeof i.disabled<"u"?i.disabled:i.hasAttribute("disabled")&&i.getAttribute("disabled")!=="false",Oh=i=>{if(!document.documentElement.attachShadow)return null;if(typeof i.getRootNode=="function"){const e=i.getRootNode();return e instanceof ShadowRoot?e:null}return i instanceof ShadowRoot?i:i.parentNode?Oh(i.parentNode):null},Yr=()=>{},Zs=i=>{i.offsetHeight},Uh=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,So=[],jf=i=>{document.readyState==="loading"?(So.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of So)e()}),So.push(i)):i()},Yt=()=>document.documentElement.dir==="rtl",Kt=i=>{jf(()=>{const e=Uh();if(e){const t=i.NAME,n=e.fn[t];e.fn[t]=i.jQueryInterface,e.fn[t].Constructor=i,e.fn[t].noConflict=()=>(e.fn[t]=n,i.jQueryInterface)}})},Dt=(i,e=[],t=i)=>typeof i=="function"?i.call(...e):t,Fh=(i,e,t=!0)=>{if(!t){Dt(i);return}const s=$f(e)+5;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Ta,o),Dt(i))};e.addEventListener(Ta,o),setTimeout(()=>{r||Ih(e)},s)},Za=(i,e,t,n)=>{const s=i.length;let r=i.indexOf(e);return r===-1?!t&&n?i[s-1]:i[0]:(r+=t?1:-1,n&&(r=(r+s)%s),i[Math.max(0,Math.min(r,s-1))])},Yf=/[^.]*(?=\..*)\.|.*/,qf=/\..*/,Kf=/::\d+$/,Mo={};let Dc=1;const Bh={mouseenter:"mouseover",mouseleave:"mouseout"},Zf=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Hh(i,e){return e&&`${e}::${Dc++}`||i.uidEvent||Dc++}function kh(i){const e=Hh(i);return i.uidEvent=e,Mo[e]=Mo[e]||{},Mo[e]}function Jf(i,e){return function t(n){return Ja(n,{delegateTarget:i}),t.oneOff&&K.off(i,n.type,e),e.apply(i,[n])}}function Qf(i,e,t){return function n(s){const r=i.querySelectorAll(e);for(let{target:o}=s;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return Ja(s,{delegateTarget:o}),n.oneOff&&K.off(i,s.type,e,t),t.apply(o,[s])}}function Vh(i,e,t=null){return Object.values(i).find(n=>n.callable===e&&n.delegationSelector===t)}function zh(i,e,t){const n=typeof e=="string",s=n?t:e||t;let r=Gh(i);return Zf.has(r)||(r=i),[n,s,r]}function Nc(i,e,t,n,s){if(typeof e!="string"||!i)return;let[r,o,a]=zh(e,t,n);e in Bh&&(o=(g=>function(_){if(!_.relatedTarget||_.relatedTarget!==_.delegateTarget&&!_.delegateTarget.contains(_.relatedTarget))return g.call(this,_)})(o));const c=kh(i),l=c[a]||(c[a]={}),u=Vh(l,o,r?t:null);if(u){u.oneOff=u.oneOff&&s;return}const h=Hh(o,e.replace(Yf,"")),d=r?Qf(i,t,o):Jf(i,o);d.delegationSelector=r?t:null,d.callable=o,d.oneOff=s,d.uidEvent=h,l[h]=d,i.addEventListener(a,d,r)}function ba(i,e,t,n,s){const r=Vh(e[t],n,s);r&&(i.removeEventListener(t,r,!!s),delete e[t][r.uidEvent])}function ep(i,e,t,n){const s=e[t]||{};for(const[r,o]of Object.entries(s))r.includes(n)&&ba(i,e,t,o.callable,o.delegationSelector)}function Gh(i){return i=i.replace(qf,""),Bh[i]||i}const K={on(i,e,t,n){Nc(i,e,t,n,!1)},one(i,e,t,n){Nc(i,e,t,n,!0)},off(i,e,t,n){if(typeof e!="string"||!i)return;const[s,r,o]=zh(e,t,n),a=o!==e,c=kh(i),l=c[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(l).length)return;ba(i,c,o,r,s?t:null);return}if(u)for(const h of Object.keys(c))ep(i,c,h,e.slice(1));for(const[h,d]of Object.entries(l)){const m=h.replace(Kf,"");(!a||e.includes(m))&&ba(i,c,o,d.callable,d.delegationSelector)}},trigger(i,e,t){if(typeof e!="string"||!i)return null;const n=Uh(),s=Gh(e),r=e!==s;let o=null,a=!0,c=!0,l=!1;r&&n&&(o=n.Event(e,t),n(i).trigger(o),a=!o.isPropagationStopped(),c=!o.isImmediatePropagationStopped(),l=o.isDefaultPrevented());const u=Ja(new Event(e,{bubbles:a,cancelable:!0}),t);return l&&u.preventDefault(),c&&i.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function Ja(i,e={}){for(const[t,n]of Object.entries(e))try{i[t]=n}catch{Object.defineProperty(i,t,{configurable:!0,get(){return n}})}return i}function Ic(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function To(i){return i.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Rn={setDataAttribute(i,e,t){i.setAttribute(`data-bs-${To(e)}`,t)},removeDataAttribute(i,e){i.removeAttribute(`data-bs-${To(e)}`)},getDataAttributes(i){if(!i)return{};const e={},t=Object.keys(i.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of t){let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1),e[s]=Ic(i.dataset[n])}return e},getDataAttribute(i,e){return Ic(i.getAttribute(`data-bs-${To(e)}`))}};class Js{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,t){const n=wn(t)?Rn.getDataAttribute(t,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...wn(t)?Rn.getDataAttributes(t):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,t=this.constructor.DefaultType){for(const[n,s]of Object.entries(t)){const r=e[n],o=wn(r)?"element":Wf(r);if(!new RegExp(s).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`)}}}const tp="5.3.8";class sn extends Js{constructor(e,t){super(),e=Yn(e),e&&(this._element=e,this._config=this._getConfig(t),yo.set(this._element,this.constructor.DATA_KEY,this))}dispose(){yo.remove(this._element,this.constructor.DATA_KEY),K.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,t,n=!0){Fh(e,t,n)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return yo.get(Yn(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,typeof t=="object"?t:null)}static get VERSION(){return tp}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const bo=i=>{let e=i.getAttribute("data-bs-target");if(!e||e==="#"){let t=i.getAttribute("href");if(!t||!t.includes("#")&&!t.startsWith("."))return null;t.includes("#")&&!t.startsWith("#")&&(t=`#${t.split("#")[1]}`),e=t&&t!=="#"?t.trim():null}return e?e.split(",").map(t=>Nh(t)).join(","):null},Te={find(i,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,i))},findOne(i,e=document.documentElement){return Element.prototype.querySelector.call(e,i)},children(i,e){return[].concat(...i.children).filter(t=>t.matches(e))},parents(i,e){const t=[];let n=i.parentNode.closest(e);for(;n;)t.push(n),n=n.parentNode.closest(e);return t},prev(i,e){let t=i.previousElementSibling;for(;t;){if(t.matches(e))return[t];t=t.previousElementSibling}return[]},next(i,e){let t=i.nextElementSibling;for(;t;){if(t.matches(e))return[t];t=t.nextElementSibling}return[]},focusableChildren(i){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>`${t}:not([tabindex^="-"])`).join(",");return this.find(e,i).filter(t=>!qn(t)&&Ss(t))},getSelectorFromElement(i){const e=bo(i);return e&&Te.findOne(e)?e:null},getElementFromSelector(i){const e=bo(i);return e?Te.findOne(e):null},getMultipleElementsFromSelector(i){const e=bo(i);return e?Te.find(e):[]}},oo=(i,e="hide")=>{const t=`click.dismiss${i.EVENT_KEY}`,n=i.NAME;K.on(document,t,`[data-bs-dismiss="${n}"]`,function(s){if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),qn(this))return;const r=Te.getElementFromSelector(this)||this.closest(`.${n}`);i.getOrCreateInstance(r)[e]()})},np="alert",ip="bs.alert",Wh=`.${ip}`,sp=`close${Wh}`,rp=`closed${Wh}`,op="fade",ap="show";class ao extends sn{static get NAME(){return np}close(){if(K.trigger(this._element,sp).defaultPrevented)return;this._element.classList.remove(ap);const t=this._element.classList.contains(op);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),K.trigger(this._element,rp),this.dispose()}static jQueryInterface(e){return this.each(function(){const t=ao.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}oo(ao,"close");Kt(ao);const cp="button",lp="bs.button",up=`.${lp}`,hp=".data-api",dp="active",Oc='[data-bs-toggle="button"]',fp=`click${up}${hp}`;class co extends sn{static get NAME(){return cp}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(dp))}static jQueryInterface(e){return this.each(function(){const t=co.getOrCreateInstance(this);e==="toggle"&&t[e]()})}}K.on(document,fp,Oc,i=>{i.preventDefault();const e=i.target.closest(Oc);co.getOrCreateInstance(e).toggle()});Kt(co);const pp="swipe",Ms=".bs.swipe",mp=`touchstart${Ms}`,gp=`touchmove${Ms}`,_p=`touchend${Ms}`,vp=`pointerdown${Ms}`,Ep=`pointerup${Ms}`,xp="touch",yp="pen",Sp="pointer-event",Mp=40,Tp={endCallback:null,leftCallback:null,rightCallback:null},bp={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class qr extends Js{constructor(e,t){super(),this._element=e,!(!e||!qr.isSupported())&&(this._config=this._getConfig(t),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Tp}static get DefaultType(){return bp}static get NAME(){return pp}dispose(){K.off(this._element,Ms)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Dt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=Mp)return;const t=e/this._deltaX;this._deltaX=0,t&&Dt(t>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(K.on(this._element,vp,e=>this._start(e)),K.on(this._element,Ep,e=>this._end(e)),this._element.classList.add(Sp)):(K.on(this._element,mp,e=>this._start(e)),K.on(this._element,gp,e=>this._move(e)),K.on(this._element,_p,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===yp||e.pointerType===xp)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const Ap="carousel",wp="bs.carousel",Jn=`.${wp}`,Xh=".data-api",Rp="ArrowLeft",Cp="ArrowRight",Lp=500,Ls="next",Ci="prev",Zi="left",Gr="right",Pp=`slide${Jn}`,Ao=`slid${Jn}`,Dp=`keydown${Jn}`,Np=`mouseenter${Jn}`,Ip=`mouseleave${Jn}`,Op=`dragstart${Jn}`,Up=`load${Jn}${Xh}`,Fp=`click${Jn}${Xh}`,$h="carousel",ar="active",Bp="slide",Hp="carousel-item-end",kp="carousel-item-start",Vp="carousel-item-next",zp="carousel-item-prev",jh=".active",Yh=".carousel-item",Gp=jh+Yh,Wp=".carousel-item img",Xp=".carousel-indicators",$p="[data-bs-slide], [data-bs-slide-to]",jp='[data-bs-ride="carousel"]',Yp={[Rp]:Gr,[Cp]:Zi},qp={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Kp={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Qs extends sn{constructor(e,t){super(e,t),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Te.findOne(Xp,this._element),this._addEventListeners(),this._config.ride===$h&&this.cycle()}static get Default(){return qp}static get DefaultType(){return Kp}static get NAME(){return Ap}next(){this._slide(Ls)}nextWhenVisible(){!document.hidden&&Ss(this._element)&&this.next()}prev(){this._slide(Ci)}pause(){this._isSliding&&Ih(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){K.one(this._element,Ao,()=>this.cycle());return}this.cycle()}}to(e){const t=this._getItems();if(e>t.length-1||e<0)return;if(this._isSliding){K.one(this._element,Ao,()=>this.to(e));return}const n=this._getItemIndex(this._getActive());if(n===e)return;const s=e>n?Ls:Ci;this._slide(s,t[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&K.on(this._element,Dp,e=>this._keydown(e)),this._config.pause==="hover"&&(K.on(this._element,Np,()=>this.pause()),K.on(this._element,Ip,()=>this._maybeEnableCycle())),this._config.touch&&qr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Te.find(Wp,this._element))K.on(n,Op,s=>s.preventDefault());const t={leftCallback:()=>this._slide(this._directionToOrder(Zi)),rightCallback:()=>this._slide(this._directionToOrder(Gr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Lp+this._config.interval))}};this._swipeHelper=new qr(this._element,t)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Yp[e.key];t&&(e.preventDefault(),this._slide(this._directionToOrder(t)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const t=Te.findOne(jh,this._indicatorsElement);t.classList.remove(ar),t.removeAttribute("aria-current");const n=Te.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);n&&(n.classList.add(ar),n.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=t||this._config.defaultInterval}_slide(e,t=null){if(this._isSliding)return;const n=this._getActive(),s=e===Ls,r=t||Za(this._getItems(),n,s,this._config.wrap);if(r===n)return;const o=this._getItemIndex(r),a=m=>K.trigger(this._element,m,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(n),to:o});if(a(Pp).defaultPrevented||!n||!r)return;const l=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=s?kp:Hp,h=s?Vp:zp;r.classList.add(h),Zs(r),n.classList.add(u),r.classList.add(u);const d=()=>{r.classList.remove(u,h),r.classList.add(ar),n.classList.remove(ar,h,u),this._isSliding=!1,a(Ao)};this._queueCallback(d,n,this._isAnimated()),l&&this.cycle()}_isAnimated(){return this._element.classList.contains(Bp)}_getActive(){return Te.findOne(Gp,this._element)}_getItems(){return Te.find(Yh,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return Yt()?e===Zi?Ci:Ls:e===Zi?Ls:Ci}_orderToDirection(e){return Yt()?e===Ci?Zi:Gr:e===Ci?Gr:Zi}static jQueryInterface(e){return this.each(function(){const t=Qs.getOrCreateInstance(this,e);if(typeof e=="number"){t.to(e);return}if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}K.on(document,Fp,$p,function(i){const e=Te.getElementFromSelector(this);if(!e||!e.classList.contains($h))return;i.preventDefault();const t=Qs.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");if(n){t.to(n),t._maybeEnableCycle();return}if(Rn.getDataAttribute(this,"slide")==="next"){t.next(),t._maybeEnableCycle();return}t.prev(),t._maybeEnableCycle()});K.on(window,Up,()=>{const i=Te.find(jp);for(const e of i)Qs.getOrCreateInstance(e)});Kt(Qs);const Zp="collapse",Jp="bs.collapse",er=`.${Jp}`,Qp=".data-api",em=`show${er}`,tm=`shown${er}`,nm=`hide${er}`,im=`hidden${er}`,sm=`click${er}${Qp}`,wo="show",Qi="collapse",cr="collapsing",rm="collapsed",om=`:scope .${Qi} .${Qi}`,am="collapse-horizontal",cm="width",lm="height",um=".collapse.show, .collapse.collapsing",Aa='[data-bs-toggle="collapse"]',hm={parent:null,toggle:!0},dm={parent:"(null|element)",toggle:"boolean"};class $s extends sn{constructor(e,t){super(e,t),this._isTransitioning=!1,this._triggerArray=[];const n=Te.find(Aa);for(const s of n){const r=Te.getSelectorFromElement(s),o=Te.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(s)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return hm}static get DefaultType(){return dm}static get NAME(){return Zp}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(um).filter(a=>a!==this._element).map(a=>$s.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||K.trigger(this._element,em).defaultPrevented)return;for(const a of e)a.hide();const n=this._getDimension();this._element.classList.remove(Qi),this._element.classList.add(cr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(cr),this._element.classList.add(Qi,wo),this._element.style[n]="",K.trigger(this._element,tm)},o=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(s,this._element,!0),this._element.style[n]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||K.trigger(this._element,nm).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,Zs(this._element),this._element.classList.add(cr),this._element.classList.remove(Qi,wo);for(const s of this._triggerArray){const r=Te.getElementFromSelector(s);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([s],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(cr),this._element.classList.add(Qi),K.trigger(this._element,im)};this._element.style[t]="",this._queueCallback(n,this._element,!0)}_isShown(e=this._element){return e.classList.contains(wo)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Yn(e.parent),e}_getDimension(){return this._element.classList.contains(am)?cm:lm}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Aa);for(const t of e){const n=Te.getElementFromSelector(t);n&&this._addAriaAndCollapsedClass([t],this._isShown(n))}}_getFirstLevelChildren(e){const t=Te.find(om,this._config.parent);return Te.find(e,this._config.parent).filter(n=>!t.includes(n))}_addAriaAndCollapsedClass(e,t){if(e.length)for(const n of e)n.classList.toggle(rm,!t),n.setAttribute("aria-expanded",t)}static jQueryInterface(e){const t={};return typeof e=="string"&&/show|hide/.test(e)&&(t.toggle=!1),this.each(function(){const n=$s.getOrCreateInstance(this,t);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}K.on(document,sm,Aa,function(i){(i.target.tagName==="A"||i.delegateTarget&&i.delegateTarget.tagName==="A")&&i.preventDefault();for(const e of Te.getMultipleElementsFromSelector(this))$s.getOrCreateInstance(e,{toggle:!1}).toggle()});Kt($s);const Uc="dropdown",fm="bs.dropdown",Ai=`.${fm}`,Qa=".data-api",pm="Escape",Fc="Tab",mm="ArrowUp",Bc="ArrowDown",gm=2,_m=`hide${Ai}`,vm=`hidden${Ai}`,Em=`show${Ai}`,xm=`shown${Ai}`,qh=`click${Ai}${Qa}`,Kh=`keydown${Ai}${Qa}`,ym=`keyup${Ai}${Qa}`,Ji="show",Sm="dropup",Mm="dropend",Tm="dropstart",bm="dropup-center",Am="dropdown-center",ui='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',wm=`${ui}.${Ji}`,Wr=".dropdown-menu",Rm=".navbar",Cm=".navbar-nav",Lm=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Pm=Yt()?"top-end":"top-start",Dm=Yt()?"top-start":"top-end",Nm=Yt()?"bottom-end":"bottom-start",Im=Yt()?"bottom-start":"bottom-end",Om=Yt()?"left-start":"right-start",Um=Yt()?"right-start":"left-start",Fm="top",Bm="bottom",Hm={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},km={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class un extends sn{constructor(e,t){super(e,t),this._popper=null,this._parent=this._element.parentNode,this._menu=Te.next(this._element,Wr)[0]||Te.prev(this._element,Wr)[0]||Te.findOne(Wr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Hm}static get DefaultType(){return km}static get NAME(){return Uc}toggle(){return this._isShown()?this.hide():this.show()}show(){if(qn(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!K.trigger(this._element,Em,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Cm))for(const n of[].concat(...document.body.children))K.on(n,"mouseover",Yr);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ji),this._element.classList.add(Ji),K.trigger(this._element,xm,e)}}hide(){if(qn(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!K.trigger(this._element,_m,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))K.off(n,"mouseover",Yr);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ji),this._element.classList.remove(Ji),this._element.setAttribute("aria-expanded","false"),Rn.removeDataAttribute(this._menu,"popper"),K.trigger(this._element,vm,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!wn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Uc.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Dh>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:wn(this._config.reference)?e=Yn(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const t=this._getPopperConfig();this._popper=Ka(e,this._menu,t)}_isShown(){return this._menu.classList.contains(Ji)}_getPlacement(){const e=this._parent;if(e.classList.contains(Mm))return Om;if(e.classList.contains(Tm))return Um;if(e.classList.contains(bm))return Fm;if(e.classList.contains(Am))return Bm;const t=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(Sm)?t?Dm:Pm:t?Im:Nm}_detectNavbar(){return this._element.closest(Rm)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Rn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Dt(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:t}){const n=Te.find(Lm,this._menu).filter(s=>Ss(s));n.length&&Za(n,t,e===Bc,!n.includes(t)).focus()}static jQueryInterface(e){return this.each(function(){const t=un.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}static clearMenus(e){if(e.button===gm||e.type==="keyup"&&e.key!==Fc)return;const t=Te.find(wm);for(const n of t){const s=un.getInstance(n);if(!s||s._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(s._menu);if(r.includes(s._element)||s._config.autoClose==="inside"&&!o||s._config.autoClose==="outside"&&o||s._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Fc||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:s._element};e.type==="click"&&(a.clickEvent=e),s._completeHide(a)}}static dataApiKeydownHandler(e){const t=/input|textarea/i.test(e.target.tagName),n=e.key===pm,s=[mm,Bc].includes(e.key);if(!s&&!n||t&&!n)return;e.preventDefault();const r=this.matches(ui)?this:Te.prev(this,ui)[0]||Te.next(this,ui)[0]||Te.findOne(ui,e.delegateTarget.parentNode),o=un.getOrCreateInstance(r);if(s){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}K.on(document,Kh,ui,un.dataApiKeydownHandler);K.on(document,Kh,Wr,un.dataApiKeydownHandler);K.on(document,qh,un.clearMenus);K.on(document,ym,un.clearMenus);K.on(document,qh,ui,function(i){i.preventDefault(),un.getOrCreateInstance(this).toggle()});Kt(un);const Zh="backdrop",Vm="fade",Hc="show",kc=`mousedown.bs.${Zh}`,zm={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Gm={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Jh extends Js{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return zm}static get DefaultType(){return Gm}static get NAME(){return Zh}show(e){if(!this._config.isVisible){Dt(e);return}this._append();const t=this._getElement();this._config.isAnimated&&Zs(t),t.classList.add(Hc),this._emulateAnimation(()=>{Dt(e)})}hide(e){if(!this._config.isVisible){Dt(e);return}this._getElement().classList.remove(Hc),this._emulateAnimation(()=>{this.dispose(),Dt(e)})}dispose(){this._isAppended&&(K.off(this._element,kc),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Vm),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Yn(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),K.on(e,kc,()=>{Dt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){Fh(e,this._getElement(),this._config.isAnimated)}}const Wm="focustrap",Xm="bs.focustrap",Kr=`.${Xm}`,$m=`focusin${Kr}`,jm=`keydown.tab${Kr}`,Ym="Tab",qm="forward",Vc="backward",Km={autofocus:!0,trapElement:null},Zm={autofocus:"boolean",trapElement:"element"};class Qh extends Js{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Km}static get DefaultType(){return Zm}static get NAME(){return Wm}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),K.off(document,Kr),K.on(document,$m,e=>this._handleFocusin(e)),K.on(document,jm,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,K.off(document,Kr))}_handleFocusin(e){const{trapElement:t}=this._config;if(e.target===document||e.target===t||t.contains(e.target))return;const n=Te.focusableChildren(t);n.length===0?t.focus():this._lastTabNavDirection===Vc?n[n.length-1].focus():n[0].focus()}_handleKeydown(e){e.key===Ym&&(this._lastTabNavDirection=e.shiftKey?Vc:qm)}}const zc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Gc=".sticky-top",lr="padding-right",Wc="margin-right";class wa{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,lr,t=>t+e),this._setElementAttributes(zc,lr,t=>t+e),this._setElementAttributes(Gc,Wc,t=>t-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,lr),this._resetElementAttributes(zc,lr),this._resetElementAttributes(Gc,Wc)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const s=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+s)return;this._saveInitialAttribute(o,t);const a=window.getComputedStyle(o).getPropertyValue(t);o.style.setProperty(t,`${n(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,t){const n=e.style.getPropertyValue(t);n&&Rn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=s=>{const r=Rn.getDataAttribute(s,t);if(r===null){s.style.removeProperty(t);return}Rn.removeDataAttribute(s,t),s.style.setProperty(t,r)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){if(wn(e)){t(e);return}for(const n of Te.find(e,this._element))t(n)}}const Jm="modal",Qm="bs.modal",qt=`.${Qm}`,eg=".data-api",tg="Escape",ng=`hide${qt}`,ig=`hidePrevented${qt}`,ed=`hidden${qt}`,td=`show${qt}`,sg=`shown${qt}`,rg=`resize${qt}`,og=`click.dismiss${qt}`,ag=`mousedown.dismiss${qt}`,cg=`keydown.dismiss${qt}`,lg=`click${qt}${eg}`,Xc="modal-open",ug="fade",$c="show",Ro="modal-static",hg=".modal.show",dg=".modal-dialog",fg=".modal-body",pg='[data-bs-toggle="modal"]',mg={backdrop:!0,focus:!0,keyboard:!0},gg={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class us extends sn{constructor(e,t){super(e,t),this._dialog=Te.findOne(dg,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new wa,this._addEventListeners()}static get Default(){return mg}static get DefaultType(){return gg}static get NAME(){return Jm}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||K.trigger(this._element,td,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Xc),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||K.trigger(this._element,ng).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove($c),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){K.off(window,qt),K.off(this._dialog,qt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Jh({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Qh({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const t=Te.findOne(fg,this._dialog);t&&(t.scrollTop=0),Zs(this._element),this._element.classList.add($c);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,K.trigger(this._element,sg,{relatedTarget:e})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){K.on(this._element,cg,e=>{if(e.key===tg){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),K.on(window,rg,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),K.on(this._element,ag,e=>{K.one(this._element,og,t=>{if(!(this._element!==e.target||this._element!==t.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Xc),this._resetAdjustments(),this._scrollBar.reset(),K.trigger(this._element,ed)})}_isAnimated(){return this._element.classList.contains(ug)}_triggerBackdropTransition(){if(K.trigger(this._element,ig).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(Ro)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Ro),this._queueCallback(()=>{this._element.classList.remove(Ro),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;if(n&&!e){const s=Yt()?"paddingLeft":"paddingRight";this._element.style[s]=`${t}px`}if(!n&&e){const s=Yt()?"paddingRight":"paddingLeft";this._element.style[s]=`${t}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each(function(){const n=us.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](t)}})}}K.on(document,lg,pg,function(i){const e=Te.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&i.preventDefault(),K.one(e,td,s=>{s.defaultPrevented||K.one(e,ed,()=>{Ss(this)&&this.focus()})});const t=Te.findOne(hg);t&&us.getInstance(t).hide(),us.getOrCreateInstance(e).toggle(this)});oo(us);Kt(us);const _g="offcanvas",vg="bs.offcanvas",Dn=`.${vg}`,nd=".data-api",Eg=`load${Dn}${nd}`,xg="Escape",jc="show",Yc="showing",qc="hiding",yg="offcanvas-backdrop",id=".offcanvas.show",Sg=`show${Dn}`,Mg=`shown${Dn}`,Tg=`hide${Dn}`,Kc=`hidePrevented${Dn}`,sd=`hidden${Dn}`,bg=`resize${Dn}`,Ag=`click${Dn}${nd}`,wg=`keydown.dismiss${Dn}`,Rg='[data-bs-toggle="offcanvas"]',Cg={backdrop:!0,keyboard:!0,scroll:!1},Lg={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kn extends sn{constructor(e,t){super(e,t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Cg}static get DefaultType(){return Lg}static get NAME(){return _g}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||K.trigger(this._element,Sg,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new wa().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Yc);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(jc),this._element.classList.remove(Yc),K.trigger(this._element,Mg,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||K.trigger(this._element,Tg).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(qc),this._backdrop.hide();const t=()=>{this._element.classList.remove(jc,qc),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new wa().reset(),K.trigger(this._element,sd)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){K.trigger(this._element,Kc);return}this.hide()},t=!!this._config.backdrop;return new Jh({className:yg,isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?e:null})}_initializeFocusTrap(){return new Qh({trapElement:this._element})}_addEventListeners(){K.on(this._element,wg,e=>{if(e.key===xg){if(this._config.keyboard){this.hide();return}K.trigger(this._element,Kc)}})}static jQueryInterface(e){return this.each(function(){const t=Kn.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}K.on(document,Ag,Rg,function(i){const e=Te.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),qn(this))return;K.one(e,sd,()=>{Ss(this)&&this.focus()});const t=Te.findOne(id);t&&t!==e&&Kn.getInstance(t).hide(),Kn.getOrCreateInstance(e).toggle(this)});K.on(window,Eg,()=>{for(const i of Te.find(id))Kn.getOrCreateInstance(i).show()});K.on(window,bg,()=>{for(const i of Te.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(i).position!=="fixed"&&Kn.getOrCreateInstance(i).hide()});oo(Kn);Kt(Kn);const Pg=/^aria-[\w-]*$/i,rd={"*":["class","dir","id","lang","role",Pg],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Dg=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Ng=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Ig=(i,e)=>{const t=i.nodeName.toLowerCase();return e.includes(t)?Dg.has(t)?!!Ng.test(i.nodeValue):!0:e.filter(n=>n instanceof RegExp).some(n=>n.test(t))};function Og(i,e,t){if(!i.length)return i;if(t&&typeof t=="function")return t(i);const s=new window.DOMParser().parseFromString(i,"text/html"),r=[].concat(...s.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const c=[].concat(...o.attributes),l=[].concat(e["*"]||[],e[a]||[]);for(const u of c)Ig(u,l)||o.removeAttribute(u.nodeName)}return s.body.innerHTML}const Ug="TemplateFactory",Fg={allowList:rd,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Bg={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Hg={entry:"(string|element|function|null)",selector:"(string|element)"};class kg extends Js{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return Fg}static get DefaultType(){return Bg}static get NAME(){return Ug}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[s,r]of Object.entries(this._config.content))this._setContent(e,r,s);const t=e.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&t.classList.add(...n.split(" ")),t}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[t,n]of Object.entries(e))super._typeCheckConfig({selector:t,entry:n},Hg)}_setContent(e,t,n){const s=Te.findOne(n,e);if(s){if(t=this._resolvePossibleFunction(t),!t){s.remove();return}if(wn(t)){this._putElementInTemplate(Yn(t),s);return}if(this._config.html){s.innerHTML=this._maybeSanitize(t);return}s.textContent=t}}_maybeSanitize(e){return this._config.sanitize?Og(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Dt(e,[void 0,this])}_putElementInTemplate(e,t){if(this._config.html){t.innerHTML="",t.append(e);return}t.textContent=e.textContent}}const Vg="tooltip",zg=new Set(["sanitize","allowList","sanitizeFn"]),Co="fade",Gg="modal",ur="show",Wg=".tooltip-inner",Zc=`.${Gg}`,Jc="hide.bs.modal",Ps="hover",Lo="focus",Po="click",Xg="manual",$g="hide",jg="hidden",Yg="show",qg="shown",Kg="inserted",Zg="click",Jg="focusin",Qg="focusout",e_="mouseenter",t_="mouseleave",n_={AUTO:"auto",TOP:"top",RIGHT:Yt()?"left":"right",BOTTOM:"bottom",LEFT:Yt()?"right":"left"},i_={allowList:rd,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},s_={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Ts extends sn{constructor(e,t){if(typeof Dh>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,t),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return i_}static get DefaultType(){return s_}static get NAME(){return Vg}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),K.off(this._element.closest(Zc),Jc,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=K.trigger(this._element,this.constructor.eventName(Yg)),n=(Oh(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!n)return;this._disposePopper();const s=this._getTipElement();this._element.setAttribute("aria-describedby",s.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(s),K.trigger(this._element,this.constructor.eventName(Kg))),this._popper=this._createPopper(s),s.classList.add(ur),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))K.on(a,"mouseover",Yr);const o=()=>{K.trigger(this._element,this.constructor.eventName(qg)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||K.trigger(this._element,this.constructor.eventName($g)).defaultPrevented)return;if(this._getTipElement().classList.remove(ur),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))K.off(s,"mouseover",Yr);this._activeTrigger[Po]=!1,this._activeTrigger[Lo]=!1,this._activeTrigger[Ps]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),K.trigger(this._element,this.constructor.eventName(jg)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const t=this._getTemplateFactory(e).toHtml();if(!t)return null;t.classList.remove(Co,ur),t.classList.add(`bs-${this.constructor.NAME}-auto`);const n=Xf(this.constructor.NAME).toString();return t.setAttribute("id",n),this._isAnimated()&&t.classList.add(Co),t}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new kg({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Wg]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Co)}_isShown(){return this.tip&&this.tip.classList.contains(ur)}_createPopper(e){const t=Dt(this._config.placement,[this,e,this._element]),n=n_[t.toUpperCase()];return Ka(this._element,e,this._getPopperConfig(n))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(t=>Number.parseInt(t,10)):typeof e=="function"?t=>e(t,this._element):e}_resolvePossibleFunction(e){return Dt(e,[this._element,this._element])}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...t,...Dt(this._config.popperConfig,[void 0,t])}}_setListeners(){const e=this._config.trigger.split(" ");for(const t of e)if(t==="click")K.on(this._element,this.constructor.eventName(Zg),this._config.selector,n=>{const s=this._initializeOnDelegatedTarget(n);s._activeTrigger[Po]=!(s._isShown()&&s._activeTrigger[Po]),s.toggle()});else if(t!==Xg){const n=t===Ps?this.constructor.eventName(e_):this.constructor.eventName(Jg),s=t===Ps?this.constructor.eventName(t_):this.constructor.eventName(Qg);K.on(this._element,n,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Lo:Ps]=!0,o._enter()}),K.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Lo:Ps]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},K.on(this._element.closest(Zc),Jc,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,t){clearTimeout(this._timeout),this._timeout=setTimeout(e,t)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const t=Rn.getDataAttributes(this._element);for(const n of Object.keys(t))zg.has(n)&&delete t[n];return e={...t,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Yn(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[t,n]of Object.entries(this._config))this.constructor.Default[t]!==n&&(e[t]=n);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const t=Ts.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Kt(Ts);const r_="popover",o_=".popover-header",a_=".popover-body",c_={...Ts.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},l_={...Ts.DefaultType,content:"(null|string|element|function)"};class ec extends Ts{static get Default(){return c_}static get DefaultType(){return l_}static get NAME(){return r_}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[o_]:this._getTitle(),[a_]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const t=ec.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e]()}})}}Kt(ec);const u_="scrollspy",h_="bs.scrollspy",tc=`.${h_}`,d_=".data-api",f_=`activate${tc}`,Qc=`click${tc}`,p_=`load${tc}${d_}`,m_="dropdown-item",Li="active",g_='[data-bs-spy="scroll"]',Do="[href]",__=".nav, .list-group",el=".nav-link",v_=".nav-item",E_=".list-group-item",x_=`${el}, ${v_} > ${el}, ${E_}`,y_=".dropdown",S_=".dropdown-toggle",M_={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},T_={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class lo extends sn{constructor(e,t){super(e,t),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return M_}static get DefaultType(){return T_}static get NAME(){return u_}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Yn(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(t=>Number.parseFloat(t))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(K.off(this._config.target,Qc),K.on(this._config.target,Qc,Do,e=>{const t=this._observableSections.get(e.target.hash);if(t){e.preventDefault();const n=this._rootElement||window,s=t.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:s,behavior:"smooth"});return}n.scrollTop=s}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(t=>this._observerCallback(t),e)}_observerCallback(e){const t=o=>this._targetLinks.get(`#${o.target.id}`),n=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(t(o))},s=(this._rootElement||document.documentElement).scrollTop,r=s>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=s;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(t(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(n(o),!s)return;continue}!r&&!a&&n(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=Te.find(Do,this._config.target);for(const t of e){if(!t.hash||qn(t))continue;const n=Te.findOne(decodeURI(t.hash),this._element);Ss(n)&&(this._targetLinks.set(decodeURI(t.hash),t),this._observableSections.set(t.hash,n))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Li),this._activateParents(e),K.trigger(this._element,f_,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(m_)){Te.findOne(S_,e.closest(y_)).classList.add(Li);return}for(const t of Te.parents(e,__))for(const n of Te.prev(t,x_))n.classList.add(Li)}_clearActiveClass(e){e.classList.remove(Li);const t=Te.find(`${Do}.${Li}`,e);for(const n of t)n.classList.remove(Li)}static jQueryInterface(e){return this.each(function(){const t=lo.getOrCreateInstance(this,e);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}K.on(window,p_,()=>{for(const i of Te.find(g_))lo.getOrCreateInstance(i)});Kt(lo);const b_="tab",A_="bs.tab",wi=`.${A_}`,w_=`hide${wi}`,R_=`hidden${wi}`,C_=`show${wi}`,L_=`shown${wi}`,P_=`click${wi}`,D_=`keydown${wi}`,N_=`load${wi}`,I_="ArrowLeft",tl="ArrowRight",O_="ArrowUp",nl="ArrowDown",No="Home",il="End",hi="active",sl="fade",Io="show",U_="dropdown",od=".dropdown-toggle",F_=".dropdown-menu",Oo=`:not(${od})`,B_='.list-group, .nav, [role="tablist"]',H_=".nav-item, .list-group-item",k_=`.nav-link${Oo}, .list-group-item${Oo}, [role="tab"]${Oo}`,ad='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Uo=`${k_}, ${ad}`,V_=`.${hi}[data-bs-toggle="tab"], .${hi}[data-bs-toggle="pill"], .${hi}[data-bs-toggle="list"]`;class hs extends sn{constructor(e){super(e),this._parent=this._element.closest(B_),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),K.on(this._element,D_,t=>this._keydown(t)))}static get NAME(){return b_}show(){const e=this._element;if(this._elemIsActive(e))return;const t=this._getActiveElem(),n=t?K.trigger(t,w_,{relatedTarget:e}):null;K.trigger(e,C_,{relatedTarget:t}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(t,e),this._activate(e,t))}_activate(e,t){if(!e)return;e.classList.add(hi),this._activate(Te.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Io);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),K.trigger(e,L_,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(sl))}_deactivate(e,t){if(!e)return;e.classList.remove(hi),e.blur(),this._deactivate(Te.getElementFromSelector(e));const n=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Io);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),K.trigger(e,R_,{relatedTarget:t})};this._queueCallback(n,e,e.classList.contains(sl))}_keydown(e){if(![I_,tl,O_,nl,No,il].includes(e.key))return;e.stopPropagation(),e.preventDefault();const t=this._getChildren().filter(s=>!qn(s));let n;if([No,il].includes(e.key))n=t[e.key===No?0:t.length-1];else{const s=[tl,nl].includes(e.key);n=Za(t,e.target,s,!0)}n&&(n.focus({preventScroll:!0}),hs.getOrCreateInstance(n).show())}_getChildren(){return Te.find(Uo,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,t){this._setAttributeIfNotExists(e,"role","tablist");for(const n of t)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const t=this._elemIsActive(e),n=this._getOuterElement(e);e.setAttribute("aria-selected",t),n!==e&&this._setAttributeIfNotExists(n,"role","presentation"),t||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const t=Te.getElementFromSelector(e);t&&(this._setAttributeIfNotExists(t,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(t,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,t){const n=this._getOuterElement(e);if(!n.classList.contains(U_))return;const s=(r,o)=>{const a=Te.findOne(r,n);a&&a.classList.toggle(o,t)};s(od,hi),s(F_,Io),n.setAttribute("aria-expanded",t)}_setAttributeIfNotExists(e,t,n){e.hasAttribute(t)||e.setAttribute(t,n)}_elemIsActive(e){return e.classList.contains(hi)}_getInnerElement(e){return e.matches(Uo)?e:Te.findOne(Uo,e)}_getOuterElement(e){return e.closest(H_)||e}static jQueryInterface(e){return this.each(function(){const t=hs.getOrCreateInstance(this);if(typeof e=="string"){if(t[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);t[e]()}})}}K.on(document,P_,ad,function(i){["A","AREA"].includes(this.tagName)&&i.preventDefault(),!qn(this)&&hs.getOrCreateInstance(this).show()});K.on(window,N_,()=>{for(const i of Te.find(V_))hs.getOrCreateInstance(i)});Kt(hs);const z_="toast",G_="bs.toast",Qn=`.${G_}`,W_=`mouseover${Qn}`,X_=`mouseout${Qn}`,$_=`focusin${Qn}`,j_=`focusout${Qn}`,Y_=`hide${Qn}`,q_=`hidden${Qn}`,K_=`show${Qn}`,Z_=`shown${Qn}`,J_="fade",rl="hide",hr="show",dr="showing",Q_={animation:"boolean",autohide:"boolean",delay:"number"},ev={animation:!0,autohide:!0,delay:5e3};class uo extends sn{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return ev}static get DefaultType(){return Q_}static get NAME(){return z_}show(){if(K.trigger(this._element,K_).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(J_);const t=()=>{this._element.classList.remove(dr),K.trigger(this._element,Z_),this._maybeScheduleHide()};this._element.classList.remove(rl),Zs(this._element),this._element.classList.add(hr,dr),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this.isShown()||K.trigger(this._element,Y_).defaultPrevented)return;const t=()=>{this._element.classList.add(rl),this._element.classList.remove(dr,hr),K.trigger(this._element,q_)};this._element.classList.add(dr),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(hr),super.dispose()}isShown(){return this._element.classList.contains(hr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=t;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=t;break}}if(t){this._clearTimeout();return}const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){K.on(this._element,W_,e=>this._onInteraction(e,!0)),K.on(this._element,X_,e=>this._onInteraction(e,!1)),K.on(this._element,$_,e=>this._onInteraction(e,!0)),K.on(this._element,j_,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const t=uo.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof t[e]>"u")throw new TypeError(`No method named "${e}"`);t[e](this)}})}}oo(uo);Kt(uo);class nc{constructor(e){this.parent=e}addListeners(e){document.getElementById("btn-home").addEventListener("click",e)}getHTML(){return`
            <header class="app-header">
                <h1 class="header-title">Эволюция — Карты</h1>
                <button id="btn-home" class="btn btn-outline-light">Домой</button>
            </header>
        `}render(e){this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.addListeners(e)}}class tv{constructor(e){this.parent=e}addListeners(e){document.querySelectorAll("[data-filter]").forEach(t=>{t.addEventListener("click",n=>{e(n.target.dataset.filter)})})}getHTML(e){return`<div class="mb-3">${["Все","Свойство","Взаимодействие"].map(s=>`
            <button class="btn ${e===s?"btn-primary":"btn-dark"} me-2"
                    data-filter="${s}">${s}</button>
        `).join("")}</div>`}render(e,t){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e)),this.addListeners(t)}}function nv(i){if(!i||i.length===0)return 0;let e=0,t=0;do if(i[t]==="1"){let n=0;do n++,t++;while(t<i.length&&i[t]==="1");n>e&&(e=n)}else t++;while(t<i.length);return e}function iv(i){const e=i.toLowerCase().replace(/\s+/g,"");return e===e.split("").reverse().join("")}class sv{constructor(e){this.parent=e}addListeners(e,t,n,s){document.getElementById(`btn-details-${e.id}`).addEventListener("click",t),document.getElementById(`btn-delete-${e.id}`).addEventListener("click",n);const r=document.getElementById(`btn-edit-${e.id}`);r&&s&&r.addEventListener("click",s)}getHTML(e){const t=e.foodCost>0?`<span class="badge bg-danger ms-1">+${e.foodCost} к еде</span>`:"",s=iv(e.name)?'<span class="evolution-badge evolution-badge-filled" title="Название — палиндром">палиндром</span>':'<span class="evolution-badge evolution-badge-outline" title="Название не палиндром">не палиндром</span>',r=e.matchLog||"",o=nv(r),a=r.split("").map(l=>l==="1"?'<span class="match-win">1</span>':'<span class="match-loss">0</span>').join(""),c=r?`<div class="card-streak-block" title="История партий карточки">
                   <div class="card-streak-label">Серия побед: <strong>${o}</strong></div>
                   <div class="card-streak-log">${a}</div>
               </div>`:"";return`
            <div class="card evolution-card">
                <img class="card-img-top"
                     src="${e.img}"
                     alt="${e.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${e.name} ${t}</h5>
                    <p class="card-text text-muted" style="font-size: 0.8em;">${e.type}</p>
                    <div class="mb-2">${s}</div>
                    ${c}
                    <div class="mt-auto d-flex gap-1 flex-wrap">
                        <button class="btn btn-sm btn-primary"
                                id="btn-details-${e.id}"
                                data-id="${e.id}">Подробнее</button>
                        <button class="btn btn-sm btn-warning"
                                id="btn-edit-${e.id}"
                                data-id="${e.id}">Редактировать</button>
                        <button class="btn btn-sm btn-danger"
                                id="btn-delete-${e.id}"
                                data-id="${e.id}">X</button>
                    </div>
                </div>
            </div>
        `}render(e,t,n,s){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e)),this.addListeners(e,t,n,s)}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="160",Pi={ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rv=0,ol=1,ov=2,cd=1,av=2,Tn=3,Pn=0,Nt=1,an=2,Xn=0,ns=1,al=2,cl=3,ll=4,cv=5,ci=100,lv=101,uv=102,ul=103,hl=104,hv=200,dv=201,fv=202,pv=203,Ra=204,Ca=205,mv=206,gv=207,_v=208,vv=209,Ev=210,xv=211,yv=212,Sv=213,Mv=214,Tv=0,bv=1,Av=2,Zr=3,wv=4,Rv=5,Cv=6,Lv=7,ld=0,Pv=1,Dv=2,$n=0,Nv=1,Iv=2,Ov=3,Uv=4,Fv=5,Bv=6,dl="attached",Hv="detached",ud=300,ds=301,fs=302,La=303,Pa=304,ho=306,ps=1e3,Gt=1001,Jr=1002,vt=1003,Da=1004,Xr=1005,Pt=1006,hd=1007,Si=1008,jn=1009,kv=1010,Vv=1011,sc=1012,dd=1013,Gn=1014,bn=1015,js=1016,fd=1017,pd=1018,mi=1020,zv=1021,Wt=1023,Gv=1024,Wv=1025,gi=1026,ms=1027,Xv=1028,md=1029,$v=1030,gd=1031,_d=1033,Fo=33776,Bo=33777,Ho=33778,ko=33779,fl=35840,pl=35841,ml=35842,gl=35843,vd=36196,_l=37492,vl=37496,El=37808,xl=37809,yl=37810,Sl=37811,Ml=37812,Tl=37813,bl=37814,Al=37815,wl=37816,Rl=37817,Cl=37818,Ll=37819,Pl=37820,Dl=37821,Vo=36492,Nl=36494,Il=36495,jv=36283,Ol=36284,Ul=36285,Fl=36286,Ys=2300,gs=2301,zo=2302,Bl=2400,Hl=2401,kl=2402,Yv=2500,qv=0,Ed=1,Na=2,xd=3e3,_i=3001,Kv=3200,Zv=3201,yd=0,Jv=1,Xt="",ct="srgb",Et="srgb-linear",rc="display-p3",fo="display-p3-linear",Qr="linear",it="srgb",eo="rec709",to="p3",Ni=7680,Vl=519,Qv=512,eE=513,tE=514,Sd=515,nE=516,iE=517,sE=518,rE=519,Ia=35044,zl="300 es",Oa=1035,An=2e3,no=2001;class Ri{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const zs=Math.PI/180,_s=180/Math.PI;function tn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function xt(i,e,t){return Math.max(e,Math.min(t,i))}function oc(i,e){return(i%e+e)%e}function oE(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function aE(i,e,t){return i!==e?(t-i)/(e-i):0}function Gs(i,e,t){return(1-t)*i+t*e}function cE(i,e,t,n){return Gs(i,e,1-Math.exp(-t*n))}function lE(i,e=1){return e-Math.abs(oc(i,e*2)-e)}function uE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function hE(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dE(i,e){return i+Math.floor(Math.random()*(e-i+1))}function fE(i,e){return i+Math.random()*(e-i)}function pE(i){return i*(.5-Math.random())}function mE(i){i!==void 0&&(Gl=i);let e=Gl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gE(i){return i*zs}function _E(i){return i*_s}function Ua(i){return(i&i-1)===0&&i!==0}function vE(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function io(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function EE(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*m,a*l);break;case"YXY":i.set(c*m,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Md={DEG2RAD:zs,RAD2DEG:_s,generateUUID:tn,clamp:xt,euclideanModulo:oc,mapLinear:oE,inverseLerp:aE,lerp:Gs,damp:cE,pingpong:lE,smoothstep:uE,smootherstep:hE,randInt:dE,randFloat:fE,randFloatSpread:pE,seededRandom:mE,degToRad:gE,radToDeg:_E,isPowerOfTwo:Ua,ceilPowerOfTwo:vE,floorPowerOfTwo:io,setQuaternionFromProperEuler:EE,normalize:tt,denormalize:cn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,n,s,r,o,a,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=s[0],p=s[3],f=s[6],M=s[1],E=s[4],y=s[7],C=s[2],R=s[5],A=s[8];return r[0]=o*_+a*M+c*C,r[3]=o*p+a*E+c*R,r[6]=o*f+a*y+c*A,r[1]=l*_+u*M+h*C,r[4]=l*p+u*E+h*R,r[7]=l*f+u*y+h*A,r[2]=d*_+m*M+g*C,r[5]=d*p+m*E+g*R,r[8]=d*f+m*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=t*h+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Go.makeScale(e,t)),this}rotate(e){return this.premultiply(Go.makeRotation(-e)),this}translate(e,t){return this.premultiply(Go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Go=new Xe;function Td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xE(){const i=qs("canvas");return i.style.display="block",i}const Wl={};function Ws(i){i in Wl||(Wl[i]=!0,console.warn(i))}const Xl=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$l=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),fr={[Et]:{transfer:Qr,primaries:eo,toReference:i=>i,fromReference:i=>i},[ct]:{transfer:it,primaries:eo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[fo]:{transfer:Qr,primaries:to,toReference:i=>i.applyMatrix3($l),fromReference:i=>i.applyMatrix3(Xl)},[rc]:{transfer:it,primaries:to,toReference:i=>i.convertSRGBToLinear().applyMatrix3($l),fromReference:i=>i.applyMatrix3(Xl).convertLinearToSRGB()}},yE=new Set([Et,fo]),Je={enabled:!0,_workingColorSpace:Et,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yE.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=fr[e].toReference,s=fr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return fr[i].primaries},getTransfer:function(i){return i===Xt?Qr:fr[i].transfer}};function is(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ii;class bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ii===void 0&&(Ii=qs("canvas")),Ii.width=e.width,Ii.height=e.height;const n=Ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=is(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(is(t[n]/255)*255):t[n]=is(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SE=0;class Ad{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xo(s[o].image)):r.push(Xo(s[o]))}else r=Xo(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ME=0;class yt extends Ri{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=Gt,s=Gt,r=Pt,o=Si,a=Wt,c=jn,l=yt.DEFAULT_ANISOTROPY,u=Xt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=tn(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===_i?ct:Xt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Gt:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Gt:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ct?_i:xd}set encoding(e){Ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_i?ct:Xt}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ud;yt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(m+1)/2,C=(f+1)/2,R=(u+d)/4,A=(h+_)/4,G=(g+p)/4;return E>y&&E>C?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=A/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=G/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=G/r),this.set(n,s,r,t),this}let M=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TE extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===_i?ct:Xt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new yt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends TE{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wd extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bE extends yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=Gt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*_,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const C=Math.sqrt(E),R=Math.atan2(C,f*M);p=Math.sin(p*R)/C,a=Math.sin(a*R)/C}const y=a*M;if(c=c*p+d*y,l=l*p+m*y,u=u*p+g*y,h=h*p+_*y,p===1-a){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $o.copy(this).projectOnVector(e),this.sub($o)}reflect(e){return this.sub($o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $o=new P,jl=new fn;class nn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zt):Zt.fromBufferAttribute(r,o),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),mr.subVectors(this.max,Ds),Oi.subVectors(e.a,Ds),Ui.subVectors(e.b,Ds),Fi.subVectors(e.c,Ds),On.subVectors(Ui,Oi),Un.subVectors(Fi,Ui),ni.subVectors(Oi,Fi);let t=[0,-On.z,On.y,0,-Un.z,Un.y,0,-ni.z,ni.y,On.z,0,-On.x,Un.z,0,-Un.x,ni.z,0,-ni.x,-On.y,On.x,0,-Un.y,Un.x,0,-ni.y,ni.x,0];return!jo(t,Oi,Ui,Fi,mr)||(t=[1,0,0,0,1,0,0,0,1],!jo(t,Oi,Ui,Fi,mr))?!1:(gr.crossVectors(On,Un),t=[gr.x,gr.y,gr.z],jo(t,Oi,Ui,Fi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vn=[new P,new P,new P,new P,new P,new P,new P,new P],Zt=new P,pr=new nn,Oi=new P,Ui=new P,Fi=new P,On=new P,Un=new P,ni=new P,Ds=new P,mr=new P,gr=new P,ii=new P;function jo(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ii.fromArray(i,r);const a=s.x*Math.abs(ii.x)+s.y*Math.abs(ii.y)+s.z*Math.abs(ii.z),c=e.dot(ii),l=t.dot(ii),u=n.dot(ii);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const AE=new nn,Ns=new P,Yo=new P;class pn{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):AE.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ns,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ns.copy(e.center).add(Yo)),this.expandByPoint(Ns.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new P,qo=new P,_r=new P,Fn=new P,Ko=new P,vr=new P,Zo=new P;class tr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qo.copy(e).add(t).multiplyScalar(.5),_r.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(qo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_r),a=Fn.dot(this.direction),c=-Fn.dot(_r),l=Fn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qo).addScaledVector(_r,d),m}intersectSphere(e,t){En.subVectors(e.center,this.origin);const n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){Ko.subVectors(t,e),vr.subVectors(n,e),Zo.crossVectors(Ko,vr);let o=this.direction.dot(Zo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,e);const c=a*this.direction.dot(vr.crossVectors(Fn,vr));if(c<0)return null;const l=a*this.direction.dot(Ko.cross(Fn));if(l<0||c+l>o)return null;const u=-a*Fn.dot(Zo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,n,s,r,o,a,c,l,u,h,d,m,g,_,p){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,m,g,_,p)}set(e,t,n,s,r,o,a,c,l,u,h,d,m,g,_,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wE,e,RE)}lookAt(e,t,n){const s=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Bn.crossVectors(n,Ot),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Bn.crossVectors(n,Ot)),Bn.normalize(),Er.crossVectors(Ot,Bn),s[0]=Bn.x,s[4]=Er.x,s[8]=Ot.x,s[1]=Bn.y,s[5]=Er.y,s[9]=Ot.y,s[2]=Bn.z,s[6]=Er.z,s[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],M=n[3],E=n[7],y=n[11],C=n[15],R=s[0],A=s[4],G=s[8],x=s[12],b=s[1],H=s[5],W=s[9],Z=s[13],D=s[2],U=s[6],k=s[10],X=s[14],$=s[3],j=s[7],Y=s[11],ie=s[15];return r[0]=o*R+a*b+c*D+l*$,r[4]=o*A+a*H+c*U+l*j,r[8]=o*G+a*W+c*k+l*Y,r[12]=o*x+a*Z+c*X+l*ie,r[1]=u*R+h*b+d*D+m*$,r[5]=u*A+h*H+d*U+m*j,r[9]=u*G+h*W+d*k+m*Y,r[13]=u*x+h*Z+d*X+m*ie,r[2]=g*R+_*b+p*D+f*$,r[6]=g*A+_*H+p*U+f*j,r[10]=g*G+_*W+p*k+f*Y,r[14]=g*x+_*Z+p*X+f*ie,r[3]=M*R+E*b+y*D+C*$,r[7]=M*A+E*H+y*U+C*j,r[11]=M*G+E*W+y*k+C*Y,r[15]=M*x+E*Z+y*X+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],_=e[7],p=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*m-n*c*m)+_*(+t*c*m-t*l*d+r*o*d-s*o*m+s*l*u-r*c*u)+p*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+f*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],_=e[13],p=e[14],f=e[15],M=h*p*l-_*d*l+_*c*m-a*p*m-h*c*f+a*d*f,E=g*d*l-u*p*l-g*c*m+o*p*m+u*c*f-o*d*f,y=u*_*l-g*h*l+g*a*m-o*_*m-u*a*f+o*h*f,C=g*h*c-u*_*c-g*a*d+o*_*d+u*a*p-o*h*p,R=t*M+n*E+s*y+r*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=M*A,e[1]=(_*d*r-h*p*r-_*s*m+n*p*m+h*s*f-n*d*f)*A,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*f+n*c*f)*A,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*m-n*c*m)*A,e[4]=E*A,e[5]=(u*p*r-g*d*r+g*s*m-t*p*m-u*s*f+t*d*f)*A,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*f-t*c*f)*A,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*m+t*c*m)*A,e[8]=y*A,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*f-t*h*f)*A,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=C*A,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*p+t*h*p)*A,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*p-t*a*p)*A,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,_=o*u,p=o*h,f=a*h,M=c*l,E=c*u,y=c*h,C=n.x,R=n.y,A=n.z;return s[0]=(1-(_+f))*C,s[1]=(m+y)*C,s[2]=(g-E)*C,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(d+f))*R,s[6]=(p+M)*R,s[7]=0,s[8]=(g+E)*A,s[9]=(p-M)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const l=1/r,u=1/o,h=1/a;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=An){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,g;if(a===An)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===no)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=An){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,m=(n+s)*u;let g,_;if(a===An)g=(o+r)*h,_=-2*h;else if(a===no)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new P,Jt=new $e,wE=new P(0,0,0),RE=new P(1,1,1),Bn=new P,Er=new P,Ot=new P,Yl=new $e,ql=new fn;class po{constructor(e=0,t=0,n=0,s=po.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(xt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}po.DEFAULT_ORDER="XYZ";class Rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const Kl=new P,Hi=new fn,xn=new $e,xr=new P,Is=new P,LE=new P,PE=new fn,Zl=new P(1,0,0),Jl=new P(0,1,0),Ql=new P(0,0,1),DE={type:"added"},NE={type:"removed"};class rt extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new P,t=new po,n=new fn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new Xe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(e,t){return Hi.setFromAxisAngle(e,t),this.quaternion.premultiply(Hi),this}rotateX(e){return this.rotateOnAxis(Zl,e)}rotateY(e){return this.rotateOnAxis(Jl,e)}rotateZ(e){return this.rotateOnAxis(Ql,e)}translateOnAxis(e,t){return Kl.copy(e).applyQuaternion(this.quaternion),this.position.add(Kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zl,e)}translateY(e){return this.translateOnAxis(Jl,e)}translateZ(e){return this.translateOnAxis(Ql,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xr.copy(e):xr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(Is,xr,this.up):xn.lookAt(xr,Is,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(xn),this.quaternion.premultiply(Hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(DE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(xn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,LE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,PE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}rt.DEFAULT_UP=new P(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new P,yn=new P,Jo=new P,Sn=new P,ki=new P,Vi=new P,eu=new P,Qo=new P,ea=new P,ta=new P;let yr=!1;class en{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Qt.subVectors(e,t),s.cross(Qt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Qt.subVectors(s,t),yn.subVectors(n,t),Jo.subVectors(e,t);const o=Qt.dot(Qt),a=Qt.dot(yn),c=Qt.dot(Jo),l=yn.dot(yn),u=yn.dot(Jo),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,s,r,o,a,c){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),this.getInterpolation(e,t,n,s,r,o,a,c)}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Sn.x),c.addScaledVector(o,Sn.y),c.addScaledVector(a,Sn.z),c)}static isFrontFacing(e,t,n,s){return Qt.subVectors(n,t),yn.subVectors(e,t),Qt.cross(yn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Qt.cross(yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return yr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yr=!0),en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ki.subVectors(s,n),Vi.subVectors(r,n),Qo.subVectors(e,n);const c=ki.dot(Qo),l=Vi.dot(Qo);if(c<=0&&l<=0)return t.copy(n);ea.subVectors(e,s);const u=ki.dot(ea),h=Vi.dot(ea);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ki,o);ta.subVectors(e,r);const m=ki.dot(ta),g=Vi.dot(ta);if(g>=0&&m<=g)return t.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Vi,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return eu.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(eu,a);const f=1/(p+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(ki,o).addScaledVector(Vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function na(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=oc(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=na(o,r,e+1/3),this.g=na(o,r,e),this.b=na(o,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ct){const n=Cd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ct){return Je.fromWorkingColorSpace(Tt.copy(this),e),Math.round(xt(Tt.r*255,0,255))*65536+Math.round(xt(Tt.g*255,0,255))*256+Math.round(xt(Tt.b*255,0,255))}getHexString(e=ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,s=Tt.g,r=Tt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=ct){Je.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,s=Tt.b;return e!==ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Sr);const n=Gs(Hn.h,Sr.h,t),s=Gs(Hn.s,Sr.s,t),r=Gs(Hn.l,Sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ue;Ue.NAMES=Cd;let IE=0;class hn extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=tn(),this.name="",this.type="Material",this.blending=ns,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ra,this.blendDst=Ca,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ra&&(n.blendSrc=this.blendSrc),this.blendDst!==Ca&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class di extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new P,Mr=new De;class Lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class Ld extends Lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Pd extends Lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Cn extends Lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let OE=0;const Vt=new $e,ia=new rt,zi=new P,Ut=new nn,Os=new nn,_t=new P;class mn extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OE++}),this.uuid=tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Td(e)?Pd:Ld)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zi).negate(),this.translate(zi.x,zi.y,zi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Cn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(Ut.min,Os.min),Ut.expandByPoint(_t),_t.addVectors(Ut.max,Os.max),Ut.expandByPoint(_t)):(Ut.expandByPoint(Os.min),Ut.expandByPoint(Os.max))}Ut.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)_t.fromBufferAttribute(a,l),c&&(zi.fromBufferAttribute(e,l),_t.add(zi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let b=0;b<a;b++)l[b]=new P,u[b]=new P;const h=new P,d=new P,m=new P,g=new De,_=new De,p=new De,f=new P,M=new P;function E(b,H,W){h.fromArray(s,b*3),d.fromArray(s,H*3),m.fromArray(s,W*3),g.fromArray(o,b*2),_.fromArray(o,H*2),p.fromArray(o,W*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const Z=1/(_.x*p.y-p.x*_.y);isFinite(Z)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Z),M.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Z),l[b].add(f),l[H].add(f),l[W].add(f),u[b].add(M),u[H].add(M),u[W].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,H=y.length;b<H;++b){const W=y[b],Z=W.start,D=W.count;for(let U=Z,k=Z+D;U<k;U+=3)E(n[U+0],n[U+1],n[U+2])}const C=new P,R=new P,A=new P,G=new P;function x(b){A.fromArray(r,b*3),G.copy(A);const H=l[b];C.copy(H),C.sub(A.multiplyScalar(A.dot(H))).normalize(),R.crossVectors(G,H);const Z=R.dot(u[b])<0?-1:1;c[b*4]=C.x,c[b*4+1]=C.y,c[b*4+2]=C.z,c[b*4+3]=Z}for(let b=0,H=y.length;b<H;++b){const W=y[b],Z=W.start,D=W.count;for(let U=Z,k=Z+D;U<k;U+=3)x(n[U+0]),x(n[U+1]),x(n[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?m=c[_]*a.data.stride+a.offset:m=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new Lt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tu=new $e,si=new tr,Tr=new pn,nu=new P,Gi=new P,Wi=new P,Xi=new P,sa=new P,br=new P,Ar=new De,wr=new De,Rr=new De,iu=new P,su=new P,ru=new P,Cr=new P,Lr=new P;class $t extends rt{constructor(e=new mn,t=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){br.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(sa.fromBufferAttribute(h,e),o?br.addScaledVector(sa,u):br.addScaledVector(sa.sub(t),u))}t.add(br)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),si.copy(e.ray).recast(e.near),!(Tr.containsPoint(si.origin)===!1&&(si.intersectSphere(Tr,nu)===null||si.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),si.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],M=Math.max(p.start,m.start),E=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,C=E;y<C;y+=3){const R=a.getX(y),A=a.getX(y+1),G=a.getX(y+2);s=Pr(this,f,e,n,l,u,h,R,A,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=a.getX(p),E=a.getX(p+1),y=a.getX(p+2);s=Pr(this,o,e,n,l,u,h,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=o[p.materialIndex],M=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=M,C=E;y<C;y+=3){const R=y,A=y+1,G=y+2;s=Pr(this,f,e,n,l,u,h,R,A,G),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const M=p,E=p+1,y=p+2;s=Pr(this,o,e,n,l,u,h,M,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function UE(i,e,t,n,s,r,o,a){let c;if(e.side===Nt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Pn,a),c===null)return null;Lr.copy(a),Lr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Lr);return l<t.near||l>t.far?null:{distance:l,point:Lr.clone(),object:i}}function Pr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Gi),i.getVertexPosition(c,Wi),i.getVertexPosition(l,Xi);const u=UE(i,e,t,n,Gi,Wi,Xi,Cr);if(u){s&&(Ar.fromBufferAttribute(s,a),wr.fromBufferAttribute(s,c),Rr.fromBufferAttribute(s,l),u.uv=en.getInterpolation(Cr,Gi,Wi,Xi,Ar,wr,Rr,new De)),r&&(Ar.fromBufferAttribute(r,a),wr.fromBufferAttribute(r,c),Rr.fromBufferAttribute(r,l),u.uv1=en.getInterpolation(Cr,Gi,Wi,Xi,Ar,wr,Rr,new De),u.uv2=u.uv1),o&&(iu.fromBufferAttribute(o,a),su.fromBufferAttribute(o,c),ru.fromBufferAttribute(o,l),u.normal=en.getInterpolation(Cr,Gi,Wi,Xi,iu,su,ru,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new P,materialIndex:0};en.getNormal(Gi,Wi,Xi,h.normal),u.face=h}return u}class nr extends mn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Cn(l,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(h,2));function g(_,p,f,M,E,y,C,R,A,G,x){const b=y/A,H=C/G,W=y/2,Z=C/2,D=R/2,U=A+1,k=G+1;let X=0,$=0;const j=new P;for(let Y=0;Y<k;Y++){const ie=Y*H-Z;for(let re=0;re<U;re++){const z=re*b-W;j[_]=z*M,j[p]=ie*E,j[f]=D,l.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=R>0?1:-1,u.push(j.x,j.y,j.z),h.push(re/A),h.push(1-Y/G),X+=1}}for(let Y=0;Y<G;Y++)for(let ie=0;ie<A;ie++){const re=d+ie+U*Y,z=d+ie+U*(Y+1),q=d+(ie+1)+U*(Y+1),ae=d+(ie+1)+U*Y;c.push(re,z,ae),c.push(z,q,ae),$+=6}a.addGroup(m,$,x),m+=$,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=vs(i[t]);for(const s in n)e[s]=n[s]}return e}function FE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dd(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}const BE={clone:vs,merge:At};var HE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=FE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nd extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wt extends Nd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_s*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,ji=1;class VE extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wt($i,ji,e,t);s.layers=this.layers,this.add(s);const r=new wt($i,ji,e,t);r.layers=this.layers,this.add(r);const o=new wt($i,ji,e,t);o.layers=this.layers,this.add(o);const a=new wt($i,ji,e,t);a.layers=this.layers,this.add(a);const c=new wt($i,ji,e,t);c.layers=this.layers,this.add(c);const l=new wt($i,ji,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Id extends yt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:ds,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_i?ct:Xt),this.texture=new Id(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new nr(5,5,5),r=new Ti({name:"CubemapFromEquirect",uniforms:vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Xn});r.uniforms.tEquirect.value=t;const o=new $t(s,r),a=t.minFilter;return t.minFilter===Si&&(t.minFilter=Pt),new VE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const ra=new P,GE=new P,WE=new Xe;class Vn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=ra.subVectors(n,t).cross(GE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||WE.getNormalMatrix(e),s=this.coplanarPoint(ra).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new pn,Dr=new P;class ac{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],f=s[12],M=s[13],E=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,p-m,y-f).normalize(),n[1].setComponents(c+r,d+l,p+m,y+f).normalize(),n[2].setComponents(c+o,d+u,p+g,y+M).normalize(),n[3].setComponents(c-o,d-u,p-g,y-M).normalize(),n[4].setComponents(c-a,d-h,p-_,y-E).normalize(),t===An)n[5].setComponents(c+a,d+h,p+_,y+E).normalize();else if(t===no)n[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Dr.x=s.normal.x>0?e.max.x:e.min.x,Dr.y=s.normal.y>0?e.max.y:e.min.y,Dr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Od(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function XE(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,m=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,u,h){const d=u.array,m=u._updateRange,g=u.updateRanges;if(i.bindBuffer(h,l),m.count===-1&&g.length===0&&i.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const f=g[_];t?i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d,f.start,f.count):i.bufferSubData(h,f.start*d.BYTES_PER_ELEMENT,d.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,s(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}class cc extends mn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],_=[],p=[];for(let f=0;f<u;f++){const M=f*d-o;for(let E=0;E<l;E++){const y=E*h-r;g.push(y,-M,0),_.push(0,0,1),p.push(E/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<a;M++){const E=M+l*f,y=M+l*(f+1),C=M+1+l*(f+1),R=M+1+l*f;m.push(E,y,R),m.push(y,C,R)}this.setIndex(m),this.setAttribute("position",new Cn(g,3)),this.setAttribute("normal",new Cn(_,3)),this.setAttribute("uv",new Cn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $E=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,YE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KE=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ZE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ex=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ox=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Cx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ix=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ux=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$x=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,a0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,l0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,L0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,P0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,H0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,J0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ey=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ry=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,py=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,my=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,My=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:$E,alphahash_pars_fragment:jE,alphamap_fragment:YE,alphamap_pars_fragment:qE,alphatest_fragment:KE,alphatest_pars_fragment:ZE,aomap_fragment:JE,aomap_pars_fragment:QE,batching_pars_vertex:ex,batching_vertex:tx,begin_vertex:nx,beginnormal_vertex:ix,bsdfs:sx,iridescence_fragment:rx,bumpmap_pars_fragment:ox,clipping_planes_fragment:ax,clipping_planes_pars_fragment:cx,clipping_planes_pars_vertex:lx,clipping_planes_vertex:ux,color_fragment:hx,color_pars_fragment:dx,color_pars_vertex:fx,color_vertex:px,common:mx,cube_uv_reflection_fragment:gx,defaultnormal_vertex:_x,displacementmap_pars_vertex:vx,displacementmap_vertex:Ex,emissivemap_fragment:xx,emissivemap_pars_fragment:yx,colorspace_fragment:Sx,colorspace_pars_fragment:Mx,envmap_fragment:Tx,envmap_common_pars_fragment:bx,envmap_pars_fragment:Ax,envmap_pars_vertex:wx,envmap_physical_pars_fragment:Hx,envmap_vertex:Rx,fog_vertex:Cx,fog_pars_vertex:Lx,fog_fragment:Px,fog_pars_fragment:Dx,gradientmap_pars_fragment:Nx,lightmap_fragment:Ix,lightmap_pars_fragment:Ox,lights_lambert_fragment:Ux,lights_lambert_pars_fragment:Fx,lights_pars_begin:Bx,lights_toon_fragment:kx,lights_toon_pars_fragment:Vx,lights_phong_fragment:zx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:$x,lights_fragment_maps:jx,lights_fragment_end:Yx,logdepthbuf_fragment:qx,logdepthbuf_pars_fragment:Kx,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Jx,map_fragment:Qx,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphcolor_vertex:r0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:c0,normal_fragment_begin:l0,normal_fragment_maps:u0,normal_pars_fragment:h0,normal_pars_vertex:d0,normal_vertex:f0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:v0,opaque_fragment:E0,packing:x0,premultiplied_alpha_fragment:y0,project_vertex:S0,dithering_fragment:M0,dithering_pars_fragment:T0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:L0,skinbase_vertex:P0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:I0,specularmap_fragment:O0,specularmap_pars_fragment:U0,tonemapping_fragment:F0,tonemapping_pars_fragment:B0,transmission_fragment:H0,transmission_pars_fragment:k0,uv_pars_fragment:V0,uv_pars_vertex:z0,uv_vertex:G0,worldpos_vertex:W0,background_vert:X0,background_frag:$0,backgroundCube_vert:j0,backgroundCube_frag:Y0,cube_vert:q0,cube_frag:K0,depth_vert:Z0,depth_frag:J0,distanceRGBA_vert:Q0,distanceRGBA_frag:ey,equirect_vert:ty,equirect_frag:ny,linedashed_vert:iy,linedashed_frag:sy,meshbasic_vert:ry,meshbasic_frag:oy,meshlambert_vert:ay,meshlambert_frag:cy,meshmatcap_vert:ly,meshmatcap_frag:uy,meshnormal_vert:hy,meshnormal_frag:dy,meshphong_vert:fy,meshphong_frag:py,meshphysical_vert:my,meshphysical_frag:gy,meshtoon_vert:_y,meshtoon_frag:vy,points_vert:Ey,points_frag:xy,shadow_vert:yy,shadow_frag:Sy,sprite_vert:My,sprite_frag:Ty},ce={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},on={basic:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:At([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:At([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:At([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ue(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:At([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:At([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:At([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:At([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:At([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:At([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:At([ce.lights,ce.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};on.physical={uniforms:At([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Nr={r:0,b:0,g:0};function by(i,e,t,n,s,r,o){const a=new Ue(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(p,f){let M=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?_(a,c):E&&E.isColor&&(_(E,1),M=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===ho)?(u===void 0&&(u=new $t(new nr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:vs(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Je.getTransfer(E.colorSpace)!==it,(h!==E||d!==E.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=E,d=E.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new $t(new cc(2,2),new Ti({name:"BackgroundMaterial",uniforms:vs(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Je.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||d!==E.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,h=E,d=E.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,f){p.getRGB(Nr,Dd(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(a,c)},render:g}}function Ay(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function h(D,U,k,X,$){let j=!1;if(o){const Y=_(X,k,U);l!==Y&&(l=Y,m(l.object)),j=f(D,X,k,$),j&&M(D,X,k,$)}else{const Y=U.wireframe===!0;(l.geometry!==X.id||l.program!==k.id||l.wireframe!==Y)&&(l.geometry=X.id,l.program=k.id,l.wireframe=Y,j=!0)}$!==null&&t.update($,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,G(D,U,k,X),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,U,k){const X=k.wireframe===!0;let $=a[D.id];$===void 0&&($={},a[D.id]=$);let j=$[U.id];j===void 0&&(j={},$[U.id]=j);let Y=j[X];return Y===void 0&&(Y=p(d()),j[X]=Y),Y}function p(D){const U=[],k=[],X=[];for(let $=0;$<s;$++)U[$]=0,k[$]=0,X[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:X,object:D,attributes:{},index:null}}function f(D,U,k,X){const $=l.attributes,j=U.attributes;let Y=0;const ie=k.getAttributes();for(const re in ie)if(ie[re].location>=0){const q=$[re];let ae=j[re];if(ae===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor)),q===void 0||q.attribute!==ae||ae&&q.data!==ae.data)return!0;Y++}return l.attributesNum!==Y||l.index!==X}function M(D,U,k,X){const $={},j=U.attributes;let Y=0;const ie=k.getAttributes();for(const re in ie)if(ie[re].location>=0){let q=j[re];q===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));const ae={};ae.attribute=q,q&&q.data&&(ae.data=q.data),$[re]=ae,Y++}l.attributes=$,l.attributesNum=Y,l.index=X}function E(){const D=l.newAttributes;for(let U=0,k=D.length;U<k;U++)D[U]=0}function y(D){C(D,0)}function C(D,U){const k=l.newAttributes,X=l.enabledAttributes,$=l.attributeDivisors;k[D]=1,X[D]===0&&(i.enableVertexAttribArray(D),X[D]=1),$[D]!==U&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,U),$[D]=U)}function R(){const D=l.newAttributes,U=l.enabledAttributes;for(let k=0,X=U.length;k<X;k++)U[k]!==D[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function A(D,U,k,X,$,j,Y){Y===!0?i.vertexAttribIPointer(D,U,k,$,j):i.vertexAttribPointer(D,U,k,X,$,j)}function G(D,U,k,X){if(n.isWebGL2===!1&&(D.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const $=X.attributes,j=k.getAttributes(),Y=U.defaultAttributeValues;for(const ie in j){const re=j[ie];if(re.location>=0){let z=$[ie];if(z===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(z=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(z=D.instanceColor)),z!==void 0){const q=z.normalized,ae=z.itemSize,ge=t.get(z);if(ge===void 0)continue;const _e=ge.buffer,Ae=ge.type,Le=ge.bytesPerElement,we=n.isWebGL2===!0&&(Ae===i.INT||Ae===i.UNSIGNED_INT||z.gpuType===dd);if(z.isInterleavedBufferAttribute){const ke=z.data,O=ke.stride,ht=z.offset;if(ke.isInstancedInterleavedBuffer){for(let ye=0;ye<re.locationSize;ye++)C(re.location+ye,ke.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ke.meshPerAttribute*ke.count)}else for(let ye=0;ye<re.locationSize;ye++)y(re.location+ye);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ye=0;ye<re.locationSize;ye++)A(re.location+ye,ae/re.locationSize,Ae,q,O*Le,(ht+ae/re.locationSize*ye)*Le,we)}else{if(z.isInstancedBufferAttribute){for(let ke=0;ke<re.locationSize;ke++)C(re.location+ke,z.meshPerAttribute);D.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ke=0;ke<re.locationSize;ke++)y(re.location+ke);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ke=0;ke<re.locationSize;ke++)A(re.location+ke,ae/re.locationSize,Ae,q,ae*Le,ae/re.locationSize*ke*Le,we)}}else if(Y!==void 0){const q=Y[ie];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(re.location,q);break;case 3:i.vertexAttrib3fv(re.location,q);break;case 4:i.vertexAttrib4fv(re.location,q);break;default:i.vertexAttrib1fv(re.location,q)}}}}R()}function x(){W();for(const D in a){const U=a[D];for(const k in U){const X=U[k];for(const $ in X)g(X[$].object),delete X[$];delete U[k]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const U=a[D.id];for(const k in U){const X=U[k];for(const $ in X)g(X[$].object),delete X[$];delete U[k]}delete a[D.id]}function H(D){for(const U in a){const k=a[U];if(k[D.id]===void 0)continue;const X=k[D.id];for(const $ in X)g(X[$].object),delete X[$];delete k[D.id]}}function W(){Z(),u=!0,l!==c&&(l=c,m(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:W,resetDefaultState:Z,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:H,initAttributes:E,enableAttribute:y,disableUnusedAttributes:R}}function wy(i,e,t,n){const s=n.isWebGL2;let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Ry(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,y=o||e.has("OES_texture_float"),C=E&&y,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:M,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:C,maxSamples:R}}function Cy(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Vn,a=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,E=M*4;let y=f.clippingState||null;c.value=y,y=u(g,d,E,m);for(let C=0;C!==E;++C)y[C]=t[C];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const f=m+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<f)&&(p=new Float32Array(f));for(let E=0,y=m;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(M,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Ly(i){let e=new WeakMap;function t(o,a){return a===La?o.mapping=ds:a===Pa&&(o.mapping=fs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Pa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zE(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class lc extends Nd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const es=4,ou=[.125,.215,.35,.446,.526,.582],li=20,oa=new lc,au=new Ue;let aa=null,ca=0,la=0;const ai=(1+Math.sqrt(5))/2,Yi=1/ai,cu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ai,Yi),new P(0,ai,-Yi),new P(Yi,0,ai),new P(-Yi,0,ai),new P(ai,Yi,0),new P(-ai,Yi,0)];class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(aa,ca,la),e.scissorTest=!1,Ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),aa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:js,format:Wt,colorSpace:Et,depthBuffer:!1},s=uu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Py(r)),this._blurMaterial=Dy(r,e,t)}return s}_compileMaterial(e){const t=new $t(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,n,s){const a=new wt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(au),u.toneMapping=$n,u.autoClear=!1;const m=new di({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),g=new $t(new nr,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(au),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):M===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const E=this._cubeSize;Ir(s,M*E,f>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ds||e.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new $t(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,oa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=cu[(s-1)%cu.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new $t(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*li-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):li;p>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);const f=[];let M=0;for(let A=0;A<li;++A){const G=A/_,x=Math.exp(-G*G/2);f.push(x),A===0?M+=x:A<p&&(M+=2*x)}for(let A=0;A<f.length;A++)f[A]=f[A]/M;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[s],C=3*y*(s>E-es?s-E+es:0),R=4*(this._cubeSize-y);Ir(t,C,R,3*y,2*y),c.setRenderTarget(t),c.render(h,oa)}}function Py(i){const e=[],t=[],n=[];let s=i;const r=i-es+1+ou.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-es?c=ou[o-i+es-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,f=1,M=new Float32Array(_*g*m),E=new Float32Array(p*g*m),y=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,G=R>2?0:-1,x=[A,G,0,A+2/3,G,0,A+2/3,G+1,0,A,G,0,A+2/3,G+1,0,A,G+1,0];M.set(x,_*g*R),E.set(d,p*g*R);const b=[R,R,R,R,R,R];y.set(b,f*g*R)}const C=new mn;C.setAttribute("position",new Lt(M,_)),C.setAttribute("uv",new Lt(E,p)),C.setAttribute("faceIndex",new Lt(y,f)),e.push(C),s>es&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function uu(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Dy(i,e,t){const n=new Float32Array(li),s=new P(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function hu(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function du(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===La||c===Pa,u=c===ds||c===fs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new lu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new lu(i));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Iy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Oy(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)e.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)e.update(_[p],i.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let E=0,y=M.length;E<y;E+=3){const C=M[E+0],R=M[E+1],A=M[E+2];d.push(C,R,R,A,A,C)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,y=M.length/3-1;E<y;E+=3){const C=E+0,R=E+1,A=E+2;d.push(C,R,R,A,A,C)}}else return;const p=new(Td(d)?Pd:Ld)(d,1);p.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Uy(i,e,t,n){const s=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){i.drawElements(r,g,a,m*c),t.update(g,r,1)}function h(m,g,_){if(_===0)return;let p,f;if(s)p=i,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](r,g,a,m*c,_),t.update(g,r,_)}function d(m,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let f=0;for(let M=0;M<_;M++)f+=g[M];t.update(f,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function Fy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function By(i,e){return i[0]-e[0]}function Hy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ky(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,o=new nt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(u);if(p===void 0||p.count!==_){let U=function(){Z.dispose(),r.delete(u),u.removeEventListener("dispose",U)};var m=U;p!==void 0&&p.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let x=0;E===!0&&(x=1),y===!0&&(x=2),C===!0&&(x=3);let b=u.attributes.position.count*x,H=1;b>e.maxTextureSize&&(H=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const W=new Float32Array(b*H*4*_),Z=new wd(W,b,H,_);Z.type=bn,Z.needsUpdate=!0;const D=x*4;for(let k=0;k<_;k++){const X=R[k],$=A[k],j=G[k],Y=b*H*4*k;for(let ie=0;ie<X.count;ie++){const re=ie*D;E===!0&&(o.fromBufferAttribute(X,ie),W[Y+re+0]=o.x,W[Y+re+1]=o.y,W[Y+re+2]=o.z,W[Y+re+3]=0),y===!0&&(o.fromBufferAttribute($,ie),W[Y+re+4]=o.x,W[Y+re+5]=o.y,W[Y+re+6]=o.z,W[Y+re+7]=0),C===!0&&(o.fromBufferAttribute(j,ie),W[Y+re+8]=o.x,W[Y+re+9]=o.y,W[Y+re+10]=o.z,W[Y+re+11]=j.itemSize===4?o.w:1)}}p={count:_,texture:Z,size:new De(b,H)},r.set(u,p),u.addEventListener("dispose",U)}let f=0;for(let E=0;E<d.length;E++)f+=d[E];const M=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",M),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[u.id]=_}for(let y=0;y<g;y++){const C=_[y];C[0]=y,C[1]=d[y]}_.sort(Hy);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(By);const p=u.morphAttributes.position,f=u.morphAttributes.normal;let M=0;for(let y=0;y<8;y++){const C=a[y],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+y)!==p[R]&&u.setAttribute("morphTarget"+y,p[R]),f&&u.getAttribute("morphNormal"+y)!==f[R]&&u.setAttribute("morphNormal"+y,f[R]),s[y]=A,M+=A):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}const E=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(i,"morphTargetBaseInfluence",E),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Vy(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Ud extends yt{constructor(e,t,n,s,r,o,a,c,l,u){if(u=u!==void 0?u:gi,u!==gi&&u!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===gi&&(n=Gn),n===void 0&&u===ms&&(n=mi),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fd=new yt,Bd=new Ud(1,1);Bd.compareFunction=Sd;const Hd=new wd,kd=new bE,Vd=new Id,fu=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),_u=new Float32Array(4);function bs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=fu[s];if(r===void 0&&(r=new Float32Array(s),fu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function mo(i,e){let t=pu[e];t===void 0&&(t=new Int32Array(e),pu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function zy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function Xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function $y(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;_u.set(n),i.uniformMatrix2fv(this.addr,!1,_u),mt(t,n)}}function jy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),mt(t,n)}}function Yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),mt(t,n)}}function qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ky(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Zy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Jy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Qy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function tS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function nS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function iS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bd:Fd;t.setTexture2D(e||r,s)}function sS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kd,s)}function rS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Vd,s)}function oS(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hd,s)}function aS(i){switch(i){case 5126:return zy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return $y;case 35675:return jy;case 35676:return Yy;case 5124:case 35670:return qy;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return eS;case 36295:return tS;case 36296:return nS;case 35678:case 36198:case 36298:case 36306:case 35682:return iS;case 35679:case 36299:case 36307:return sS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return oS}}function cS(i,e){i.uniform1fv(this.addr,e)}function lS(i,e){const t=bs(e,this.size,2);i.uniform2fv(this.addr,t)}function uS(i,e){const t=bs(e,this.size,3);i.uniform3fv(this.addr,t)}function hS(i,e){const t=bs(e,this.size,4);i.uniform4fv(this.addr,t)}function dS(i,e){const t=bs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fS(i,e){const t=bs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pS(i,e){const t=bs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mS(i,e){i.uniform1iv(this.addr,e)}function gS(i,e){i.uniform2iv(this.addr,e)}function _S(i,e){i.uniform3iv(this.addr,e)}function vS(i,e){i.uniform4iv(this.addr,e)}function ES(i,e){i.uniform1uiv(this.addr,e)}function xS(i,e){i.uniform2uiv(this.addr,e)}function yS(i,e){i.uniform3uiv(this.addr,e)}function SS(i,e){i.uniform4uiv(this.addr,e)}function MS(i,e,t){const n=this.cache,s=e.length,r=mo(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fd,r[o])}function TS(i,e,t){const n=this.cache,s=e.length,r=mo(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kd,r[o])}function bS(i,e,t){const n=this.cache,s=e.length,r=mo(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Vd,r[o])}function AS(i,e,t){const n=this.cache,s=e.length,r=mo(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Hd,r[o])}function wS(i){switch(i){case 5126:return cS;case 35664:return lS;case 35665:return uS;case 35666:return hS;case 35674:return dS;case 35675:return fS;case 35676:return pS;case 5124:case 35670:return mS;case 35667:case 35671:return gS;case 35668:case 35672:return _S;case 35669:case 35673:return vS;case 5125:return ES;case 36294:return xS;case 36295:return yS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return TS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return AS}}class RS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aS(t.type)}}class CS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wS(t.type)}}class LS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function vu(i,e){i.seq.push(e),i.map[e.id]=e}function PS(i,e,t){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){vu(t,l===void 0?new RS(a,i,e):new CS(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new LS(a),vu(t,h)),t=h}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);PS(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Eu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const DS=37297;let NS=0;function IS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function OS(i){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i);let n;switch(e===t?n="":e===to&&t===eo?n="LinearDisplayP3ToLinearSRGB":e===eo&&t===to&&(n="LinearSRGBToLinearDisplayP3"),i){case Et:case fo:return[n,"LinearTransferOETF"];case ct:case rc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+IS(i.getShaderSource(e),o)}else return s}function US(i,e){const t=OS(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function FS(i,e){let t;switch(e){case Nv:t="Linear";break;case Iv:t="Reinhard";break;case Ov:t="OptimizedCineon";break;case Uv:t="ACESFilmic";break;case Bv:t="AgX";break;case Fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function BS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function HS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function kS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function VS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ts(i){return i!==""}function yu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Su(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(i){return i.replace(zS,WS)}const GS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function WS(i,e){let t=Ve[e];if(t===void 0){const n=GS.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Fa(t)}const XS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(XS,$S)}function $S(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===av?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(e="SHADOWMAP_TYPE_VSM"),e}function YS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ds:case fs:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function KS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ld:e="ENVMAP_BLENDING_MULTIPLY";break;case Pv:e="ENVMAP_BLENDING_MIX";break;case Dv:e="ENVMAP_BLENDING_ADD";break}return e}function ZS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function JS(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=jS(t),l=YS(t),u=qS(t),h=KS(t),d=ZS(t),m=t.isWebGL2?"":BS(t),g=HS(t),_=kS(r),p=s.createProgram();let f,M,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ts).join(`
`),f.length>0&&(f+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ts).join(`
`),M.length>0&&(M+=`
`)):(f=[Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),M=[m,Tu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$n?FS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,US("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ts).join(`
`)),o=Fa(o),o=yu(o,t),o=Su(o,t),a=Fa(a),a=yu(a,t),a=Su(a,t),o=Mu(o),a=Mu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const y=E+f+o,C=E+M+a,R=Eu(s,s.VERTEX_SHADER,y),A=Eu(s,s.FRAGMENT_SHADER,C);s.attachShader(p,R),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function G(W){if(i.debug.checkShaderErrors){const Z=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(A).trim();let k=!0,X=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,A);else{const $=xu(s,R,"vertex"),j=xu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+$+`
`+j)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||U==="")&&(X=!1);X&&(W.diagnostics={runnable:k,programLog:Z,vertexShader:{log:D,prefix:f},fragmentShader:{log:U,prefix:M}})}s.deleteShader(R),s.deleteShader(A),x=new $r(s,p),b=VS(s,p)}let x;this.getUniforms=function(){return x===void 0&&G(this),x};let b;this.getAttributes=function(){return b===void 0&&G(this),b};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(p,DS)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=A,this}let QS=0;class eM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tM(e),t.set(e,n)),n}}class tM{constructor(e){this.id=QS++,this.code=e,this.usedTimes=0}}function nM(i,e,t,n,s,r,o){const a=new Rd,c=new eM,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function p(x,b,H,W,Z){const D=W.fog,U=Z.geometry,k=x.isMeshStandardMaterial?W.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),$=X&&X.mapping===ho?X.image.height:null,j=g[x.type];x.precision!==null&&(m=s.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,ie=Y!==void 0?Y.length:0;let re=0;U.morphAttributes.position!==void 0&&(re=1),U.morphAttributes.normal!==void 0&&(re=2),U.morphAttributes.color!==void 0&&(re=3);let z,q,ae,ge;if(j){const lt=on[j];z=lt.vertexShader,q=lt.fragmentShader}else z=x.vertexShader,q=x.fragmentShader,c.update(x),ae=c.getVertexShaderID(x),ge=c.getFragmentShaderID(x);const _e=i.getRenderTarget(),Ae=Z.isInstancedMesh===!0,Le=Z.isBatchedMesh===!0,we=!!x.map,ke=!!x.matcap,O=!!X,ht=!!x.aoMap,ye=!!x.lightMap,Pe=!!x.bumpMap,me=!!x.normalMap,et=!!x.displacementMap,Oe=!!x.emissiveMap,T=!!x.metalnessMap,v=!!x.roughnessMap,I=x.anisotropy>0,te=x.clearcoat>0,J=x.iridescence>0,Q=x.sheen>0,ve=x.transmission>0,le=I&&!!x.anisotropyMap,de=te&&!!x.clearcoatMap,Se=te&&!!x.clearcoatNormalMap,Be=te&&!!x.clearcoatRoughnessMap,ee=J&&!!x.iridescenceMap,Ze=J&&!!x.iridescenceThicknessMap,ze=Q&&!!x.sheenColorMap,Ne=Q&&!!x.sheenRoughnessMap,Me=!!x.specularMap,he=!!x.specularColorMap,w=!!x.specularIntensityMap,se=ve&&!!x.transmissionMap,Ee=ve&&!!x.thicknessMap,pe=!!x.gradientMap,ne=!!x.alphaMap,L=x.alphaTest>0,oe=!!x.alphaHash,ue=!!x.extensions,Re=!!U.attributes.uv1,be=!!U.attributes.uv2,je=!!U.attributes.uv3;let Ye=$n;return x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ye=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:z,fragmentShader:q,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:ge,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Le,instancing:Ae,instancingColor:Ae&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Et,map:we,matcap:ke,envMap:O,envMapMode:O&&X.mapping,envMapCubeUVHeight:$,aoMap:ht,lightMap:ye,bumpMap:Pe,normalMap:me,displacementMap:d&&et,emissiveMap:Oe,normalMapObjectSpace:me&&x.normalMapType===Jv,normalMapTangentSpace:me&&x.normalMapType===yd,metalnessMap:T,roughnessMap:v,anisotropy:I,anisotropyMap:le,clearcoat:te,clearcoatMap:de,clearcoatNormalMap:Se,clearcoatRoughnessMap:Be,iridescence:J,iridescenceMap:ee,iridescenceThicknessMap:Ze,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Ne,specularMap:Me,specularColorMap:he,specularIntensityMap:w,transmission:ve,transmissionMap:se,thicknessMap:Ee,gradientMap:pe,opaque:x.transparent===!1&&x.blending===ns,alphaMap:ne,alphaTest:L,alphaHash:oe,combine:x.combine,mapUv:we&&_(x.map.channel),aoMapUv:ht&&_(x.aoMap.channel),lightMapUv:ye&&_(x.lightMap.channel),bumpMapUv:Pe&&_(x.bumpMap.channel),normalMapUv:me&&_(x.normalMap.channel),displacementMapUv:et&&_(x.displacementMap.channel),emissiveMapUv:Oe&&_(x.emissiveMap.channel),metalnessMapUv:T&&_(x.metalnessMap.channel),roughnessMapUv:v&&_(x.roughnessMap.channel),anisotropyMapUv:le&&_(x.anisotropyMap.channel),clearcoatMapUv:de&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(x.sheenRoughnessMap.channel),specularMapUv:Me&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:w&&_(x.specularIntensityMap.channel),transmissionMapUv:se&&_(x.transmissionMap.channel),thicknessMapUv:Ee&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(me||I),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:be,vertexUv3s:je,pointsUvs:Z.isPoints===!0&&!!U.attributes.uv&&(we||ne),fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,useLegacyLights:i._useLegacyLights,decodeVideoTexture:we&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===Nt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ue&&x.extensions.derivatives===!0,extensionFragDepth:ue&&x.extensions.fragDepth===!0,extensionDrawBuffers:ue&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)b.push(H),b.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(M(b,x),E(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function E(x,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function y(x){const b=g[x.type];let H;if(b){const W=on[b];H=BE.clone(W.uniforms)}else H=x.uniforms;return H}function C(x,b){let H;for(let W=0,Z=l.length;W<Z;W++){const D=l[W];if(D.cacheKey===b){H=D,++H.usedTimes;break}}return H===void 0&&(H=new JS(i,b,x,r),l.push(H)),H}function R(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),x.destroy()}}function A(x){c.remove(x)}function G(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:G}}function iM(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function sM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Au(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,m,g,_,p){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),e++,f}function a(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(h,d,m,g,_,p){const f=o(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||sM),n.length>1&&n.sort(d||bu),s.length>1&&s.sort(d||bu)}function u(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function rM(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Au,i.set(n,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function oM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ue};break;case"SpotLight":t={position:new P,direction:new P,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function aM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let cM=0;function lM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function uM(i,e){const t=new oM,n=aM(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new P);const r=new P,o=new $e,a=new $e;function c(u,h){let d=0,m=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let _=0,p=0,f=0,M=0,E=0,y=0,C=0,R=0,A=0,G=0,x=0;u.sort(lM);const b=h===!0?Math.PI:1;for(let W=0,Z=u.length;W<Z;W++){const D=u[W],U=D.color,k=D.intensity,X=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=U.r*k*b,m+=U.g*k*b,g+=U.b*k*b;else if(D.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(D.sh.coefficients[j],k);x++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const Y=D.shadow,ie=n.get(D);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,s.directionalShadow[_]=ie,s.directionalShadowMap[_]=$,s.directionalShadowMatrix[_]=D.shadow.matrix,y++}s.directional[_]=j,_++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(U).multiplyScalar(k*b),j.distance=X,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,s.spot[f]=j;const Y=D.shadow;if(D.map&&(s.spotLightMap[A]=D.map,A++,Y.updateMatrices(D),D.castShadow&&G++),s.spotLightMatrix[f]=Y.matrix,D.castShadow){const ie=n.get(D);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,s.spotShadow[f]=ie,s.spotShadowMap[f]=$,R++}f++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(U).multiplyScalar(k),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),s.rectArea[M]=j,M++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*b),j.distance=D.distance,j.decay=D.decay,D.castShadow){const Y=D.shadow,ie=n.get(D);ie.shadowBias=Y.bias,ie.shadowNormalBias=Y.normalBias,ie.shadowRadius=Y.radius,ie.shadowMapSize=Y.mapSize,ie.shadowCameraNear=Y.camera.near,ie.shadowCameraFar=Y.camera.far,s.pointShadow[p]=ie,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=D.shadow.matrix,C++}s.point[p]=j,p++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(k*b),j.groundColor.copy(D.groundColor).multiplyScalar(k*b),s.hemi[E]=j,E++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_FLOAT_1,s.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ce.LTC_HALF_1,s.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;const H=s.hash;(H.directionalLength!==_||H.pointLength!==p||H.spotLength!==f||H.rectAreaLength!==M||H.hemiLength!==E||H.numDirectionalShadows!==y||H.numPointShadows!==C||H.numSpotShadows!==R||H.numSpotMaps!==A||H.numLightProbes!==x)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=M,s.point.length=p,s.hemi.length=E,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=R+A-G,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=x,H.directionalLength=_,H.pointLength=p,H.spotLength=f,H.rectAreaLength=M,H.hemiLength=E,H.numDirectionalShadows=y,H.numPointShadows=C,H.numSpotShadows=R,H.numSpotMaps=A,H.numLightProbes=x,s.version=cM++)}function l(u,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let M=0,E=u.length;M<E;M++){const y=u[M];if(y.isDirectionalLight){const C=s.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),d++}else if(y.isSpotLight){const C=s.spot[g];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),C.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const C=s.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const C=s.point[m];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const C=s.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:s}}function wu(i,e){const t=new uM(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(h){n.push(h)}function a(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hM(i,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new wu(i,e),t.set(r,[c])):o>=a.length?(c=new wu(i,e),a.push(c)):c=a[o],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class dM extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fM extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gM(i,e,t){let n=new ac;const s=new De,r=new De,o=new nt,a=new dM({depthPacking:Zv}),c=new fM,l={},u=t.maxTextureSize,h={[Pn]:Nt,[Nt]:Pn,[an]:an},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new mn;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let f=this.type;this.render=function(R,A,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const x=i.getRenderTarget(),b=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Xn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const Z=f!==Tn&&this.type===Tn,D=f===Tn&&this.type!==Tn;for(let U=0,k=R.length;U<k;U++){const X=R[U],$=X.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const j=$.getFrameExtents();if(s.multiply(j),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,$.mapSize.y=r.y)),$.map===null||Z===!0||D===!0){const ie=this.type!==Tn?{minFilter:vt,magFilter:vt}:{};$.map!==null&&$.map.dispose(),$.map=new Mi(s.x,s.y,ie),$.map.texture.name=X.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Y=$.getViewportCount();for(let ie=0;ie<Y;ie++){const re=$.getViewport(ie);o.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),W.viewport(o),$.updateMatrices(X,ie),n=$.getFrustum(),y(A,G,$.camera,X,this.type)}$.isPointLightShadow!==!0&&this.type===Tn&&M($,G),$.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(x,b,H)};function M(R,A){const G=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Mi(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,G,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,G,m,_,null)}function E(R,A,G,x){let b=null;const H=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(H!==void 0)b=H;else if(b=G.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=b.uuid,Z=A.uuid;let D=l[W];D===void 0&&(D={},l[W]=D);let U=D[Z];U===void 0&&(U=b.clone(),D[Z]=U,A.addEventListener("dispose",C)),b=U}if(b.visible=A.visible,b.wireframe=A.wireframe,x===Tn?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=i.properties.get(b);W.light=G}return b}function y(R,A,G,x,b){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===Tn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),D=R.material;if(Array.isArray(D)){const U=Z.groups;for(let k=0,X=U.length;k<X;k++){const $=U[k],j=D[$.materialIndex];if(j&&j.visible){const Y=E(R,j,x,b);R.onBeforeShadow(i,R,A,G,Z,Y,$),i.renderBufferDirect(G,null,Z,Y,R,$),R.onAfterShadow(i,R,A,G,Z,Y,$)}}}else if(D.visible){const U=E(R,D,x,b);R.onBeforeShadow(i,R,A,G,Z,U,null),i.renderBufferDirect(G,null,Z,U,R,null),R.onAfterShadow(i,R,A,G,Z,U,null)}}const W=R.children;for(let Z=0,D=W.length;Z<D;Z++)y(W[Z],A,G,x,b)}function C(R){R.target.removeEventListener("dispose",C);for(const G in l){const x=l[G],b=R.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}function _M(i,e,t){const n=t.isWebGL2;function s(){let L=!1;const oe=new nt;let ue=null;const Re=new nt(0,0,0,0);return{setMask:function(be){ue!==be&&!L&&(i.colorMask(be,be,be,be),ue=be)},setLocked:function(be){L=be},setClear:function(be,je,Ye,ot,lt){lt===!0&&(be*=ot,je*=ot,Ye*=ot),oe.set(be,je,Ye,ot),Re.equals(oe)===!1&&(i.clearColor(be,je,Ye,ot),Re.copy(oe))},reset:function(){L=!1,ue=null,Re.set(-1,0,0,0)}}}function r(){let L=!1,oe=null,ue=null,Re=null;return{setTest:function(be){be?Le(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(be){oe!==be&&!L&&(i.depthMask(be),oe=be)},setFunc:function(be){if(ue!==be){switch(be){case Tv:i.depthFunc(i.NEVER);break;case bv:i.depthFunc(i.ALWAYS);break;case Av:i.depthFunc(i.LESS);break;case Zr:i.depthFunc(i.LEQUAL);break;case wv:i.depthFunc(i.EQUAL);break;case Rv:i.depthFunc(i.GEQUAL);break;case Cv:i.depthFunc(i.GREATER);break;case Lv:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=be}},setLocked:function(be){L=be},setClear:function(be){Re!==be&&(i.clearDepth(be),Re=be)},reset:function(){L=!1,oe=null,ue=null,Re=null}}}function o(){let L=!1,oe=null,ue=null,Re=null,be=null,je=null,Ye=null,ot=null,lt=null;return{setTest:function(Ke){L||(Ke?Le(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!L&&(i.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,dt,rn){(ue!==Ke||Re!==dt||be!==rn)&&(i.stencilFunc(Ke,dt,rn),ue=Ke,Re=dt,be=rn)},setOp:function(Ke,dt,rn){(je!==Ke||Ye!==dt||ot!==rn)&&(i.stencilOp(Ke,dt,rn),je=Ke,Ye=dt,ot=rn)},setLocked:function(Ke){L=Ke},setClear:function(Ke){lt!==Ke&&(i.clearStencil(Ke),lt=Ke)},reset:function(){L=!1,oe=null,ue=null,Re=null,be=null,je=null,Ye=null,ot=null,lt=null}}}const a=new s,c=new r,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,E=null,y=null,C=null,R=null,A=null,G=null,x=new Ue(0,0,0),b=0,H=!1,W=null,Z=null,D=null,U=null,k=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=j>=2);let ie=null,re={};const z=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),ae=new nt().fromArray(z),ge=new nt().fromArray(q);function _e(L,oe,ue,Re){const be=new Uint8Array(4),je=i.createTexture();i.bindTexture(L,je),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<ue;Ye++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(oe,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(oe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return je}const Ae={};Ae[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ae[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(i.DEPTH_TEST),c.setFunc(Zr),Oe(!1),T(ol),Le(i.CULL_FACE),me(Xn);function Le(L){d[L]!==!0&&(i.enable(L),d[L]=!0)}function we(L){d[L]!==!1&&(i.disable(L),d[L]=!1)}function ke(L,oe){return m[L]!==oe?(i.bindFramebuffer(L,oe),m[L]=oe,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=oe),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=oe)),!0):!1}function O(L,oe){let ue=_,Re=!1;if(L)if(ue=g.get(oe),ue===void 0&&(ue=[],g.set(oe,ue)),L.isWebGLMultipleRenderTargets){const be=L.texture;if(ue.length!==be.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let je=0,Ye=be.length;je<Ye;je++)ue[je]=i.COLOR_ATTACHMENT0+je;ue.length=be.length,Re=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,Re=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,Re=!0);Re&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ht(L){return p!==L?(i.useProgram(L),p=L,!0):!1}const ye={[ci]:i.FUNC_ADD,[lv]:i.FUNC_SUBTRACT,[uv]:i.FUNC_REVERSE_SUBTRACT};if(n)ye[ul]=i.MIN,ye[hl]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(ye[ul]=L.MIN_EXT,ye[hl]=L.MAX_EXT)}const Pe={[hv]:i.ZERO,[dv]:i.ONE,[fv]:i.SRC_COLOR,[Ra]:i.SRC_ALPHA,[Ev]:i.SRC_ALPHA_SATURATE,[_v]:i.DST_COLOR,[mv]:i.DST_ALPHA,[pv]:i.ONE_MINUS_SRC_COLOR,[Ca]:i.ONE_MINUS_SRC_ALPHA,[vv]:i.ONE_MINUS_DST_COLOR,[gv]:i.ONE_MINUS_DST_ALPHA,[xv]:i.CONSTANT_COLOR,[yv]:i.ONE_MINUS_CONSTANT_COLOR,[Sv]:i.CONSTANT_ALPHA,[Mv]:i.ONE_MINUS_CONSTANT_ALPHA};function me(L,oe,ue,Re,be,je,Ye,ot,lt,Ke){if(L===Xn){f===!0&&(we(i.BLEND),f=!1);return}if(f===!1&&(Le(i.BLEND),f=!0),L!==cv){if(L!==M||Ke!==H){if((E!==ci||R!==ci)&&(i.blendEquation(i.FUNC_ADD),E=ci,R=ci),Ke)switch(L){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case al:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ll:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,C=null,A=null,G=null,x.set(0,0,0),b=0,M=L,H=Ke}return}be=be||oe,je=je||ue,Ye=Ye||Re,(oe!==E||be!==R)&&(i.blendEquationSeparate(ye[oe],ye[be]),E=oe,R=be),(ue!==y||Re!==C||je!==A||Ye!==G)&&(i.blendFuncSeparate(Pe[ue],Pe[Re],Pe[je],Pe[Ye]),y=ue,C=Re,A=je,G=Ye),(ot.equals(x)===!1||lt!==b)&&(i.blendColor(ot.r,ot.g,ot.b,lt),x.copy(ot),b=lt),M=L,H=!1}function et(L,oe){L.side===an?we(i.CULL_FACE):Le(i.CULL_FACE);let ue=L.side===Nt;oe&&(ue=!ue),Oe(ue),L.blending===ns&&L.transparent===!1?me(Xn):me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const Re=L.stencilWrite;l.setTest(Re),Re&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),I(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(L){W!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),W=L)}function T(L){L!==rv?(Le(i.CULL_FACE),L!==Z&&(L===ol?i.cullFace(i.BACK):L===ov?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),Z=L}function v(L){L!==D&&($&&i.lineWidth(L),D=L)}function I(L,oe,ue){L?(Le(i.POLYGON_OFFSET_FILL),(U!==oe||k!==ue)&&(i.polygonOffset(oe,ue),U=oe,k=ue)):we(i.POLYGON_OFFSET_FILL)}function te(L){L?Le(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function J(L){L===void 0&&(L=i.TEXTURE0+X-1),ie!==L&&(i.activeTexture(L),ie=L)}function Q(L,oe,ue){ue===void 0&&(ie===null?ue=i.TEXTURE0+X-1:ue=ie);let Re=re[ue];Re===void 0&&(Re={type:void 0,texture:void 0},re[ue]=Re),(Re.type!==L||Re.texture!==oe)&&(ie!==ue&&(i.activeTexture(ue),ie=ue),i.bindTexture(L,oe||Ae[L]),Re.type=L,Re.texture=oe)}function ve(){const L=re[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function w(L){ae.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ae.copy(L))}function se(L){ge.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ge.copy(L))}function Ee(L,oe){let ue=h.get(oe);ue===void 0&&(ue=new WeakMap,h.set(oe,ue));let Re=ue.get(L);Re===void 0&&(Re=i.getUniformBlockIndex(oe,L.name),ue.set(L,Re))}function pe(L,oe){const Re=h.get(oe).get(L);u.get(oe)!==Re&&(i.uniformBlockBinding(oe,Re,L.__bindingPointIndex),u.set(oe,Re))}function ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,re={},m={},g=new WeakMap,_=[],p=null,f=!1,M=null,E=null,y=null,C=null,R=null,A=null,G=null,x=new Ue(0,0,0),b=0,H=!1,W=null,Z=null,D=null,U=null,k=null,ae.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Le,disable:we,bindFramebuffer:ke,drawBuffers:O,useProgram:ht,setBlending:me,setMaterial:et,setFlipSided:Oe,setCullFace:T,setLineWidth:v,setPolygonOffset:I,setScissorTest:te,activeTexture:J,bindTexture:Q,unbindTexture:ve,compressedTexImage2D:le,compressedTexImage3D:de,texImage2D:Me,texImage3D:he,updateUBOMapping:Ee,uniformBlockBinding:pe,texStorage2D:ze,texStorage3D:Ne,texSubImage2D:Se,texSubImage3D:Be,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ze,scissor:w,viewport:se,reset:ne}}function vM(i,e,t,n,s,r,o){const a=s.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return m?new OffscreenCanvas(T,v):qs("canvas")}function _(T,v,I,te){let J=1;if((T.width>te||T.height>te)&&(J=te/Math.max(T.width,T.height)),J<1||v===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const Q=v?io:Math.floor,ve=Q(J*T.width),le=Q(J*T.height);h===void 0&&(h=g(ve,le));const de=I?g(ve,le):h;return de.width=ve,de.height=le,de.getContext("2d").drawImage(T,0,0,ve,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ve+"x"+le+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return Ua(T.width)&&Ua(T.height)}function f(T){return a?!1:T.wrapS!==Gt||T.wrapT!==Gt||T.minFilter!==vt&&T.minFilter!==Pt}function M(T,v){return T.generateMipmaps&&v&&T.minFilter!==vt&&T.minFilter!==Pt}function E(T){i.generateMipmap(T)}function y(T,v,I,te,J=!1){if(a===!1)return v;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=v;if(v===i.RED&&(I===i.FLOAT&&(Q=i.R32F),I===i.HALF_FLOAT&&(Q=i.R16F),I===i.UNSIGNED_BYTE&&(Q=i.R8)),v===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(Q=i.R8UI),I===i.UNSIGNED_SHORT&&(Q=i.R16UI),I===i.UNSIGNED_INT&&(Q=i.R32UI),I===i.BYTE&&(Q=i.R8I),I===i.SHORT&&(Q=i.R16I),I===i.INT&&(Q=i.R32I)),v===i.RG&&(I===i.FLOAT&&(Q=i.RG32F),I===i.HALF_FLOAT&&(Q=i.RG16F),I===i.UNSIGNED_BYTE&&(Q=i.RG8)),v===i.RGBA){const ve=J?Qr:Je.getTransfer(te);I===i.FLOAT&&(Q=i.RGBA32F),I===i.HALF_FLOAT&&(Q=i.RGBA16F),I===i.UNSIGNED_BYTE&&(Q=ve===it?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function C(T,v,I){return M(T,I)===!0||T.isFramebufferTexture&&T.minFilter!==vt&&T.minFilter!==Pt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){return T===vt||T===Da||T===Xr?i.NEAREST:i.LINEAR}function A(T){const v=T.target;v.removeEventListener("dispose",A),x(v),v.isVideoTexture&&u.delete(v)}function G(T){const v=T.target;v.removeEventListener("dispose",G),H(v)}function x(T){const v=n.get(T);if(v.__webglInit===void 0)return;const I=T.source,te=d.get(I);if(te){const J=te[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(te).length===0&&d.delete(I)}n.remove(T)}function b(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const I=T.source,te=d.get(I);delete te[v.__cacheKey],o.memory.textures--}function H(T){const v=T.texture,I=n.get(T),te=n.get(v);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(I.__webglFramebuffer[J]))for(let Q=0;Q<I.__webglFramebuffer[J].length;Q++)i.deleteFramebuffer(I.__webglFramebuffer[J][Q]);else i.deleteFramebuffer(I.__webglFramebuffer[J]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[J])}else{if(Array.isArray(I.__webglFramebuffer))for(let J=0;J<I.__webglFramebuffer.length;J++)i.deleteFramebuffer(I.__webglFramebuffer[J]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let J=0;J<I.__webglColorRenderbuffer.length;J++)I.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[J]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let J=0,Q=v.length;J<Q;J++){const ve=n.get(v[J]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(v[J])}n.remove(v),n.remove(T)}let W=0;function Z(){W=0}function D(){const T=W;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function U(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function k(T,v){const I=n.get(T);if(T.isVideoTexture&&et(T),T.isRenderTargetTexture===!1&&T.version>0&&I.__version!==T.version){const te=T.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,T,v);return}}t.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+v)}function X(T,v){const I=n.get(T);if(T.version>0&&I.__version!==T.version){ae(I,T,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+v)}function $(T,v){const I=n.get(T);if(T.version>0&&I.__version!==T.version){ae(I,T,v);return}t.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+v)}function j(T,v){const I=n.get(T);if(T.version>0&&I.__version!==T.version){ge(I,T,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+v)}const Y={[ps]:i.REPEAT,[Gt]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},ie={[vt]:i.NEAREST,[Da]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[Pt]:i.LINEAR,[hd]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},re={[Qv]:i.NEVER,[rE]:i.ALWAYS,[eE]:i.LESS,[Sd]:i.LEQUAL,[tE]:i.EQUAL,[sE]:i.GEQUAL,[nE]:i.GREATER,[iE]:i.NOTEQUAL};function z(T,v,I){if(I?(i.texParameteri(T,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Y[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ie[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ie[v.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==Gt||v.wrapT!==Gt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,R(v.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==vt&&v.minFilter!==Pt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===vt||v.minFilter!==Xr&&v.minFilter!==Si||v.type===bn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===js&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(T,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function q(T,v){let I=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const te=v.source;let J=d.get(te);J===void 0&&(J={},d.set(te,J));const Q=U(v);if(Q!==T.__cacheKey){J[Q]===void 0&&(J[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,I=!0),J[Q].usedTimes++;const ve=J[T.__cacheKey];ve!==void 0&&(J[T.__cacheKey].usedTimes--,ve.usedTimes===0&&b(v)),T.__cacheKey=Q,T.__webglTexture=J[Q].texture}return I}function ae(T,v,I){let te=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(te=i.TEXTURE_3D);const J=q(T,v),Q=v.source;t.bindTexture(te,T.__webglTexture,i.TEXTURE0+I);const ve=n.get(Q);if(Q.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+I);const le=Je.getPrimaries(Je.workingColorSpace),de=v.colorSpace===Xt?null:Je.getPrimaries(v.colorSpace),Se=v.colorSpace===Xt||le===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Be=f(v)&&p(v.image)===!1;let ee=_(v.image,Be,!1,s.maxTextureSize);ee=Oe(v,ee);const Ze=p(ee)||a,ze=r.convert(v.format,v.colorSpace);let Ne=r.convert(v.type),Me=y(v.internalFormat,ze,Ne,v.colorSpace,v.isVideoTexture);z(te,v,Ze);let he;const w=v.mipmaps,se=a&&v.isVideoTexture!==!0&&Me!==vd,Ee=ve.__version===void 0||J===!0,pe=C(v,ee,Ze);if(v.isDepthTexture)Me=i.DEPTH_COMPONENT,a?v.type===bn?Me=i.DEPTH_COMPONENT32F:v.type===Gn?Me=i.DEPTH_COMPONENT24:v.type===mi?Me=i.DEPTH24_STENCIL8:Me=i.DEPTH_COMPONENT16:v.type===bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===gi&&Me===i.DEPTH_COMPONENT&&v.type!==sc&&v.type!==Gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Gn,Ne=r.convert(v.type)),v.format===ms&&Me===i.DEPTH_COMPONENT&&(Me=i.DEPTH_STENCIL,v.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=mi,Ne=r.convert(v.type))),Ee&&(se?t.texStorage2D(i.TEXTURE_2D,1,Me,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ze,Ne,null));else if(v.isDataTexture)if(w.length>0&&Ze){se&&Ee&&t.texStorage2D(i.TEXTURE_2D,pe,Me,w[0].width,w[0].height);for(let ne=0,L=w.length;ne<L;ne++)he=w[ne],se?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,ze,Ne,he.data):t.texImage2D(i.TEXTURE_2D,ne,Me,he.width,he.height,0,ze,Ne,he.data);v.generateMipmaps=!1}else se?(Ee&&t.texStorage2D(i.TEXTURE_2D,pe,Me,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,ze,Ne,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Me,ee.width,ee.height,0,ze,Ne,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){se&&Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,w[0].width,w[0].height,ee.depth);for(let ne=0,L=w.length;ne<L;ne++)he=w[ne],v.format!==Wt?ze!==null?se?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ee.depth,ze,he.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Me,he.width,he.height,ee.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ee.depth,ze,Ne,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Me,he.width,he.height,ee.depth,0,ze,Ne,he.data)}else{se&&Ee&&t.texStorage2D(i.TEXTURE_2D,pe,Me,w[0].width,w[0].height);for(let ne=0,L=w.length;ne<L;ne++)he=w[ne],v.format!==Wt?ze!==null?se?t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,ze,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Me,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,ze,Ne,he.data):t.texImage2D(i.TEXTURE_2D,ne,Me,he.width,he.height,0,ze,Ne,he.data)}else if(v.isDataArrayTexture)se?(Ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pe,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ze,Ne,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,ee.width,ee.height,ee.depth,0,ze,Ne,ee.data);else if(v.isData3DTexture)se?(Ee&&t.texStorage3D(i.TEXTURE_3D,pe,Me,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ze,Ne,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Me,ee.width,ee.height,ee.depth,0,ze,Ne,ee.data);else if(v.isFramebufferTexture){if(Ee)if(se)t.texStorage2D(i.TEXTURE_2D,pe,Me,ee.width,ee.height);else{let ne=ee.width,L=ee.height;for(let oe=0;oe<pe;oe++)t.texImage2D(i.TEXTURE_2D,oe,Me,ne,L,0,ze,Ne,null),ne>>=1,L>>=1}}else if(w.length>0&&Ze){se&&Ee&&t.texStorage2D(i.TEXTURE_2D,pe,Me,w[0].width,w[0].height);for(let ne=0,L=w.length;ne<L;ne++)he=w[ne],se?t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ze,Ne,he):t.texImage2D(i.TEXTURE_2D,ne,Me,ze,Ne,he);v.generateMipmaps=!1}else se?(Ee&&t.texStorage2D(i.TEXTURE_2D,pe,Me,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ne,ee)):t.texImage2D(i.TEXTURE_2D,0,Me,ze,Ne,ee);M(v,Ze)&&E(te),ve.__version=Q.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function ge(T,v,I){if(v.image.length!==6)return;const te=q(T,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+I);const Q=n.get(J);if(J.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+I);const ve=Je.getPrimaries(Je.workingColorSpace),le=v.colorSpace===Xt?null:Je.getPrimaries(v.colorSpace),de=v.colorSpace===Xt||ve===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Se=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let ne=0;ne<6;ne++)!Se&&!Be?ee[ne]=_(v.image[ne],!1,!0,s.maxCubemapSize):ee[ne]=Be?v.image[ne].image:v.image[ne],ee[ne]=Oe(v,ee[ne]);const Ze=ee[0],ze=p(Ze)||a,Ne=r.convert(v.format,v.colorSpace),Me=r.convert(v.type),he=y(v.internalFormat,Ne,Me,v.colorSpace),w=a&&v.isVideoTexture!==!0,se=Q.__version===void 0||te===!0;let Ee=C(v,Ze,ze);z(i.TEXTURE_CUBE_MAP,v,ze);let pe;if(Se){w&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,he,Ze.width,Ze.height);for(let ne=0;ne<6;ne++){pe=ee[ne].mipmaps;for(let L=0;L<pe.length;L++){const oe=pe[L];v.format!==Wt?Ne!==null?w?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,oe.width,oe.height,Ne,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,he,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,0,0,oe.width,oe.height,Ne,Me,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L,he,oe.width,oe.height,0,Ne,Me,oe.data)}}}else{pe=v.mipmaps,w&&se&&(pe.length>0&&Ee++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,he,ee[0].width,ee[0].height));for(let ne=0;ne<6;ne++)if(Be){w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ee[ne].width,ee[ne].height,Ne,Me,ee[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,ee[ne].width,ee[ne].height,0,Ne,Me,ee[ne].data);for(let L=0;L<pe.length;L++){const ue=pe[L].image[ne].image;w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,ue.width,ue.height,Ne,Me,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,he,ue.width,ue.height,0,Ne,Me,ue.data)}}else{w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ne,Me,ee[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,he,Ne,Me,ee[ne]);for(let L=0;L<pe.length;L++){const oe=pe[L];w?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,0,0,Ne,Me,oe.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,L+1,he,Ne,Me,oe.image[ne])}}}M(v,ze)&&E(i.TEXTURE_CUBE_MAP),Q.__version=J.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _e(T,v,I,te,J,Q){const ve=r.convert(I.format,I.colorSpace),le=r.convert(I.type),de=y(I.internalFormat,ve,le,I.colorSpace);if(!n.get(v).__hasExternalTextures){const Be=Math.max(1,v.width>>Q),ee=Math.max(1,v.height>>Q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,de,Be,ee,v.depth,0,ve,le,null):t.texImage2D(J,Q,de,Be,ee,0,ve,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,J,n.get(I).__webglTexture,0,Pe(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,J,n.get(I).__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(T,v,I){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let te=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(I||me(v)){const J=v.depthTexture;J&&J.isDepthTexture&&(J.type===bn?te=i.DEPTH_COMPONENT32F:J.type===Gn&&(te=i.DEPTH_COMPONENT24));const Q=Pe(v);me(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,te,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,te,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,te,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const te=Pe(v);I&&me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):me(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const te=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let J=0;J<te.length;J++){const Q=te[J],ve=r.convert(Q.format,Q.colorSpace),le=r.convert(Q.type),de=y(Q.internalFormat,ve,le,Q.colorSpace),Se=Pe(v);I&&me(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,de,v.width,v.height):me(v)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const te=n.get(v.depthTexture).__webglTexture,J=Pe(v);if(v.depthTexture.format===gi)me(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(v.depthTexture.format===ms)me(v)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function we(T){const v=n.get(T),I=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Le(v.__webglFramebuffer,T)}else if(I){v.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[te]),v.__webglDepthbuffer[te]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[te],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(T,v,I){const te=n.get(T);v!==void 0&&_e(te.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&we(T)}function O(T){const v=T.texture,I=n.get(T),te=n.get(v);T.addEventListener("dispose",G),T.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=v.version,o.memory.textures++);const J=T.isWebGLCubeRenderTarget===!0,Q=T.isWebGLMultipleRenderTargets===!0,ve=p(T)||a;if(J){I.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[le]=[];for(let de=0;de<v.mipmaps.length;de++)I.__webglFramebuffer[le][de]=i.createFramebuffer()}else I.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let le=0;le<v.mipmaps.length;le++)I.__webglFramebuffer[le]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(Q)if(s.drawBuffers){const le=T.texture;for(let de=0,Se=le.length;de<Se;de++){const Be=n.get(le[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&me(T)===!1){const le=Q?v:[v];I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const Se=le[de];I.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Be=r.convert(Se.format,Se.colorSpace),ee=r.convert(Se.type),Ze=y(Se.internalFormat,Be,ee,Se.colorSpace,T.isXRRenderTarget===!0),ze=Pe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Ze,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,I.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(I.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),z(i.TEXTURE_CUBE_MAP,v,ve);for(let le=0;le<6;le++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(I.__webglFramebuffer[le][de],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,de);else _e(I.__webglFramebuffer[le],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);M(v,ve)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const le=T.texture;for(let de=0,Se=le.length;de<Se;de++){const Be=le[de],ee=n.get(Be);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),z(i.TEXTURE_2D,Be,ve),_e(I.__webglFramebuffer,T,Be,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),M(Be,ve)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?le=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,te.__webglTexture),z(le,v,ve),a&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)_e(I.__webglFramebuffer[de],T,v,i.COLOR_ATTACHMENT0,le,de);else _e(I.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,le,0);M(v,ve)&&E(le),t.unbindTexture()}T.depthBuffer&&we(T)}function ht(T){const v=p(T)||a,I=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let te=0,J=I.length;te<J;te++){const Q=I[te];if(M(Q,v)){const ve=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(Q).__webglTexture;t.bindTexture(ve,le),E(ve),t.unbindTexture()}}}function ye(T){if(a&&T.samples>0&&me(T)===!1){const v=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],I=T.width,te=T.height;let J=i.COLOR_BUFFER_BIT;const Q=[],ve=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(T),de=T.isWebGLMultipleRenderTargets===!0;if(de)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){Q.push(i.COLOR_ATTACHMENT0+Se),T.depthBuffer&&Q.push(ve);const Be=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Be===!1&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]),Be===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),de){const ee=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,I,te,0,0,I,te,J,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,le.__webglColorRenderbuffer[Se]);const Be=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Pe(T){return Math.min(s.maxSamples,T.samples)}function me(T){const v=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(T){const v=o.render.frame;u.get(T)!==v&&(u.set(T,v),T.update())}function Oe(T,v){const I=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Oa||I!==Et&&I!==Xt&&(Je.getTransfer(I)===it?a===!1?e.has("EXT_sRGB")===!0&&te===Wt?(T.format=Oa,T.minFilter=Pt,T.generateMipmaps=!1):v=bd.sRGBToLinear(v):(te!==Wt||J!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=X,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=ke,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=me}function EM(i,e,t){const n=t.isWebGL2;function s(r,o=Xt){let a;const c=Je.getTransfer(o);if(r===jn)return i.UNSIGNED_BYTE;if(r===fd)return i.UNSIGNED_SHORT_4_4_4_4;if(r===pd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kv)return i.BYTE;if(r===Vv)return i.SHORT;if(r===sc)return i.UNSIGNED_SHORT;if(r===dd)return i.INT;if(r===Gn)return i.UNSIGNED_INT;if(r===bn)return i.FLOAT;if(r===js)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===zv)return i.ALPHA;if(r===Wt)return i.RGBA;if(r===Gv)return i.LUMINANCE;if(r===Wv)return i.LUMINANCE_ALPHA;if(r===gi)return i.DEPTH_COMPONENT;if(r===ms)return i.DEPTH_STENCIL;if(r===Oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xv)return i.RED;if(r===md)return i.RED_INTEGER;if(r===$v)return i.RG;if(r===gd)return i.RG_INTEGER;if(r===_d)return i.RGBA_INTEGER;if(r===Fo||r===Bo||r===Ho||r===ko)if(c===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fl||r===pl||r===ml||r===gl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===fl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ml)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===_l||r===vl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===_l)return c===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===vl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===El||r===xl||r===yl||r===Sl||r===Ml||r===Tl||r===bl||r===Al||r===wl||r===Rl||r===Cl||r===Ll||r===Pl||r===Dl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===El)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ml)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Tl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Al)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===wl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Cl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ll)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dl)return c===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vo||r===Nl||r===Il)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Vo)return c===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Il)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jv||r===Ol||r===Ul||r===Fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Vo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ul)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class xM extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fi extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yM={type:"move"};class ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),f=this._getHandJoint(l,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yM)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class SM extends Ri{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const _=t.getContextAttributes();let p=null,f=null;const M=[],E=[],y=new De;let C=null;const R=new wt;R.layers.enable(1),R.viewport=new nt;const A=new wt;A.layers.enable(2),A.viewport=new nt;const G=[R,A],x=new xM;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let q=M[z];return q===void 0&&(q=new ha,M[z]=q),q.getTargetRaySpace()},this.getControllerGrip=function(z){let q=M[z];return q===void 0&&(q=new ha,M[z]=q),q.getGripSpace()},this.getHand=function(z){let q=M[z];return q===void 0&&(q=new ha,M[z]=q),q.getHandSpace()};function W(z){const q=E.indexOf(z.inputSource);if(q===-1)return;const ae=M[q];ae!==void 0&&(ae.update(z.inputSource,z.frame,l||o),ae.dispatchEvent({type:z.type,data:z.inputSource}))}function Z(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",D);for(let z=0;z<M.length;z++){const q=E[z];q!==null&&(E[z]=null,M[z].disconnect(q))}b=null,H=null,e.setRenderTarget(p),m=null,d=null,h=null,s=null,f=null,re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(y),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Mi(m.framebufferWidth,m.framebufferHeight,{format:Wt,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ae=null,ge=null;_.depth&&(ge=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?ms:gi,ae=_.stencil?mi:Gn);const _e={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(_e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),f=new Mi(d.textureWidth,d.textureHeight,{format:Wt,type:jn,depthTexture:new Ud(d.textureWidth,d.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ae=e.properties.get(f);Ae.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(z){for(let q=0;q<z.removed.length;q++){const ae=z.removed[q],ge=E.indexOf(ae);ge>=0&&(E[ge]=null,M[ge].disconnect(ae))}for(let q=0;q<z.added.length;q++){const ae=z.added[q];let ge=E.indexOf(ae);if(ge===-1){for(let Ae=0;Ae<M.length;Ae++)if(Ae>=E.length){E.push(ae),ge=Ae;break}else if(E[Ae]===null){E[Ae]=ae,ge=Ae;break}if(ge===-1)break}const _e=M[ge];_e&&_e.connect(ae)}}const U=new P,k=new P;function X(z,q,ae){U.setFromMatrixPosition(q.matrixWorld),k.setFromMatrixPosition(ae.matrixWorld);const ge=U.distanceTo(k),_e=q.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,Le=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),ke=(_e[9]+1)/_e[5],O=(_e[9]-1)/_e[5],ht=(_e[8]-1)/_e[0],ye=(Ae[8]+1)/Ae[0],Pe=Le*ht,me=Le*ye,et=ge/(-ht+ye),Oe=et*-ht;q.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Oe),z.translateZ(et),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const T=Le+et,v=we+et,I=Pe-Oe,te=me+(ge-Oe),J=ke*we/v*T,Q=O*we/v*T;z.projectionMatrix.makePerspective(I,te,J,Q,T,v),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function $(z,q){q===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(q.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;x.near=A.near=R.near=z.near,x.far=A.far=R.far=z.far,(b!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far);const q=z.parent,ae=x.cameras;$(x,q);for(let ge=0;ge<ae.length;ge++)$(ae[ge],q);ae.length===2?X(x,R,A):x.projectionMatrix.copy(R.projectionMatrix),j(z,x,q)};function j(z,q,ae){ae===null?z.matrix.copy(q.matrixWorld):(z.matrix.copy(ae.matrixWorld),z.matrix.invert(),z.matrix.multiply(q.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(q.projectionMatrix),z.projectionMatrixInverse.copy(q.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=_s*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)};let Y=null;function ie(z,q){if(u=q.getViewerPose(l||o),g=q,u!==null){const ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let ge=!1;ae.length!==x.cameras.length&&(x.cameras.length=0,ge=!0);for(let _e=0;_e<ae.length;_e++){const Ae=ae[_e];let Le=null;if(m!==null)Le=m.getViewport(Ae);else{const ke=h.getViewSubImage(d,Ae);Le=ke.viewport,_e===0&&(e.setRenderTargetTextures(f,ke.colorTexture,d.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(f))}let we=G[_e];we===void 0&&(we=new wt,we.layers.enable(_e),we.viewport=new nt,G[_e]=we),we.matrix.fromArray(Ae.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ae.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Le.x,Le.y,Le.width,Le.height),_e===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ge===!0&&x.cameras.push(we)}}for(let ae=0;ae<M.length;ae++){const ge=E[ae],_e=M[ae];ge!==null&&_e!==void 0&&_e.update(ge,q,l||o)}Y&&Y(z,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const re=new Od;re.setAnimationLoop(ie),this.setAnimationLoop=function(z){Y=z},this.dispose=function(){}}}function MM(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Dd(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,M,E,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,y)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,M,E):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Nt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Nt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const M=e.get(f).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,M,E){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*M,p.scale.value=E*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,M){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Nt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const M=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TM(i,e,t,n){let s={},r={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,E){const y=E.program;n.uniformBlockBinding(M,y)}function l(M,E){let y=s[M.id];y===void 0&&(g(M),y=u(M),s[M.id]=y,M.addEventListener("dispose",p));const C=E.program;n.updateUBOMapping(M,C);const R=e.render.frame;r[M.id]!==R&&(d(M),r[M.id]=R)}function u(M){const E=h();M.__bindingPointIndex=E;const y=i.createBuffer(),C=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=s[M.id],y=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,A=y.length;R<A;R++){const G=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,b=G.length;x<b;x++){const H=G[x];if(m(H,R,x,C)===!0){const W=H.__offset,Z=Array.isArray(H.value)?H.value:[H.value];let D=0;for(let U=0;U<Z.length;U++){const k=Z[U],X=_(k);typeof k=="number"||typeof k=="boolean"?(H.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,W+D,H.__data)):k.isMatrix3?(H.__data[0]=k.elements[0],H.__data[1]=k.elements[1],H.__data[2]=k.elements[2],H.__data[3]=0,H.__data[4]=k.elements[3],H.__data[5]=k.elements[4],H.__data[6]=k.elements[5],H.__data[7]=0,H.__data[8]=k.elements[6],H.__data[9]=k.elements[7],H.__data[10]=k.elements[8],H.__data[11]=0):(k.toArray(H.__data,D),D+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,E,y,C){const R=M.value,A=E+"_"+y;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const G=C[A];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return C[A]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function g(M){const E=M.uniforms;let y=0;const C=16;for(let A=0,G=E.length;A<G;A++){const x=Array.isArray(E[A])?E[A]:[E[A]];for(let b=0,H=x.length;b<H;b++){const W=x[b],Z=Array.isArray(W.value)?W.value:[W.value];for(let D=0,U=Z.length;D<U;D++){const k=Z[D],X=_(k),$=y%C;$!==0&&C-$<X.boundary&&(y+=C-$),W.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=y,y+=X.storage}}}const R=y%C;return R>0&&(y+=C-R),M.__size=y,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function p(M){const E=M.target;E.removeEventListener("dispose",p);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class zd{constructor(e={}){const{canvas:t=xE(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ct,this._useLegacyLights=!1,this.toneMapping=$n,this.toneMappingExposure=1;const E=this;let y=!1,C=0,R=0,A=null,G=-1,x=null;const b=new nt,H=new nt;let W=null;const Z=new Ue(0);let D=0,U=t.width,k=t.height,X=1,$=null,j=null;const Y=new nt(0,0,U,k),ie=new nt(0,0,U,k);let re=!1;const z=new ac;let q=!1,ae=!1,ge=null;const _e=new $e,Ae=new De,Le=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ke(){return A===null?X:1}let O=n;function ht(S,N){for(let B=0;B<S.length;B++){const V=S[B],F=t.getContext(V,N);if(F!==null)return F}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",oe,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&N.shift(),O=ht(N,S),O===null)throw ht(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,Pe,me,et,Oe,T,v,I,te,J,Q,ve,le,de,Se,Be,ee,Ze,ze,Ne,Me,he,w,se;function Ee(){ye=new Iy(O),Pe=new Ry(O,ye,e),ye.init(Pe),he=new EM(O,ye,Pe),me=new _M(O,ye,Pe),et=new Fy(O),Oe=new iM,T=new vM(O,ye,me,Oe,Pe,he,et),v=new Ly(E),I=new Ny(E),te=new XE(O,Pe),w=new Ay(O,ye,te,Pe),J=new Oy(O,te,et,w),Q=new Vy(O,J,te,et),ze=new ky(O,Pe,T),Be=new Cy(Oe),ve=new nM(E,v,I,ye,Pe,w,Be),le=new MM(E,Oe),de=new rM,Se=new hM(ye,Pe),Ze=new by(E,v,I,me,Q,d,c),ee=new gM(E,Q,Pe),se=new TM(O,et,Pe,me),Ne=new wy(O,ye,et,Pe),Me=new Uy(O,ye,et,Pe),et.programs=ve.programs,E.capabilities=Pe,E.extensions=ye,E.properties=Oe,E.renderLists=de,E.shadowMap=ee,E.state=me,E.info=et}Ee();const pe=new SM(E,O);this.xr=pe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(U,k,!1))},this.getSize=function(S){return S.set(U,k)},this.setSize=function(S,N,B=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=S,k=N,t.width=Math.floor(S*X),t.height=Math.floor(N*X),B===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(U*X,k*X).floor()},this.setDrawingBufferSize=function(S,N,B){U=S,k=N,X=B,t.width=Math.floor(S*B),t.height=Math.floor(N*B),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(b)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,N,B,V){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,N,B,V),me.viewport(b.copy(Y).multiplyScalar(X).floor())},this.getScissor=function(S){return S.copy(ie)},this.setScissor=function(S,N,B,V){S.isVector4?ie.set(S.x,S.y,S.z,S.w):ie.set(S,N,B,V),me.scissor(H.copy(ie).multiplyScalar(X).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(S){me.setScissorTest(re=S)},this.setOpaqueSort=function(S){$=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(S=!0,N=!0,B=!0){let V=0;if(S){let F=!1;if(A!==null){const fe=A.texture.format;F=fe===_d||fe===gd||fe===md}if(F){const fe=A.texture.type,xe=fe===jn||fe===Gn||fe===sc||fe===mi||fe===fd||fe===pd,Ce=Ze.getClearColor(),Ie=Ze.getClearAlpha(),Ge=Ce.r,Fe=Ce.g,He=Ce.b;xe?(m[0]=Ge,m[1]=Fe,m[2]=He,m[3]=Ie,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Ge,g[1]=Fe,g[2]=He,g[3]=Ie,O.clearBufferiv(O.COLOR,0,g))}else V|=O.COLOR_BUFFER_BIT}N&&(V|=O.DEPTH_BUFFER_BIT),B&&(V|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),de.dispose(),Se.dispose(),Oe.dispose(),v.dispose(),I.dispose(),Q.dispose(),w.dispose(),se.dispose(),ve.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",lt),pe.removeEventListener("sessionend",Ke),ge&&(ge.dispose(),ge=null),dt.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=et.autoReset,N=ee.enabled,B=ee.autoUpdate,V=ee.needsUpdate,F=ee.type;Ee(),et.autoReset=S,ee.enabled=N,ee.autoUpdate=B,ee.needsUpdate=V,ee.type=F}function oe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ue(S){const N=S.target;N.removeEventListener("dispose",ue),Re(N)}function Re(S){be(S),Oe.remove(S)}function be(S){const N=Oe.get(S).programs;N!==void 0&&(N.forEach(function(B){ve.releaseProgram(B)}),S.isShaderMaterial&&ve.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,B,V,F,fe){N===null&&(N=we);const xe=F.isMesh&&F.matrixWorld.determinant()<0,Ce=ef(S,N,B,V,F);me.setMaterial(V,xe);let Ie=B.index,Ge=1;if(V.wireframe===!0){if(Ie=J.getWireframeAttribute(B),Ie===void 0)return;Ge=2}const Fe=B.drawRange,He=B.attributes.position;let ut=Fe.start*Ge,It=(Fe.start+Fe.count)*Ge;fe!==null&&(ut=Math.max(ut,fe.start*Ge),It=Math.min(It,(fe.start+fe.count)*Ge)),Ie!==null?(ut=Math.max(ut,0),It=Math.min(It,Ie.count)):He!=null&&(ut=Math.max(ut,0),It=Math.min(It,He.count));const gt=It-ut;if(gt<0||gt===1/0)return;w.setup(F,V,Ce,B,Ie);let _n,st=Ne;if(Ie!==null&&(_n=te.get(Ie),st=Me,st.setIndex(_n)),F.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*ke()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(F.isLine){let We=V.linewidth;We===void 0&&(We=1),me.setLineWidth(We*ke()),F.isLineSegments?st.setMode(O.LINES):F.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else F.isPoints?st.setMode(O.POINTS):F.isSprite&&st.setMode(O.TRIANGLES);if(F.isBatchedMesh)st.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)st.renderInstances(ut,gt,F.count);else if(B.isInstancedBufferGeometry){const We=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,_o=Math.min(B.instanceCount,We);st.renderInstances(ut,gt,_o)}else st.render(ut,gt)};function je(S,N,B){S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,rr(S,N,B),S.side=Pn,S.needsUpdate=!0,rr(S,N,B),S.side=an):rr(S,N,B)}this.compile=function(S,N,B=null){B===null&&(B=S),p=Se.get(B),p.init(),M.push(p),B.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==B&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(E._useLegacyLights);const V=new Set;return S.traverse(function(F){const fe=F.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){const Ce=fe[xe];je(Ce,B,F),V.add(Ce)}else je(fe,B,F),V.add(fe)}),M.pop(),p=null,V},this.compileAsync=function(S,N,B=null){const V=this.compile(S,N,B);return new Promise(F=>{function fe(){if(V.forEach(function(xe){Oe.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){F(S);return}setTimeout(fe,10)}ye.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Ye=null;function ot(S){Ye&&Ye(S)}function lt(){dt.stop()}function Ke(){dt.start()}const dt=new Od;dt.setAnimationLoop(ot),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(S){Ye=S,pe.setAnimationLoop(S),S===null?dt.stop():dt.start()},pe.addEventListener("sessionstart",lt),pe.addEventListener("sessionend",Ke),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(N),N=pe.getCamera()),S.isScene===!0&&S.onBeforeRender(E,S,N,A),p=Se.get(S,M.length),p.init(),M.push(p),_e.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,q=Be.init(this.clippingPlanes,ae),_=de.get(S,f.length),_.init(),f.push(_),rn(S,N,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort($,j),this.info.render.frame++,q===!0&&Be.beginShadows();const B=p.state.shadowsArray;if(ee.render(B,S,N),q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,S),p.setupLights(E._useLegacyLights),N.isArrayCamera){const V=N.cameras;for(let F=0,fe=V.length;F<fe;F++){const xe=V[F];vc(_,S,xe,xe.viewport)}}else vc(_,S,N);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(E,S,N),w.resetDefaultState(),G=-1,x=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function rn(S,N,B,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||z.intersectsSprite(S)){V&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);const xe=Q.update(S),Ce=S.material;Ce.visible&&_.push(S,xe,Ce,B,Le.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||z.intersectsObject(S))){const xe=Q.update(S),Ce=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Le.copy(xe.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(_e)),Array.isArray(Ce)){const Ie=xe.groups;for(let Ge=0,Fe=Ie.length;Ge<Fe;Ge++){const He=Ie[Ge],ut=Ce[He.materialIndex];ut&&ut.visible&&_.push(S,xe,ut,B,Le.z,He)}}else Ce.visible&&_.push(S,xe,Ce,B,Le.z,null)}}const fe=S.children;for(let xe=0,Ce=fe.length;xe<Ce;xe++)rn(fe[xe],N,B,V)}function vc(S,N,B,V){const F=S.opaque,fe=S.transmissive,xe=S.transparent;p.setupLightsView(B),q===!0&&Be.setGlobalState(E.clippingPlanes,B),fe.length>0&&Qd(F,fe,N,B),V&&me.viewport(b.copy(V)),F.length>0&&sr(F,N,B),fe.length>0&&sr(fe,N,B),xe.length>0&&sr(xe,N,B),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Qd(S,N,B,V){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const fe=Pe.isWebGL2;ge===null&&(ge=new Mi(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?js:jn,minFilter:Si,samples:fe?4:0})),E.getDrawingBufferSize(Ae),fe?ge.setSize(Ae.x,Ae.y):ge.setSize(io(Ae.x),io(Ae.y));const xe=E.getRenderTarget();E.setRenderTarget(ge),E.getClearColor(Z),D=E.getClearAlpha(),D<1&&E.setClearColor(16777215,.5),E.clear();const Ce=E.toneMapping;E.toneMapping=$n,sr(S,B,V),T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge);let Ie=!1;for(let Ge=0,Fe=N.length;Ge<Fe;Ge++){const He=N[Ge],ut=He.object,It=He.geometry,gt=He.material,_n=He.group;if(gt.side===an&&ut.layers.test(V.layers)){const st=gt.side;gt.side=Nt,gt.needsUpdate=!0,Ec(ut,B,V,It,gt,_n),gt.side=st,gt.needsUpdate=!0,Ie=!0}}Ie===!0&&(T.updateMultisampleRenderTarget(ge),T.updateRenderTargetMipmap(ge)),E.setRenderTarget(xe),E.setClearColor(Z,D),E.toneMapping=Ce}function sr(S,N,B){const V=N.isScene===!0?N.overrideMaterial:null;for(let F=0,fe=S.length;F<fe;F++){const xe=S[F],Ce=xe.object,Ie=xe.geometry,Ge=V===null?xe.material:V,Fe=xe.group;Ce.layers.test(B.layers)&&Ec(Ce,N,B,Ie,Ge,Fe)}}function Ec(S,N,B,V,F,fe){S.onBeforeRender(E,N,B,V,F,fe),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(E,N,B,V,S,fe),F.transparent===!0&&F.side===an&&F.forceSinglePass===!1?(F.side=Nt,F.needsUpdate=!0,E.renderBufferDirect(B,N,V,F,S,fe),F.side=Pn,F.needsUpdate=!0,E.renderBufferDirect(B,N,V,F,S,fe),F.side=an):E.renderBufferDirect(B,N,V,F,S,fe),S.onAfterRender(E,N,B,V,F,fe)}function rr(S,N,B){N.isScene!==!0&&(N=we);const V=Oe.get(S),F=p.state.lights,fe=p.state.shadowsArray,xe=F.state.version,Ce=ve.getParameters(S,F.state,fe,N,B),Ie=ve.getProgramCacheKey(Ce);let Ge=V.programs;V.environment=S.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(S.isMeshStandardMaterial?I:v).get(S.envMap||V.environment),Ge===void 0&&(S.addEventListener("dispose",ue),Ge=new Map,V.programs=Ge);let Fe=Ge.get(Ie);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===xe)return yc(S,Ce),Fe}else Ce.uniforms=ve.getUniforms(S),S.onBuild(B,Ce,E),S.onBeforeCompile(Ce,E),Fe=ve.acquireProgram(Ce,Ie),Ge.set(Ie,Fe),V.uniforms=Ce.uniforms;const He=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Be.uniform),yc(S,Ce),V.needsLights=nf(S),V.lightsStateVersion=xe,V.needsLights&&(He.ambientLightColor.value=F.state.ambient,He.lightProbe.value=F.state.probe,He.directionalLights.value=F.state.directional,He.directionalLightShadows.value=F.state.directionalShadow,He.spotLights.value=F.state.spot,He.spotLightShadows.value=F.state.spotShadow,He.rectAreaLights.value=F.state.rectArea,He.ltc_1.value=F.state.rectAreaLTC1,He.ltc_2.value=F.state.rectAreaLTC2,He.pointLights.value=F.state.point,He.pointLightShadows.value=F.state.pointShadow,He.hemisphereLights.value=F.state.hemi,He.directionalShadowMap.value=F.state.directionalShadowMap,He.directionalShadowMatrix.value=F.state.directionalShadowMatrix,He.spotShadowMap.value=F.state.spotShadowMap,He.spotLightMatrix.value=F.state.spotLightMatrix,He.spotLightMap.value=F.state.spotLightMap,He.pointShadowMap.value=F.state.pointShadowMap,He.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function xc(S){if(S.uniformsList===null){const N=S.currentProgram.getUniforms();S.uniformsList=$r.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function yc(S,N){const B=Oe.get(S);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function ef(S,N,B,V,F){N.isScene!==!0&&(N=we),T.resetTextureUnits();const fe=N.fog,xe=V.isMeshStandardMaterial?N.environment:null,Ce=A===null?E.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Et,Ie=(V.isMeshStandardMaterial?I:v).get(V.envMap||xe),Ge=V.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Fe=!!B.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),He=!!B.morphAttributes.position,ut=!!B.morphAttributes.normal,It=!!B.morphAttributes.color;let gt=$n;V.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=E.toneMapping);const _n=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,st=_n!==void 0?_n.length:0,We=Oe.get(V),_o=p.state.lights;if(q===!0&&(ae===!0||S!==x)){const kt=S===x&&V.id===G;Be.setState(V,S,kt)}let at=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_o.state.version||We.outputColorSpace!==Ce||F.isBatchedMesh&&We.batching===!1||!F.isBatchedMesh&&We.batching===!0||F.isInstancedMesh&&We.instancing===!1||!F.isInstancedMesh&&We.instancing===!0||F.isSkinnedMesh&&We.skinning===!1||!F.isSkinnedMesh&&We.skinning===!0||F.isInstancedMesh&&We.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&We.instancingColor===!1&&F.instanceColor!==null||We.envMap!==Ie||V.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Fe||We.morphTargets!==He||We.morphNormals!==ut||We.morphColors!==It||We.toneMapping!==gt||Pe.isWebGL2===!0&&We.morphTargetsCount!==st)&&(at=!0):(at=!0,We.__version=V.version);let ei=We.currentProgram;at===!0&&(ei=rr(V,N,F));let Sc=!1,Cs=!1,vo=!1;const St=ei.getUniforms(),ti=We.uniforms;if(me.useProgram(ei.program)&&(Sc=!0,Cs=!0,vo=!0),V.id!==G&&(G=V.id,Cs=!0),Sc||x!==S){St.setValue(O,"projectionMatrix",S.projectionMatrix),St.setValue(O,"viewMatrix",S.matrixWorldInverse);const kt=St.map.cameraPosition;kt!==void 0&&kt.setValue(O,Le.setFromMatrixPosition(S.matrixWorld)),Pe.logarithmicDepthBuffer&&St.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&St.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),x!==S&&(x=S,Cs=!0,vo=!0)}if(F.isSkinnedMesh){St.setOptional(O,F,"bindMatrix"),St.setOptional(O,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(Pe.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),St.setValue(O,"boneTexture",kt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(St.setOptional(O,F,"batchingTexture"),St.setValue(O,"batchingTexture",F._matricesTexture,T));const Eo=B.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&Pe.isWebGL2===!0)&&ze.update(F,B,ei),(Cs||We.receiveShadow!==F.receiveShadow)&&(We.receiveShadow=F.receiveShadow,St.setValue(O,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ti.envMap.value=Ie,ti.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Cs&&(St.setValue(O,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&tf(ti,vo),fe&&V.fog===!0&&le.refreshFogUniforms(ti,fe),le.refreshMaterialUniforms(ti,V,X,k,ge),$r.upload(O,xc(We),ti,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&($r.upload(O,xc(We),ti,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&St.setValue(O,"center",F.center),St.setValue(O,"modelViewMatrix",F.modelViewMatrix),St.setValue(O,"normalMatrix",F.normalMatrix),St.setValue(O,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let xo=0,sf=kt.length;xo<sf;xo++)if(Pe.isWebGL2){const Mc=kt[xo];se.update(Mc,ei),se.bind(Mc,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function tf(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function nf(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,B){Oe.get(S.texture).__webglTexture=N,Oe.get(S.depthTexture).__webglTexture=B;const V=Oe.get(S);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=B===void 0,V.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const B=Oe.get(S);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,B=0){A=S,C=N,R=B;let V=!0,F=null,fe=!1,xe=!1;if(S){const Ie=Oe.get(S);Ie.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(O.FRAMEBUFFER,null),V=!1):Ie.__webglFramebuffer===void 0?T.setupRenderTarget(S):Ie.__hasExternalTextures&&T.rebindTextures(S,Oe.get(S.texture).__webglTexture,Oe.get(S.depthTexture).__webglTexture);const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(xe=!0);const Fe=Oe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?F=Fe[N][B]:F=Fe[N],fe=!0):Pe.isWebGL2&&S.samples>0&&T.useMultisampledRTT(S)===!1?F=Oe.get(S).__webglMultisampledFramebuffer:Array.isArray(Fe)?F=Fe[B]:F=Fe,b.copy(S.viewport),H.copy(S.scissor),W=S.scissorTest}else b.copy(Y).multiplyScalar(X).floor(),H.copy(ie).multiplyScalar(X).floor(),W=re;if(me.bindFramebuffer(O.FRAMEBUFFER,F)&&Pe.drawBuffers&&V&&me.drawBuffers(S,F),me.viewport(b),me.scissor(H),me.setScissorTest(W),fe){const Ie=Oe.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ie.__webglTexture,B)}else if(xe){const Ie=Oe.get(S.texture),Ge=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,B||0,Ge)}G=-1},this.readRenderTargetPixels=function(S,N,B,V,F,fe,xe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Oe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xe!==void 0&&(Ce=Ce[xe]),Ce){me.bindFramebuffer(O.FRAMEBUFFER,Ce);try{const Ie=S.texture,Ge=Ie.format,Fe=Ie.type;if(Ge!==Wt&&he.convert(Ge)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Fe===js&&(ye.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Fe!==jn&&he.convert(Fe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===bn&&(Pe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&B>=0&&B<=S.height-F&&O.readPixels(N,B,V,F,he.convert(Ge),he.convert(Fe),fe)}finally{const Ie=A!==null?Oe.get(A).__webglFramebuffer:null;me.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(S,N,B=0){const V=Math.pow(2,-B),F=Math.floor(N.image.width*V),fe=Math.floor(N.image.height*V);T.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,B,0,0,S.x,S.y,F,fe),me.unbindTexture()},this.copyTextureToTexture=function(S,N,B,V=0){const F=N.image.width,fe=N.image.height,xe=he.convert(B.format),Ce=he.convert(B.type);T.setTexture2D(B,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,B.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,V,S.x,S.y,F,fe,xe,Ce,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,V,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,xe,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,V,S.x,S.y,xe,Ce,N.image),V===0&&B.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(S,N,B,V,F=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=S.max.x-S.min.x+1,xe=S.max.y-S.min.y+1,Ce=S.max.z-S.min.z+1,Ie=he.convert(V.format),Ge=he.convert(V.type);let Fe;if(V.isData3DTexture)T.setTexture3D(V,0),Fe=O.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)T.setTexture2DArray(V,0),Fe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);const He=O.getParameter(O.UNPACK_ROW_LENGTH),ut=O.getParameter(O.UNPACK_IMAGE_HEIGHT),It=O.getParameter(O.UNPACK_SKIP_PIXELS),gt=O.getParameter(O.UNPACK_SKIP_ROWS),_n=O.getParameter(O.UNPACK_SKIP_IMAGES),st=B.isCompressedTexture?B.mipmaps[F]:B.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,st.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,st.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,S.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,S.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S.min.z),B.isDataTexture||B.isData3DTexture?O.texSubImage3D(Fe,F,N.x,N.y,N.z,fe,xe,Ce,Ie,Ge,st.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(Fe,F,N.x,N.y,N.z,fe,xe,Ce,Ie,st.data)):O.texSubImage3D(Fe,F,N.x,N.y,N.z,fe,xe,Ce,Ie,Ge,st),O.pixelStorei(O.UNPACK_ROW_LENGTH,He),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ut),O.pixelStorei(O.UNPACK_SKIP_PIXELS,It),O.pixelStorei(O.UNPACK_SKIP_ROWS,gt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,_n),F===0&&V.generateMipmaps&&O.generateMipmap(Fe),me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,me.reset(),w.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===fo?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ct?_i:xd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_i?ct:Et}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bM extends zd{}bM.prototype.isWebGL1Renderer=!0;class AM extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class wM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ia,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bt=new P;class hc{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),s=tt(s,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ru=new P,Cu=new nt,Lu=new nt,RM=new P,Pu=new $e,Or=new P,da=new pn,Du=new $e,fa=new tr;class CM extends $t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dl,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingBox.expandByPoint(Or)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Or),this.boundingSphere.expandByPoint(Or)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),da.copy(this.boundingSphere),da.applyMatrix4(s),e.ray.intersectsSphere(da)!==!1&&(Du.copy(s).invert(),fa.copy(e.ray).applyMatrix4(Du),!(this.boundingBox!==null&&fa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cu.fromBufferAttribute(s.attributes.skinIndex,e),Lu.fromBufferAttribute(s.attributes.skinWeight,e),Ru.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Lu.getComponent(r);if(o!==0){const a=Cu.getComponent(r);Pu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(RM.copy(Ru).applyMatrix4(Pu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gd extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class LM extends yt{constructor(e=null,t=1,n=1,s,r,o,a,c,l=vt,u=vt,h,d){super(null,o,a,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nu=new $e,PM=new $e;class dc{constructor(e=[],t=[]){this.uuid=tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new $e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:PM;Nu.multiplyMatrices(a,t[r]),Nu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new dc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new LM(t,e,e,Wt,bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gd),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ba extends Lt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const qi=new $e,Iu=new $e,Ur=[],Ou=new nn,DM=new $e,Us=new $t,Fs=new pn;class NM extends $t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ba(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,DM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Ou.copy(e.boundingBox).applyMatrix4(qi),this.boundingBox.union(Ou)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qi),Fs.copy(e.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Fs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fs.copy(this.boundingSphere),Fs.applyMatrix4(n),e.ray.intersectsSphere(Fs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qi),Iu.multiplyMatrices(n,qi),Us.matrixWorld=Iu,Us.raycast(e,Ur);for(let o=0,a=Ur.length;o<a;o++){const c=Ur[o];c.instanceId=r,c.object=this,t.push(c)}Ur.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ba(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Wd extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uu=new P,Fu=new P,Bu=new $e,pa=new tr,Fr=new pn;class fc extends rt{constructor(e=new mn,t=new Wd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Uu.fromBufferAttribute(t,s-1),Fu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Uu.distanceTo(Fu);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=r,e.ray.intersectsSphere(Fr)===!1)return;Bu.copy(s).invert(),pa.copy(e.ray).applyMatrix4(Bu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,u=new P,h=new P,d=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const f=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let E=f,y=M-1;E<y;E+=m){const C=g.getX(E),R=g.getX(E+1);if(l.fromBufferAttribute(p,C),u.fromBufferAttribute(p,R),pa.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const G=e.ray.origin.distanceTo(d);G<e.near||G>e.far||t.push({distance:G,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let E=f,y=M-1;E<y;E+=m){if(l.fromBufferAttribute(p,E),u.fromBufferAttribute(p,E+1),pa.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:h.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Hu=new P,ku=new P;class IM extends fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Hu.fromBufferAttribute(t,s),ku.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Hu.distanceTo(ku);e.setAttribute("lineDistance",new Cn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OM extends fc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Xd extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vu=new $e,Ha=new tr,Br=new pn,Hr=new P;class UM extends rt{constructor(e=new mn,t=new Xd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,e.ray.intersectsSphere(Br)===!1)return;Vu.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Vu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,_=m;g<_;g++){const p=l.getX(g);Hr.fromBufferAttribute(h,p),zu(Hr,p,c,s,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,_=m;g<_;g++)Hr.fromBufferAttribute(h,g),zu(Hr,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function zu(i,e,t,n,s,r,o){const a=Ha.distanceSqToPoint(i);if(a<t){const c=new P;Ha.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class pc extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nn extends pc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function kr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function FM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function BM(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gu(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function $d(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class ir{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class HM extends ir{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hl:r=e,a=2*t-n;break;case kl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hl:o=e,c=2*n-t;break;case kl:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,f=-d*p+2*d*_-d*g,M=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,E=(-1-m)*p+(1.5+m)*_+.5*g,y=m*p-m*_;for(let C=0;C!==a;++C)r[C]=f*o[u+C]+M*o[l+C]+E*o[c+C]+y*o[h+C];return r}}class kM extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class VM extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new VM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new HM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case gs:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return gs;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&FM(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=gs;class As extends gn{}As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=Ys;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;class jd extends gn{}jd.prototype.ValueTypeName="color";class Es extends gn{}Es.prototype.ValueTypeName="number";class zM extends ir{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)fn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class bi extends gn{InterpolantFactoryMethodLinear(e){return new zM(this.times,this.values,this.getValueSize(),e)}}bi.prototype.ValueTypeName="quaternion";bi.prototype.DefaultInterpolation=gs;bi.prototype.InterpolantFactoryMethodSmooth=void 0;class ws extends gn{}ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=Ys;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends gn{}xs.prototype.ValueTypeName="vector";class GM{constructor(e,t=-1,n,s=Yv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(XM(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(gn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=BM(c);c=Gu(c,1,u),l=Gu(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Es(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,_){if(m.length!==0){const p=[],f=[];$d(m,p,f,g),p.length!==0&&_.push(new h(d,p,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)m[d[g].morphTargets[_]]=-1;for(const _ in m){const p=[],f=[];for(let M=0;M!==d[g].morphTargets.length;++M){const E=d[g];p.push(E.time),f.push(E.morphTarget===_?1:0)}s.push(new Es(".morphTargetInfluence["+_+"]",p,f))}c=m.length*o}else{const m=".bones["+t[h].name+"]";n(xs,m+".position",d,"pos",s),n(bi,m+".quaternion",d,"rot",s),n(xs,m+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return jd;case"quaternion":return bi;case"bool":case"boolean":return As;case"string":return ws}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function XM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WM(i.type);if(i.times===void 0){const t=[],n=[];$d(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $M{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const jM=new $M;class Rs{constructor(e){this.manager=e!==void 0?e:jM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mn={};class YM extends Error{constructor(e,t){super(e),this.response=t}}class Yd extends Rs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mn[e]!==void 0){Mn[e].push({onLoad:t,onProgress:n,onError:s});return}Mn[e]=[],Mn[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Mn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=d?parseInt(d):0,g=m!==0;let _=0;const p=new ReadableStream({start(f){M();function M(){h.read().then(({done:E,value:y})=>{if(E)f.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let R=0,A=u.length;R<A;R++){const G=u[R];G.onProgress&&G.onProgress(C)}f.enqueue(y),M()}})}}});return new Response(p)}else throw new YM(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Wn.add(e,l);const u=Mn[e];delete Mn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Mn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Mn[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class qM extends Rs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qs("img");function c(){u(),Wn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class KM extends Rs{constructor(e){super(e)}load(e,t,n,s){const r=new yt,o=new qM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class go extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ma=new $e,Wu=new P,Xu=new P;class mc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wu),Xu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xu),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZM extends mc{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_s*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class JM extends go{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ZM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $u=new $e,Bs=new P,ga=new P;class QM extends mc{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bs),ga.copy(n.position),ga.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ga),n.updateMatrixWorld(),s.makeTranslation(-Bs.x,-Bs.y,-Bs.z),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u)}}class eT extends go{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new QM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class tT extends mc{constructor(){super(new lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qd extends go{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new tT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nT extends go{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class iT extends Rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Wn.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wn.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Wn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wn.add(e,c),r.manager.itemStart(e)}}const gc="\\[\\]\\.:\\/",sT=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",rT="[^"+gc.replace("\\.","")+"]",oT=/((?:WC+[\/:])*)/.source.replace("WC",_c),aT=/(WCOD+)?/.source.replace("WCOD",rT),cT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),lT=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),uT=new RegExp("^"+oT+aT+cT+lT+"$"),hT=["material","materials","bones","map"];class dT{constructor(e,t,n){const s=n||Qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Qe{constructor(e,t,n){this.path=t,this.parsedPath=n||Qe.parseTrackName(t),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,t,n):new Qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sT,"")}static parseTrackName(e){const t=uT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);hT.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=dT;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ju{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);const Yu={type:"change"},_a={type:"start"},qu={type:"end"},Vr=new tr,Ku=new Vn,fT=Math.cos(70*Md.DEG2RAD);class pT extends Ri{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pi.ROTATE,MIDDLE:Pi.DOLLY,RIGHT:Pi.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(w){w.addEventListener("keydown",Se),this._domElementKeyEvents=w},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Se),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Yu),n.update(),r=s.NONE},this.update=function(){const w=new P,se=new fn().setFromUnitVectors(e.up,new P(0,1,0)),Ee=se.clone().invert(),pe=new P,ne=new fn,L=new P,oe=2*Math.PI;return function(Re=null){const be=n.object.position;w.copy(be).sub(n.target),w.applyQuaternion(se),a.setFromVector3(w),n.autoRotate&&r===s.NONE&&W(b(Re)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let je=n.minAzimuthAngle,Ye=n.maxAzimuthAngle;isFinite(je)&&isFinite(Ye)&&(je<-Math.PI?je+=oe:je>Math.PI&&(je-=oe),Ye<-Math.PI?Ye+=oe:Ye>Math.PI&&(Ye-=oe),je<=Ye?a.theta=Math.max(je,Math.min(Ye,a.theta)):a.theta=a.theta>(je+Ye)/2?Math.max(je,a.theta):Math.min(Ye,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&R||n.object.isOrthographicCamera?a.radius=Y(a.radius):a.radius=Y(a.radius*l),w.setFromSpherical(a),w.applyQuaternion(Ee),be.copy(n.target).add(w),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let ot=!1;if(n.zoomToCursor&&R){let lt=null;if(n.object.isPerspectiveCamera){const Ke=w.length();lt=Y(Ke*l);const dt=Ke-lt;n.object.position.addScaledVector(y,dt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ke=new P(C.x,C.y,0);Ke.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ot=!0;const dt=new P(C.x,C.y,0);dt.unproject(n.object),n.object.position.sub(dt).add(Ke),n.object.updateMatrixWorld(),lt=w.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;lt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(lt).add(n.object.position):(Vr.origin.copy(n.object.position),Vr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vr.direction))<fT?e.lookAt(n.target):(Ku.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vr.intersectPlane(Ku,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ot=!0);return l=1,R=!1,ot||pe.distanceToSquared(n.object.position)>o||8*(1-ne.dot(n.object.quaternion))>o||L.distanceToSquared(n.target)>0?(n.dispatchEvent(Yu),pe.copy(n.object.position),ne.copy(n.object.quaternion),L.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ze),n.domElement.removeEventListener("pointerdown",T),n.domElement.removeEventListener("pointercancel",I),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",I),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Se),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new ju,c=new ju;let l=1;const u=new P,h=new De,d=new De,m=new De,g=new De,_=new De,p=new De,f=new De,M=new De,E=new De,y=new P,C=new De;let R=!1;const A=[],G={};let x=!1;function b(w){return w!==null?2*Math.PI/60*n.autoRotateSpeed*w:2*Math.PI/60/60*n.autoRotateSpeed}function H(w){const se=Math.abs(w*.01);return Math.pow(.95,n.zoomSpeed*se)}function W(w){c.theta-=w}function Z(w){c.phi-=w}const D=function(){const w=new P;return function(Ee,pe){w.setFromMatrixColumn(pe,0),w.multiplyScalar(-Ee),u.add(w)}}(),U=function(){const w=new P;return function(Ee,pe){n.screenSpacePanning===!0?w.setFromMatrixColumn(pe,1):(w.setFromMatrixColumn(pe,0),w.crossVectors(n.object.up,w)),w.multiplyScalar(Ee),u.add(w)}}(),k=function(){const w=new P;return function(Ee,pe){const ne=n.domElement;if(n.object.isPerspectiveCamera){const L=n.object.position;w.copy(L).sub(n.target);let oe=w.length();oe*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Ee*oe/ne.clientHeight,n.object.matrix),U(2*pe*oe/ne.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Ee*(n.object.right-n.object.left)/n.object.zoom/ne.clientWidth,n.object.matrix),U(pe*(n.object.top-n.object.bottom)/n.object.zoom/ne.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function X(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(w){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=w:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(w,se){if(!n.zoomToCursor)return;R=!0;const Ee=n.domElement.getBoundingClientRect(),pe=w-Ee.left,ne=se-Ee.top,L=Ee.width,oe=Ee.height;C.x=pe/L*2-1,C.y=-(ne/oe)*2+1,y.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(w){return Math.max(n.minDistance,Math.min(n.maxDistance,w))}function ie(w){h.set(w.clientX,w.clientY)}function re(w){j(w.clientX,w.clientX),f.set(w.clientX,w.clientY)}function z(w){g.set(w.clientX,w.clientY)}function q(w){d.set(w.clientX,w.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;W(2*Math.PI*m.x/se.clientHeight),Z(2*Math.PI*m.y/se.clientHeight),h.copy(d),n.update()}function ae(w){M.set(w.clientX,w.clientY),E.subVectors(M,f),E.y>0?X(H(E.y)):E.y<0&&$(H(E.y)),f.copy(M),n.update()}function ge(w){_.set(w.clientX,w.clientY),p.subVectors(_,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(_),n.update()}function _e(w){j(w.clientX,w.clientY),w.deltaY<0?$(H(w.deltaY)):w.deltaY>0&&X(H(w.deltaY)),n.update()}function Ae(w){let se=!1;switch(w.code){case n.keys.UP:w.ctrlKey||w.metaKey||w.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),se=!0;break;case n.keys.BOTTOM:w.ctrlKey||w.metaKey||w.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),se=!0;break;case n.keys.LEFT:w.ctrlKey||w.metaKey||w.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),se=!0;break;case n.keys.RIGHT:w.ctrlKey||w.metaKey||w.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),se=!0;break}se&&(w.preventDefault(),n.update())}function Le(w){if(A.length===1)h.set(w.pageX,w.pageY);else{const se=he(w),Ee=.5*(w.pageX+se.x),pe=.5*(w.pageY+se.y);h.set(Ee,pe)}}function we(w){if(A.length===1)g.set(w.pageX,w.pageY);else{const se=he(w),Ee=.5*(w.pageX+se.x),pe=.5*(w.pageY+se.y);g.set(Ee,pe)}}function ke(w){const se=he(w),Ee=w.pageX-se.x,pe=w.pageY-se.y,ne=Math.sqrt(Ee*Ee+pe*pe);f.set(0,ne)}function O(w){n.enableZoom&&ke(w),n.enablePan&&we(w)}function ht(w){n.enableZoom&&ke(w),n.enableRotate&&Le(w)}function ye(w){if(A.length==1)d.set(w.pageX,w.pageY);else{const Ee=he(w),pe=.5*(w.pageX+Ee.x),ne=.5*(w.pageY+Ee.y);d.set(pe,ne)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const se=n.domElement;W(2*Math.PI*m.x/se.clientHeight),Z(2*Math.PI*m.y/se.clientHeight),h.copy(d)}function Pe(w){if(A.length===1)_.set(w.pageX,w.pageY);else{const se=he(w),Ee=.5*(w.pageX+se.x),pe=.5*(w.pageY+se.y);_.set(Ee,pe)}p.subVectors(_,g).multiplyScalar(n.panSpeed),k(p.x,p.y),g.copy(_)}function me(w){const se=he(w),Ee=w.pageX-se.x,pe=w.pageY-se.y,ne=Math.sqrt(Ee*Ee+pe*pe);M.set(0,ne),E.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),X(E.y),f.copy(M);const L=(w.pageX+se.x)*.5,oe=(w.pageY+se.y)*.5;j(L,oe)}function et(w){n.enableZoom&&me(w),n.enablePan&&Pe(w)}function Oe(w){n.enableZoom&&me(w),n.enableRotate&&ye(w)}function T(w){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(w.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",I)),ze(w),w.pointerType==="touch"?Be(w):te(w))}function v(w){n.enabled!==!1&&(w.pointerType==="touch"?ee(w):J(w))}function I(w){Ne(w),A.length===0&&(n.domElement.releasePointerCapture(w.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",I)),n.dispatchEvent(qu),r=s.NONE}function te(w){let se;switch(w.button){case 0:se=n.mouseButtons.LEFT;break;case 1:se=n.mouseButtons.MIDDLE;break;case 2:se=n.mouseButtons.RIGHT;break;default:se=-1}switch(se){case Pi.DOLLY:if(n.enableZoom===!1)return;re(w),r=s.DOLLY;break;case Pi.ROTATE:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enablePan===!1)return;z(w),r=s.PAN}else{if(n.enableRotate===!1)return;ie(w),r=s.ROTATE}break;case Pi.PAN:if(w.ctrlKey||w.metaKey||w.shiftKey){if(n.enableRotate===!1)return;ie(w),r=s.ROTATE}else{if(n.enablePan===!1)return;z(w),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_a)}function J(w){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;q(w);break;case s.DOLLY:if(n.enableZoom===!1)return;ae(w);break;case s.PAN:if(n.enablePan===!1)return;ge(w);break}}function Q(w){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(w.preventDefault(),n.dispatchEvent(_a),_e(ve(w)),n.dispatchEvent(qu))}function ve(w){const se=w.deltaMode,Ee={clientX:w.clientX,clientY:w.clientY,deltaY:w.deltaY};switch(se){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return w.ctrlKey&&!x&&(Ee.deltaY*=10),Ee}function le(w){w.key==="Control"&&(x=!0,document.addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(w){w.key==="Control"&&(x=!1,document.removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Se(w){n.enabled===!1||n.enablePan===!1||Ae(w)}function Be(w){switch(Me(w),A.length){case 1:switch(n.touches.ONE){case Di.ROTATE:if(n.enableRotate===!1)return;Le(w),r=s.TOUCH_ROTATE;break;case Di.PAN:if(n.enablePan===!1)return;we(w),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(w),r=s.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ht(w),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(_a)}function ee(w){switch(Me(w),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(w),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Pe(w),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(w),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Oe(w),n.update();break;default:r=s.NONE}}function Ze(w){n.enabled!==!1&&w.preventDefault()}function ze(w){A.push(w.pointerId)}function Ne(w){delete G[w.pointerId];for(let se=0;se<A.length;se++)if(A[se]==w.pointerId){A.splice(se,1);return}}function Me(w){let se=G[w.pointerId];se===void 0&&(se=new De,G[w.pointerId]=se),se.set(w.pageX,w.pageY)}function he(w){const se=w.pointerId===A[0]?A[1]:A[0];return G[se]}n.domElement.addEventListener("contextmenu",Ze),n.domElement.addEventListener("pointerdown",T),n.domElement.addEventListener("pointercancel",I),n.domElement.addEventListener("wheel",Q,{passive:!1}),document.addEventListener("keydown",le,{passive:!0,capture:!0}),this.update()}}function Zu(i,e){if(e===qv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Na||e===Ed){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Na)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class mT extends Rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new ST(t)}),this.register(function(t){return new MT(t)}),this.register(function(t){return new TT(t)}),this.register(function(t){return new bT(t)}),this.register(function(t){return new ET(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new yT(t)}),this.register(function(t){return new RT(t)}),this.register(function(t){return new wT(t)}),this.register(function(t){return new _T(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new NT(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Xs.extractUrlBase(e);o=Xs.resolveURL(l,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Yd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Kd){try{o[qe.KHR_BINARY_GLTF]=new IT(e)}catch(h){s&&s(h);return}r=JSON.parse(o[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new jT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case qe.KHR_MATERIALS_UNLIT:o[h]=new vT;break;case qe.KHR_DRACO_MESH_COMPRESSION:o[h]=new OT(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:o[h]=new UT;break;case qe.KHR_MESH_QUANTIZATION:o[h]=new FT;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function gT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _T{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ue(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Et);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new qd(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new eT(u),l.distance=h;break;case"spot":l=new JM(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class vT{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return di}extendParams(e,t,n){const s=[];e.color=new Ue(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Et),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,ct))}return Promise.all(s)}}class ET{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}}class yT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ST{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ue(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Et)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ct)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class MT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class TT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ue().setRGB(a[0],a[1],a[2],Et),Promise.all(r)}}class bT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class AT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ue().setRGB(a[0],a[1],a[2],Et),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ct)),Promise.all(r)}}class wT{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class RT{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Nn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class CT{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class LT{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class PT{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class DT{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,d,s.mode,s.filter),m})})}else return null}}class NT{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==zt.TRIANGLES&&l.mode!==zt.TRIANGLE_STRIP&&l.mode!==zt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(const g of h){const _=new $e,p=new P,f=new fn,M=new P(1,1,1),E=new NM(g.geometry,g.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,y),c.SCALE&&M.fromBufferAttribute(c.SCALE,y),E.setMatrixAt(y,_.compose(p,f,M));for(const y in c)if(y==="_COLOR_0"){const C=c[y];E.instanceColor=new Ba(C.array,C.itemSize,C.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,c[y]);rt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),m.push(E)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Kd="glTF",Hs=12,Ju={JSON:1313821514,BIN:5130562};class IT{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Kd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Hs,r=new DataView(e,Hs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Ju.JSON){const l=new Uint8Array(e,Hs+o,a);this.content=n.decode(l)}else if(c===Ju.BIN){const l=Hs+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class OT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=ka[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ka[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],m=ss[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(m){for(const g in m.attributes){const _=m.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(m)},a,l,Et,d)})})}}class UT{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class FT{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Zd extends ir{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,_=g-l,p=-2*m+3*d,f=m-d,M=1-p,E=f-d+h;for(let y=0;y!==a;y++){const C=o[_+y+a],R=o[_+y+c]*u,A=o[g+y+a],G=o[g+y]*u;r[y]=M*C+E*R+p*A+f*G}return r}}const BT=new fn;class HT extends Zd{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return BT.fromArray(r).normalize().toArray(r),r}}const zt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qu={9728:vt,9729:Pt,9984:Da,9985:hd,9986:Xr,9987:Si},eh={33071:Gt,33648:Jr,10497:ps},va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ka={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},kn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kT={CUBICSPLINE:void 0,LINEAR:gs,STEP:Ys},Ea={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function VT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new pc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Pn})),i.DefaultMaterial}function oi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zT(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function GT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function WT(i){let e;const t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+xa(t.attributes):e=i.indices+":"+xa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+xa(i.targets[n]);return e}function xa(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Va(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function XT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const $T=new $e;class jT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new gT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new KM(this.options.manager):this.textureLoader=new iT(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return oi(r,a,s),zn(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=va[s.type],a=ss[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Lt(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=va[s.type],l=ss[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,m=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,p;if(m&&m!==h){const f=Math.floor(d/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let E=t.cache.get(M);E||(_=new l(a,f*m,s.count*m/u),E=new wM(_,m/u),t.cache.add(M,E)),p=new hc(E,c,d%m/u,g)}else a===null?_=new l(s.count*c):_=new l(a,d,s.count*c),p=new Lt(_,c,g);if(s.sparse!==void 0){const f=va.SCALAR,M=ss[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,C=new M(o[1],E,s.sparse.count*f),R=new l(o[2],y,s.sparse.count*c);a!==null&&(p=new Lt(p.array.slice(),p.itemSize,p.normalized));for(let A=0,G=C.length;A<G;A++){const x=C[A];if(p.setX(x,R[A*c]),c>=2&&p.setY(x,R[A*c+1]),c>=3&&p.setZ(x,R[A*c+2]),c>=4&&p.setW(x,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Qu[d.magFilter]||Pt,u.minFilter=Qu[d.minFilter]||Si,u.wrapS=eh[d.wrapS]||ps,u.wrapT=eh[d.wrapT]||ps,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new yt(_);p.needsUpdate=!0,d(p)}),t.load(Xs.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||XT(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Xd,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Wd,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return pc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const h=s[qe.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ue(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Et),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,ct)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=an);const u=r.alphaMode||Ea.OPAQUE;if(u===Ea.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Ea.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==di&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==di&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==di){const h=r.emissiveFactor;a.emissive=new Ue().setRGB(h[0],h[1],h[2],Et)}return r.emissiveTexture!==void 0&&o!==di&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,ct)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),zn(h,r),t.associations.set(h,{materials:e}),r.extensions&&oi(s,h,r),h})}createUniqueName(e){const t=Qe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return th(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=WT(l),h=s[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=th(new mn,l,t),s[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?VT(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const _=u[m],p=o[m];let f;const M=l[m];if(p.mode===zt.TRIANGLES||p.mode===zt.TRIANGLE_STRIP||p.mode===zt.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new CM(_,M):new $t(_,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===zt.TRIANGLE_STRIP?f.geometry=Zu(f.geometry,Ed):p.mode===zt.TRIANGLE_FAN&&(f.geometry=Zu(f.geometry,Na));else if(p.mode===zt.LINES)f=new IM(_,M);else if(p.mode===zt.LINE_STRIP)f=new fc(_,M);else if(p.mode===zt.LINE_LOOP)f=new OM(_,M);else if(p.mode===zt.POINTS)f=new UM(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&GT(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),zn(f,r),p.extensions&&oi(s,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&oi(s,h[0],r),h[0];const d=new fi;r.extensions&&oi(s,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new wt(Md.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new lc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new dc(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const m=s.channels[h],g=s.samplers[m.sampler],_=m.target,p=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],g=h[2],_=h[3],p=h[4],f=[];for(let M=0,E=d.length;M<E;M++){const y=d[M],C=m[M],R=g[M],A=_[M],G=p[M];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const x=n._createAnimationTracks(y,C,R,A,G);if(x)for(let b=0;b<x.length;b++)f.push(x[b])}return new GM(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,$T)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Gd:l.length>1?u=new fi:l.length===1?u=l[0]:u=new rt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),zn(u,r),r.extensions&&oi(n,u,r),r.matrix!==void 0){const h=new $e;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new fi;n.name&&(r.name=s.createUniqueName(n.name)),zn(r,n),n.extensions&&oi(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,m]of s.associations)(d instanceof hn||d instanceof yt)&&h.set(d,m);return u.traverse(d=>{const m=s.associations.get(d);m!=null&&h.set(d,m)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];kn[r.path]===kn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(kn[r.path]){case kn.weights:l=Es;break;case kn.rotation:l=bi;break;case kn.position:case kn.scale:l=xs;break;default:switch(n.itemSize){case 1:l=Es;break;case 2:case 3:default:l=xs;break}break}const u=s.interpolation!==void 0?kT[s.interpolation]:gs,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+kn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Va(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof bi?HT:Zd;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YT(i,e,t){const n=e.attributes,s=new nn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),a.normalized){const u=Va(ss[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,c=new P;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const _=Va(ss[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new pn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function th(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=ka[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Je.workingColorSpace!==Et&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),zn(i,e),YT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?zT(i,e.targets,t):i})}class qT{constructor(e){this.parent=e}getHTML(e){const t=e.foodCost>0?`<span class="badge bg-danger ms-2">+${e.foodCost} к еде</span>`:"",n=e.model3d?`
            <hr>
            <p class="text-muted mb-1" style="font-size:0.85em;">3D модель животного</p>
            <canvas id="model-viewer-canvas" class="model-viewer-canvas"></canvas>
            <p class="text-muted mt-1 text-center" style="font-size:0.72em;">
                Перетащите для вращения · прокрутите для масштаба
            </p>
        `:"";return`
            <div class="card mx-auto" style="max-width: 480px;">
                <img src="${e.img}"
                     class="detail-img"
                     alt="${e.name}">
                <div class="card-body">
                    <h4 class="card-title">
                        ${e.name} ${t}
                    </h4>
                    <p class="text-muted mb-1" style="font-size: 0.9em;">
                        ${e.nameEn} &nbsp;·&nbsp; ${e.type}
                    </p>
                    <hr>
                    <p class="card-text">${e.effect}</p>
                    ${n}
                </div>
            </div>
        `}initViewer(e){if(!e.model3d)return;const t=document.getElementById("model-viewer-canvas");if(!t)return;const n=new zd({canvas:t,antialias:!0});n.setClearColor(16111546,1),n.setSize(t.clientWidth,t.clientHeight,!1);const s=new AM,r=new wt(50,t.clientWidth/t.clientHeight,.1,1e3);r.position.set(0,1.5,4);const o=new pT(r,t);o.enableDamping=!0,o.target.set(0,.8,0),o.update(),s.add(new nT(16777215,1.2));const a=new qd(16777215,.8);a.position.set(3,8,5),s.add(a),new mT().load(e.model3d,u=>{const h=u.scene,m=new nn().setFromObject(h).getSize(new P),g=Math.max(m.x,m.y,m.z);g>0&&h.scale.multiplyScalar(2.5/g);const _=new nn().setFromObject(h),p=_.getCenter(new P);h.position.x-=p.x,h.position.z-=p.z,h.position.y-=_.min.y,s.add(h)});function l(){requestAnimationFrame(l),o.update(),n.render(s,r)}l()}render(e){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e)),this.initViewer(e)}}class KT{async _request(e,t={}){const n=await fetch(e,t);if(!n.ok){const s=await n.text();throw new Error(`HTTP ${n.status}: ${s}`)}return n.status===204?null:n.json()}async get(e){return this._request(e,{method:"GET"})}async delete(e){return this._request(e,{method:"DELETE"})}async post(e,t){return this._request(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}async patch(e,t){return this._request(e,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}}const vi=new KT;class ZT{constructor(){this.baseUrl="http://localhost:3000"}getEvolutionCards(e){const t=`${this.baseUrl}/cards`;return e?`${t}?name=${encodeURIComponent(e)}`:t}getEvolutionCardById(e){return`${this.baseUrl}/cards/${e}`}createEvolutionCard(){return`${this.baseUrl}/cards`}removeEvolutionCardById(e){return`${this.baseUrl}/cards/${e}`}updateEvolutionCardById(e){return`${this.baseUrl}/cards/${e}`}}const Ei=new ZT,JT={1:{img:"assets/cards_images/1.png",matchLog:"11011101",model3d:"assets/models/mouse.glb"},2:{img:"assets/cards_images/7.png",matchLog:"1111100",model3d:"assets/models/Dinosaur.glb"},3:{img:"assets/cards_images/3.png",matchLog:"10101011",model3d:"assets/models/black-bear.glb"},4:{img:"assets/cards_images/2.png",matchLog:"001110",model3d:"assets/models/worm.glb"},5:{img:"assets/cards_images/9.png",matchLog:"110110",model3d:"assets/models/Ant.glb"},6:{img:"assets/cards_images/6.png",matchLog:"11111011",model3d:"assets/models/salamander.glb"},7:{img:"assets/cards_images/4.png",matchLog:"0110110",model3d:"assets/models/salamander.glb"},8:{img:"assets/cards_images/8.png",matchLog:"1001110",model3d:"assets/models/Wolf.glb"},9:{img:"assets/cards_images/5.png",matchLog:"111000111",model3d:"assets/models/Crocodile.glb"}},QT={img:"assets/cards_images/1.png",matchLog:"",model3d:""};function Jd(i){const e=JT[i.id]||QT;return{...i,...e}}class eb{constructor(e,t,n){this.parent=e,this.cardId=t,this.onBack=n,this.card=null}get pageRoot(){return document.getElementById("detail-page")}getHTML(){return'<div id="detail-page" class="container py-4"></div>'}async loadEvolutionCard(){try{const e=await vi.get(Ei.getEvolutionCardById(this.cardId));this.card=Jd(e),this.renderCard()}catch(e){console.error("Карточка не найдена:",e),this.pageRoot.insertAdjacentHTML("beforeend",`
                <div class="alert alert-danger">Карточка не найдена</div>
            `)}}async clickDelete(){try{await vi.delete(Ei.removeEvolutionCardById(this.cardId)),this.onBack()}catch(e){console.error("Ошибка удаления карточки:",e)}}renderCard(){new qT(this.pageRoot).render(this.card),this.pageRoot.insertAdjacentHTML("beforeend",`
            <div class="text-center mt-3">
                <button id="btn-detail-delete" class="btn btn-danger">Удалить карточку</button>
            </div>
        `),document.getElementById("btn-detail-delete").addEventListener("click",()=>this.clickDelete())}render(){this.parent.innerHTML="",new nc(this.parent).render(()=>this.onBack()),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.loadEvolutionCard()}}class tb{constructor(e){this.parent=e}getHTML(e,t){const n=c=>c==null?"":String(c),s=e.isPaired?"checked":"",r=e.type==="Свойство"?"selected":"",o=e.type==="Взаимодействие"?"selected":"",a=t?`
                <div class="d-flex align-items-center gap-2 mt-3">
                    <button type="button" id="btn-save" class="btn btn-primary">Сохранить</button>
                    <span id="save-error" class="text-danger" style="font-size:0.9em;"></span>
                </div>
            `:`
                <p class="text-muted" style="font-size:0.85em;">
                    Кнопка «Сохранить» появится в ЛР №6.
                </p>
            `;return`
            <form id="card-edit-form" class="card p-4 mx-auto" style="max-width: 560px;" onsubmit="return false;">
                <div class="mb-3">
                    <label class="form-label">Название (RU)</label>
                    <input type="text" name="name"     class="form-control" value="${n(e.name)}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Название (EN)</label>
                    <input type="text" name="nameEn"   class="form-control" value="${n(e.nameEn)}">
                </div>
                <div class="mb-3">
                    <label class="form-label">Тип</label>
                    <select name="type" class="form-select">
                        <option value="Свойство"        ${r}>Свойство</option>
                        <option value="Взаимодействие"  ${o}>Взаимодействие</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label class="form-label">Стоимость еды</label>
                    <input type="number" name="foodCost" class="form-control" value="${n(e.foodCost)}" min="0">
                </div>
                <div class="form-check mb-3">
                    <input type="checkbox" name="isPaired" id="is-paired" class="form-check-input" ${s}>
                    <label class="form-check-label" for="is-paired">Парная карточка</label>
                </div>
                <div class="mb-3">
                    <label class="form-label">Эффект</label>
                    <textarea name="effect" class="form-control" rows="3">${n(e.effect)}</textarea>
                </div>
                ${a}
            </form>
        `}render(e,t=!1){this.parent.insertAdjacentHTML("beforeend",this.getHTML(e||{},t))}}class nh{constructor(e,t,n){this.parent=e,this.cardId=t,this.onBack=n,this.card=null}get pageRoot(){return document.getElementById("edit-page")}getHTML(){return`
            <div id="edit-page" class="container py-4">
                <h3 class="mb-3">${this.cardId?"Редактирование карточки":"Добавление карточки"}</h3>
            </div>
        `}async loadEvolutionCard(){if(!this.cardId){this.renderForm({});return}try{this.card=await vi.get(Ei.getEvolutionCardById(this.cardId)),this.renderForm(this.card)}catch(e){console.error("Карточка не найдена:",e),this.pageRoot.insertAdjacentHTML("beforeend",`
                <div class="alert alert-danger">Карточка не найдена</div>
            `)}}collectFormData(){var n,s,r;const e=document.getElementById("card-edit-form"),t=new FormData(e);return{name:(n=t.get("name"))==null?void 0:n.trim(),nameEn:(s=t.get("nameEn"))==null?void 0:s.trim(),type:t.get("type"),foodCost:parseInt(t.get("foodCost"))||0,isPaired:t.get("isPaired")==="on",effect:(r=t.get("effect"))==null?void 0:r.trim()}}async clickSave(){const e=this.collectFormData();try{this.cardId?await vi.patch(Ei.updateEvolutionCardById(this.cardId),e):await vi.post(Ei.createEvolutionCard(),e),this.onBack()}catch(t){console.error("Ошибка сохранения карточки:",t);const n=document.getElementById("save-error");n&&(n.textContent=`Ошибка: ${t.message}`)}}renderForm(e){new tb(this.pageRoot).render(e,!0),document.getElementById("btn-save").addEventListener("click",()=>this.clickSave())}render(){this.parent.innerHTML="",new nc(this.parent).render(()=>this.onBack()),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.loadEvolutionCard()}}class nb{constructor(e){this.parent=e,this.activeFilter="Все",this.nameQuery="",this.cards=[]}get pageRoot(){return document.getElementById("main-page")}getHTML(){return'<div id="main-page" class="container-fluid px-4 py-2"></div>'}getFilteredCards(){return this.activeFilter==="Все"?this.cards:this.cards.filter(e=>e.type===this.activeFilter)}async loadEvolutionCards(){try{const e=await vi.get(Ei.getEvolutionCards(this.nameQuery));this.cards=Array.isArray(e)?e.map(Jd):[]}catch(e){console.error("Не удалось получить карточки:",e),this.cards=[]}this.renderCardsList()}clickDetails(e){const t=parseInt(e.target.dataset.id);new eb(this.parent,t,()=>this.render()).render()}clickEdit(e){const t=parseInt(e.target.dataset.id);new nh(this.parent,t,()=>this.render()).render()}async clickDelete(e){const t=parseInt(e.target.dataset.id);try{await vi.delete(Ei.removeEvolutionCardById(t)),await this.loadEvolutionCards()}catch(n){console.error("Ошибка удаления карточки:",n)}}clickAdd(){new nh(this.parent,null,()=>this.render()).render()}clickFilter(e){this.activeFilter=e,this.renderCardsList()}onNameQueryChange(e){this.nameQuery=e.trim(),this.loadEvolutionCards()}renderCardsList(){const e=document.getElementById("cards-list");e&&(e.innerHTML="",this.getFilteredCards().forEach(t=>{new sv(e).render(t,this.clickDetails.bind(this),this.clickDelete.bind(this),this.clickEdit.bind(this))}))}render(){this.parent.innerHTML="",new nc(this.parent).render(()=>{this.activeFilter="Все",this.nameQuery="",this.render()}),this.parent.insertAdjacentHTML("beforeend",this.getHTML()),this.pageRoot.insertAdjacentHTML("beforeend",`
            <div class="mb-3">
                <input id="card-name-query"
                       type="text"
                       class="form-control"
                       placeholder="Поиск по названию карточки..."
                       value="${this.nameQuery}"
                       style="max-width: 360px;">
            </div>
        `),document.getElementById("card-name-query").addEventListener("input",n=>this.onNameQueryChange(n.target.value)),new tv(this.pageRoot).render(this.activeFilter,n=>this.clickFilter(n)),this.pageRoot.insertAdjacentHTML("beforeend",`
            <button id="btn-add" class="btn btn-success mb-3">+ Добавить карту</button>
        `),document.getElementById("btn-add").addEventListener("click",()=>this.clickAdd()),this.pageRoot.insertAdjacentHTML("beforeend",'<div id="cards-list" class="cards-grid"></div>'),this.loadEvolutionCards()}}const ib=document.getElementById("root"),sb=new nb(ib);sb.render();
