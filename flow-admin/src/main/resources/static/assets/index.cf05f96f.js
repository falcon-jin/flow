var r;import e from"./DetailModal.731c8565.js";import{_ as o}from"./TableImg.67f55203.js";import{f as t}from"./BasicForm.d23c40e0.js";import{u as i}from"./useTable.0dd6c347.js";import{b as a}from"./useModal.14f2a57c.js";import{av as s,d as n,aY as l}from"./index.407e4786.js";import{getColumns as d}from"./data.0bf0ab3a.js";import{k as c,r as m,D as f,J as p,am as u,K as j,o as b,n as g,V as x,ah as v,w as y,v as E,q as h,Q as w,Y as D,s as k}from"./vendor.56d2c57f.js";import"./Description.vue_vue&type=script&lang.fcea007b.js";/* empty css              */import"./useDescription.d0c34add.js";/* empty css              *//* empty css              */import"./useForm.a6964f79.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.ab37f9af.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.3d5d9047.js";/* empty css              *//* empty css              */import"./download.dd3a6468.js";import"./StrengthMeter.ca48504f.js";(r||(r={})).Error="/error";var C=c({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:t},setup(){const e=m(),o=m([]),{t:t}=n(),c=l(),[j,{setTableData:b}]=i({title:t("sys.errorLog.tableTitle"),columns:d(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[g,{openModal:x}]=a();return f((()=>c.getErrorLogInfoList),(r=>{p((()=>{b(u(r))}))}),{immediate:!0}),{register:j,registerModal:g,handleDetail:function(r){e.value=r,x(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,t=function*(){yield s.get({url:r.Error})},new Promise(((r,i)=>{var a=r=>{try{n(t.next(r))}catch(e){i(e)}},s=r=>{try{n(t.throw(r))}catch(e){i(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((t=t.apply(e,o)).next())}));var e,o,t},imgList:o,rowInfo:e,t:t}}});const L={class:"p-4"};C.render=function(r,e,o,t,i,a){const s=j("DetailModal"),n=j("a-button"),l=j("TableAction"),d=j("BasicTable");return b(),g("div",L,[(b(!0),g(x,null,v(r.imgList,(r=>y((b(),g("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(d,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[D(k(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default C;