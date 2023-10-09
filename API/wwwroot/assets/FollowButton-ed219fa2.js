import{f as u,g as w,z as a,h as y,j as x,l as R,n as E,C as F,N as z,r as P,D as g,M as C}from"./index-a9b4d80b.js";var h=u.forwardRef(function(e,r){var i=e.children,c=e.className,n=e.clearing,t=e.content,s=e.fitted,o=e.hidden,d=e.horizontal,l=e.inverted,m=e.section,f=e.vertical,T=w("ui",a(n,"clearing"),a(s,"fitted"),a(o,"hidden"),a(d,"horizontal"),a(l,"inverted"),a(m,"section"),a(f,"vertical"),"divider",c),j=y(h,e),D=x(h,e);return u.createElement(D,R({},j,{className:T,ref:r}),E(i)?t:i)});h.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"];h.displayName="Divider";h.propTypes={};const $=h;var N=u.forwardRef(function(e,r){var i=e.children,c=e.className,n=e.content,t=e.hidden,s=e.visible,o=w("ui",a(t,"hidden"),a(s,"visible"),"content",c),d=y(N,e),l=x(N,e);return u.createElement(l,R({},d,{className:o,ref:r}),E(i)?n:i)});N.handledProps=["as","children","className","content","hidden","visible"];N.displayName="RevealContent";N.propTypes={};const S=N;var v=u.forwardRef(function(e,r){var i=e.active,c=e.animated,n=e.children,t=e.className,s=e.content,o=e.disabled,d=e.instant,l=w("ui",c,a(i,"active"),a(o,"disabled"),a(d,"instant"),"reveal",t),m=y(v,e),f=x(v,e);return u.createElement(f,R({},m,{className:l,ref:r}),E(n)?s:n)});v.handledProps=["active","animated","as","children","className","content","disabled","instant"];v.displayName="Reveal";v.propTypes={};v.Content=S;const b=v,U=F(({profile:e})=>{var d;const{profileStore:r,userStore:i}=z(),{updateFollowing:c,loading:n}=r,[t,s]=P.useState("");if(((d=i.user)==null?void 0:d.userName)==e.userName)return null;const o=(l,m)=>{l.preventDefault(),s(m),c(m,!e.following).then(()=>{s("")})};return g.jsxs(b,{animated:"move",children:[g.jsx(b.Content,{visible:!0,children:g.jsx(C,{fluid:!0,color:"teal",name:e.userName,content:e.following?"Following":"Not Following",loading:t===e.userName&&n,disabled:t===e.userName&&n})}),g.jsx(b.Content,{hidden:!0,children:g.jsx(C,{fluid:!0,basic:!0,name:e.userName,color:e.following?"red":"green",content:e.following?"Un-follow":"Follow",loading:t===e.userName&&n,disabled:t===e.userName&&n,onClick:l=>{o(l,e.userName)}})})]})});export{$ as D,U as F,b as R,S as a};
