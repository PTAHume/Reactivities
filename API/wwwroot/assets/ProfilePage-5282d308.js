import{C as u,D as e,S as h,O as P,F as o,G as r,N as _,aj as f,r as v}from"./index-66c688c3.js";import{G as t,I as l}from"./Item-4c555159.js";import{D as p,F as g}from"./FollowButton-7bd7ed0f.js";import{S as m,T as x}from"./Statistic-02abb914.js";const E=u(({profile:s})=>e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(t.Column,{width:12,children:e.jsx(l.Group,{children:e.jsxs(l,{children:[e.jsx(l.Image,{avatar:!0,size:"small",src:s.image??"/assets/user.png"}),e.jsx(l.Content,{verticalAlign:"middle",children:e.jsx(P,{as:"h1",content:s.displayName})})]})})}),e.jsxs(t.Column,{width:4,children:[e.jsxs(m.Group,{widths:2,children:[e.jsx(m,{label:"Followers",value:s.followersCount}),e.jsx(m,{label:"Following",value:s.followingCount})]}),e.jsx(p,{}),e.jsx(g,{profile:s})]})]})})),{ProfileAbout:I}=o(()=>r(()=>import("./ProfileAbout-beb1cdd0.js"),["assets/ProfileAbout-beb1cdd0.js","assets/index-66c688c3.js","assets/index-2376a3f3.css","assets/Item-4c555159.js","assets/Statistic-02abb914.js","assets/formik.esm-36a92856.js","assets/tiny-warning.esm-c932d744.js","assets/_copyArray-fdfd9b49.js","assets/index.esm-151eb6f3.js","assets/InputControl-7f64b1b7.js","assets/Form-80e0837a.js","assets/TextAreaControl-849fac92.js"])),{ProfilePhotos:w}=o(()=>r(()=>import("./ProfilePhotos-5df082ee.js"),["assets/ProfilePhotos-5df082ee.js","assets/index-66c688c3.js","assets/index-2376a3f3.css","assets/Item-4c555159.js","assets/Statistic-02abb914.js","assets/Card-0ff38e69.js"])),{ProfileFollowings:j}=o(()=>r(()=>import("./ProfileFollowings-59d03e57.js"),["assets/ProfileFollowings-59d03e57.js","assets/index-66c688c3.js","assets/index-2376a3f3.css","assets/Item-4c555159.js","assets/Statistic-02abb914.js","assets/Card-0ff38e69.js","assets/ProfileCard-64b8b6d4.js","assets/FollowButton-7bd7ed0f.js"])),{ProfileActivities:A}=o(()=>r(()=>import("./ProfileActivities-83cab214.js"),["assets/ProfileActivities-83cab214.js","assets/index-66c688c3.js","assets/index-2376a3f3.css","assets/Item-4c555159.js","assets/Statistic-02abb914.js","assets/Card-0ff38e69.js"])),C=u(({profile:s})=>{const{profileStore:a}=_(),d=[{menuItem:"About",render:()=>e.jsx(x.Pane,{children:e.jsx(I,{})})},{menuItem:"Photos",render:()=>e.jsx(w,{profile:s})},{menuItem:"Events",render:()=>e.jsx(A,{})},{menuItem:"Followers",render:()=>e.jsx(j,{})},{menuItem:"Following",render:()=>e.jsx(j,{})}];return e.jsx(x,{menu:{fluid:!0,vertical:!0},menuPosition:"right",panes:d,onTabChange:(n,i)=>{a.setActiveTab(i.activeIndex)}})}),{LoadingComponent:T}=o(()=>r(()=>import("./index-66c688c3.js").then(s=>s.c5),["assets/index-66c688c3.js","assets/index-2376a3f3.css"])),S=u(()=>{const{username:s}=f(),{profileStore:a}=_(),{loadingProfile:d,profile:n,loadProfile:i,setActiveTab:c}=a;return v.useEffect(()=>(s!=null&&i(s),()=>{c(0)}),[i,c,s]),d?e.jsx(T,{content:"Loading Profile..."}):e.jsx(t,{children:e.jsx(t.Column,{width:16,children:n&&e.jsxs(e.Fragment,{children:[e.jsx(E,{profile:n}),e.jsx(C,{profile:n})]})})})});export{S as ProfilePage};