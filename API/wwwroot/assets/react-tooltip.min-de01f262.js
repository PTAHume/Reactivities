import{r as m,f as it}from"./index-0327f46b.js";import{y as se}from"./index-8de53457.js";const gt=Math.min,ut=Math.max,Ut=Math.round,Jt=Math.floor,lt=t=>({x:t,y:t}),Ie={left:"right",right:"left",bottom:"top",top:"bottom"},Me={start:"end",end:"start"};function ce(t,e,o){return ut(t,gt(e,o))}function $t(t,e){return typeof t=="function"?t(e):t}function ft(t){return t.split("-")[0]}function Bt(t){return t.split("-")[1]}function Re(t){return t==="x"?"y":"x"}function ue(t){return t==="y"?"height":"width"}function ee(t){return["top","bottom"].includes(ft(t))?"y":"x"}function fe(t){return Re(ee(t))}function ze(t,e,o){o===void 0&&(o=!1);const n=Bt(t),r=fe(t),i=ue(r);let l=r==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=Zt(l)),[l,Zt(l)]}function je(t){const e=Zt(t);return[ae(t),e,ae(e)]}function ae(t){return t.replace(/start|end/g,e=>Me[e])}function qe(t,e,o){const n=["left","right"],r=["right","left"],i=["top","bottom"],l=["bottom","top"];switch(t){case"top":case"bottom":return o?e?r:n:e?n:r;case"left":case"right":return e?i:l;default:return[]}}function Ve(t,e,o,n){const r=Bt(t);let i=qe(ft(t),o==="start",n);return r&&(i=i.map(l=>l+"-"+r),e&&(i=i.concat(i.map(ae)))),i}function Zt(t){return t.replace(/left|right|bottom|top/g,e=>Ie[e])}function Ke(t){return{top:0,right:0,bottom:0,left:0,...t}}function Te(t){return typeof t!="number"?Ke(t):{top:t,right:t,bottom:t,left:t}}function Gt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ve(t,e,o){let{reference:n,floating:r}=t;const i=ee(e),l=fe(e),s=ue(l),c=ft(e),a=i==="y",y=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2,v=n[s]/2-r[s]/2;let u;switch(c){case"top":u={x:y,y:n.y-r.height};break;case"bottom":u={x:y,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:p};break;case"left":u={x:n.x-r.width,y:p};break;default:u={x:n.x,y:n.y}}switch(Bt(e)){case"start":u[l]-=v*(o&&a?-1:1);break;case"end":u[l]+=v*(o&&a?-1:1);break}return u}const Ye=async(t,e,o)=>{const{placement:n="bottom",strategy:r="absolute",middleware:i=[],platform:l}=o,s=i.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(e));let a=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:y,y:p}=ve(a,n,c),v=n,u={},h=0;for(let w=0;w<s.length;w++){const{name:x,fn:g}=s[w],{x:S,y:_,data:O,reset:R}=await g({x:y,y:p,initialPlacement:n,placement:v,strategy:r,middlewareData:u,rects:a,platform:l,elements:{reference:t,floating:e}});if(y=S??y,p=_??p,u={...u,[x]:{...u[x],...O}},R&&h<=50){h++,typeof R=="object"&&(R.placement&&(v=R.placement),R.rects&&(a=R.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:r}):R.rects),{x:y,y:p}=ve(a,v,c)),w=-1;continue}}return{x:y,y:p,placement:v,strategy:r,middlewareData:u}};async function Oe(t,e){var o;e===void 0&&(e={});const{x:n,y:r,platform:i,rects:l,elements:s,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:y="viewport",elementContext:p="floating",altBoundary:v=!1,padding:u=0}=$t(e,t),h=Te(u),x=s[v?p==="floating"?"reference":"floating":p],g=Gt(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(x)))==null||o?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(s.floating)),boundary:a,rootBoundary:y,strategy:c})),S=p==="floating"?{...l.floating,x:n,y:r}:l.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(s.floating)),O=await(i.isElement==null?void 0:i.isElement(_))?await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1}:{x:1,y:1},R=Gt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({rect:S,offsetParent:_,strategy:c}):S);return{top:(g.top-R.top+h.top)/O.y,bottom:(R.bottom-g.bottom+h.bottom)/O.y,left:(g.left-R.left+h.left)/O.x,right:(R.right-g.right+h.right)/O.x}}const Xe=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:r,rects:i,platform:l,elements:s,middlewareData:c}=e,{element:a,padding:y=0}=$t(t,e)||{};if(a==null)return{};const p=Te(y),v={x:o,y:n},u=fe(r),h=ue(u),w=await l.getDimensions(a),x=u==="y",g=x?"top":"left",S=x?"bottom":"right",_=x?"clientHeight":"clientWidth",O=i.reference[h]+i.reference[u]-v[u]-i.floating[h],R=v[u]-i.reference[u],k=await(l.getOffsetParent==null?void 0:l.getOffsetParent(a));let N=k?k[_]:0;(!N||!await(l.isElement==null?void 0:l.isElement(k)))&&(N=s.floating[_]||i.floating[h]);const j=O/2-R/2,Y=N/2-w[h]/2-1,D=gt(p[g],Y),I=gt(p[S],Y),C=D,W=N-w[h]-I,A=N/2-w[h]/2+j,L=ce(C,A,W),$=!c.arrow&&Bt(r)!=null&&A!=L&&i.reference[h]/2-(A<C?D:I)-w[h]/2<0,F=$?A<C?A-C:A-W:0;return{[u]:v[u]+F,data:{[u]:L,centerOffset:A-L-F,...$&&{alignmentOffset:F}},reset:$}}}),Je=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:r,middlewareData:i,rects:l,initialPlacement:s,platform:c,elements:a}=e,{mainAxis:y=!0,crossAxis:p=!0,fallbackPlacements:v,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:w=!0,...x}=$t(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};const g=ft(r),S=ft(s)===s,_=await(c.isRTL==null?void 0:c.isRTL(a.floating)),O=v||(S||!w?[Zt(s)]:je(s));!v&&h!=="none"&&O.push(...Ve(s,w,h,_));const R=[s,...O],k=await Oe(e,x),N=[];let j=((n=i.flip)==null?void 0:n.overflows)||[];if(y&&N.push(k[g]),p){const C=ze(r,l,_);N.push(k[C[0]],k[C[1]])}if(j=[...j,{placement:r,overflows:N}],!N.every(C=>C<=0)){var Y,D;const C=(((Y=i.flip)==null?void 0:Y.index)||0)+1,W=R[C];if(W)return{data:{index:C,overflows:j},reset:{placement:W}};let A=(D=j.filter(L=>L.overflows[0]<=0).sort((L,$)=>L.overflows[1]-$.overflows[1])[0])==null?void 0:D.placement;if(!A)switch(u){case"bestFit":{var I;const L=(I=j.map($=>[$.placement,$.overflows.filter(F=>F>0).reduce((F,pt)=>F+pt,0)]).sort(($,F)=>$[1]-F[1])[0])==null?void 0:I[0];L&&(A=L);break}case"initialPlacement":A=s;break}if(r!==A)return{reset:{placement:A}}}return{}}}};async function Qe(t,e){const{placement:o,platform:n,elements:r}=t,i=await(n.isRTL==null?void 0:n.isRTL(r.floating)),l=ft(o),s=Bt(o),c=ee(o)==="y",a=["left","top"].includes(l)?-1:1,y=i&&c?-1:1,p=$t(e,t);let{mainAxis:v,crossAxis:u,alignmentAxis:h}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return s&&typeof h=="number"&&(u=s==="end"?h*-1:h),c?{x:u*y,y:v*a}:{x:v*a,y:u*y}}const Ue=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,r=await Qe(e,t);return{x:o+r.x,y:n+r.y,data:r}}}},Ze=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:r}=e,{mainAxis:i=!0,crossAxis:l=!1,limiter:s={fn:x=>{let{x:g,y:S}=x;return{x:g,y:S}}},...c}=$t(t,e),a={x:o,y:n},y=await Oe(e,c),p=ee(ft(r)),v=Re(p);let u=a[v],h=a[p];if(i){const x=v==="y"?"top":"left",g=v==="y"?"bottom":"right",S=u+y[x],_=u-y[g];u=ce(S,u,_)}if(l){const x=p==="y"?"top":"left",g=p==="y"?"bottom":"right",S=h+y[x],_=h-y[g];h=ce(S,h,_)}const w=s.fn({...e,[v]:u,[p]:h});return{...w,data:{x:w.x-o,y:w.y-n}}}}};function st(t){return Ce(t)?(t.nodeName||"").toLowerCase():"#document"}function z(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function tt(t){var e;return(e=(Ce(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Ce(t){return t instanceof Node||t instanceof z(t).Node}function G(t){return t instanceof Element||t instanceof z(t).Element}function Q(t){return t instanceof HTMLElement||t instanceof z(t).HTMLElement}function we(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof z(t).ShadowRoot}function Wt(t){const{overflow:e,overflowX:o,overflowY:n,display:r}=V(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(r)}function Ge(t){return["table","td","th"].includes(st(t))}function de(t){const e=pe(),o=V(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function to(t){let e=bt(t);for(;Q(e)&&!oe(e);){if(de(e))return e;e=bt(e)}return null}function pe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function oe(t){return["html","body","#document"].includes(st(t))}function V(t){return z(t).getComputedStyle(t)}function ne(t){return G(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function bt(t){if(st(t)==="html")return t;const e=t.assignedSlot||t.parentNode||we(t)&&t.host||tt(t);return we(e)?e.host:e}function Le(t){const e=bt(t);return oe(e)?t.ownerDocument?t.ownerDocument.body:t.body:Q(e)&&Wt(e)?e:Le(e)}function Pt(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const r=Le(t),i=r===((n=t.ownerDocument)==null?void 0:n.body),l=z(r);return i?e.concat(l,l.visualViewport||[],Wt(r)?r:[],l.frameElement&&o?Pt(l.frameElement):[]):e.concat(r,Pt(r,[],o))}function ke(t){const e=V(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const r=Q(t),i=r?t.offsetWidth:o,l=r?t.offsetHeight:n,s=Ut(o)!==i||Ut(n)!==l;return s&&(o=i,n=l),{width:o,height:n,$:s}}function me(t){return G(t)?t:t.contextElement}function wt(t){const e=me(t);if(!Q(e))return lt(1);const o=e.getBoundingClientRect(),{width:n,height:r,$:i}=ke(e);let l=(i?Ut(o.width):o.width)/n,s=(i?Ut(o.height):o.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!s||!Number.isFinite(s))&&(s=1),{x:l,y:s}}const eo=lt(0);function Ne(t){const e=z(t);return!pe()||!e.visualViewport?eo:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function oo(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==z(t)?!1:e}function dt(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),i=me(t);let l=lt(1);e&&(n?G(n)&&(l=wt(n)):l=wt(t));const s=oo(i,o,n)?Ne(i):lt(0);let c=(r.left+s.x)/l.x,a=(r.top+s.y)/l.y,y=r.width/l.x,p=r.height/l.y;if(i){const v=z(i),u=n&&G(n)?z(n):n;let h=v.frameElement;for(;h&&n&&u!==v;){const w=wt(h),x=h.getBoundingClientRect(),g=V(h),S=x.left+(h.clientLeft+parseFloat(g.paddingLeft))*w.x,_=x.top+(h.clientTop+parseFloat(g.paddingTop))*w.y;c*=w.x,a*=w.y,y*=w.x,p*=w.y,c+=S,a+=_,h=z(h).frameElement}}return Gt({width:y,height:p,x:c,y:a})}function no(t){let{rect:e,offsetParent:o,strategy:n}=t;const r=Q(o),i=tt(o);if(o===i)return e;let l={scrollLeft:0,scrollTop:0},s=lt(1);const c=lt(0);if((r||!r&&n!=="fixed")&&((st(o)!=="body"||Wt(i))&&(l=ne(o)),Q(o))){const a=dt(o);s=wt(o),c.x=a.x+o.clientLeft,c.y=a.y+o.clientTop}return{width:e.width*s.x,height:e.height*s.y,x:e.x*s.x-l.scrollLeft*s.x+c.x,y:e.y*s.y-l.scrollTop*s.y+c.y}}function ro(t){return Array.from(t.getClientRects())}function De(t){return dt(tt(t)).left+ne(t).scrollLeft}function io(t){const e=tt(t),o=ne(t),n=t.ownerDocument.body,r=ut(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=ut(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let l=-o.scrollLeft+De(t);const s=-o.scrollTop;return V(n).direction==="rtl"&&(l+=ut(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:l,y:s}}function lo(t,e){const o=z(t),n=tt(t),r=o.visualViewport;let i=n.clientWidth,l=n.clientHeight,s=0,c=0;if(r){i=r.width,l=r.height;const a=pe();(!a||a&&e==="fixed")&&(s=r.offsetLeft,c=r.offsetTop)}return{width:i,height:l,x:s,y:c}}function so(t,e){const o=dt(t,!0,e==="fixed"),n=o.top+t.clientTop,r=o.left+t.clientLeft,i=Q(t)?wt(t):lt(1),l=t.clientWidth*i.x,s=t.clientHeight*i.y,c=r*i.x,a=n*i.y;return{width:l,height:s,x:c,y:a}}function ge(t,e,o){let n;if(e==="viewport")n=lo(t,o);else if(e==="document")n=io(tt(t));else if(G(e))n=so(e,o);else{const r=Ne(t);n={...e,x:e.x-r.x,y:e.y-r.y}}return Gt(n)}function Pe(t,e){const o=bt(t);return o===e||!G(o)||oe(o)?!1:V(o).position==="fixed"||Pe(o,e)}function co(t,e){const o=e.get(t);if(o)return o;let n=Pt(t,[],!1).filter(s=>G(s)&&st(s)!=="body"),r=null;const i=V(t).position==="fixed";let l=i?bt(t):t;for(;G(l)&&!oe(l);){const s=V(l),c=de(l);!c&&s.position==="fixed"&&(r=null),(i?!c&&!r:!c&&s.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Wt(l)&&!c&&Pe(t,l))?n=n.filter(y=>y!==l):r=s,l=bt(l)}return e.set(t,n),n}function ao(t){let{element:e,boundary:o,rootBoundary:n,strategy:r}=t;const l=[...o==="clippingAncestors"?co(e,this._c):[].concat(o),n],s=l[0],c=l.reduce((a,y)=>{const p=ge(e,y,r);return a.top=ut(p.top,a.top),a.right=gt(p.right,a.right),a.bottom=gt(p.bottom,a.bottom),a.left=ut(p.left,a.left),a},ge(e,s,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function uo(t){return ke(t)}function fo(t,e,o){const n=Q(e),r=tt(e),i=o==="fixed",l=dt(t,!0,i,e);let s={scrollLeft:0,scrollTop:0};const c=lt(0);if(n||!n&&!i)if((st(e)!=="body"||Wt(r))&&(s=ne(e)),n){const a=dt(e,!0,i,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else r&&(c.x=De(r));return{x:l.left+s.scrollLeft-c.x,y:l.top+s.scrollTop-c.y,width:l.width,height:l.height}}function be(t,e){return!Q(t)||V(t).position==="fixed"?null:e?e(t):t.offsetParent}function $e(t,e){const o=z(t);if(!Q(t))return o;let n=be(t,e);for(;n&&Ge(n)&&V(n).position==="static";)n=be(n,e);return n&&(st(n)==="html"||st(n)==="body"&&V(n).position==="static"&&!de(n))?o:n||to(t)||o}const po=async function(t){let{reference:e,floating:o,strategy:n}=t;const r=this.getOffsetParent||$e,i=this.getDimensions;return{reference:fo(e,await r(o),n),floating:{x:0,y:0,...await i(o)}}};function mo(t){return V(t).direction==="rtl"}const ho={convertOffsetParentRelativeRectToViewportRelativeRect:no,getDocumentElement:tt,getClippingRect:ao,getOffsetParent:$e,getElementRects:po,getClientRects:ro,getDimensions:uo,getScale:wt,isElement:G,isRTL:mo};function yo(t,e){let o=null,n;const r=tt(t);function i(){clearTimeout(n),o&&o.disconnect(),o=null}function l(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),i();const{left:a,top:y,width:p,height:v}=t.getBoundingClientRect();if(s||e(),!p||!v)return;const u=Jt(y),h=Jt(r.clientWidth-(a+p)),w=Jt(r.clientHeight-(y+v)),x=Jt(a),S={rootMargin:-u+"px "+-h+"px "+-w+"px "+-x+"px",threshold:ut(0,gt(1,c))||1};let _=!0;function O(R){const k=R[0].intersectionRatio;if(k!==c){if(!_)return l();k?l(!1,k):n=setTimeout(()=>{l(!1,1e-7)},100)}_=!1}try{o=new IntersectionObserver(O,{...S,root:r.ownerDocument})}catch{o=new IntersectionObserver(O,S)}o.observe(t)}return l(!0),i}function vo(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:c=!1}=n,a=me(t),y=r||i?[...a?Pt(a):[],...Pt(e)]:[];y.forEach(g=>{r&&g.addEventListener("scroll",o,{passive:!0}),i&&g.addEventListener("resize",o)});const p=a&&s?yo(a,o):null;let v=-1,u=null;l&&(u=new ResizeObserver(g=>{let[S]=g;S&&S.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{u&&u.observe(e)})),o()}),a&&!c&&u.observe(a),u.observe(e));let h,w=c?dt(t):null;c&&x();function x(){const g=dt(t);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&o(),w=g,h=requestAnimationFrame(x)}return o(),()=>{y.forEach(g=>{r&&g.removeEventListener("scroll",o),i&&g.removeEventListener("resize",o)}),p&&p(),u&&u.disconnect(),u=null,c&&cancelAnimationFrame(h)}}const xe=(t,e,o)=>{const n=new Map,r={platform:ho,...o},i={...r.platform,_c:n};return Ye(t,e,{...r,platform:i})};/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/const Be="react-tooltip-core-styles",We="react-tooltip-base-styles",te={core:!1,base:!1};function Ee({css:t,id:e=We,type:o="base",ref:n}){var r,i;if(!t||typeof document>"u"||te[o]||o==="core"&&typeof process<"u"&&(!((r=process==null?void 0:process.env)===null||r===void 0)&&r.REACT_TOOLTIP_DISABLE_CORE_STYLES)||o!=="base"&&typeof process<"u"&&(!((i=process==null?void 0:process.env)===null||i===void 0)&&i.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;o==="core"&&(e=Be),n||(n={});const{insertAt:l}=n;if(document.getElementById(e))return void console.warn(`[react-tooltip] Element with id '${e}' already exists. Call \`removeStyle()\` first`);const s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=e,c.type="text/css",l==="top"&&s.firstChild?s.insertBefore(c,s.firstChild):s.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t)),te[o]=!0}function ko({type:t="base",id:e=We}={}){if(!te[t])return;t==="core"&&(e=Be);const o=document.getElementById(e);(o==null?void 0:o.tagName)==="style"?o==null||o.remove():console.warn(`[react-tooltip] Failed to remove 'style' element with id '${e}'. Call \`injectStyle()\` first`),te[t]=!1}const Se=(t,e,o)=>{let n=null;return function(...r){const i=()=>{n=null,o||t.apply(this,r)};o&&!n&&(t.apply(this,r),n=setTimeout(i,e)),o||(n&&clearTimeout(n),n=setTimeout(i,e))}},Qt="DEFAULT_TOOLTIP_ID",wo={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Fe=m.createContext({getTooltipData:()=>wo}),No=({children:t})=>{const[e,o]=m.useState({[Qt]:new Set}),[n,r]=m.useState({[Qt]:{current:null}}),i=(a,...y)=>{o(p=>{var v;const u=(v=p[a])!==null&&v!==void 0?v:new Set;return y.forEach(h=>u.add(h)),{...p,[a]:new Set(u)}})},l=(a,...y)=>{o(p=>{const v=p[a];return v?(y.forEach(u=>v.delete(u)),{...p}):p})},s=m.useCallback((a=Qt)=>{var y,p;return{anchorRefs:(y=e[a])!==null&&y!==void 0?y:new Set,activeAnchor:(p=n[a])!==null&&p!==void 0?p:{current:null},attach:(...v)=>i(a,...v),detach:(...v)=>l(a,...v),setActiveAnchor:v=>((u,h)=>{r(w=>{var x;return((x=w[u])===null||x===void 0?void 0:x.current)===h.current?w:{...w,[u]:h}})})(a,v)}},[e,n,i,l]),c=m.useMemo(()=>({getTooltipData:s}),[s]);return it.createElement(Fe.Provider,{value:c},t)};function he(t=Qt){return m.useContext(Fe).getTooltipData(t)}const Do=({tooltipId:t,children:e,className:o,place:n,content:r,html:i,variant:l,offset:s,wrapper:c,events:a,positionStrategy:y,delayShow:p,delayHide:v})=>{const{attach:u,detach:h}=he(t),w=m.useRef(null);return m.useEffect(()=>(u(w),()=>{h(w)}),[]),it.createElement("span",{ref:w,className:se("react-tooltip-wrapper",o),"data-tooltip-place":n,"data-tooltip-content":r,"data-tooltip-html":i,"data-tooltip-variant":l,"data-tooltip-offset":s,"data-tooltip-wrapper":c,"data-tooltip-events":a,"data-tooltip-position-strategy":y,"data-tooltip-delay-show":p,"data-tooltip-delay-hide":v},e)},go=typeof window<"u"?m.useLayoutEffect:m.useEffect,bo=t=>{if(!(t instanceof HTMLElement||t instanceof SVGElement))return!1;const e=getComputedStyle(t);return["overflow","overflow-x","overflow-y"].some(o=>{const n=e.getPropertyValue(o);return n==="auto"||n==="scroll"})},_e=t=>{if(!t)return null;let e=t.parentElement;for(;e;){if(bo(e))return e;e=e.parentElement}return document.scrollingElement||document.documentElement},Ae=async({elementReference:t=null,tooltipReference:e=null,tooltipArrowReference:o=null,place:n="top",offset:r=10,strategy:i="absolute",middlewares:l=[Ue(Number(r)),Je(),Ze({padding:5})],border:s})=>{if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};if(e===null)return{tooltipStyles:{},tooltipArrowStyles:{},place:n};const c=l;return o?(c.push(Xe({element:o,padding:5})),xe(t,e,{placement:n,strategy:i,middleware:c}).then(({x:a,y,placement:p,middlewareData:v})=>{var u,h;const w={left:`${a}px`,top:`${y}px`,border:s},{x,y:g}=(u=v.arrow)!==null&&u!==void 0?u:{x:0,y:0},S=(h={top:"bottom",right:"left",bottom:"top",left:"right"}[p.split("-")[0]])!==null&&h!==void 0?h:"bottom",_=s&&{borderBottom:s,borderRight:s};let O=0;if(s){const R=`${s}`.match(/(\d+)px/);O=R!=null&&R[1]?Number(R[1]):1}return{tooltipStyles:w,tooltipArrowStyles:{left:x!=null?`${x}px`:"",top:g!=null?`${g}px`:"",right:"",bottom:"",..._,[S]:`-${4+O}px`},place:p}})):xe(t,e,{placement:"bottom",strategy:i,middleware:c}).then(({x:a,y,placement:p})=>({tooltipStyles:{left:`${a}px`,top:`${y}px`},tooltipArrowStyles:{},place:p}))};var xo="core-styles-module_tooltip__3vRRp",Eo="core-styles-module_fixed__pcSol",So="core-styles-module_arrow__cvMwQ",_o="core-styles-module_noArrow__xock6",Ao="core-styles-module_clickable__ZuTTB",Ro="core-styles-module_show__Nt9eE",le={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const To=({id:t,className:e,classNameArrow:o,variant:n="dark",anchorId:r,anchorSelect:i,place:l="top",offset:s=10,events:c=["hover"],openOnClick:a=!1,positionStrategy:y="absolute",middlewares:p,wrapper:v,delayShow:u=0,delayHide:h=0,float:w=!1,hidden:x=!1,noArrow:g=!1,clickable:S=!1,closeOnEsc:_=!1,closeOnScroll:O=!1,closeOnResize:R=!1,style:k,position:N,afterShow:j,afterHide:Y,content:D,contentWrapperRef:I,isOpen:C,setIsOpen:W,activeAnchor:A,setActiveAnchor:L,border:$,opacity:F,arrowColor:pt})=>{const M=m.useRef(null),et=m.useRef(null),H=m.useRef(null),q=m.useRef(null),[Ft,Ht]=m.useState(l),[xt,It]=m.useState({}),[Mt,zt]=m.useState({}),[K,jt]=m.useState(!1),[Et,mt]=m.useState(!1),St=m.useRef(!1),_t=m.useRef(null),{anchorRefs:At,setActiveAnchor:qt}=he(t),ht=m.useRef(!1),[ot,Rt]=m.useState([]),ct=m.useRef(!1),yt=a||c.includes("click");go(()=>(ct.current=!0,()=>{ct.current=!1}),[]),m.useEffect(()=>{if(!K){const d=setTimeout(()=>{mt(!1)},150);return()=>{clearTimeout(d)}}return()=>null},[K]);const X=d=>{ct.current&&(d&&mt(!0),setTimeout(()=>{ct.current&&(W==null||W(d),C===void 0&&jt(d))},10))};m.useEffect(()=>{if(C===void 0)return()=>null;C&&mt(!0);const d=setTimeout(()=>{jt(C)},10);return()=>{clearTimeout(d)}},[C]),m.useEffect(()=>{K!==St.current&&(St.current=K,K?j==null||j():Y==null||Y())},[K]);const vt=(d=h)=>{q.current&&clearTimeout(q.current),q.current=setTimeout(()=>{ht.current||X(!1)},d)},nt=d=>{var b;if(!d)return;const f=(b=d.currentTarget)!==null&&b!==void 0?b:d.target;if(!(f!=null&&f.isConnected))return L(null),void qt({current:null});u?(H.current&&clearTimeout(H.current),H.current=setTimeout(()=>{X(!0)},u)):X(!0),L(f),qt({current:f}),q.current&&clearTimeout(q.current)},Vt=()=>{S?vt(h||100):h?vt():X(!1),H.current&&clearTimeout(H.current)},Tt=({x:d,y:b})=>{Ae({place:l,offset:s,elementReference:{getBoundingClientRect:()=>({x:d,y:b,width:0,height:0,top:b,left:d,right:d,bottom:b})},tooltipReference:M.current,tooltipArrowReference:et.current,strategy:y,middlewares:p,border:$}).then(f=>{Object.keys(f.tooltipStyles).length&&It(f.tooltipStyles),Object.keys(f.tooltipArrowStyles).length&&zt(f.tooltipArrowStyles),Ht(f.place)})},Kt=d=>{if(!d)return;const b=d,f={x:b.clientX,y:b.clientY};Tt(f),_t.current=f},Yt=d=>{nt(d),h&&vt()},Ot=d=>{var b;[document.querySelector(`[id='${r}']`),...ot].some(f=>f==null?void 0:f.contains(d.target))||!((b=M.current)===null||b===void 0)&&b.contains(d.target)||(X(!1),H.current&&clearTimeout(H.current))},Ct=Se(nt,50,!0),at=Se(Vt,50,!0),rt=m.useCallback(()=>{N?Tt(N):w?_t.current&&Tt(_t.current):Ae({place:l,offset:s,elementReference:A,tooltipReference:M.current,tooltipArrowReference:et.current,strategy:y,middlewares:p,border:$}).then(d=>{ct.current&&(Object.keys(d.tooltipStyles).length&&It(d.tooltipStyles),Object.keys(d.tooltipArrowStyles).length&&zt(d.tooltipArrowStyles),Ht(d.place))})},[K,A,D,k,l,s,y,N,w]);m.useEffect(()=>{var d,b;const f=new Set(At);ot.forEach(Z=>{f.add({current:Z})});const E=document.querySelector(`[id='${r}']`);E&&f.add({current:E});const T=()=>{X(!1)},B=_e(A),P=_e(M.current);O&&(window.addEventListener("scroll",T),B==null||B.addEventListener("scroll",T),P==null||P.addEventListener("scroll",T));let J=null;R?window.addEventListener("resize",T):A&&M.current&&(J=vo(A,M.current,rt,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const kt=Z=>{Z.key==="Escape"&&X(!1)};_&&window.addEventListener("keydown",kt);const U=[];yt?(window.addEventListener("click",Ot),U.push({event:"click",listener:Yt})):(U.push({event:"mouseenter",listener:Ct},{event:"mouseleave",listener:at},{event:"focus",listener:Ct},{event:"blur",listener:at}),w&&U.push({event:"mousemove",listener:Kt}));const Xt=()=>{ht.current=!0},ye=()=>{ht.current=!1,Vt()};return S&&!yt&&((d=M.current)===null||d===void 0||d.addEventListener("mouseenter",Xt),(b=M.current)===null||b===void 0||b.addEventListener("mouseleave",ye)),U.forEach(({event:Z,listener:Nt})=>{f.forEach(re=>{var Dt;(Dt=re.current)===null||Dt===void 0||Dt.addEventListener(Z,Nt)})}),()=>{var Z,Nt;O&&(window.removeEventListener("scroll",T),B==null||B.removeEventListener("scroll",T),P==null||P.removeEventListener("scroll",T)),R?window.removeEventListener("resize",T):J==null||J(),yt&&window.removeEventListener("click",Ot),_&&window.removeEventListener("keydown",kt),S&&!yt&&((Z=M.current)===null||Z===void 0||Z.removeEventListener("mouseenter",Xt),(Nt=M.current)===null||Nt===void 0||Nt.removeEventListener("mouseleave",ye)),U.forEach(({event:re,listener:Dt})=>{f.forEach(He=>{var ie;(ie=He.current)===null||ie===void 0||ie.removeEventListener(re,Dt)})})}},[A,rt,Et,At,ot,_,c]),m.useEffect(()=>{let d=i??"";!d&&t&&(d=`[data-tooltip-id='${t}']`);const b=new MutationObserver(f=>{const E=[];f.forEach(T=>{if(T.type==="attributes"&&T.attributeName==="data-tooltip-id"&&T.target.getAttribute("data-tooltip-id")===t&&E.push(T.target),T.type==="childList"&&(A&&[...T.removedNodes].some(B=>{var P;return!!(!((P=B==null?void 0:B.contains)===null||P===void 0)&&P.call(B,A))&&(mt(!1),X(!1),L(null),H.current&&clearTimeout(H.current),q.current&&clearTimeout(q.current),!0)}),d))try{const B=[...T.addedNodes].filter(P=>P.nodeType===1);E.push(...B.filter(P=>P.matches(d))),E.push(...B.flatMap(P=>[...P.querySelectorAll(d)]))}catch{}}),E.length&&Rt(T=>[...T,...E])});return b.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"]}),()=>{b.disconnect()}},[t,i,A]),m.useEffect(()=>{rt()},[rt]),m.useEffect(()=>{if(!(I!=null&&I.current))return()=>null;const d=new ResizeObserver(()=>{rt()});return d.observe(I.current),()=>{d.disconnect()}},[D,I==null?void 0:I.current]),m.useEffect(()=>{var d;const b=document.querySelector(`[id='${r}']`),f=[...ot,b];A&&f.includes(A)||L((d=ot[0])!==null&&d!==void 0?d:b)},[r,ot,A]),m.useEffect(()=>()=>{H.current&&clearTimeout(H.current),q.current&&clearTimeout(q.current)},[]),m.useEffect(()=>{let d=i;if(!d&&t&&(d=`[data-tooltip-id='${t}']`),d)try{const b=Array.from(document.querySelectorAll(d));Rt(b)}catch{Rt([])}},[t,i]);const Lt=!x&&D&&K&&Object.keys(xt).length>0;return Et?it.createElement(v,{id:t,role:"tooltip",className:se("react-tooltip",xo,le.tooltip,le[n],e,`react-tooltip__place-${Ft}`,{"react-tooltip__show":Lt,[Ro]:Lt,[Eo]:y==="fixed",[Ao]:S}),style:{...k,...xt,opacity:F!==void 0&&Lt?F:void 0},ref:M},D,it.createElement(v,{className:se("react-tooltip-arrow",So,le.arrow,o,{[_o]:g}),style:{...Mt,background:pt?`linear-gradient(to right bottom, transparent 50%, ${pt} 50%)`:void 0},ref:et})):null},Oo=({content:t})=>it.createElement("span",{dangerouslySetInnerHTML:{__html:t}}),Po=({id:t,anchorId:e,anchorSelect:o,content:n,html:r,render:i,className:l,classNameArrow:s,variant:c="dark",place:a="top",offset:y=10,wrapper:p="div",children:v=null,events:u=["hover"],openOnClick:h=!1,positionStrategy:w="absolute",middlewares:x,delayShow:g=0,delayHide:S=0,float:_=!1,hidden:O=!1,noArrow:R=!1,clickable:k=!1,closeOnEsc:N=!1,closeOnScroll:j=!1,closeOnResize:Y=!1,style:D,position:I,isOpen:C,disableStyleInjection:W=!1,border:A,opacity:L,arrowColor:$,setIsOpen:F,afterShow:pt,afterHide:M})=>{const[et,H]=m.useState(n),[q,Ft]=m.useState(r),[Ht,xt]=m.useState(a),[It,Mt]=m.useState(c),[zt,K]=m.useState(y),[jt,Et]=m.useState(g),[mt,St]=m.useState(S),[_t,At]=m.useState(_),[qt,ht]=m.useState(O),[ot,Rt]=m.useState(p),[ct,yt]=m.useState(u),[X,vt]=m.useState(w),[nt,Vt]=m.useState(null),Tt=m.useRef(W),{anchorRefs:Kt,activeAnchor:Yt}=he(t),Ot=d=>d==null?void 0:d.getAttributeNames().reduce((b,f)=>{var E;return f.startsWith("data-tooltip-")&&(b[f.replace(/^data-tooltip-/,"")]=(E=d==null?void 0:d.getAttribute(f))!==null&&E!==void 0?E:null),b},{}),Ct=d=>{const b={place:f=>{var E;xt((E=f)!==null&&E!==void 0?E:a)},content:f=>{H(f??n)},html:f=>{Ft(f??r)},variant:f=>{var E;Mt((E=f)!==null&&E!==void 0?E:c)},offset:f=>{K(f===null?y:Number(f))},wrapper:f=>{var E;Rt((E=f)!==null&&E!==void 0?E:p)},events:f=>{const E=f==null?void 0:f.split(" ");yt(E??u)},"position-strategy":f=>{var E;vt((E=f)!==null&&E!==void 0?E:w)},"delay-show":f=>{Et(f===null?g:Number(f))},"delay-hide":f=>{St(f===null?S:Number(f))},float:f=>{At(f===null?_:f==="true")},hidden:f=>{ht(f===null?O:f==="true")}};Object.values(b).forEach(f=>f(null)),Object.entries(d).forEach(([f,E])=>{var T;(T=b[f])===null||T===void 0||T.call(b,E)})};m.useEffect(()=>{H(n)},[n]),m.useEffect(()=>{Ft(r)},[r]),m.useEffect(()=>{xt(a)},[a]),m.useEffect(()=>{Mt(c)},[c]),m.useEffect(()=>{K(y)},[y]),m.useEffect(()=>{Et(g)},[g]),m.useEffect(()=>{St(S)},[S]),m.useEffect(()=>{At(_)},[_]),m.useEffect(()=>{ht(O)},[O]),m.useEffect(()=>{vt(w)},[w]),m.useEffect(()=>{Tt.current!==W&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")},[W]),m.useEffect(()=>{typeof window<"u"&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:W==="core",disableBase:W}}))},[]),m.useEffect(()=>{var d;const b=new Set(Kt);let f=o;if(!f&&t&&(f=`[data-tooltip-id='${t}']`),f)try{document.querySelectorAll(f).forEach(J=>{b.add({current:J})})}catch{console.warn(`[react-tooltip] "${f}" is not a valid CSS selector`)}const E=document.querySelector(`[id='${e}']`);if(E&&b.add({current:E}),!b.size)return()=>null;const T=(d=nt??E)!==null&&d!==void 0?d:Yt.current,B=new MutationObserver(J=>{J.forEach(kt=>{var U;if(!T||kt.type!=="attributes"||!(!((U=kt.attributeName)===null||U===void 0)&&U.startsWith("data-tooltip-")))return;const Xt=Ot(T);Ct(Xt)})}),P={attributes:!0,childList:!1,subtree:!1};if(T){const J=Ot(T);Ct(J),B.observe(T,P)}return()=>{B.disconnect()}},[Kt,Yt,nt,e,o]),m.useEffect(()=>{D!=null&&D.border&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),A&&!CSS.supports("border",`${A}`)&&console.warn(`[react-tooltip] "${A}" is not a valid \`border\`.`),D!=null&&D.opacity&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),L&&!CSS.supports("opacity",`${L}`)&&console.warn(`[react-tooltip] "${L}" is not a valid \`opacity\`.`)},[]);let at=v;const rt=m.useRef(null);if(i){const d=i({content:et??null,activeAnchor:nt});at=d?it.createElement("div",{ref:rt,className:"react-tooltip-content-wrapper"},d):null}else et&&(at=et);q&&(at=it.createElement(Oo,{content:q}));const Lt={id:t,anchorId:e,anchorSelect:o,className:l,classNameArrow:s,content:at,contentWrapperRef:rt,place:Ht,variant:It,offset:zt,wrapper:ot,events:ct,openOnClick:h,positionStrategy:X,middlewares:x,delayShow:jt,delayHide:mt,float:_t,hidden:qt,noArrow:R,clickable:k,closeOnEsc:N,closeOnScroll:j,closeOnResize:Y,style:D,position:I,isOpen:C,border:A,opacity:L,arrowColor:$,setIsOpen:F,afterShow:pt,afterHide:M,activeAnchor:nt,setActiveAnchor:d=>Vt(d)};return it.createElement(To,{...Lt})};typeof window<"u"&&window.addEventListener("react-tooltip-inject-styles",t=>{t.detail.disableCore||Ee({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9}.core-styles-module_tooltip__3vRRp{visibility:hidden;position:absolute;top:0;left:0;pointer-events:none;opacity:0;transition:opacity 0.3s ease-out;will-change:opacity,visibility}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{visibility:visible;opacity:var(--rt-opacity)}",type:"core"}),t.detail.disableBase||Ee({css:`
.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,type:"base"})});export{Po as Tooltip,No as TooltipProvider,Do as TooltipWrapper,ko as removeStyle};
