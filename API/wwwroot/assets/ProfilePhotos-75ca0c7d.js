import{F as b,G as _,C as T,N as G,r as m,D as t,O as S,M as a,I as w}from"./index-a9b4d80b.js";import{G as i}from"./Item-73c99ef0.js";import{T as E}from"./Statistic-4f41ac0c.js";import{C as h}from"./Card-29aca292.js";const{PhotoUploadWidget:k}=b(()=>_(()=>import("./PhotoUploadWidget-37853ac9.js"),["assets/PhotoUploadWidget-37853ac9.js","assets/index-a9b4d80b.js","assets/index-2376a3f3.css","assets/Item-73c99ef0.js","assets/PhotoUploadWidget-7419092a.css"])),R=T(({profile:P})=>{var u;const{profileStore:{isCurrentUser:n,uploadPhoto:x,uploading:g,loading:s,setMainPhoto:j,deletePhoto:f}}=G(),[r,d]=m.useState(!1),[l,c]=m.useState(""),C=e=>{x(e).then(()=>{d(!1)})},p=(e,o)=>{c(o.currentTarget.name),j(e)},M=(e,o)=>{c(o.currentTarget.name),f(e)};return t.jsx(E.Pane,{children:t.jsxs(i,{children:[t.jsxs(i.Column,{width:16,children:[t.jsx(S,{floated:"left",icon:"image",content:"Photos"}),n&&t.jsx(a,{floated:"right",basic:!0,content:r?"Cancel":"Add Photo",onClick:()=>{d(!r)}})]}),t.jsx(i.Column,{width:16,children:r?t.jsx(k,{uploadPhoto:C,loading:g}):t.jsx(h.Group,{itemsPerRow:5,children:(u=P.photos)==null?void 0:u.map(e=>t.jsxs(h,{children:[t.jsx(w,{src:e.url}),n&&t.jsxs(a.Group,{fluid:!0,width:2,children:[t.jsx(a,{basic:!0,color:"green",content:"Main",name:"main"+e.id,disabled:e.isMain||s,loading:l==="main"+e.id&&s,onClick:o=>{p(e,o)}}),t.jsx(a,{basic:!0,color:"red",icon:"trash",name:e.id,disabled:e.isMain||s,loading:l===e.id&&s,onClick:o=>{M(e,o)}})]})]},e.id))})})]})})});export{R as ProfilePhotos};
