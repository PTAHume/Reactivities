import{f as a,g as T,au as G,h as P,j as b,l as c,n as N,z as C,bc as _,at as J,aq as O,ap as U,_ as W,I as X}from"./index-0327f46b.js";var g=a.forwardRef(function(e,t){var n=e.children,r=e.className,l=e.content,i=e.textAlign,s=T(G(i),"description",r),d=P(g,e),m=b(g,e);return a.createElement(m,c({},d,{className:s,ref:t}),N(n)?l:n)});g.handledProps=["as","children","className","content","textAlign"];g.displayName="CardDescription";g.propTypes={};const I=g;var x=a.forwardRef(function(e,t){var n=e.children,r=e.className,l=e.content,i=e.textAlign,s=T(G(i),"header",r),d=P(x,e),m=b(x,e);return a.createElement(m,c({},d,{className:s,ref:t}),N(n)?l:n)});x.handledProps=["as","children","className","content","textAlign"];x.displayName="CardHeader";x.propTypes={};const S=x;var E=a.forwardRef(function(e,t){var n=e.children,r=e.className,l=e.content,i=e.textAlign,s=T(G(i),"meta",r),d=P(E,e),m=b(E,e);return a.createElement(m,c({},d,{className:s,ref:t}),N(n)?l:n)});E.handledProps=["as","children","className","content","textAlign"];E.displayName="CardMeta";E.propTypes={};const q=E;var k=a.forwardRef(function(e,t){var n=e.children,r=e.className,l=e.content,i=e.description,s=e.extra,d=e.header,m=e.meta,w=e.textAlign,v=T(C(s,"extra"),G(w),"content",r),o=P(k,e),h=b(k,e);return N(n)?N(l)?a.createElement(h,c({},o,{className:v,ref:t}),_(S,function(u){return{content:u}},d,{autoGenerateKey:!1}),_(q,function(u){return{content:u}},m,{autoGenerateKey:!1}),_(I,function(u){return{content:u}},i,{autoGenerateKey:!1})):a.createElement(h,c({},o,{className:v,ref:t}),l):a.createElement(h,c({},o,{className:v,ref:t}),n)});k.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"];k.displayName="CardContent";k.propTypes={};const j=k;var A=a.forwardRef(function(e,t){var n=e.centered,r=e.children,l=e.className,i=e.content,s=e.doubling,d=e.items,m=e.itemsPerRow,w=e.stackable,v=e.textAlign,o=T("ui",C(n,"centered"),C(s,"doubling"),C(w,"stackable"),G(v),J(m),"cards",l),h=P(A,e),u=b(A,e);if(!N(r))return a.createElement(u,c({},h,{className:o,ref:t}),r);if(!N(i))return a.createElement(u,c({},h,{className:o,ref:t}),i);var $=O(d,function(y){var K,R=(K=y.key)!=null?K:[y.header,y.description].join("-");return a.createElement(F,c({key:R},y))});return a.createElement(u,c({},h,{className:o,ref:t}),$)});A.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"];A.displayName="CardGroup";A.propTypes={};const B=A;var f=a.forwardRef(function(e,t){var n=e.centered,r=e.children,l=e.className,i=e.color,s=e.content,d=e.description,m=e.extra,w=e.fluid,v=e.header,o=e.href,h=e.image,u=e.link,$=e.meta,y=e.onClick,K=e.raised,R=T("ui",i,C(n,"centered"),C(w,"fluid"),C(u,"link"),C(K,"raised"),"card",l),D=P(f,e),H=b(f,e,function(){if(y)return"a"}),M=U(function(z){W(e,"onClick",z,e)});return N(r)?N(s)?a.createElement(H,c({},D,{className:R,href:o,onClick:M,ref:t}),X.create(h,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(d||v||$)&&a.createElement(j,{description:d,header:v,meta:$}),m&&a.createElement(j,{extra:!0},m)):a.createElement(H,c({},D,{className:R,href:o,onClick:M,ref:t}),s):a.createElement(H,c({},D,{className:R,href:o,onClick:M,ref:t}),r)});f.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"];f.displayName="Card";f.propTypes={};f.Content=j;f.Description=I;f.Group=B;f.Header=S;f.Meta=q;const F=f;export{F as C,j as a,I as b,B as c,S as d,q as e};
