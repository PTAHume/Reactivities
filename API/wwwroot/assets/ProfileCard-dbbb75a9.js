import{C as i,D as s,L as l,I as c,J as t}from"./index-0327f46b.js";import{G as o}from"./Item-44509083.js";import{C as e}from"./Card-49ed613f.js";import{F as m}from"./FollowButton-88a0f002.js";const h=i(({profile:n})=>{function a(r){if(r)return r.length>40?r.substring(0,37)+"...":r}return s.jsxs(e,{as:l,to:`/profiles/${n.userName}`,children:[s.jsx(c,{src:n.image??"/assets/user.png"}),s.jsxs(e.Content,{children:[s.jsx(e.Header,{children:n.displayName}),s.jsx(e.Description,{children:a(n.bio)})]}),s.jsx(e.Content,{extra:!0,children:s.jsxs(o,{children:[s.jsx(o.Column,{width:3,children:s.jsxs("span",{style:{whiteSpace:"nowrap"},children:[s.jsx(t,{name:"user"}),n.followersCount]})}),s.jsx(o.Column,{width:13,style:{color:"orange"},children:n.following&&s.jsxs(s.Fragment,{children:[s.jsx(t,{name:"info",color:"orange"}),"You're Following"]})})]})}),s.jsx(m,{profile:n})]})});export{h as P};
