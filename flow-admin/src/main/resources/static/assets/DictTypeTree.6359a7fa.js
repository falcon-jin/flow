var p=(o,c,e)=>new Promise((r,a)=>{var n=t=>{try{i(e.next(t))}catch(l){a(l)}},s=t=>{try{i(e.throw(t))}catch(l){a(l)}},i=t=>t.done?r(t.value):Promise.resolve(t.value).then(n,s);i((e=e.apply(o,c)).next())});import{_ as d}from"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import{g as m}from"./dicType.fa4263ef.js";import{_}from"./index.e84e956c.js";import{A as f,r as u,_ as T,a0 as h,B as v,D,w as y}from"./vendor.5879c5ca.js";import"./useContextMenu.44cd9a61.js";/* empty css               */const B=f({name:"DictTypeTree",components:{BasicTree:d},emits:["select"],setup(o,{emit:c}){const e=u([]);function r(){return p(this,null,function*(){e.value=yield m()})}function a(n,s){c("select",n[0]),console.log(n,s)}return T(()=>{r()}),{treeData:e,handleSelect:a}}}),j={class:"bg-white m-4 mr-0 overflow-hidden"};function x(o,c,e,r,a,n){const s=h("BasicTree");return v(),D("div",j,[y(s,{title:"\u6570\u636E\u5206\u7C7B",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,replaceFields:{key:"id",title:"name"},onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}var E=_(B,[["render",x]]);export{E as default};