import{_ as e}from"./TableImg.aa3bf976.js";import"./BasicForm.d6bc90d8.js";import{u as s}from"./useTable.2b02bf57.js";import{getCustomHeaderColumns as i}from"./tableData.3f3da3f1.js";import{d as o}from"./table.302e98d9.js";import{ao as r}from"./index.10e3b51a.js";import{y as t,bP as a,Z as m,B as d,F as n,v as p,a2 as c,a9 as f}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.1b895cf0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.116df12f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.6ed16464.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";var b=t({components:{BasicTable:e,FormOutlined:a,BasicHelp:r},setup(){const[e]=s({title:"定高/头部自定义",api:o,columns:i(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const j={class:"p-4"},l=f(" 姓名 "),u=f(" 地址 ");b.render=function(e,s,i,o,r,t){const a=m("BasicHelp"),f=m("FormOutlined"),b=m("BasicTable");return d(),n("div",j,[p(b,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[l,p(a,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[u,p(f,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default b;