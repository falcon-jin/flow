import{B as e}from"./index.b437b00c.js";import{D as t,u as s}from"./index.8a68fbe0.js";import{e as r}from"./index.b41e2c0e.js";import{getDescSchema as o}from"./data.0140212a.js";import{y as a,Z as i,B as n,F as d,a1 as c,v as m,a0 as p}from"./vendor.3dc066e5.js";import"./useWindowSizeFn.308e6090.js";/* empty css              *//* empty css              */var l=a({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=r(),[t]=s({column:2,schema:o()});return{register:t,useI18n:r,t:e}}});l.render=function(e,t,s,r,o,a){const l=i("Description"),u=i("BasicModal");return n(),d(u,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:c((()=>[m(l,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;