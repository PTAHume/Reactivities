import{C as t,N as m,D as o,O as d}from"./index-c22b6146.js";import{G as s}from"./Item-ba24dadd.js";import{T as p}from"./Statistic-b393ae5b.js";import{C as c}from"./Card-b26a86e8.js";import{P as f}from"./ProfileCard-f9339fd4.js";import"./FollowButton-ba96a83e.js";const P=t(()=>{const{profileStore:i}=m(),{profile:r,followings:l,loadingFollowings:a,activeTab:n}=i;return o.jsx(p.Pane,{loading:a,children:o.jsxs(s,{children:[o.jsx(s.Column,{width:16,children:o.jsx(d,{floated:"left",icon:"user",content:n===3?`People following ${r==null?void 0:r.displayName}`:`People ${r==null?void 0:r.displayName} is following`})}),o.jsx(s.Column,{width:16,children:o.jsx(c.Group,{itemsPerRow:4,children:l.map(e=>o.jsx(f,{profile:e},e.userName))})})]})})});export{P as ProfileFollowings};