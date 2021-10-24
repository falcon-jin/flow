import{e as t,j as e,c as n,w as a}from"./index.f77a0916.js";import{N as u,O as s,ah as o,j as r,b2 as l,Y as i,t as c,u as d,ac as v,r as f,aa as p,y as m,aM as y,Z as C,B as S,F as b,a1 as g,a8 as x,J as h,a0 as w,az as z,an as B,a3 as F,v as j}from"./vendor.3dc066e5.js";function A(t,e="value",n="change",a){const f=v(),p=null==f?void 0:f.emit,m=u({value:t[e]}),y=s(m);o((()=>{m.value=t[e]}));return[r({get:()=>m.value,set(t){l(t,y.value)||(m.value=t,i((()=>{null==p||p(n,t,...c(d(a))||[])})))}}),t=>{m.value=t},y]}var N=m({name:"CountButton",components:{Button:y},props:{value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},setup(n){const a=f(!1),{currentCount:u,isStart:s,start:l,reset:i}=function(t){const e=f(t),n=f(!1);let a;function u(){a&&window.clearInterval(a)}function s(){n.value=!1,u(),a=null}function o(){d(n)||a||(n.value=!0,a=setInterval((()=>{1===d(e)?(s(),e.value=t):e.value-=1}),1e3))}function r(){e.value=t,s()}return p((()=>{r()})),{start:o,reset:r,restart:function(){r(),o()},clear:u,stop:s,currentCount:e,isStart:n}}(n.count),{t:c}=t(),v=r((()=>d(s)?c("component.countdown.sendText",[d(u)]):c("component.countdown.normalText")));return o((()=>{void 0===n.value&&i()})),{handleStart:function(){return t=this,u=null,s=function*(){const{beforeStartFunc:t}=n;if(t&&e(t)){a.value=!0;try{(yield t())&&l()}finally{a.value=!1}}else l()},new Promise(((e,n)=>{var a=t=>{try{r(s.next(t))}catch(e){n(e)}},o=t=>{try{r(s.throw(t))}catch(e){n(e)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,o);r((s=s.apply(t,u)).next())}));var t,u,s},currentCount:u,loading:a,getButtonText:v,isStart:s}}});N.render=function(t,e,n,a,u,s){const o=C("Button");return S(),b(o,w(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:g((()=>[x(h(t.getButtonText),1)])),_:1},16,["disabled","onClick","loading"])};var T=m({name:"CountDownInput",components:{CountButton:N},inheritAttrs:!1,props:{value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},setup(t){const{prefixCls:e}=n("countdown-input"),[a]=A(t);return{prefixCls:e,state:a}}});T.render=function(t,e,n,a,u,s){const o=C("CountButton"),r=C("a-input");return S(),b(r,w(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),z({addonAfter:g((()=>[j(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])])),_:2},[B(Object.keys(t.$slots).filter((t=>"addonAfter"!==t)),(e=>({name:e,fn:g((n=>[F(t.$slots,e,n)]))})))]),1040,["class","size","value"])};const $=a(T);a(N);export{$ as C,A as u};