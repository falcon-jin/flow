import{A as p,bb as i,bz as h,bA as m,bB as f,a0 as s,B as r,a1 as g,a5 as a,w as n,H as o,D as l,ao as y,J as b,X as v,aa as x,a4 as C}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                */import{I as w,_ as B}from"./index.142c38e7.js";const $=p({props:{dataSource:Array,height:{type:Number,default:200}},components:{Card:i,CardGrid:i.Grid,Icon:w,Carousel:h,LeftOutlined:m,RightOutlined:f},setup(e){return{items:e.dataSource,height:e.height}}}),k={class:"custom-slick-arrow",style:{left:"0","z-index":"8"}},j={class:"custom-slick-arrow",style:{right:"0"}},O=["title"],A={class:"banner-text"};function S(e,I,L,z,N,R){const d=s("LeftOutlined"),c=s("RightOutlined"),u=s("Carousel"),_=s("Card");return r(),g(_,C({class:"banner-box",title:"",style:`height:${e.height}px;`,"body-style":"padding:0;"},e.$attrs),{default:a(()=>[n(u,{arrows:"",dots:!1,class:"!h-full !w-full"},{prevArrow:a(()=>[o("div",k,[n(d)])]),nextArrow:a(()=>[o("div",j,[n(c)])]),default:a(()=>[(r(!0),l(x,null,y(e.items,t=>(r(),l("div",{class:"!w-full carousel-item",key:t.id,title:t.title},[o("div",{class:"banner",style:v(`height: ${e.height}px; background-image: url('${t.imgSrc}')`)},[o("div",A,b(t.title),1)],4)],8,O))),128))]),_:1})]),_:1},16,["style"])}var J=B($,[["render",S]]);export{J as default};