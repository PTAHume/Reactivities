import{C as n,N as m,D as r,O as l,H as p,M as c}from"./index-c22b6146.js";import{F as d,a as u,E as x}from"./formik.esm-9bf00cd2.js";import{I as t}from"./InputControl-4187c228.js";import"./tiny-warning.esm-c932d744.js";import"./_copyArray-e5846383.js";import"./Form-dd75a905.js";const E=n(()=>{const{userStore:a}=m();return r.jsx(d,{initialValues:{email:"",password:"",error:null},onSubmit:(o,{setErrors:e,setSubmitting:s})=>{a.login({email:o.email,password:o.password}).catch(i=>{e({error:i.response.data}),s(!1)})},children:({handleSubmit:o,isSubmitting:e,errors:s})=>r.jsxs(u,{className:"ui form",onSubmit:o,autoComplete:"off",children:[r.jsx(l,{as:"h2",content:"Login to Reactivates",color:"teal",textAlign:"center"}),r.jsx(t,{placeholder:"Email",name:"email"}),r.jsx(t,{placeholder:"Password",name:"password",type:"password"}),r.jsx(x,{name:"error",render:()=>r.jsx(p,{style:{marginBottom:10},basic:!0,color:"red",content:s.error})}),r.jsx(c,{loading:e,positive:!0,content:"Login",type:"submit",fluid:!0})]})})});export{E as LoginForm};