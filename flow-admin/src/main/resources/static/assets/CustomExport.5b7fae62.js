import{B as l}from"./TableImg.56f74f95.js";import"./BasicForm.bfb70ce4.js";import{E as j}from"./index.f1c826f9.js";import{c as x,d as p,j as f}from"./data.0fbe98fa.js";import{b}from"./index.309f7e13.js";import{P as _}from"./index.37a89528.js";import{_ as F}from"./index.aeb7d9f7.js";import{A as C,a0 as o,B,a1 as E,a6 as t,w as s,ae as g}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";/* empty css                *//* empty css                */import"./useContentViewHeight.6345b5e8.js";const S=C({components:{BasicTable:l,ExpExcelModal:j,PageWrapper:_},setup(){function e({filename:r,bookType:i}){f({data:p,filename:r,write2excelOpts:{bookType:i}})}const[a,{openModal:n}]=b();return{defaultHeader:e,columns:x,data:p,register:a,openModal:n}}}),w=g(" \u5BFC\u51FA ");function A(e,a,n,r,i,M){const d=o("a-button"),m=o("BasicTable"),c=o("ExpExcelModal"),u=o("PageWrapper");return B(),E(u,{title:"\u5BFC\u51FA\u793A\u4F8B",content:"\u53EF\u4EE5\u9009\u62E9\u5BFC\u51FA\u683C\u5F0F"},{default:t(()=>[s(m,{title:"\u57FA\u7840\u8868\u683C",columns:e.columns,dataSource:e.data},{toolbar:t(()=>[s(d,{onClick:e.openModal},{default:t(()=>[w]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"]),s(c,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])]),_:1})}var re=F(S,[["render",A]]);export{re as default};