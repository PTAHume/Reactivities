import{C as n,N as l,D as e,M as d,r as c,O as p}from"./index-a9b4d80b.js";import{G as i}from"./Item-73c99ef0.js";import{T as u}from"./Statistic-4f41ac0c.js";import{F as x,a as h}from"./formik.esm-64656d3e.js";import{c as f,a as j}from"./index.esm-82c90a4b.js";import{I as b}from"./InputControl-a7b63b09.js";import{T as y}from"./TextAreaControl-5cefa43d.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-2696d1fd.js";import"./Form-7c71cc02.js";const C=n(({setEditMode:a})=>{const{profileStore:{profile:t,updateProfile:r}}=l();return e.jsx(x,{initialValues:{displayName:t==null?void 0:t.displayName,bio:t==null?void 0:t.bio},onSubmit:o=>{r(o).then(()=>{a(!1)})},validationSchema:f({displayName:j().required("Display name is required")}),children:({isSubmitting:o,isValid:s,dirty:m})=>e.jsxs(h,{className:"ui form",children:[e.jsx(b,{placeholder:"Display Name",name:"displayName"}),e.jsx(y,{rows:3,placeholder:"Add your bio",name:"bio"}),e.jsx(d,{positive:!0,type:"submit",loading:o,content:"Update profile",floated:"right",disabled:!s||!m})]})})}),D=n(()=>{const{profileStore:a}=l(),{isCurrentUser:t,profile:r}=a,[o,s]=c.useState(!1);return e.jsx(u.Pane,{children:e.jsxs(i,{children:[e.jsxs(i.Column,{width:"16",children:[e.jsx(p,{floated:"left",icon:"user",content:`About ${r==null?void 0:r.displayName}`}),t&&e.jsx(d,{floated:"right",basic:!0,content:o?"Cancel":"Edit Profile",onClick:()=>{s(!o)}})]}),e.jsx(i.Column,{width:"16",children:o?e.jsx(C,{setEditMode:s}):e.jsx("span",{style:{whiteSpace:"pre-wrap"},children:r==null?void 0:r.bio})})]})})});export{D as ProfileAbout};
