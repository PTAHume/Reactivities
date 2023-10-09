import{F as g,G as h,r as p,D as r,O as x,S as m,M as t,ar as o}from"./index-4df27b20.js";const{ValidationErrors:j}=g(()=>h(()=>import("./ValidationErrors-5b7fe926.js"),["assets/ValidationErrors-5b7fe926.js","assets/index-4df27b20.js","assets/index-2376a3f3.css","assets/Message-c9b4e447.js"])),b=()=>{const[n,s]=p.useState(null);function a(){o.get("/buggy/not-found").catch(e=>{console.log(e.response)})}function i(){o.get("/buggy/bad-request").catch(e=>{console.log(e.response)})}function c(){o.get("/buggy/server-error").catch(e=>{console.log(e.response)})}function u(){o.get("/buggy/unauthorised").catch(e=>{console.log(e.response)})}function l(){o.get("/activities/notaguid").catch(e=>{console.log(e.response)})}function d(){o.post("/activities",{}).catch(e=>{s(e)})}return r.jsxs(r.Fragment,{children:[r.jsx(x,{as:"h1",content:"Test Error component"}),r.jsx(m,{children:r.jsxs(t.Group,{widths:"7",children:[r.jsx(t,{onClick:a,content:"Not Found",basic:!0,primary:!0}),r.jsx(t,{onClick:()=>{i()},content:"Bad Request",basic:!0,primary:!0}),r.jsx(t,{onClick:()=>{d()},content:"Validation Error",basic:!0,primary:!0}),r.jsx(t,{onClick:()=>{c()},content:"Server Error",basic:!0,primary:!0}),r.jsx(t,{onClick:()=>{u()},content:"Unauthorised",basic:!0,primary:!0}),r.jsx(t,{onClick:()=>{l()},content:"Bad Guid",basic:!0,primary:!0})]})}),n&&r.jsx(j,{errors:n})]})};export{b as TestErrors};