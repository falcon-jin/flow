import{y as e,ac as t,Z as a,B as o,F as n,a2 as r,v as s}from"./vendor.880b4c6c.js";import i from"./TargetContent.a0810b68.js";import{aV as d}from"./index.e4d4c34e.js";import{P as m}from"./index.daa15fb0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.0c12a40d.js";var p=e({components:{LazyContainer:d,PageWrapper:m,TargetContent:i,Skeleton:t}});const c={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),l={class:"lazy-base-demo-box"};p.render=function(e,t,i,d,m,p){const j=a("TargetContent"),b=a("Skeleton"),u=a("LazyContainer"),x=a("PageWrapper");return o(),n(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",c,[f,s("div",l,[s(u,null,{skeleton:r((()=>[s(b,{rows:10})])),default:r((()=>[s(j)])),_:1})])])])),_:1})};export default p;