import{k as e,$ as t,K as a,o,n,Q as r,q as s}from"./vendor.56d2c57f.js";import i from"./TargetContent.9bac8776.js";import{aS as d}from"./index.407e4786.js";import{_ as p}from"./PageWrapper.745b68b0.js";/* empty css              *//* empty css              *//* empty css              */import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";var m=e({components:{LazyContainer:d,PageWrapper:p,TargetContent:i,Skeleton:t}});const l={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),c={class:"lazy-base-demo-box"};m.render=function(e,t,i,d,p,m){const j=a("TargetContent"),b=a("Skeleton"),u=a("LazyContainer"),x=a("PageWrapper");return o(),n(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",l,[f,s("div",c,[s(u,null,{skeleton:r((()=>[s(b,{rows:10})])),default:r((()=>[s(j)])),_:1})])])])),_:1})};export default m;