import{C as n,N as l,D as e,M as d,r as c,O as p}from"./index-4df27b20.js";import{G as i}from"./Item-07aa3134.js";import{T as u}from"./Statistic-f5127865.js";import{F as x,a as h}from"./formik.esm-b1fe7d59.js";import{c as f,a as j}from"./index.esm-3de42768.js";import{I as b}from"./InputControl-40c0f20b.js";import{T as y}from"./TextAreaControl-e7ffa26e.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-748d373b.js";import"./Form-2283c078.js";const C=n(({setEditMode:a})=>{const{profileStore:{profile:t,updateProfile:r}}=l();return e.jsx(x,{initialValues:{displayName:t==null?void 0:t.displayName,bio:t==null?void 0:t.bio},onSubmit:o=>{r(o).then(()=>{a(!1)})},validationSchema:f({displayName:j().required("Display name is required")}),children:({isSubmitting:o,isValid:s,dirty:m})=>e.jsxs(h,{className:"ui form",children:[e.jsx(b,{placeholder:"Display Name",name:"displayName"}),e.jsx(y,{rows:3,placeholder:"Add your bio",name:"bio"}),e.jsx(d,{positive:!0,type:"submit",loading:o,content:"Update profile",floated:"right",disabled:!s||!m})]})})}),D=n(()=>{const{profileStore:a}=l(),{isCurrentUser:t,profile:r}=a,[o,s]=c.useState(!1);return e.jsx(u.Pane,{children:e.jsxs(i,{children:[e.jsxs(i.Column,{width:"16",children:[e.jsx(p,{floated:"left",icon:"user",content:`About ${r==null?void 0:r.displayName}`}),t&&e.jsx(d,{floated:"right",basic:!0,content:o?"Cancel":"Edit Profile",onClick:()=>{s(!o)}})]}),e.jsx(i.Column,{width:"16",children:o?e.jsx(C,{setEditMode:s}):e.jsx("span",{style:{whiteSpace:"pre-wrap"},children:r==null?void 0:r.bio})})]})})});export{D as ProfileAbout};