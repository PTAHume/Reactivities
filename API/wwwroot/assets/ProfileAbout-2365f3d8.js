import{C as n,N as l,D as e,M as d,r as c,O as p}from"./index-f950316b.js";import{G as i}from"./Item-8d555df0.js";import{T as u}from"./Statistic-384135f8.js";import{F as x,a as h}from"./formik.esm-3e766a07.js";import{c as f,a as j}from"./index.esm-ab6d9096.js";import{I as b}from"./InputControl-c2de6ed0.js";import{T as y}from"./TextAreaControl-4543cf73.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-fd83baf0.js";import"./Form-a7b9fecf.js";const C=n(({setEditMode:a})=>{const{profileStore:{profile:t,updateProfile:r}}=l();return e.jsx(x,{initialValues:{displayName:t==null?void 0:t.displayName,bio:t==null?void 0:t.bio},onSubmit:o=>{r(o).then(()=>{a(!1)})},validationSchema:f({displayName:j().required("Display name is required")}),children:({isSubmitting:o,isValid:s,dirty:m})=>e.jsxs(h,{className:"ui form",children:[e.jsx(b,{placeholder:"Display Name",name:"displayName"}),e.jsx(y,{rows:3,placeholder:"Add your bio",name:"bio"}),e.jsx(d,{positive:!0,type:"submit",loading:o,content:"Update profile",floated:"right",disabled:!s||!m})]})})}),D=n(()=>{const{profileStore:a}=l(),{isCurrentUser:t,profile:r}=a,[o,s]=c.useState(!1);return e.jsx(u.Pane,{children:e.jsxs(i,{children:[e.jsxs(i.Column,{width:"16",children:[e.jsx(p,{floated:"left",icon:"user",content:`About ${r==null?void 0:r.displayName}`}),t&&e.jsx(d,{floated:"right",basic:!0,content:o?"Cancel":"Edit Profile",onClick:()=>{s(!o)}})]}),e.jsx(i.Column,{width:"16",children:o?e.jsx(C,{setEditMode:s}):e.jsx("span",{style:{whiteSpace:"pre-wrap"},children:r==null?void 0:r.bio})})]})})});export{D as ProfileAbout};