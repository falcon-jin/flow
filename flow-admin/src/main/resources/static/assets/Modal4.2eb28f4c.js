import{B as e,a as o}from"./index.bf73380f.js";import{_ as i}from"./BasicForm.19c32012.js";import{u as s}from"./useForm.e45ae65c.js";import{y as r,r as t,Z as a,B as n,F as d,a2 as m,v as p,a0 as c}from"./vendor.880b4c6c.js";import"./index.e99064e4.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";const l=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=r({components:{BasicModal:e,BasicForm:i},setup(){const e=t({}),[i,{}]=s({labelWidth:120,schemas:l,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=o((o=>{e.value={field2:o.data,field1:o.info}}));return{register:r,schemas:l,registerForm:i,model:e}}});f.render=function(e,o,i,s,r,t){const l=a("BasicForm"),f=a("BasicModal");return n(),d(f,c(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:m((()=>[p(l,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default f;