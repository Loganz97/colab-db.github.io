import{a1 as b,a2 as k,w as E,u as w,r as N,L as I,o as u,F as p,O as a,G as f,B as v,S,I as L,P as T,$ as V,R as B,E as O,a3 as C,a4 as $}from"./entry-dbcda6c7.mjs";import{_ as D}from"./plugin-vue_export-helper-84c1d017.mjs";var y;const c=typeof window!="undefined",F=e=>typeof e=="string",_=()=>{};c&&((y=window==null?void 0:window.navigator)==null?void 0:y.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function P(e){return b()?(k(e),!0):!1}function W(e){var n;const t=w(e);return(n=t==null?void 0:t.$el)!=null?n:t}const G=c?window:void 0;c&&window.document;c&&window.navigator;c&&window.location;function H(...e){let n,t,r,o;if(F(e[0])?([t,r,o]=e,n=G):[n,t,r,o]=e,!n)return _;let l=_;const d=E(()=>W(n),i=>{l(),i&&(i.addEventListener(t,r,o),l=()=>{i.removeEventListener(t,r,o),l=_})},{immediate:!0,flush:"post"}),s=()=>{d(),l()};return P(s),s}const h=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},m="__vueuse_ssr_handlers__";h[m]=h[m]||{};h[m];var x;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(x||(x={}));const g=e=>(C("data-v-55224672"),e=e(),$(),e),R={class:"sticky top-0 bg-white border-b z-50"},A={class:"container mx-auto flex items-center justify-between h-20 px-3 lg:px-12 md:px-0"},M=g(()=>a("span",{class:"rainbow-text"},"Colab DB",-1)),U={key:0,class:"flex shadow-sm w-full px-3 max-w-xl flex-auto"},j={class:"relative flex-1"},z=["value"],K=g(()=>a("span",{class:"absolute hidden px-2 text-gray opacity-50 bg-gray-200 dark:bg-secondary-dark rounded-md md:inline-block text-md top-2 bottom-2 right-2"},"/",-1)),q={class:"flex items-center space-x-7 text-gray-600"},J={class:"flex items-center space-x-2"},Q={class:"font-medium"},X=g(()=>a("div",{class:"h-0.5 w-full bg-primary mt-1 -translate-y-full scale-0 group-hover:scale-100 group-hover:translate-y-full transition-all"},null,-1)),Y={__name:"Nav",props:{modelValue:String,showsearch:Boolean},emits:["update:modelValue"],setup(e){const n=[{name:"Notebooks",icon:"carbon:blog",link:"/"},{name:"Submit",icon:"ion:send-outline",link:"/submit"}],t=N(null);function r(){t.value.focus()}return I(()=>{H("keypress",o=>{o.key==="/"&&!(o.target instanceof HTMLInputElement)&&(o.preventDefault(),r())})}),(o,l)=>{const d=O;return u(),p("header",R,[a("div",A,[f(d,{to:"/",class:"font-bold text-2xl lg:text-4xl hidden lg:block"},{default:v(()=>[M]),_:1}),e.showsearch?(u(),p("div",U,[a("label",j,[a("input",{type:"text",ref_key:"searchEl",ref:t,"aria-label":"Search",value:e.modelValue,onInput:l[0]||(l[0]=s=>o.$emit("update:modelValue",s.target.value)),class:"block bg-gray-200/40 dark:bg-secondary-dark/50 w-full py-1 px-3 h-10 text-base leading-6 placeholder-gray-400 dark:placeholder-secondary-light transition duration-150 ease-in-out appearance-none md:pr-10 rounded-lg focus:ring-3 focus:ring-sky-dark focus:ring-opacity-50 focus:outline-none focus:placeholder-sky-darkest focus:dark:placeholder-secondary-lightest sm:flex-1",placeholder:"Search notebooks (name, category, software, etc.)"},null,40,z),K])])):S("",!0),a("nav",q,[(u(),p(L,null,T(n,(s,i)=>f(d,{key:`navLink-${i}`,to:s.link,class:"inline-block nav-link hover:text-primary group"},{default:v(()=>[a("div",J,[f(w(V),{icon:s.icon,class:"w-4 h-4"},null,8,["icon"]),a("span",Q,B(s.name),1)]),X]),_:2},1032,["to"])),64))])])])}}};var te=D(Y,[["__scopeId","data-v-55224672"]]);export{te as _};
