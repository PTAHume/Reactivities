import{C as i,N as n,D as r,O as m,H as l,M as p}from"./index-0327f46b.js";import{F as c,a as d,E as u}from"./formik.esm-0bcbd24d.js";import{I as t}from"./InputControl-bc9b2e53.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-7768aa70.js";import"./Form-7edf57ac.js";const h=i(()=>{const{userStore:a}=n();return r.jsx(c,{initialValues:{email:"",password:"",error:null},onSubmit:(o,{setErrors:e,setSubmitting:s})=>{a.login({email:o.email,password:o.password}).catch(()=>{e({error:"Invalid email or password"}),s(!1)})},children:({handleSubmit:o,isSubmitting:e,errors:s})=>r.jsxs(d,{className:"ui form",onSubmit:o,autoComplete:"off",children:[r.jsx(m,{as:"h2",content:"Login to Reactivates",color:"teal",textAlign:"center"}),r.jsx(t,{placeholder:"Email",name:"email"}),r.jsx(t,{placeholder:"Password",name:"password",type:"password"}),r.jsx(u,{name:"error",render:()=>r.jsx(l,{style:{marginBottom:10},basic:!0,color:"red",content:s.error})}),r.jsx(p,{loading:e,positive:!0,content:"Login",type:"submit",fluid:!0})]})})});export{h as LoginForm};
