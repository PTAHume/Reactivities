import{f as s,g,h as N,j as y,l as h,n as M,o as T,aq as B,z as n,y as Q,ap as W,_ as X,J as $,p as E,bL as Y}from"./index-a9b4d80b.js";var u=s.forwardRef(function(e,t){var a=e.children,c=e.className,l=e.content,d=g("content",c),m=N(u,e),r=y(u,e);return s.createElement(r,h({},m,{className:d,ref:t}),M(a)?l:a)});u.handledProps=["as","children","className","content"];u.displayName="MessageContent";u.propTypes={};const D=u;var v=s.forwardRef(function(e,t){var a=e.children,c=e.className,l=e.content,d=g("header",c),m=N(v,e),r=y(v,e);return s.createElement(r,h({},m,{className:d,ref:t}),M(a)?l:a)});v.handledProps=["as","children","className","content"];v.displayName="MessageHeader";v.propTypes={};v.create=T(v,function(e){return{content:e}});const H=v;var o=s.forwardRef(function(e,t){var a=e.children,c=e.className,l=e.content,d=g("content",c),m=N(o,e),r=y(o,e);return s.createElement(r,h({},m,{className:d,ref:t}),M(a)?l:a)});o.handledProps=["as","children","className","content"];o.displayName="MessageItem";o.propTypes={};o.defaultProps={as:"li"};o.create=T(o,function(e){return{content:e}});const R=o;var f=s.forwardRef(function(e,t){var a=e.children,c=e.className,l=e.items,d=g("list",c),m=N(f,e),r=y(f,e);return s.createElement(r,h({},m,{className:d,ref:t}),M(a)?B(l,R.create):a)});f.handledProps=["as","children","className","items"];f.displayName="MessageList";f.propTypes={};f.defaultProps={as:"ul"};f.create=T(f,function(e){return{items:e}});const z=f;var i=s.forwardRef(function(e,t){var a=e.attached,c=e.children,l=e.className,d=e.color,m=e.compact,r=e.content,G=e.error,k=e.floating,w=e.header,x=e.hidden,P=e.icon,_=e.info,b=e.list,O=e.negative,j=e.onDismiss,q=e.positive,A=e.size,F=e.success,J=e.visible,S=e.warning,K=g("ui",d,A,n(m,"compact"),n(G,"error"),n(k,"floating"),n(x,"hidden"),n(P,"icon"),n(_,"info"),n(O,"negative"),n(q,"positive"),n(F,"success"),n(J,"visible"),n(S,"warning"),Q(a,"attached"),"message",l),C=N(i,e),I=y(i,e),U=W(function(V){X(e,"onDismiss",V,e)}),L=j&&s.createElement($,{name:"close",onClick:U});return M(c)?s.createElement(I,h({},C,{className:K,ref:t}),L,$.create(P,{autoGenerateKey:!1}),(!E(w)||!E(r)||!E(b))&&s.createElement(D,null,H.create(w,{autoGenerateKey:!1}),z.create(b,{autoGenerateKey:!1}),Y(r,{autoGenerateKey:!1}))):s.createElement(I,h({},C,{className:K,ref:t}),L,c)});i.handledProps=["as","attached","children","className","color","compact","content","error","floating","header","hidden","icon","info","list","negative","onDismiss","positive","size","success","visible","warning"];i.displayName="Message";i.propTypes={};i.Content=D;i.Header=H;i.List=z;i.Item=R;const p=i;export{p as M,D as a,H as b,R as c,z as d};
