import{y as t,b6 as a,bw as e,Z as s,B as r,F as i,a1 as n,v as o,a8 as d,J as m,a0 as l}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import{dynamicInfoItems as p}from"./data.2807e007.js";import{h as u}from"./header.d801b988.js";import{_ as c}from"./index.f77a0916.js";/* empty css              */var f=t({props:{dataSource:Array},components:{Card:a,List:e,ListItem:e.Item,ListItemMeta:e.Item.Meta,Icon:c},setup:t=>({items:p,headerImg:u})});const I=d("更多");f.render=function(t,a,e,p,u,c){const f=s("a-button"),j=s("Icon"),x=s("ListItemMeta"),L=s("ListItem"),_=s("List"),b=s("Card");return r(),i(b,l({title:"最新动态"},t.$attrs),{extra:n((()=>[o(f,{type:"link",size:"small"},{default:n((()=>[I])),_:1})])),default:n((()=>[o(_,{"item-layout":"horizontal","data-source":t.items},{renderItem:n((({item:t})=>[o(L,null,{default:n((()=>[o(x,null,{description:n((()=>[d(m(t.date),1)])),title:n((()=>[d(m(t.name)+" ",1),o("span",{innerHTML:t.desc},null,8,["innerHTML"])])),avatar:n((()=>[o(j,{icon:t.avatar,size:30},null,8,["icon"])])),_:2},1024)])),_:2},1024)])),_:1},8,["data-source"])])),_:1},16)};export default f;