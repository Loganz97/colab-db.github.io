import{l as D,_ as e,f as p,j as d,D as A,a as R,E as g,k as v,F as V,G as h,u as y,H as b,q as s,p as T,I as j,J as S,K as w,d as r,t as $,L as x,h as N,M as C}from"./entry.72bcef99.js";import{u as k}from"./asyncData.e5a57503.js";import{h as f,e as M,j as z}from"./query.b753eb58.js";import{w as P,s as B,u as H,a as Q}from"./utils.8cc48f74.js";import"./client-only.7221b10e.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js";import"./ContentRenderer.5fee7f57.js";import"./ContentDoc.570f8534.js";import"./ContentList.2683b425.js";import"./ContentQuery.d0de8261.js";import"./ContentRendererMarkdown.755f90f7.js";import"./ContentSlot.ff02d9b7.js";import"./DocumentDrivenEmpty.3388cd05.js";import"./DocumentDrivenNotFound.aac2436e.js";import"./Markdown.a1e47108.js";import"./ProseCode.fe858472.js";import"./components.4e184c5f.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const F=async t=>{var u,n;const{content:o}=D().public,a=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};o.locales.length&&((n=(u=a.where)==null?void 0:u.find(l=>l._locale))!=null&&n._locale||(a.where=a.where||[],a.where.push({_locale:o.defaultLocale})));const _=o.experimental.stripQueryParameters?P(`/navigation/${`${f(a)}.${o.integrity}`}/${M(a)}.json`):P(`/navigation/${f(a)}.${o.integrity}.json`);if(B())return(await e(()=>import("./client-db.9f812272.js"),["./client-db.9f812272.js","./entry.72bcef99.js","./entry.d07c7987.css","./utils.8cc48f74.js","./query.b753eb58.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(l=>l.generateNavigation))(a);const i=await $fetch(_,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:z(a),previewToken:H("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const L={},G=p({props:{name:String},async setup(t,o){const a=await L[t.name]().then(_=>_.default||_);return()=>d(a,{},o.slots)}}),U=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const a=A("_route"),_=a===R()?g():a,i=v(()=>{var u,n;return(n=(u=y(t.name))!=null?u:_.meta.layout)!=null?n:"default"});return()=>{var m;const u=i.value&&i.value in L,n=(m=_.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(G,u&&{key:i.value,name:i.value,hasTransition:void 0},o.slots).default()}).default()}}}),q=Object.freeze(Object.defineProperty({__proto__:null,default:U},Symbol.toStringTag,{value:"Module"})),J=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:a}){const _=s(null),i=T();return j(u=>{if(!i.isHydrating)return a("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=o.error)==null?void 0:u.call(o,{error:_}):(n=o.default)==null?void 0:n.call(o)}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=p({name:"DevOnly",setup(t,o){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const a=et({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",a.start),_.hook("page:finish",a.finish),w(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function et(t){const o=s(0),a=s(!1),_=v(()=>1e4/t.duration);let i=null,u=null;function n(){l(),o.value=0,a.value=!0,t.throttle?u=setTimeout(E,t.throttle):E()}function m(){o.value=100,I()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function O(c){o.value=Math.min(100,o.value+c)}function I(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{o.value=0},400)},500)}function E(){i=setInterval(()=>{O(_.value)},100)}return{progress:o,isLoading:a,start:n,finish:m,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Comments.73a28a8a.js"),["./Comments.73a28a8a.js","./client-only.7221b10e.js","./entry.72bcef99.js","./entry.d07c7987.css","./client-only.0a5191b0.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Filter.4e7c0389.js").then(t=>t.F),["./Filter.4e7c0389.js","./entry.72bcef99.js","./entry.d07c7987.css","./use-outside-click.72ebfecf.js","./hidden.0458c1b8.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.9790a3d6.js"),["./FilterBar.9790a3d6.js","./entry.72bcef99.js","./entry.d07c7987.css","./use-outside-click.72ebfecf.js","./use-tracked-pointer.8cb00fc0.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Foot.54a9e44d.js"),["./Foot.54a9e44d.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js","./entry.72bcef99.js","./entry.d07c7987.css","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Huggingface.bf3e2c9e.js"),["./Huggingface.bf3e2c9e.js","./ContentRenderer.5fee7f57.js","./ContentRendererMarkdown.755f90f7.js","./entry.72bcef99.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.7221b10e.js","./client-only.0a5191b0.css","./Comments.73a28a8a.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Nav.24467d23.js"),["./Nav.24467d23.js","./entry.72bcef99.js","./entry.d07c7987.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js","./Nav.989f618f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Notebook.7e7d28a7.js"),["./Notebook.7e7d28a7.js","./ContentRenderer.5fee7f57.js","./ContentRendererMarkdown.755f90f7.js","./entry.72bcef99.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.7221b10e.js","./client-only.0a5191b0.css","./Comments.73a28a8a.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SelectType.301cbeaa.js"),["./SelectType.301cbeaa.js","./entry.72bcef99.js","./entry.d07c7987.css","./use-outside-click.72ebfecf.js","./use-tracked-pointer.8cb00fc0.js","./hidden.0458c1b8.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.570f8534.js"),["./ContentDoc.570f8534.js","./entry.72bcef99.js","./entry.d07c7987.css","./ContentRenderer.5fee7f57.js","./ContentRendererMarkdown.755f90f7.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.d0de8261.js","./asyncData.e5a57503.js","./query.b753eb58.js","./utils.8cc48f74.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.2683b425.js"),["./ContentList.2683b425.js","./ContentQuery.d0de8261.js","./entry.72bcef99.js","./entry.d07c7987.css","./asyncData.e5a57503.js","./query.b753eb58.js","./utils.8cc48f74.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.d0de8261.js"),["./ContentQuery.d0de8261.js","./entry.72bcef99.js","./entry.d07c7987.css","./asyncData.e5a57503.js","./query.b753eb58.js","./utils.8cc48f74.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.5fee7f57.js"),["./ContentRenderer.5fee7f57.js","./ContentRendererMarkdown.755f90f7.js","./entry.72bcef99.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.755f90f7.js"),["./ContentRendererMarkdown.755f90f7.js","./entry.72bcef99.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.ff02d9b7.js"),["./ContentSlot.ff02d9b7.js","./utils.8cc48f74.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.3388cd05.js"),["./DocumentDrivenEmpty.3388cd05.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.aac2436e.js"),["./DocumentDrivenNotFound.aac2436e.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.a1e47108.js"),["./Markdown.a1e47108.js","./ContentSlot.ff02d9b7.js","./utils.8cc48f74.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.56b099e5.js"),["./ProseA.56b099e5.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.c2441535.js"),["./ProseBlockquote.c2441535.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.fe858472.js"),["./ProseCode.fe858472.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.0c417eaa.js"),["./ProseCodeInline.0c417eaa.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.aa28c321.js"),["./ProseEm.aa28c321.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.20400a07.js"),["./ProseH1.20400a07.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.0f2f52d1.js"),["./ProseH2.0f2f52d1.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.e50c3b0e.js"),["./ProseH3.e50c3b0e.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.dd27c071.js"),["./ProseH4.dd27c071.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.3862e46e.js"),["./ProseH5.3862e46e.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.032db1f5.js"),["./ProseH6.032db1f5.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.d61b9400.js"),["./ProseHr.d61b9400.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.5c673e61.js"),["./ProseImg.5c673e61.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.ac7ada3d.js"),["./ProseLi.ac7ada3d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.283cb715.js"),["./ProseOl.283cb715.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.3561c0a6.js"),["./ProseP.3561c0a6.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.4be3a7e5.js"),["./ProseStrong.4be3a7e5.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.57c328df.js"),["./ProseTable.57c328df.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.3a7b7d8b.js"),["./ProseTbody.3a7b7d8b.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.8737cdc1.js"),["./ProseTd.8737cdc1.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.83f38245.js"),["./ProseTh.83f38245.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.7b2fd5fb.js"),["./ProseThead.7b2fd5fb.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.3756832f.js"),["./ProseTr.3756832f.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.33295543.js"),["./ProseUl.33295543.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.b85bcca9.js"),["./welcome.b85bcca9.js","./entry.72bcef99.js","./entry.d07c7987.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.e5a57503.js","./query.b753eb58.js","./utils.8cc48f74.js","./client-only.7221b10e.js","./client-only.0a5191b0.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.008e3038.js","./Nav.989f618f.css","./ContentRenderer.5fee7f57.js","./ContentRendererMarkdown.755f90f7.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.570f8534.js","./ContentQuery.d0de8261.js","./ContentList.2683b425.js","./ContentSlot.ff02d9b7.js","./DocumentDrivenEmpty.3388cd05.js","./DocumentDrivenNotFound.aac2436e.js","./Markdown.a1e47108.js","./ProseCode.fe858472.js","./ProseCode.e63e49c6.css","./components.4e184c5f.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>q),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.7221b10e.js"),["./client-only.7221b10e.js","./entry.72bcef99.js","./entry.d07c7987.css","./client-only.0a5191b0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.72bcef99.js").then(t=>t.aj),["./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.72bcef99.js").then(t=>t.ak),["./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./components.4e184c5f.js"),["./components.4e184c5f.js","./entry.72bcef99.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Body));const ot=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=$(t),a=v(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!a.value&&x("dd-navigation").value){const{navigation:i}=Q();return{navigation:i}}const{data:_}=await k(`content-navigation-${f(a.value)}`,()=>F(a.value));return{navigation:_}},render(t){const o=N(),{navigation:a}=t,_=n=>d(C,{to:n._path},()=>n.title),i=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[_(l),i(l.children,m+1)]):d("li",null,_(l)))),u=n=>i(n,0);return o!=null&&o.default?o.default({navigation:a,...this.$attrs}):u(a)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as default};