import{f as t,g,at as A,an as V,ao as Y,au as W,av as O,z as v,h as N,j as x,l as s,o as j,y as H,n as b,aq as Z,I as p}from"./index-4df27b20.js";var T=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.computer,l=e.color,d=e.floated,i=e.largeScreen,f=e.mobile,y=e.only,m=e.stretched,o=e.tablet,u=e.textAlign,$=e.verticalAlign,I=e.widescreen,w=e.width,E=g(l,v(m,"stretched"),O(y,"only"),W(u),Y(d,"floated"),V($),A(r,"wide computer"),A(i,"wide large screen"),A(f,"wide mobile"),A(o,"wide tablet"),A(I,"wide widescreen"),A(w,"wide"),"column",c),D=N(T,e),_=x(T,e);return t.createElement(_,s({},D,{className:E,ref:n}),a)});T.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"];T.displayName="GridColumn";T.propTypes={};T.create=j(T,function(e){return{children:e}});const ee=T;var z=t.forwardRef(function(e,n){var a=e.centered,c=e.children,r=e.className,l=e.color,d=e.columns,i=e.divided,f=e.only,y=e.reversed,m=e.stretched,o=e.textAlign,u=e.verticalAlign,$=g(l,v(a,"centered"),v(i,"divided"),v(m,"stretched"),O(f,"only"),O(y,"reversed"),W(o),V(u),A(d,"column",!0),"row",r),I=N(z,e),w=x(z,e);return t.createElement(w,s({},I,{className:$,ref:n}),c)});z.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"];z.displayName="GridRow";z.propTypes={};const ae=z;var G=t.forwardRef(function(e,n){var a=e.celled,c=e.centered,r=e.children,l=e.className,d=e.columns,i=e.container,f=e.divided,y=e.doubling,m=e.inverted,o=e.padded,u=e.relaxed,$=e.reversed,I=e.stackable,w=e.stretched,E=e.textAlign,D=e.verticalAlign,_=g("ui",v(c,"centered"),v(i,"container"),v(y,"doubling"),v(m,"inverted"),v(I,"stackable"),v(w,"stretched"),H(a,"celled"),H(f,"divided"),H(o,"padded"),H(u,"relaxed"),O($,"reversed"),W(E),V(D),A(d,"column",!0),"grid",l),B=N(G,e),Q=x(G,e);return t.createElement(Q,s({},B,{className:_,ref:n}),r)});G.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"];G.Column=ee;G.Row=ae;G.displayName="Grid";G.propTypes={};const le=G;function te(e,n){if(e==null)return{};var a={},c=Object.keys(e),r,l;for(l=0;l<c.length;l++)r=c[l],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}var P=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=g("header",c),d=N(P,e),i=x(P,e);return t.createElement(i,s({},d,{className:l,ref:n}),b(a)?r:a)});P.handledProps=["as","children","className","content"];P.displayName="ItemHeader";P.propTypes={};P.create=j(P,function(e){return{content:e}});const q=P;var k=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=g("description",c),d=N(k,e),i=x(k,e);return t.createElement(i,s({},d,{className:l,ref:n}),b(a)?r:a)});k.handledProps=["as","children","className","content"];k.displayName="ItemDescription";k.propTypes={};k.create=j(k,function(e){return{content:e}});const F=k;var R=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=g("extra",c),d=N(R,e),i=x(R,e);return t.createElement(i,s({},d,{className:l,ref:n}),b(a)?r:a)});R.handledProps=["as","children","className","content"];R.displayName="ItemExtra";R.propTypes={};R.create=j(R,function(e){return{content:e}});const J=R;var K=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=g("meta",c),d=N(K,e),i=x(K,e);return t.createElement(i,s({},d,{className:l,ref:n}),b(a)?r:a)});K.handledProps=["as","children","className","content"];K.displayName="ItemMeta";K.propTypes={};K.create=j(K,function(e){return{content:e}});const L=K;var M=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=e.description,d=e.extra,i=e.header,f=e.meta,y=e.verticalAlign,m=g(V(y),"content",c),o=N(M,e),u=x(M,e);return b(a)?t.createElement(u,s({},o,{className:m,ref:n}),q.create(i,{autoGenerateKey:!1}),L.create(f,{autoGenerateKey:!1}),F.create(l,{autoGenerateKey:!1}),J.create(d,{autoGenerateKey:!1}),r):t.createElement(u,s({},o,{className:m,ref:n}),a)});M.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"];M.displayName="ItemContent";M.propTypes={};const U=M;var S=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=e.divided,d=e.items,i=e.link,f=e.relaxed,y=e.unstackable,m=g("ui",v(l,"divided"),v(i,"link"),v(y,"unstackable"),H(f,"relaxed"),"items",c),o=N(S,e),u=x(S,e);if(!b(a))return t.createElement(u,s({},o,{className:m,ref:n}),a);if(!b(r))return t.createElement(u,s({},o,{className:m,ref:n}),r);var $=Z(d,function(I){var w=I.childKey,E=te(I,["childKey"]),D=w??[E.content,E.description,E.header,E.meta].join("-");return t.createElement(re,s({},E,{key:D}))});return t.createElement(u,s({},o,{className:m,ref:n}),$)});S.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"];S.displayName="ItemGroup";S.propTypes={};const ne=S;var C=t.forwardRef(function(e,n){var a=e.size,c=N(C,e);return t.createElement(p,s({},c,{size:a,ui:!!a,wrapped:!0,ref:n}))});C.handledProps=["size"];C.displayName="ItemImage";C.propTypes={};C.create=j(C,function(e){return{src:e}});const X=C;var h=t.forwardRef(function(e,n){var a=e.children,c=e.className,r=e.content,l=e.description,d=e.extra,i=e.header,f=e.image,y=e.meta,m=g("item",c),o=N(h,e),u=x(h,e);return b(a)?t.createElement(u,s({},o,{className:m,ref:n}),X.create(f,{autoGenerateKey:!1}),t.createElement(U,{content:r,description:l,extra:d,header:i,meta:y})):t.createElement(u,s({},o,{className:m,ref:n}),a)});h.handledProps=["as","children","className","content","description","extra","header","image","meta"];h.Content=U;h.Description=F;h.Extra=J;h.Group=ne;h.Header=q;h.Image=X;h.Meta=L;h.displayName="Item";h.propTypes={};const re=h;export{le as G,re as I,te as _,ee as a,ae as b,U as c,F as d,J as e,ne as f,q as g,X as h,L as i};