import{f as h,q as f,N as p,J as _,O as c,j as s,P as g,Q as m,_ as v}from"./entry.e8d05b53.js";const $=h({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:l}){const i=f(!1);return p(()=>{i.value=!0}),r=>{var n;if(i.value)return(n=t.default)==null?void 0:n.call(t);const a=t.fallback||t.placeholder;if(a)return a();const d=r.fallback||r.placeholder||"",o=r.fallbackTag||r.placeholderTag||"span";return _(o,l,d)}}}),u=new WeakMap;function b(e){if(u.has(e))return u.get(e);const t={...e};return t.render?t.render=(l,...i)=>{var r;if(l.mounted$){const a=e.render(l,...i);return a.children===null||typeof a.children=="string"?c(a.type,a.props,a.children,a.patchFlag,a.dynamicProps,a.shapeFlag):s(a)}else return s("div",(r=l.$attrs)!=null?r:l._.attrs)}:t.template&&(t.template=`
      <template v-if="mounted$">${e.template}</template>
      <template v-else><div></div></template>
    `),t.setup=(l,i)=>{var a;const r=f(!1);return p(()=>{r.value=!0}),Promise.resolve(((a=e.setup)==null?void 0:a.call(e,l,i))||{}).then(d=>typeof d!="function"?{...d,mounted$:r}:(...o)=>{if(r.value){const n=d(...o);return n.children===null||typeof n.children=="string"?c(n.type,n.props,n.children,n.patchFlag,n.dynamicProps,n.shapeFlag):s(n)}else return s("div",i.attrs)})},u.set(e,t),t}h({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const e={ref:"_"};for(const t in this.$props)e[g(t)]=this.$props[t];return s("span",[m(this.$slots,"default")?s("a",e,this.$slots.default()):s("a",e)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){const e=this.$el.appendChild(document.createElement("span")),t=this;v(()=>import("./buttons.esm.041d36f7.js"),[],import.meta.url).then(function(l){l.render(e.appendChild(t.$refs._),function(i){try{e.parentNode.replaceChild(i,e)}catch{}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}});export{b as createClientOnly,$ as default};