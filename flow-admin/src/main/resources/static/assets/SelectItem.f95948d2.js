import{j as e,bv as t,i as s,K as i,o as a,m as n,n as d,q as o,N as r,x as l}from"./vendor.686fd1d4.js";import{c as p}from"./index.7fecfddd.js";import{b as f}from"./index.8a7ce98a.js";import"./index.943a48a4.js";/* empty css              *//* empty css              */import"./index.608a72a0.js";import"./index.d3fffd33.js";import"./useWindowSizeFn.d82e06bf.js";import"./useFrameKeepAlive.a820d434.js";import"./useContentViewHeight.d2763f54.js";/* empty css              */import"./useSortable.dc62f82e.js";import"./lock.a6eaee00.js";var m=e({name:"SelectItem",components:{Select:t},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const{prefixCls:t}=p("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&f(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const u=l()(((e,t,s,l,p,f)=>{const m=i("Select");return a(),n("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(m,r(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));m.render=u,m.__scopeId="data-v-2dba4940";export default m;