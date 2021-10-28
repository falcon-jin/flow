import{_ as e}from"./TableImg.5bb7b2c3.js";import{g as t}from"./BasicForm.3145f6c6.js";import{u as o}from"./useTable.4693838b.js";import{g as n}from"./system.bc8e913c.js";import{P as i}from"./index.22ff4fb2.js";import s from"./DeptTree.3521a9e5.js";import{b as a}from"./index.dcc0b3b8.js";import{_ as r,c,s as d}from"./AccountModal.ecc56e86.js";import{r as l}from"./index.8bbed969.js";import{y as m,N as p,Z as f,B as u,F as b,a2 as j,v as x,a9 as h}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.f6c4fcf0.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.9bed7e43.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a0306c89.js";/* empty css              *//* empty css              *//* empty css              */import"./download.92b34d7b.js";import"./base64Conver.bb012c73.js";import"./index.adea3535.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c0fc876b.js";import"./Tree.vue_vue&type=style&index=0&lang.f01fe83c.js";import"./useContextMenu.d77d7c90.js";var g=m({name:"AccountManagement",components:{BasicTable:e,PageWrapper:i,DeptTree:s,AccountModal:r,TableAction:t},setup(){const e=l(),[t,{openModal:i}]=a(),s=p({}),[r,{reload:m,updateTableDataRecord:f}]=o({title:"账号列表",api:n,rowKey:"id",columns:c,formConfig:{labelWidth:120,schemas:d,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn:e=>e,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:r,registerModal:t,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){f(t.id,t)}else m()},handleSelect:function(e=""){s.deptId=e,m()},handleView:function(t){e("/system/account_detail/"+t.id)},searchInfo:s}}});const S=h("新增账号");g.render=function(e,t,o,n,i,s){const a=f("DeptTree"),r=f("a-button"),c=f("TableAction"),d=f("BasicTable"),l=f("AccountModal"),m=f("PageWrapper");return u(),b(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:j((()=>[x(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),x(d,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:j((()=>[x(r,{type:"primary",onClick:e.handleCreate},{default:j((()=>[S])),_:1},8,["onClick"])])),action:j((({record:t})=>[x(c,{actions:[{icon:"clarity:info-standard-line",tooltip:"查看用户详情",onClick:e.handleView.bind(null,t)},{icon:"clarity:note-edit-line",tooltip:"编辑用户资料",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"删除此账号",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister","searchInfo"]),x(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default g;