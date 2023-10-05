import{bJ as et,bK as rt,bL as hr,bM as gr,aW as br,bN as Er,bO as tt,bP as nt,bQ as at,Q as Sr,aH as it,bR as Tr,k as Ar,aP as ot,bS as Je,bT as Xe,i as Fr,bU as Re,bV as X,bW as Ir,q as Or,bX as ut,bY as st,aZ as lt,bZ as ct,b_ as ft,b$ as dt,c0 as pt,c1 as vt,aS as yt,r as f,a as er}from"./index-0327f46b.js";import{w as Ce}from"./tiny-warning.esm-c932d744.js";import{b as mt,c as Mr}from"./_copyArray-7768aa70.js";var ht=Object.getOwnPropertySymbols,gt=ht?function(e){for(var r=[];e;)rt(r,hr(e)),e=gr(e);return r}:et;const Rr=gt;function bt(e){var r=[];if(e!=null)for(var n in Object(e))r.push(n);return r}var Et=Object.prototype,St=Et.hasOwnProperty;function Tt(e){if(!br(e))return bt(e);var r=Er(e),n=[];for(var a in e)a=="constructor"&&(r||!St.call(e,a))||n.push(a);return n}function we(e){return tt(e)?nt(e,!0):Tt(e)}function At(e){return at(e,we,Rr)}var Ft=function(r){return It(r)&&!Ot(r)};function It(e){return!!e&&typeof e=="object"}function Ot(e){var r=Object.prototype.toString.call(e);return r==="[object RegExp]"||r==="[object Date]"||Ct(e)}var Mt=typeof Symbol=="function"&&Symbol.for,Rt=Mt?Symbol.for("react.element"):60103;function Ct(e){return e.$$typeof===Rt}function wt(e){return Array.isArray(e)?[]:{}}function ee(e,r){return r.clone!==!1&&r.isMergeableObject(e)?z(wt(e),e,r):e}function _t(e,r,n){return e.concat(r).map(function(a){return ee(a,n)})}function $t(e,r,n){var a={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(t){a[t]=ee(e[t],n)}),Object.keys(r).forEach(function(t){!n.isMergeableObject(r[t])||!e[t]?a[t]=ee(r[t],n):a[t]=z(e[t],r[t],n)}),a}function z(e,r,n){n=n||{},n.arrayMerge=n.arrayMerge||_t,n.isMergeableObject=n.isMergeableObject||Ft;var a=Array.isArray(r),t=Array.isArray(e),o=a===t;return o?a?n.arrayMerge(e,r,n):$t(e,r,n):ee(r,n)}z.all=function(r,n){if(!Array.isArray(r))throw new Error("first argument should be an array");return r.reduce(function(a,t){return z(a,t,n)},{})};var Ie=z,rr=Array.isArray,tr=Object.keys,jt=Object.prototype.hasOwnProperty,Lt=typeof Element<"u";function Oe(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){var n=rr(e),a=rr(r),t,o,u;if(n&&a){if(o=e.length,o!=r.length)return!1;for(t=o;t--!==0;)if(!Oe(e[t],r[t]))return!1;return!0}if(n!=a)return!1;var s=e instanceof Date,d=r instanceof Date;if(s!=d)return!1;if(s&&d)return e.getTime()==r.getTime();var y=e instanceof RegExp,F=r instanceof RegExp;if(y!=F)return!1;if(y&&F)return e.toString()==r.toString();var h=tr(e);if(o=h.length,o!==tr(r).length)return!1;for(t=o;t--!==0;)if(!jt.call(r,h[t]))return!1;if(Lt&&e instanceof Element&&r instanceof Element)return e===r;for(t=o;t--!==0;)if(u=h[t],!(u==="_owner"&&e.$$typeof)&&!Oe(e[u],r[u]))return!1;return!0}return e!==e&&r!==r}var Pt=function(r,n){try{return Oe(r,n)}catch(a){if(a.message&&a.message.match(/stack|recursion/i)||a.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",a.name,a.message),!1;throw a}};const k=Sr(Pt);function re(e,r,n,a){var t=!n;n||(n={});for(var o=-1,u=r.length;++o<u;){var s=r[o],d=a?a(n[s],e[s],s,n,e):void 0;d===void 0&&(d=e[s]),t?it(n,s,d):Tr(n,s,d)}return n}function Dt(e,r){return e&&re(r,Ar(r),e)}function Nt(e,r){return e&&re(r,we(r),e)}var Cr=typeof exports=="object"&&exports&&!exports.nodeType&&exports,nr=Cr&&typeof module=="object"&&module&&!module.nodeType&&module,Ut=nr&&nr.exports===Cr,ar=Ut?ot.Buffer:void 0,ir=ar?ar.allocUnsafe:void 0;function Vt(e,r){if(r)return e.slice();var n=e.length,a=ir?ir(n):new e.constructor(n);return e.copy(a),a}function kt(e,r){return re(e,hr(e),r)}function Bt(e,r){return re(e,Rr(e),r)}var xt=Object.prototype,Ht=xt.hasOwnProperty;function Gt(e){var r=e.length,n=new e.constructor(r);return r&&typeof e[0]=="string"&&Ht.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function _e(e){var r=new e.constructor(e.byteLength);return new Je(r).set(new Je(e)),r}function Wt(e,r){var n=r?_e(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var Kt=/\w*$/;function Yt(e){var r=new e.constructor(e.source,Kt.exec(e));return r.lastIndex=e.lastIndex,r}var or=Xe?Xe.prototype:void 0,ur=or?or.valueOf:void 0;function qt(e){return ur?Object(ur.call(e)):{}}function zt(e,r){var n=r?_e(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var Qt="[object Boolean]",Zt="[object Date]",Jt="[object Map]",Xt="[object Number]",en="[object RegExp]",rn="[object Set]",tn="[object String]",nn="[object Symbol]",an="[object ArrayBuffer]",on="[object DataView]",un="[object Float32Array]",sn="[object Float64Array]",ln="[object Int8Array]",cn="[object Int16Array]",fn="[object Int32Array]",dn="[object Uint8Array]",pn="[object Uint8ClampedArray]",vn="[object Uint16Array]",yn="[object Uint32Array]";function mn(e,r,n){var a=e.constructor;switch(r){case an:return _e(e);case Qt:case Zt:return new a(+e);case on:return Wt(e,n);case un:case sn:case ln:case cn:case fn:case dn:case pn:case vn:case yn:return zt(e,n);case Jt:return new a;case Xt:case tn:return new a(e);case en:return Yt(e);case rn:return new a;case nn:return qt(e)}}function hn(e){return typeof e.constructor=="function"&&!Er(e)?mt(gr(e)):{}}var gn="[object Map]";function bn(e){return Fr(e)&&Re(e)==gn}var sr=X&&X.isMap,En=sr?Ir(sr):bn;const Sn=En;var Tn="[object Set]";function An(e){return Fr(e)&&Re(e)==Tn}var lr=X&&X.isSet,Fn=lr?Ir(lr):An;const In=Fn;var On=1,Mn=2,Rn=4,wr="[object Arguments]",Cn="[object Array]",wn="[object Boolean]",_n="[object Date]",$n="[object Error]",_r="[object Function]",jn="[object GeneratorFunction]",Ln="[object Map]",Pn="[object Number]",$r="[object Object]",Dn="[object RegExp]",Nn="[object Set]",Un="[object String]",Vn="[object Symbol]",kn="[object WeakMap]",Bn="[object ArrayBuffer]",xn="[object DataView]",Hn="[object Float32Array]",Gn="[object Float64Array]",Wn="[object Int8Array]",Kn="[object Int16Array]",Yn="[object Int32Array]",qn="[object Uint8Array]",zn="[object Uint8ClampedArray]",Qn="[object Uint16Array]",Zn="[object Uint32Array]",A={};A[wr]=A[Cn]=A[Bn]=A[xn]=A[wn]=A[_n]=A[Hn]=A[Gn]=A[Wn]=A[Kn]=A[Yn]=A[Ln]=A[Pn]=A[$r]=A[Dn]=A[Nn]=A[Un]=A[Vn]=A[qn]=A[zn]=A[Qn]=A[Zn]=!0;A[$n]=A[_r]=A[kn]=!1;function q(e,r,n,a,t,o){var u,s=r&On,d=r&Mn,y=r&Rn;if(n&&(u=t?n(e,a,t,o):n(e)),u!==void 0)return u;if(!br(e))return e;var F=Or(e);if(F){if(u=Gt(e),!s)return Mr(e,u)}else{var h=Re(e),c=h==_r||h==jn;if(ut(e))return Vt(e,s);if(h==$r||h==wr||c&&!t){if(u=d||c?{}:hn(e),!s)return d?Bt(e,Nt(u,e)):kt(e,Dt(u,e))}else{if(!A[h])return t?e:{};u=mn(e,h,s)}}o||(o=new st);var O=o.get(e);if(O)return O;o.set(e,u),In(e)?e.forEach(function(M){u.add(q(M,r,n,M,e,o))}):Sn(e)&&e.forEach(function(M,R){u.set(R,q(M,r,n,R,e,o))});var j=y?d?At:ct:d?we:Ar,_=F?void 0:j(e);return lt(_||e,function(M,R){_&&(R=M,M=e[R]),Tr(u,R,q(M,r,n,R,e,o))}),u}var Jn=4;function cr(e){return q(e,Jn)}function jr(e){return Or(e)?ft(e,dt):pt(e)?[e]:Mr(vt(yt(e)))}var Lr={exports:{}},E={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,$e=w?Symbol.for("react.element"):60103,je=w?Symbol.for("react.portal"):60106,te=w?Symbol.for("react.fragment"):60107,ne=w?Symbol.for("react.strict_mode"):60108,ae=w?Symbol.for("react.profiler"):60114,ie=w?Symbol.for("react.provider"):60109,oe=w?Symbol.for("react.context"):60110,Le=w?Symbol.for("react.async_mode"):60111,ue=w?Symbol.for("react.concurrent_mode"):60111,se=w?Symbol.for("react.forward_ref"):60112,le=w?Symbol.for("react.suspense"):60113,Xn=w?Symbol.for("react.suspense_list"):60120,ce=w?Symbol.for("react.memo"):60115,fe=w?Symbol.for("react.lazy"):60116,ea=w?Symbol.for("react.block"):60121,ra=w?Symbol.for("react.fundamental"):60117,ta=w?Symbol.for("react.responder"):60118,na=w?Symbol.for("react.scope"):60119;function L(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case $e:switch(e=e.type,e){case Le:case ue:case te:case ae:case ne:case le:return e;default:switch(e=e&&e.$$typeof,e){case oe:case se:case fe:case ce:case ie:return e;default:return r}}case je:return r}}}function Pr(e){return L(e)===ue}E.AsyncMode=Le;E.ConcurrentMode=ue;E.ContextConsumer=oe;E.ContextProvider=ie;E.Element=$e;E.ForwardRef=se;E.Fragment=te;E.Lazy=fe;E.Memo=ce;E.Portal=je;E.Profiler=ae;E.StrictMode=ne;E.Suspense=le;E.isAsyncMode=function(e){return Pr(e)||L(e)===Le};E.isConcurrentMode=Pr;E.isContextConsumer=function(e){return L(e)===oe};E.isContextProvider=function(e){return L(e)===ie};E.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===$e};E.isForwardRef=function(e){return L(e)===se};E.isFragment=function(e){return L(e)===te};E.isLazy=function(e){return L(e)===fe};E.isMemo=function(e){return L(e)===ce};E.isPortal=function(e){return L(e)===je};E.isProfiler=function(e){return L(e)===ae};E.isStrictMode=function(e){return L(e)===ne};E.isSuspense=function(e){return L(e)===le};E.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===te||e===ue||e===ae||e===ne||e===le||e===Xn||typeof e=="object"&&e!==null&&(e.$$typeof===fe||e.$$typeof===ce||e.$$typeof===ie||e.$$typeof===oe||e.$$typeof===se||e.$$typeof===ra||e.$$typeof===ta||e.$$typeof===na||e.$$typeof===ea)};E.typeOf=L;Lr.exports=E;var aa=Lr.exports,Pe=aa,ia={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},oa={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ua={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Dr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},De={};De[Pe.ForwardRef]=ua;De[Pe.Memo]=Dr;function fr(e){return Pe.isMemo(e)?Dr:De[e.$$typeof]||ia}var sa=Object.defineProperty,la=Object.getOwnPropertyNames,dr=Object.getOwnPropertySymbols,ca=Object.getOwnPropertyDescriptor,fa=Object.getPrototypeOf,pr=Object.prototype;function Nr(e,r,n){if(typeof r!="string"){if(pr){var a=fa(r);a&&a!==pr&&Nr(e,a,n)}var t=la(r);dr&&(t=t.concat(dr(r)));for(var o=fr(e),u=fr(r),s=0;s<t.length;++s){var d=t[s];if(!oa[d]&&!(n&&n[d])&&!(u&&u[d])&&!(o&&o[d])){var y=ca(r,d);try{sa(e,d,y)}catch{}}}}return e}var da=Nr;const pa=Sr(da);var va=1,ya=4;function ma(e){return q(e,va|ya)}function b(){return b=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function Ur(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function B(e,r){if(e==null)return{};var n={},a=Object.keys(e),t,o;for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&(n[t]=e[t]);return n}function vr(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var de=f.createContext(void 0);de.displayName="FormikContext";var ha=de.Provider,ga=de.Consumer;function Ne(){var e=f.useContext(de);return e||Ce(!1),e}var yr=function(r){return Array.isArray(r)&&r.length===0},$=function(r){return typeof r=="function"},K=function(r){return r!==null&&typeof r=="object"},ba=function(r){return String(Math.floor(Number(r)))===r},Te=function(r){return Object.prototype.toString.call(r)==="[object String]"},Vr=function(r){return f.Children.count(r)===0},Ae=function(r){return K(r)&&$(r.then)};function I(e,r,n,a){a===void 0&&(a=0);for(var t=jr(r);e&&a<t.length;)e=e[t[a++]];return a!==t.length&&!e||e===void 0?n:e}function U(e,r,n){for(var a=cr(e),t=a,o=0,u=jr(r);o<u.length-1;o++){var s=u[o],d=I(e,u.slice(0,o+1));if(d&&(K(d)||Array.isArray(d)))t=t[s]=cr(d);else{var y=u[o+1];t=t[s]=ba(y)&&Number(y)>=0?[]:{}}}return(o===0?e:t)[u[o]]===n?e:(n===void 0?delete t[u[o]]:t[u[o]]=n,o===0&&n===void 0&&delete a[u[o]],a)}function kr(e,r,n,a){n===void 0&&(n=new WeakMap),a===void 0&&(a={});for(var t=0,o=Object.keys(e);t<o.length;t++){var u=o[t],s=e[u];K(s)?n.get(s)||(n.set(s,!0),a[u]=Array.isArray(s)?[]:{},kr(s,r,n,a[u])):a[u]=r}return a}function Ea(e,r){switch(r.type){case"SET_VALUES":return b({},e,{values:r.payload});case"SET_TOUCHED":return b({},e,{touched:r.payload});case"SET_ERRORS":return k(e.errors,r.payload)?e:b({},e,{errors:r.payload});case"SET_STATUS":return b({},e,{status:r.payload});case"SET_ISSUBMITTING":return b({},e,{isSubmitting:r.payload});case"SET_ISVALIDATING":return b({},e,{isValidating:r.payload});case"SET_FIELD_VALUE":return b({},e,{values:U(e.values,r.payload.field,r.payload.value)});case"SET_FIELD_TOUCHED":return b({},e,{touched:U(e.touched,r.payload.field,r.payload.value)});case"SET_FIELD_ERROR":return b({},e,{errors:U(e.errors,r.payload.field,r.payload.value)});case"RESET_FORM":return b({},e,r.payload);case"SET_FORMIK_STATE":return r.payload(e);case"SUBMIT_ATTEMPT":return b({},e,{touched:kr(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return b({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return b({},e,{isSubmitting:!1});default:return e}}var x={},J={};function Sa(e){var r=e.validateOnChange,n=r===void 0?!0:r,a=e.validateOnBlur,t=a===void 0?!0:a,o=e.validateOnMount,u=o===void 0?!1:o,s=e.isInitialValid,d=e.enableReinitialize,y=d===void 0?!1:d,F=e.onSubmit,h=B(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),c=b({validateOnChange:n,validateOnBlur:t,validateOnMount:u,onSubmit:F},h),O=f.useRef(c.initialValues),j=f.useRef(c.initialErrors||x),_=f.useRef(c.initialTouched||J),M=f.useRef(c.initialStatus),R=f.useRef(!1),P=f.useRef({});f.useEffect(function(){return R.current=!0,function(){R.current=!1}},[]);var pe=f.useState(0),ve=pe[1],Q=f.useRef({values:c.initialValues,errors:c.initialErrors||x,touched:c.initialTouched||J,status:c.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),T=Q.current,S=f.useCallback(function(i){var l=Q.current;Q.current=Ea(l,i),l!==Q.current&&ve(function(p){return p+1})},[]),Ue=f.useCallback(function(i,l){return new Promise(function(p,v){var m=c.validate(i,l);m==null?p(x):Ae(m)?m.then(function(g){p(g||x)},function(g){v(g)}):p(m)})},[c.validate]),ye=f.useCallback(function(i,l){var p=c.validationSchema,v=$(p)?p(l):p,m=l&&v.validateAt?v.validateAt(l,i):Aa(i,v);return new Promise(function(g,C){m.then(function(){g(x)},function(V){V.name==="ValidationError"?g(Ta(V)):C(V)})})},[c.validationSchema]),Ve=f.useCallback(function(i,l){return new Promise(function(p){return p(P.current[i].validate(l))})},[]),ke=f.useCallback(function(i){var l=Object.keys(P.current).filter(function(v){return $(P.current[v].validate)}),p=l.length>0?l.map(function(v){return Ve(v,I(i,v))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(p).then(function(v){return v.reduce(function(m,g,C){return g==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||g&&(m=U(m,l[C],g)),m},{})})},[Ve]),Br=f.useCallback(function(i){return Promise.all([ke(i),c.validationSchema?ye(i):{},c.validate?Ue(i):{}]).then(function(l){var p=l[0],v=l[1],m=l[2],g=Ie.all([p,v,m],{arrayMerge:Fa});return g})},[c.validate,c.validationSchema,ke,Ue,ye]),N=D(function(i){return i===void 0&&(i=T.values),S({type:"SET_ISVALIDATING",payload:!0}),Br(i).then(function(l){return R.current&&(S({type:"SET_ISVALIDATING",payload:!1}),S({type:"SET_ERRORS",payload:l})),l})});f.useEffect(function(){u&&R.current===!0&&k(O.current,c.initialValues)&&N(O.current)},[u,N]);var Y=f.useCallback(function(i){var l=i&&i.values?i.values:O.current,p=i&&i.errors?i.errors:j.current?j.current:c.initialErrors||{},v=i&&i.touched?i.touched:_.current?_.current:c.initialTouched||{},m=i&&i.status?i.status:M.current?M.current:c.initialStatus;O.current=l,j.current=p,_.current=v,M.current=m;var g=function(){S({type:"RESET_FORM",payload:{isSubmitting:!!i&&!!i.isSubmitting,errors:p,touched:v,status:m,values:l,isValidating:!!i&&!!i.isValidating,submitCount:i&&i.submitCount&&typeof i.submitCount=="number"?i.submitCount:0}})};if(c.onReset){var C=c.onReset(T.values,Qe);Ae(C)?C.then(g):g()}else g()},[c.initialErrors,c.initialStatus,c.initialTouched,c.onReset]);f.useEffect(function(){R.current===!0&&!k(O.current,c.initialValues)&&y&&(O.current=c.initialValues,Y(),u&&N(O.current))},[y,c.initialValues,Y,u,N]),f.useEffect(function(){y&&R.current===!0&&!k(j.current,c.initialErrors)&&(j.current=c.initialErrors||x,S({type:"SET_ERRORS",payload:c.initialErrors||x}))},[y,c.initialErrors]),f.useEffect(function(){y&&R.current===!0&&!k(_.current,c.initialTouched)&&(_.current=c.initialTouched||J,S({type:"SET_TOUCHED",payload:c.initialTouched||J}))},[y,c.initialTouched]),f.useEffect(function(){y&&R.current===!0&&!k(M.current,c.initialStatus)&&(M.current=c.initialStatus,S({type:"SET_STATUS",payload:c.initialStatus}))},[y,c.initialStatus,c.initialTouched]);var Be=D(function(i){if(P.current[i]&&$(P.current[i].validate)){var l=I(T.values,i),p=P.current[i].validate(l);return Ae(p)?(S({type:"SET_ISVALIDATING",payload:!0}),p.then(function(v){return v}).then(function(v){S({type:"SET_FIELD_ERROR",payload:{field:i,value:v}}),S({type:"SET_ISVALIDATING",payload:!1})})):(S({type:"SET_FIELD_ERROR",payload:{field:i,value:p}}),Promise.resolve(p))}else if(c.validationSchema)return S({type:"SET_ISVALIDATING",payload:!0}),ye(T.values,i).then(function(v){return v}).then(function(v){S({type:"SET_FIELD_ERROR",payload:{field:i,value:I(v,i)}}),S({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),xr=f.useCallback(function(i,l){var p=l.validate;P.current[i]={validate:p}},[]),Hr=f.useCallback(function(i){delete P.current[i]},[]),xe=D(function(i,l){S({type:"SET_TOUCHED",payload:i});var p=l===void 0?t:l;return p?N(T.values):Promise.resolve()}),He=f.useCallback(function(i){S({type:"SET_ERRORS",payload:i})},[]),Ge=D(function(i,l){var p=$(i)?i(T.values):i;S({type:"SET_VALUES",payload:p});var v=l===void 0?n:l;return v?N(p):Promise.resolve()}),Z=f.useCallback(function(i,l){S({type:"SET_FIELD_ERROR",payload:{field:i,value:l}})},[]),G=D(function(i,l,p){S({type:"SET_FIELD_VALUE",payload:{field:i,value:l}});var v=p===void 0?n:p;return v?N(U(T.values,i,l)):Promise.resolve()}),We=f.useCallback(function(i,l){var p=l,v=i,m;if(!Te(i)){i.persist&&i.persist();var g=i.target?i.target:i.currentTarget,C=g.type,V=g.name,Ee=g.id,Se=g.value,Jr=g.checked,Pa=g.outerHTML,Ze=g.options,Xr=g.multiple;p=l||V||Ee,v=/number|range/.test(C)?(m=parseFloat(Se),isNaN(m)?"":m):/checkbox/.test(C)?Oa(I(T.values,p),Jr,Se):Ze&&Xr?Ia(Ze):Se}p&&G(p,v)},[G,T.values]),me=D(function(i){if(Te(i))return function(l){return We(l,i)};We(i)}),W=D(function(i,l,p){l===void 0&&(l=!0),S({type:"SET_FIELD_TOUCHED",payload:{field:i,value:l}});var v=p===void 0?t:p;return v?N(T.values):Promise.resolve()}),Ke=f.useCallback(function(i,l){i.persist&&i.persist();var p=i.target,v=p.name,m=p.id,g=p.outerHTML,C=l||v||m;W(C,!0)},[W]),he=D(function(i){if(Te(i))return function(l){return Ke(l,i)};Ke(i)}),Ye=f.useCallback(function(i){$(i)?S({type:"SET_FORMIK_STATE",payload:i}):S({type:"SET_FORMIK_STATE",payload:function(){return i}})},[]),qe=f.useCallback(function(i){S({type:"SET_STATUS",payload:i})},[]),ze=f.useCallback(function(i){S({type:"SET_ISSUBMITTING",payload:i})},[]),ge=D(function(){return S({type:"SUBMIT_ATTEMPT"}),N().then(function(i){var l=i instanceof Error,p=!l&&Object.keys(i).length===0;if(p){var v;try{if(v=Wr(),v===void 0)return}catch(m){throw m}return Promise.resolve(v).then(function(m){return R.current&&S({type:"SUBMIT_SUCCESS"}),m}).catch(function(m){if(R.current)throw S({type:"SUBMIT_FAILURE"}),m})}else if(R.current&&(S({type:"SUBMIT_FAILURE"}),l))throw i})}),Gr=D(function(i){i&&i.preventDefault&&$(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&$(i.stopPropagation)&&i.stopPropagation(),ge().catch(function(l){console.warn("Warning: An unhandled error was caught from submitForm()",l)})}),Qe={resetForm:Y,validateForm:N,validateField:Be,setErrors:He,setFieldError:Z,setFieldTouched:W,setFieldValue:G,setStatus:qe,setSubmitting:ze,setTouched:xe,setValues:Ge,setFormikState:Ye,submitForm:ge},Wr=D(function(){return F(T.values,Qe)}),Kr=D(function(i){i&&i.preventDefault&&$(i.preventDefault)&&i.preventDefault(),i&&i.stopPropagation&&$(i.stopPropagation)&&i.stopPropagation(),Y()}),Yr=f.useCallback(function(i){return{value:I(T.values,i),error:I(T.errors,i),touched:!!I(T.touched,i),initialValue:I(O.current,i),initialTouched:!!I(_.current,i),initialError:I(j.current,i)}},[T.errors,T.touched,T.values]),qr=f.useCallback(function(i){return{setValue:function(p,v){return G(i,p,v)},setTouched:function(p,v){return W(i,p,v)},setError:function(p){return Z(i,p)}}},[G,W,Z]),zr=f.useCallback(function(i){var l=K(i),p=l?i.name:i,v=I(T.values,p),m={name:p,value:v,onChange:me,onBlur:he};if(l){var g=i.type,C=i.value,V=i.as,Ee=i.multiple;g==="checkbox"?C===void 0?m.checked=!!v:(m.checked=!!(Array.isArray(v)&&~v.indexOf(C)),m.value=C):g==="radio"?(m.checked=v===C,m.value=C):V==="select"&&Ee&&(m.value=m.value||[],m.multiple=!0)}return m},[he,me,T.values]),be=f.useMemo(function(){return!k(O.current,T.values)},[O.current,T.values]),Qr=f.useMemo(function(){return typeof s<"u"?be?T.errors&&Object.keys(T.errors).length===0:s!==!1&&$(s)?s(c):s:T.errors&&Object.keys(T.errors).length===0},[s,be,T.errors,c]),Zr=b({},T,{initialValues:O.current,initialErrors:j.current,initialTouched:_.current,initialStatus:M.current,handleBlur:he,handleChange:me,handleReset:Kr,handleSubmit:Gr,resetForm:Y,setErrors:He,setFormikState:Ye,setFieldTouched:W,setFieldValue:G,setFieldError:Z,setStatus:qe,setSubmitting:ze,setTouched:xe,setValues:Ge,submitForm:ge,validateForm:N,validateField:Be,isValid:Qr,dirty:be,unregisterField:Hr,registerField:xr,getFieldProps:zr,getFieldMeta:Yr,getFieldHelpers:qr,validateOnBlur:t,validateOnChange:n,validateOnMount:u});return Zr}function Va(e){var r=Sa(e),n=e.component,a=e.children,t=e.render,o=e.innerRef;return f.useImperativeHandle(o,function(){return r}),f.createElement(ha,{value:r},n?f.createElement(n,r):t?t(r):a?$(a)?a(r):Vr(a)?null:f.Children.only(a):null)}function Ta(e){var r={};if(e.inner){if(e.inner.length===0)return U(r,e.path,e.message);for(var t=e.inner,n=Array.isArray(t),a=0,t=n?t:t[Symbol.iterator]();;){var o;if(n){if(a>=t.length)break;o=t[a++]}else{if(a=t.next(),a.done)break;o=a.value}var u=o;I(r,u.path)||(r=U(r,u.path,u.message))}}return r}function Aa(e,r,n,a){n===void 0&&(n=!1);var t=Me(e);return r[n?"validateSync":"validate"](t,{abortEarly:!1,context:a||t})}function Me(e){var r=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=String(n);Array.isArray(e[a])===!0?r[a]=e[a].map(function(t){return Array.isArray(t)===!0||er(t)?Me(t):t!==""?t:void 0}):er(e[a])?r[a]=Me(e[a]):r[a]=e[a]!==""?e[a]:void 0}return r}function Fa(e,r,n){var a=e.slice();return r.forEach(function(o,u){if(typeof a[u]>"u"){var s=n.clone!==!1,d=s&&n.isMergeableObject(o);a[u]=d?Ie(Array.isArray(o)?[]:{},o,n):o}else n.isMergeableObject(o)?a[u]=Ie(e[u],o,n):e.indexOf(o)===-1&&a.push(o)}),a}function Ia(e){return Array.from(e).filter(function(r){return r.selected}).map(function(r){return r.value})}function Oa(e,r,n){if(typeof e=="boolean")return!!r;var a=[],t=!1,o=-1;if(Array.isArray(e))a=e,o=e.indexOf(n),t=o>=0;else if(!n||n=="true"||n=="false")return!!r;return r&&n&&!t?a.concat(n):t?a.slice(0,o).concat(a.slice(o+1)):a}var Ma=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function D(e){var r=f.useRef(e);return Ma(function(){r.current=e}),f.useCallback(function(){for(var n=arguments.length,a=new Array(n),t=0;t<n;t++)a[t]=arguments[t];return r.current.apply(void 0,a)},[])}function ka(e){var r=Ne(),n=r.getFieldProps,a=r.getFieldMeta,t=r.getFieldHelpers,o=r.registerField,u=r.unregisterField,s=K(e),d=s?e:{name:e},y=d.name,F=d.validate;f.useEffect(function(){return y&&o(y,{validate:F}),function(){y&&u(y)}},[o,u,y,F]),y||Ce(!1);var h=f.useMemo(function(){return t(y)},[t,y]);return[n(d),a(y),h]}function Ba(e){var r=e.validate,n=e.name,a=e.render,t=e.children,o=e.as,u=e.component,s=e.className,d=B(e,["validate","name","render","children","as","component","className"]),y=Ne(),F=B(y,["validate","validationSchema"]),h=F.registerField,c=F.unregisterField;f.useEffect(function(){return h(n,{validate:r}),function(){c(n)}},[h,c,n,r]);var O=F.getFieldProps(b({name:n},d)),j=F.getFieldMeta(n),_={field:O,form:F};if(a)return a(b({},_,{meta:j}));if($(t))return t(b({},_,{meta:j}));if(u){if(typeof u=="string"){var M=d.innerRef,R=B(d,["innerRef"]);return f.createElement(u,b({ref:M},O,R,{className:s}),t)}return f.createElement(u,b({field:O,form:F},d,{className:s}),t)}var P=o||"input";if(typeof P=="string"){var pe=d.innerRef,ve=B(d,["innerRef"]);return f.createElement(P,b({ref:pe},O,ve,{className:s}),t)}return f.createElement(P,b({},O,d,{className:s}),t)}var Ra=f.forwardRef(function(e,r){var n=e.action,a=B(e,["action"]),t=n??"#",o=Ne(),u=o.handleReset,s=o.handleSubmit;return f.createElement("form",b({onSubmit:s,ref:r,onReset:u,action:t},a))});Ra.displayName="Form";function Ca(e){var r=function(t){return f.createElement(ga,null,function(o){return o||Ce(!1),f.createElement(e,b({},t,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r.WrappedComponent=e,r.displayName="FormikConnect("+n+")",pa(r,e)}var wa=function(r,n,a){var t=H(r),o=t[n];return t.splice(n,1),t.splice(a,0,o),t},_a=function(r,n,a){var t=H(r),o=t[n];return t[n]=t[a],t[a]=o,t},Fe=function(r,n,a){var t=H(r);return t.splice(n,0,a),t},$a=function(r,n,a){var t=H(r);return t[n]=a,t},H=function(r){if(r){if(Array.isArray(r))return[].concat(r);var n=Object.keys(r).map(function(a){return parseInt(a)}).reduce(function(a,t){return t>a?t:a},0);return Array.from(b({},r,{length:n+1}))}else return[]},mr=function(r,n){var a=typeof r=="function"?r:n;return function(t){if(Array.isArray(t)||K(t)){var o=H(t);return a(o)}return t}},ja=function(e){Ur(r,e);function r(a){var t;return t=e.call(this,a)||this,t.updateArrayField=function(o,u,s){var d=t.props,y=d.name,F=d.formik.setFormikState;F(function(h){var c=mr(s,o),O=mr(u,o),j=U(h.values,y,o(I(h.values,y))),_=s?c(I(h.errors,y)):void 0,M=u?O(I(h.touched,y)):void 0;return yr(_)&&(_=void 0),yr(M)&&(M=void 0),b({},h,{values:j,errors:s?U(h.errors,y,_):h.errors,touched:u?U(h.touched,y,M):h.touched})})},t.push=function(o){return t.updateArrayField(function(u){return[].concat(H(u),[ma(o)])},!1,!1)},t.handlePush=function(o){return function(){return t.push(o)}},t.swap=function(o,u){return t.updateArrayField(function(s){return _a(s,o,u)},!0,!0)},t.handleSwap=function(o,u){return function(){return t.swap(o,u)}},t.move=function(o,u){return t.updateArrayField(function(s){return wa(s,o,u)},!0,!0)},t.handleMove=function(o,u){return function(){return t.move(o,u)}},t.insert=function(o,u){return t.updateArrayField(function(s){return Fe(s,o,u)},function(s){return Fe(s,o,null)},function(s){return Fe(s,o,null)})},t.handleInsert=function(o,u){return function(){return t.insert(o,u)}},t.replace=function(o,u){return t.updateArrayField(function(s){return $a(s,o,u)},!1,!1)},t.handleReplace=function(o,u){return function(){return t.replace(o,u)}},t.unshift=function(o){var u=-1;return t.updateArrayField(function(s){var d=s?[o].concat(s):[o];return u=d.length,d},function(s){return s?[null].concat(s):[null]},function(s){return s?[null].concat(s):[null]}),u},t.handleUnshift=function(o){return function(){return t.unshift(o)}},t.handleRemove=function(o){return function(){return t.remove(o)}},t.handlePop=function(){return function(){return t.pop()}},t.remove=t.remove.bind(vr(t)),t.pop=t.pop.bind(vr(t)),t}var n=r.prototype;return n.componentDidUpdate=function(t){this.props.validateOnChange&&this.props.formik.validateOnChange&&!k(I(t.formik.values,t.name),I(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(t){var o;return this.updateArrayField(function(u){var s=u?H(u):[];return o||(o=s[t]),$(s.splice)&&s.splice(t,1),$(s.every)&&s.every(function(d){return d===void 0})?[]:s},!0,!0),o},n.pop=function(){var t;return this.updateArrayField(function(o){var u=o.slice();return t||(t=u&&u.pop&&u.pop()),u},!0,!0),t},n.render=function(){var t={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,u=o.component,s=o.render,d=o.children,y=o.name,F=o.formik,h=B(F,["validate","validationSchema"]),c=b({},t,{form:h,name:y});return u?f.createElement(u,c):s?s(c):d?typeof d=="function"?d(c):Vr(d)?null:f.Children.only(d):null},r}(f.Component);ja.defaultProps={validateOnChange:!0};var La=function(e){Ur(r,e);function r(){return e.apply(this,arguments)||this}var n=r.prototype;return n.shouldComponentUpdate=function(t){return I(this.props.formik.errors,this.props.name)!==I(t.formik.errors,this.props.name)||I(this.props.formik.touched,this.props.name)!==I(t.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(t).length},n.render=function(){var t=this.props,o=t.component,u=t.formik,s=t.render,d=t.children,y=t.name,F=B(t,["component","formik","render","children","name"]),h=I(u.touched,y),c=I(u.errors,y);return h&&c?s?$(s)?s(c):null:d?$(d)?d(c):null:o?f.createElement(o,F,c):c:null},r}(f.Component),xa=Ca(La);export{xa as E,Va as F,Ra as a,Ba as b,ka as u};
