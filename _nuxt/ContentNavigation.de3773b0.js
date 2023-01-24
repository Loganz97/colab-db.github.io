import{l as D,_ as e,f as p,j as d,D as A,a as R,E as g,k as v,F as V,G as h,u as y,H as b,q as s,p as T,I as j,J as S,K as w,d as r,t as $,L as x,h as N,M as C}from"./entry.e8d05b53.js";import{u as k}from"./asyncData.9d3be727.js";import{h as f,e as M,j as z}from"./query.5eda97f9.js";import{w as P,s as B,u as H,a as Q}from"./utils.5abec7fb.js";import"./client-only.69bbe3f6.js";import"./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js";import"./ContentRenderer.c5028e8c.js";import"./ContentDoc.44099d2f.js";import"./ContentList.219f8a86.js";import"./ContentQuery.64fb26f3.js";import"./ContentRendererMarkdown.a6d3b78d.js";import"./ContentSlot.c25740cb.js";import"./DocumentDrivenEmpty.d7e46f6c.js";import"./DocumentDrivenNotFound.d1c801db.js";import"./Markdown.abf66a2d.js";import"./ProseCode.40b8a270.js";import"./components.f438c1fa.js";import"./_commonjsHelpers.fed2a411.js";import"./_plugin-vue_export-helper.a1a6add7.js";const G=async t=>{var u,n;const{content:o}=D().public,a=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};o.locales.length&&((n=(u=a.where)==null?void 0:u.find(l=>l._locale))!=null&&n._locale||(a.where=a.where||[],a.where.push({_locale:o.defaultLocale})));const _=o.experimental.stripQueryParameters?P(`/navigation/${`${f(a)}.${o.integrity}`}/${M(a)}.json`):P(`/navigation/${f(a)}.${o.integrity}.json`);if(B())return(await e(()=>import("./client-db.a36a6b82.js"),["./client-db.a36a6b82.js","./entry.e8d05b53.js","./entry.d07c7987.css","./utils.5abec7fb.js","./query.5eda97f9.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(l=>l.generateNavigation))(a);const i=await $fetch(_,{method:"GET",responseType:"json",params:o.experimental.stripQueryParameters?void 0:{_params:z(a),previewToken:H("previewToken").value}});if(typeof i=="string"&&i.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return i};const L={},U=p({props:{name:String},async setup(t,o){const a=await L[t.name]().then(_=>_.default||_);return()=>d(a,{},o.slots)}}),q=p({props:{name:{type:[String,Boolean,Object],default:null}},setup(t,o){const a=A("_route"),_=a===R()?g():a,i=v(()=>{var u,n;return(n=(u=y(t.name))!=null?u:_.meta.layout)!=null?n:"default"});return()=>{var m;const u=i.value&&i.value in L,n=(m=_.meta.layoutTransition)!=null?m:V;return h(b,u&&n,{default:()=>h(U,u&&{key:i.value,name:i.value,hasTransition:void 0},o.slots).default()}).default()}}}),F=Object.freeze(Object.defineProperty({__proto__:null,default:q},Symbol.toStringTag,{value:"Module"})),J=p({emits:{error(t){return!0}},setup(t,{slots:o,emit:a}){const _=s(null),i=T();return j(u=>{if(!i.isHydrating)return a("error",u),_.value=u,!1}),()=>{var u,n;return _.value?(u=o.error)==null?void 0:u.call(o,{error:_}):(n=o.default)==null?void 0:n.call(o)}}}),K=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),W=p({name:"DevOnly",setup(t,o){return()=>null}}),Y=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"})),X=p({name:"ServerPlaceholder",render(){return S("div")}}),Z=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"})),tt=p({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:o}){const a=et({duration:t.duration,throttle:t.throttle}),_=T();return _.hook("page:start",a.start),_.hook("page:finish",a.finish),w(()=>a.clear),()=>d("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${a.progress.value}%`,height:`${t.height}px`,opacity:a.isLoading.value?1:0,background:t.color,backgroundSize:`${100/a.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},o)}});function et(t){const o=s(0),a=s(!1),_=v(()=>1e4/t.duration);let i=null,u=null;function n(){l(),o.value=0,a.value=!0,t.throttle?u=setTimeout(E,t.throttle):E()}function m(){o.value=100,I()}function l(){clearInterval(i),clearTimeout(u),i=null,u=null}function O(c){o.value=Math.min(100,o.value+c)}function I(){l(),setTimeout(()=>{a.value=!1,setTimeout(()=>{o.value=0},400)},500)}function E(){i=setInterval(()=>{O(_.value)},100)}return{progress:o,isLoading:a,start:n,finish:m,clear:l}}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"}));r(()=>e(()=>import("./Comments.00aa0086.js"),["./Comments.00aa0086.js","./client-only.69bbe3f6.js","./entry.e8d05b53.js","./entry.d07c7987.css","./client-only.0a5191b0.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Filter.67815680.js"),["./Filter.67815680.js","./entry.e8d05b53.js","./entry.d07c7987.css","./metadata.8d07167f.js","./use-outside-click.a899e4f9.js","./hidden.2c848f47.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./FilterBar.3c45a9d2.js"),["./FilterBar.3c45a9d2.js","./entry.e8d05b53.js","./entry.d07c7987.css","./use-outside-click.a899e4f9.js","./use-tracked-pointer.9582f0dd.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Foot.59339479.js"),["./Foot.59339479.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js","./entry.e8d05b53.js","./entry.d07c7987.css","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Huggingface.538d64b3.js"),["./Huggingface.538d64b3.js","./ContentRenderer.c5028e8c.js","./ContentRendererMarkdown.a6d3b78d.js","./entry.e8d05b53.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.69bbe3f6.js","./client-only.0a5191b0.css","./Comments.00aa0086.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Nav.65bcf5b5.js"),["./Nav.65bcf5b5.js","./entry.e8d05b53.js","./entry.d07c7987.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js","./Nav.989f618f.css","./_plugin-vue_export-helper.a1a6add7.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Notebook.dd170f25.js"),["./Notebook.dd170f25.js","./ContentRenderer.c5028e8c.js","./ContentRendererMarkdown.a6d3b78d.js","./entry.e8d05b53.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js","./client-only.69bbe3f6.js","./client-only.0a5191b0.css","./Comments.00aa0086.js","./_plugin-vue_export-helper.a1a6add7.js","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js","./Nav.989f618f.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./SelectType.0d8c71cd.js"),["./SelectType.0d8c71cd.js","./entry.e8d05b53.js","./entry.d07c7987.css","./use-outside-click.a899e4f9.js","./use-tracked-pointer.9582f0dd.js","./hidden.2c848f47.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentDoc.44099d2f.js"),["./ContentDoc.44099d2f.js","./entry.e8d05b53.js","./entry.d07c7987.css","./ContentRenderer.c5028e8c.js","./ContentRendererMarkdown.a6d3b78d.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.64fb26f3.js","./asyncData.9d3be727.js","./query.5eda97f9.js","./utils.5abec7fb.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentList.219f8a86.js"),["./ContentList.219f8a86.js","./ContentQuery.64fb26f3.js","./entry.e8d05b53.js","./entry.d07c7987.css","./asyncData.9d3be727.js","./query.5eda97f9.js","./utils.5abec7fb.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentQuery.64fb26f3.js"),["./ContentQuery.64fb26f3.js","./entry.e8d05b53.js","./entry.d07c7987.css","./asyncData.9d3be727.js","./query.5eda97f9.js","./utils.5abec7fb.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRenderer.c5028e8c.js"),["./ContentRenderer.c5028e8c.js","./ContentRendererMarkdown.a6d3b78d.js","./entry.e8d05b53.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentRendererMarkdown.a6d3b78d.js"),["./ContentRendererMarkdown.a6d3b78d.js","./entry.e8d05b53.js","./entry.d07c7987.css","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ContentSlot.c25740cb.js"),["./ContentSlot.c25740cb.js","./utils.5abec7fb.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenEmpty.d7e46f6c.js"),["./DocumentDrivenEmpty.d7e46f6c.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./DocumentDrivenNotFound.d1c801db.js"),["./DocumentDrivenNotFound.d1c801db.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./Markdown.abf66a2d.js"),["./Markdown.abf66a2d.js","./ContentSlot.c25740cb.js","./utils.5abec7fb.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseA.c3006deb.js"),["./ProseA.c3006deb.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseBlockquote.cca5a7fe.js"),["./ProseBlockquote.cca5a7fe.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCode.40b8a270.js"),["./ProseCode.40b8a270.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseCodeInline.eaec527a.js"),["./ProseCodeInline.eaec527a.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseEm.7eef6530.js"),["./ProseEm.7eef6530.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH1.a3c43795.js"),["./ProseH1.a3c43795.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH2.316ce950.js"),["./ProseH2.316ce950.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH3.c6522e61.js"),["./ProseH3.c6522e61.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH4.9354f735.js"),["./ProseH4.9354f735.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH5.a0e5b675.js"),["./ProseH5.a0e5b675.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseH6.e9c5d6b8.js"),["./ProseH6.e9c5d6b8.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseHr.9663c156.js"),["./ProseHr.9663c156.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseImg.ac0efae1.js"),["./ProseImg.ac0efae1.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseLi.22b6a5ab.js"),["./ProseLi.22b6a5ab.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseOl.d7a2b09d.js"),["./ProseOl.d7a2b09d.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseP.dd91e1d2.js"),["./ProseP.dd91e1d2.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseStrong.584d7208.js"),["./ProseStrong.584d7208.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTable.4cd28f82.js"),["./ProseTable.4cd28f82.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTbody.cad11f91.js"),["./ProseTbody.cad11f91.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTd.8b48e555.js"),["./ProseTd.8b48e555.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTh.545a5caa.js"),["./ProseTh.545a5caa.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseThead.569686e0.js"),["./ProseThead.569686e0.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseTr.685135db.js"),["./ProseTr.685135db.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./ProseUl.df038318.js"),["./ProseUl.df038318.js","./_plugin-vue_export-helper.a1a6add7.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./welcome.b382765e.js"),["./welcome.b382765e.js","./entry.e8d05b53.js","./entry.d07c7987.css","./_plugin-vue_export-helper.a1a6add7.js","./asyncData.9d3be727.js","./query.5eda97f9.js","./utils.5abec7fb.js","./client-only.69bbe3f6.js","./client-only.0a5191b0.css","./Nav.vue_vue_type_style_index_0_scoped_73941770_lang.91459bb3.js","./Nav.989f618f.css","./ContentRenderer.c5028e8c.js","./ContentRendererMarkdown.a6d3b78d.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.44099d2f.js","./ContentQuery.64fb26f3.js","./ContentList.219f8a86.js","./ContentSlot.c25740cb.js","./DocumentDrivenEmpty.d7e46f6c.js","./DocumentDrivenNotFound.d1c801db.js","./Markdown.abf66a2d.js","./ProseCode.40b8a270.js","./ProseCode.e63e49c6.css","./components.f438c1fa.js"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>F),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>K),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./client-only.69bbe3f6.js"),["./client-only.69bbe3f6.js","./entry.e8d05b53.js","./entry.d07c7987.css","./client-only.0a5191b0.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Y),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>Z),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.e8d05b53.js").then(t=>t.aj),["./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./entry.e8d05b53.js").then(t=>t.ak),["./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.default||t));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.NoScript));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Link));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Base));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Title));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Meta));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Style));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Head));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Html));r(()=>e(()=>import("./components.f438c1fa.js"),["./components.f438c1fa.js","./entry.e8d05b53.js","./entry.d07c7987.css"],import.meta.url).then(t=>t.Body));const ot=p({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:o}=$(t),a=v(()=>{var i;return typeof((i=o.value)==null?void 0:i.params)=="function"?o.value.params():o.value});if(!a.value&&x("dd-navigation").value){const{navigation:i}=Q();return{navigation:i}}const{data:_}=await k(`content-navigation-${f(a.value)}`,()=>G(a.value));return{navigation:_}},render(t){const o=N(),{navigation:a}=t,_=n=>d(C,{to:n._path},()=>n.title),i=(n,m)=>d("ul",m?{"data-level":m}:null,n.map(l=>l.children?d("li",null,[_(l),i(l.children,m+1)]):d("li",null,_(l)))),u=n=>i(n,0);return o!=null&&o.default?o.default({navigation:a,...this.$attrs}):u(a)}}),at=Object.freeze(Object.defineProperty({__proto__:null,default:ot},Symbol.toStringTag,{value:"Module"}));export{ot as default};
