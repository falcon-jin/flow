import{y as e,b6 as a,r as o,Z as n,B as r,F as s,a1 as t,v as i}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              */import{P as d}from"./index.f67f9ef2.js";import m from"./WorkbenchHeader.32b4ca49.js";import f from"./SystemListCard.9154a47f.js";import c from"./QuickNav.f25e23c8.js";import l from"./DynamicInfo.3404c682.js";import p from"./NoticeInfo.7b9a417d.js";import j from"./BannerInfo.5c13e7c5.js";import u from"./SaleRadar.d53de63f.js";import{d as I,n as g,b as y}from"./data.93390901.js";import"./index.06582e88.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.efd2f5af.js";import"./header.d801b988.js";/* empty css              *//* empty css              */import"./process.978d1578.js";/* empty css              */import"./useECharts.71884b18.js";var b=e({components:{PageWrapper:d,WorkbenchHeader:m,SystemListCard:f,NoticeInfo:p,BannerInfo:j,QuickNav:c,DynamicInfo:l,SaleRadar:u,Card:a},setup(){const e=o(!0);return setTimeout((()=>{e.value=!1}),1500),{loading:e,dynamicInfoItems:I,noticeInfoItems:g,bannerInfoItems:y}}});const x={class:"md:flex w-full enter-y"},S={class:"w-2/3"},v={class:"md:w-1/3 pl-4"};b.render=function(e,a,o,d,m,f){const c=n("WorkbenchHeader"),l=n("NoticeInfo"),p=n("SystemListCard"),j=n("BannerInfo"),u=n("DynamicInfo"),I=n("PageWrapper");return r(),s(I,{class:"!mt-4"},{headerContent:t((()=>[i(c)])),default:t((()=>[i("div",x,[i("div",S,[i(l,{dataSource:e.noticeInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"]),i(p,{loading:e.loading,class:"enter-y"},null,8,["loading"])]),i("div",v,[i(j,{dataSource:e.bannerInfoItems,class:"!my-4",loading:e.loading},null,8,["dataSource","loading"]),i(u,{dataSource:e.dynamicInfoItems,loading:e.loading,class:"!my-4 enter-y"},null,8,["dataSource","loading"])])])])),_:1})};export default b;