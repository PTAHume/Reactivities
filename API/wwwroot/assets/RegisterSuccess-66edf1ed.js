import{D as e,S as t,O as r,J as c,M as a,aw as o,ax as l}from"./index-a9b4d80b.js";import{u as m}from"./hooks-3d5b669c.js";const d=()=>{const s=m().get("email"),n=()=>{o.Account.resendEmailConfirm(s).then(()=>{l.success("Verification email resent - please check your email")}).catch(i=>{console.log(i)})};return e.jsxs(t,{placeholder:!0,textAlign:"center",children:[e.jsxs(r,{icon:!0,color:"green",children:[e.jsx(c,{name:"check"}),"Successfully Registered !"]}),e.jsx("p",{children:"Please check your email (including junk email) for the verification email"}),s&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Did not receive the email? Click the below button to resend"}),e.jsx(a,{primary:!0,onClick:()=>{n()},content:"Resent email",size:"huge"})]})]})};export{d as RegisterSuccess};
