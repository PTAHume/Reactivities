import{C as n,N as l,D as e,M as d,r as c,O as p}from"./index-c22b6146.js";import{G as i}from"./Item-ba24dadd.js";import{T as u}from"./Statistic-b393ae5b.js";import{F as x,a as h}from"./formik.esm-9bf00cd2.js";import{c as f,a as j}from"./index.esm-b2907175.js";import{I as b}from"./InputControl-4187c228.js";import{T as y}from"./TextAreaControl-efd13c14.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-e5846383.js";import"./Form-dd75a905.js";const C=n(({setEditMode:a})=>{const{profileStore:{profile:t,updateProfile:r}}=l();return e.jsx(x,{initialValues:{displayName:t==null?void 0:t.displayName,bio:t==null?void 0:t.bio},onSubmit:o=>{r(o).then(()=>{a(!1)})},validationSchema:f({displayName:j().required("Display name is required")}),children:({isSubmitting:o,isValid:s,dirty:m})=>e.jsxs(h,{className:"ui form",children:[e.jsx(b,{placeholder:"Display Name",name:"displayName"}),e.jsx(y,{rows:3,placeholder:"Add your bio",name:"bio"}),e.jsx(d,{positive:!0,type:"submit",loading:o,content:"Update profile",floated:"right",disabled:!s||!m})]})})}),D=n(()=>{const{profileStore:a}=l(),{isCurrentUser:t,profile:r}=a,[o,s]=c.useState(!1);return e.jsx(u.Pane,{children:e.jsxs(i,{children:[e.jsxs(i.Column,{width:"16",children:[e.jsx(p,{floated:"left",icon:"user",content:`About ${r==null?void 0:r.displayName}`}),t&&e.jsx(d,{floated:"right",basic:!0,content:o?"Cancel":"Edit Profile",onClick:()=>{s(!o)}})]}),e.jsx(i.Column,{width:"16",children:o?e.jsx(C,{setEditMode:s}):e.jsx("span",{style:{whiteSpace:"pre-wrap"},children:r==null?void 0:r.bio})})]})})});export{D as ProfileAbout};
