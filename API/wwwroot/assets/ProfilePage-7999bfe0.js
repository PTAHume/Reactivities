import{C as u,D as e,S as h,O as P,F as o,G as r,N as _,aj as f,r as v}from"./index-f950316b.js";import{G as t,I as l}from"./Item-8d555df0.js";import{D as p,F as g}from"./FollowButton-4eadb1a0.js";import{S as m,T as x}from"./Statistic-384135f8.js";const E=u(({profile:s})=>e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(t.Column,{width:12,children:e.jsx(l.Group,{children:e.jsxs(l,{children:[e.jsx(l.Image,{avatar:!0,size:"small",src:s.image??"/assets/user.png"}),e.jsx(l.Content,{verticalAlign:"middle",children:e.jsx(P,{as:"h1",content:s.displayName})})]})})}),e.jsxs(t.Column,{width:4,children:[e.jsxs(m.Group,{widths:2,children:[e.jsx(m,{label:"Followers",value:s.followersCount}),e.jsx(m,{label:"Following",value:s.followingCount})]}),e.jsx(p,{}),e.jsx(g,{profile:s})]})]})})),{ProfileAbout:I}=o(()=>r(()=>import("./ProfileAbout-2365f3d8.js"),["assets/ProfileAbout-2365f3d8.js","assets/index-f950316b.js","assets/index-2376a3f3.css","assets/Item-8d555df0.js","assets/Statistic-384135f8.js","assets/formik.esm-3e766a07.js","assets/tiny-warning.esm-c932d744.js","assets/_copyArray-fd83baf0.js","assets/index.esm-ab6d9096.js","assets/InputControl-c2de6ed0.js","assets/Form-a7b9fecf.js","assets/TextAreaControl-4543cf73.js"])),{ProfilePhotos:w}=o(()=>r(()=>import("./ProfilePhotos-c6e3b7ec.js"),["assets/ProfilePhotos-c6e3b7ec.js","assets/index-f950316b.js","assets/index-2376a3f3.css","assets/Item-8d555df0.js","assets/Statistic-384135f8.js","assets/Card-e024537d.js"])),{ProfileFollowings:j}=o(()=>r(()=>import("./ProfileFollowings-9b2e468b.js"),["assets/ProfileFollowings-9b2e468b.js","assets/index-f950316b.js","assets/index-2376a3f3.css","assets/Item-8d555df0.js","assets/Statistic-384135f8.js","assets/Card-e024537d.js","assets/ProfileCard-5bd0a234.js","assets/FollowButton-4eadb1a0.js"])),{ProfileActivities:A}=o(()=>r(()=>import("./ProfileActivities-183f2ca9.js"),["assets/ProfileActivities-183f2ca9.js","assets/index-f950316b.js","assets/index-2376a3f3.css","assets/Item-8d555df0.js","assets/Statistic-384135f8.js","assets/Card-e024537d.js"])),C=u(({profile:s})=>{const{profileStore:a}=_(),d=[{menuItem:"About",render:()=>e.jsx(x.Pane,{children:e.jsx(I,{})})},{menuItem:"Photos",render:()=>e.jsx(w,{profile:s})},{menuItem:"Events",render:()=>e.jsx(A,{})},{menuItem:"Followers",render:()=>e.jsx(j,{})},{menuItem:"Following",render:()=>e.jsx(j,{})}];return e.jsx(x,{menu:{fluid:!0,vertical:!0},menuPosition:"right",panes:d,onTabChange:(n,i)=>{a.setActiveTab(i.activeIndex)}})}),{LoadingComponent:T}=o(()=>r(()=>import("./index-f950316b.js").then(s=>s.c5),["assets/index-f950316b.js","assets/index-2376a3f3.css"])),S=u(()=>{const{username:s}=f(),{profileStore:a}=_(),{loadingProfile:d,profile:n,loadProfile:i,setActiveTab:c}=a;return v.useEffect(()=>(s!=null&&i(s),()=>{c(0)}),[i,c,s]),d?e.jsx(T,{content:"Loading Profile..."}):e.jsx(t,{children:e.jsx(t.Column,{width:16,children:n&&e.jsxs(e.Fragment,{children:[e.jsx(E,{profile:n}),e.jsx(C,{profile:n})]})})})});export{S as ProfilePage};
