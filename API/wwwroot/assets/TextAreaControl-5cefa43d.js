import{D as e,H as i}from"./index-a9b4d80b.js";import{u as c}from"./formik.esm-64656d3e.js";import{F as d}from"./Form-7c71cc02.js";const u=({placeholder:s,name:o,rows:t,label:l})=>{const[a,r]=c(o);return e.jsxs(d.Field,{error:r.touched&&!!r.error,children:[e.jsx("label",{children:l}),e.jsx("textarea",{...a,placeholder:s,name:o,rows:t}),r.touched&&r.error?e.jsx(i,{basic:!0,color:"red",children:r.error}):null]})};export{u as T};