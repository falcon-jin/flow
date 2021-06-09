import{_ as e}from"./TableImg.28dd5cba.js";import{f as t}from"./BasicForm.4961b69c.js";import{u as o}from"./useTable.f161cb20.js";import{g as n}from"./system.4d21345e.js";import{_ as i}from"./PageWrapper.5df89cd8.js";import s from"./DeptTree.b1b82d56.js";import{b as r}from"./useModal.c70d8b8c.js";import{_ as a,c,s as d}from"./AccountModal.b6c1497f.js";import{k as l,K as m,o as p,n as u,Q as f,q as b,Y as j}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.4f4a10e2.js";import"./index.f36f9bca.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.be92848d.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.0ef22e66.js";/* empty css              *//* empty css              */import"./download.0867ab48.js";import"./StrengthMeter.b0b10a34.js";import"./usePageContext.c12a9fc6.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.93b9c797.js";import"./useContextMenu.e6e614fe.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:i,DeptTree:s,AccountModal:a,TableAction:t},setup(){const[e,{openModal:t}]=r(),[i,{reload:s}]=o({title:"账号列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:d},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:i,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,n,i,s){const r=m("DeptTree"),a=m("a-button"),c=m("TableAction"),d=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),u(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:f((()=>[b(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:f((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:f((()=>[g])),_:1},8,["onClick"])])),action:f((({record:t})=>[b(c,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;