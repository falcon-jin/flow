import{k as e,bv as t,f as s,K as n,o as a,n as i,q as o,s as d,N as r,x as l}from"./vendor.59fe1062.js";import{c as p}from"./index.ae3055f9.js";import{b as c}from"./index.ff6dc6a5.js";import"./index.ee380487.js";import"./createAsyncComponent.90592c4d.js";import"./index.cf3376db.js";import"./useWindowSizeFn.cd99a382.js";import"./usePageContext.19f2cd62.js";/* empty css              */import"./useSortable.9eab665e.js";import"./lock.5d85f556.js";/* empty css              */var f=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const m=l()(((e,t,s,l,p,c)=>{const f=n("Select");return a(),i("div",{class:e.prefixCls},[o("span",null,d(e.title),1),o(f,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));f.render=m,f.__scopeId="data-v-2dba4940";export default f;