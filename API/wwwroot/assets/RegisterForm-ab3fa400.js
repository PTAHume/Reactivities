import{F as d,G as p,C as n,N as u,D as e,O as c,M as x}from"./index-09887f7d.js";import{F as N,a as j,E as f}from"./formik.esm-2cabd98c.js";import{I as s}from"./InputControl-946ff2cd.js";import{c as h,a as o}from"./index.esm-938f1c64.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-12266d17.js";import"./Form-71890c63.js";const{ValidationErrors:y}=d(()=>p(()=>import("./ValidationErrors-1b83b179.js"),["assets/ValidationErrors-1b83b179.js","assets/index-09887f7d.js","assets/index-2376a3f3.css","assets/Message-538c167c.js"])),b=n(()=>{const{userStore:m}=u();return e.jsx(N,{initialValues:{displayName:"",userName:"",email:"",password:"",error:null},onSubmit:(r,{setErrors:a,setSubmitting:t})=>{m.register({displayName:r.displayName,userName:r.userName,email:r.email,password:r.password}).catch(i=>{a({error:i}),t(!1)})},validationSchema:h({displayName:o().required(),userName:o().required(),email:o().required(),password:o().required()}),children:({handleSubmit:r,isSubmitting:a,errors:t,isValid:i,dirty:l})=>e.jsxs(j,{className:"ui form error",onSubmit:r,autoComplete:"off",children:[e.jsx(c,{as:"h2",content:"Sign up to Reactivates",color:"teal",textAlign:"center"}),e.jsx(s,{placeholder:"Display Name",name:"displayName"}),e.jsx(s,{placeholder:"User Name",name:"userName"}),e.jsx(s,{placeholder:"Email",name:"email"}),e.jsx(s,{placeholder:"Password",name:"password",type:"password"}),e.jsx(f,{name:"error",render:()=>e.jsx(y,{errors:t.error})}),e.jsx(x,{disabled:!i||!l||a,loading:a,positive:!0,content:"Register",type:"submit",fluid:!0})]})})});export{b as RegisterForm};
