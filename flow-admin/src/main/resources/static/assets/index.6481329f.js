import{B as A}from"./TableImg.513742d5.js";import{T as I}from"./BasicForm.0ba2e15f.js";import{u as E}from"./useTable.6e5baa13.js";import{b as D,d as R,p as k,c as $}from"./modelInfo.0ee666a4.js";import{P as W}from"./index.ea14bdae.js";import H from"./FlowCategoryTree.cf4b4feb.js";import{b as M}from"./index.c505e96f.js";import{M as O,c as U,s as V}from"./ModelInfoModal.f7a4b9cd.js";import K from"./index.cc463aeb.js";import{A as N,bA as z,c2 as G,aE as L,ba as q,c8 as J,r as j,$ as Q,a0 as s,bo as Y,F as Z,B as ee,a1 as oe,a6 as d,w as i,u as X,ae as te}from"./vendor.5879c5ca.js";/* empty css               *//* empty css                *//* empty css                */import{a as ne}from"./app.7e52d780.js";import{_ as ae,r as se,h as ie}from"./index.e84e956c.js";import{A as re}from"./index.7819e97f.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./category.add32850.js";/* empty css                *//* empty css                */import"./index.33ed2912.js";import"./index.esm.01aeab01.js";const{createMessage:F}=ie(),le=N({name:"Bpmn",components:{BasicTable:A,PageWrapper:W,FlowCategoryTree:H,ModelInfoModal:O,TableAction:I,Avatar:z,Badge:G,Popconfirm:L,Tag:q,DeleteOutlined:J,Authority:re,BpmnPreviewModal:K},setup(){const o=se(),[_,{openModal:c}]=M(),[x,{openModal:w,setModalProps:C}]=M();j({});const r=j({}),t=j(!1),[u,{getForm:p,reload:n}]=E({title:"\u5217\u8868",api:D,columns:U,formConfig:{labelWidth:120,schemas:V,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{modelType:0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:210,align:"left",title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});Q(()=>{const{updateSchema:e}=p();ne().then(a=>{e([{field:"appSn",componentProps:{options:a,labelField:"id"}}])})});function m(){if(!X(r).code){F.warning("\u8BF7\u9009\u62E9\u5206\u7C7B\uFF01",2);return}c(!0,{record:{categoryCode:X(r).code},isUpdate:!0})}function f(e,a){const{status:h}=e;return[{icon:"ant-design:eye",tooltip:"\u6D41\u7A0B\u56FE\u9884\u89C8",label:"",onClick:b.bind(null,e)},{icon:"ant-design:play-circle-filled",tooltip:"\u53D1\u5E03",label:"",popConfirm:{title:"\u786E\u8BA4\u53D1\u5E03\u5417?",confirm:v.bind(null,e)},ifShow:h===2},{icon:"ant-design:stop-twotone",tooltip:"\u505C\u7528",label:"",popConfirm:{title:"\u786E\u8BA4\u505C\u7528\u5417?",confirm:y.bind(null,e)},ifShow:h===3||h===2},{icon:"clarity:note-edit-line",tooltip:"\u4FEE\u6539",label:"",onClick:l.bind(null,e)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664",label:"",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:B.bind(null,e)}}]}function b(e){w(!0,{modelKey:e.modelKey,isUpdate:!0}),C({title:`\u9884\u89C8-${e.name}`,bodyStyle:{padding:"0px",margin:"0px"},width:900,height:400,showOkBtn:!1,showCancelBtn:!0,cancelText:"\u5173\u95ED"})}function l(e){c(!0,{record:e,isUpdate:!0})}function g(){o("/flowable/bpmn/designer?modelId=XXXXXXXXXXXXXXXXXXXXXXXX")}function B(e){R([e.id]).then(a=>{n()})}function v(e){t.value=!0,k(e.modelId).then(a=>{n(),F.success("\u53D1\u5E03\u6210\u529F\uFF01",2)}).finally(()=>{t.value=!1})}function y(e){t.value=!0,$(e.modelId).then(a=>{n()}).finally(()=>{t.value=!1})}function T(){n()}function S(){}function P(e){r.value=e;let a={categoryCode:e?e.code:""};n({searchInfo:a})}return{loadingRef:t,registerTable:u,registerBpmnPreviewModal:x,registerModal:_,handlePublish:v,handleStop:y,createActions:f,handleCreate:m,handleEdit:l,cancelDeleteRole:S,handleDelete:B,handleSuccess:T,openTab:g,handleSelect:P}}}),de=te(" \u65B0\u589E ");function ce(o,_,c,x,w,C){const r=s("FlowCategoryTree"),t=s("a-button"),u=s("TableAction"),p=s("BasicTable"),n=s("ModelInfoModal"),m=s("BpmnPreviewModal"),f=s("PageWrapper"),b=Y("loading");return Z((ee(),oe(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:d(()=>[i(r,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),i(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:d(()=>[i(t,{type:"primary",onClick:o.handleCreate},{default:d(()=>[de]),_:1},8,["onClick"])]),action:d(({record:l,column:g})=>[i(u,{actions:o.createActions(l,g)},null,8,["actions"])]),_:1},8,["onRegister"]),i(n,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"]),i(m,{onRegister:o.registerBpmnPreviewModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1},512)),[[b,o.loadingRef]])}var to=ae(le,[["render",ce],["__scopeId","data-v-cd2ca054"]]);export{to as default};