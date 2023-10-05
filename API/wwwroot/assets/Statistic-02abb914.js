import{_ as q,G as D,a as L}from"./Item-4c555159.js";import{f as t,g as C,z as S,h as w,j as A,l as d,n as z,S as k,o as V,aF as B,_ as O,aL as H,aq as R,U as J,at as Q,ao as X}from"./index-66c688c3.js";var h=t.forwardRef(function(e,n){var a=e.active,r=e.children,c=e.className,i=e.content,o=e.loading,l=C(S(a,"active"),S(o,"loading"),"tab",c),u=w(h,e),y=A(h,e),N={};return y===k&&(N.attached="bottom"),t.createElement(y,d({},N,u,{className:l,ref:n}),z(r)?i:r)});h.handledProps=["active","as","children","className","content","loading"];h.defaultProps={as:k,active:!0};h.displayName="TabPane";h.propTypes={};h.create=V(h,function(e){return{content:e}});const M=h;var f=t.forwardRef(function(e,n){var a=e.grid,r=e.menu,c=e.panes,i=e.menuPosition,o=e.renderActiveOnly,l=B({state:e.activeIndex,defaultState:e.defaultActiveIndex,initialState:0}),u=l[0],y=l[1],N=function(g,W){var E=W.index;O(e,"onTabChange",g,d({},e,{activeIndex:E})),y(E)},b=function(){return o?O(H(c,"["+u+"]"),"render",e):R(c,function(g,W){var E=g.pane;return M.create(E,{overrideProps:{active:W===u}})})},T=function(){return r.tabular===!0&&i==="right"&&(r.tabular="right"),J.create(r,{autoGenerateKey:!1,overrideProps:{items:R(c,"menuItem"),onItemClick:N,activeIndex:u}})},v=function(g){var W=a.paneWidth,E=a.tabWidth,U=q(a,["paneWidth","tabWidth"]),$=i||g.props.tabular==="right"&&"right"||"left";return t.createElement(D,U,$==="left"&&L.create({width:E,children:g},{autoGenerateKey:!1}),L.create({width:W,children:b(),stretched:!0},{autoGenerateKey:!1}),$==="right"&&L.create({width:E,children:g},{autoGenerateKey:!1}))};v.handledProps=[];var s=T(),I=w(f,e),_=A(f,e);return s.props.vertical?t.createElement(_,d({},I,{ref:n}),v(s)):t.createElement(_,d({},I,{ref:n}),s.props.attached!=="bottom"&&s,b(),s.props.attached==="bottom"&&s)});f.handledProps=["activeIndex","as","defaultActiveIndex","grid","menu","menuPosition","onTabChange","panes","renderActiveOnly"];f.displayName="Tab";f.propTypes={};f.autoControlledProps=["activeIndex"];f.defaultProps={grid:{paneWidth:12,tabWidth:4},menu:{attached:!0,tabular:!0},renderActiveOnly:!0};f.Pane=M;const te=f;var G=t.forwardRef(function(e,n){var a=e.children,r=e.className,c=e.color,i=e.content,o=e.horizontal,l=e.inverted,u=e.items,y=e.size,N=e.widths,b=C("ui",c,y,S(o,"horizontal"),S(l,"inverted"),Q(N),"statistics",r),T=w(G,e),v=A(G,e);return z(a)?z(i)?t.createElement(v,d({},T,{className:b,ref:n}),R(u,function(s){return Z.create(s)})):t.createElement(v,d({},T,{className:b,ref:n}),i):t.createElement(v,d({},T,{className:b,ref:n}),a)});G.handledProps=["as","children","className","color","content","horizontal","inverted","items","size","widths"];G.displayName="StatisticGroup";G.propTypes={};const Y=G;var P=t.forwardRef(function(e,n){var a=e.children,r=e.className,c=e.content,i=C("label",r),o=w(P,e),l=A(P,e);return t.createElement(l,d({},o,{className:i,ref:n}),z(a)?c:a)});P.handledProps=["as","children","className","content"];P.displayName="StatisticLabel";P.propTypes={};P.create=V(P,function(e){return{content:e}});const j=P;var x=t.forwardRef(function(e,n){var a=e.children,r=e.className,c=e.content,i=e.text,o=C(S(i,"text"),"value",r),l=w(x,e),u=A(x,e);return t.createElement(u,d({},l,{className:o,ref:n}),z(a)?c:a)});x.handledProps=["as","children","className","content","text"];x.displayName="StatisticValue";x.propTypes={};x.create=V(x,function(e){return{content:e}});const F=x;var m=t.forwardRef(function(e,n){var a=e.children,r=e.className,c=e.color,i=e.content,o=e.floated,l=e.horizontal,u=e.inverted,y=e.label,N=e.size,b=e.text,T=e.value,v=C("ui",c,N,X(o,"floated"),S(l,"horizontal"),S(u,"inverted"),"statistic",r),s=w(m,e),I=A(m,e);return z(a)?z(i)?t.createElement(I,d({},s,{className:v,ref:n}),F.create(T,{defaultProps:{text:b},autoGenerateKey:!1}),j.create(y,{autoGenerateKey:!1})):t.createElement(I,d({},s,{className:v,ref:n}),i):t.createElement(I,d({},s,{className:v,ref:n}),a)});m.handledProps=["as","children","className","color","content","floated","horizontal","inverted","label","size","text","value"];m.displayName="Statistic";m.propTypes={};m.Group=Y;m.Label=j;m.Value=F;m.create=V(m,function(e){return{content:e}});const Z=m;export{Z as S,te as T,M as a,Y as b,j as c,F as d};
