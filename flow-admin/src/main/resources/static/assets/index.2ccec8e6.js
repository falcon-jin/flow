import{j as e,bB as t,i as s,k as o,l as n,K as a,o as r,m as i,x as d,n as l,q as u,Y as p}from"./vendor.686fd1d4.js";/* empty css              */import m from"./CurrentPermissionMode.048da806.js";import{ak as c,f,b1 as R}from"./index.7fecfddd.js";import{P as g}from"./index.b3b6fdb5.js";/* empty css              */import"./useContentViewHeight.d2763f54.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var b=e({components:{Alert:t,CurrentPermissionMode:m,PageWrapper:g},setup(){const{changeRole:e}=c(),t=f();return{userStore:t,RoleEnum:R,isSuper:s((()=>t.getRoleList.includes(R.SUPER))),isTest:s((()=>t.getRoleList.includes(R.TEST))),changeRole:e}}});const j=d();o("data-v-024b4668");const E=p(" 当前角色: "),S={class:"mt-4"},x=p(" 权限切换(请先切换权限模式为前端角色权限模式): ");n();const P=j(((e,t,s,o,n,d)=>{const m=a("CurrentPermissionMode"),c=a("Alert"),f=a("a-button"),R=a("a-button-group"),g=a("PageWrapper");return r(),i(g,{title:"前端权限示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:j((()=>[l(m),l("p",null,[E,l("a",null,u(e.userStore.getRoleList),1)]),l(c,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),l("div",S,[x,l(R,null,{default:j((()=>[l(f,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:j((()=>[p(u(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),l(f,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:j((()=>[p(u(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));b.render=P,b.__scopeId="data-v-024b4668";export default b;