import{D as o,H as n}from"./index-66c688c3.js";import{u}from"./formik.esm-36a92856.js";import{F as c}from"./Form-80e0837a.js";const p=({placeholder:s,name:e,label:t,type:l})=>{const[i,r]=u(e);return o.jsxs(c.Field,{error:r.touched&&!!r.error,children:[o.jsx("label",{children:t}),o.jsx("input",{...i,placeholder:s,name:e,type:l}),r.touched&&r.error?o.jsx(n,{basic:!0,color:"red",children:r.error}):null]})};export{p as I};