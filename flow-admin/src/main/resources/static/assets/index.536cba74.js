import{B as e,_ as s}from"./BasicForm.3145f6c6.js";import{h as i}from"./index.8bbed969.js";import{u as o}from"./useForm.f6c4fcf0.js";import{P as a}from"./index.22ff4fb2.js";import{y as r,bE as n,Z as t,B as p,F as m,a2 as d,v as c}from"./vendor.880b4c6c.js";/* empty css              */import{u as f}from"./upload.953906e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              */import"./index.dcc0b3b8.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.c0fc876b.js";const j=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:f}}];var l=r({components:{BasicUpload:e,BasicForm:s,PageWrapper:a,[n.name]:n},setup(){const{createMessage:e}=i(),[s]=o({labelWidth:120,schemas:j,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:f,register:s}}});l.render=function(e,s,i,o,a,r){const n=t("a-alert"),f=t("BasicUpload"),j=t("BasicForm"),l=t("PageWrapper");return p(),m(l,{title:"上传组件示例"},{default:d((()=>[c(n,{message:"基础示例"}),c(f,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),c(n,{message:"嵌入表单,加入表单校验"}),c(j,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default l;