import{l as d,o as b,c as h,r as B,n as _,b as r,z as p,H as V,h as C,t as S,a1 as P,a2 as x,M as z,N,d as E,K as w,a3 as O,u as $,p as D,k as j,a4 as R,a5 as T,a6 as k,a7 as F,a8 as L,a9 as H,aa as G,ab as K,ac as M,ad as U,ae as q,af as J,ag as Y}from"./chunks/framework.9b4c5c81.js";import{t as Q}from"./chunks/theme.9b90acaf.js";const v=(e,a)=>{const t=e.__vccOpts||e;for(const[n,s]of a)t[n]=s;return t},W=["disabled"],X={name:"yButton"},Z=Object.assign(X,{props:{type:{type:String,default:"default"},disabled:Boolean,plain:Boolean},setup(e){const a=e,t=d(()=>["y-button",`y-button-${a.type}`,a.disabled?"y-button-disabled":"",a.plain?"y-button-plain":""]);return(n,s)=>(b(),h("button",{class:_(r(t)),disabled:e.disabled},[B(n.$slots,"default",{},void 0,!0)],10,W))}}),c=v(Z,[["__scopeId","data-v-ebdacedf"]]);c.install=e=>{e.component(c.name,c)};const ee=e=>(z("data-v-5de657c4"),e=e(),N(),e),ae=["value","placeholder","disabled","password"],te=ee(()=>p("i",null,"x",-1)),ne=[te],se={name:"yInput"},le=Object.assign(se,{props:{modelValue:String|Number,placeholder:String,disabled:Boolean,clearable:Boolean,password:Boolean},emits:["update:modelValue"],setup(e,{emit:a}){const t=e,n=u=>{a("update:modelValue",u.target.value)},s=d(()=>["y-input",{"y-input-disabled":t.disabled,"y-input-password":t.password}]),i=d(()=>[{display:t.clearable&&t.modelValue?"block":"none"}]),g=()=>{a("update:modelValue","")};return(u,A)=>(b(),h("div",{class:_(r(s))},[p("input",{type:"text",class:"",value:e.modelValue,onInput:n,placeholder:e.placeholder,disabled:e.disabled,password:e.password},null,40,ae),p("span",{class:"clear-icon",style:V(r(i)),onClick:g},ne,4)],2))}}),m=v(le,[["__scopeId","data-v-5de657c4"]]);m.install=e=>{e.component(m.name,m)};const oe=["cols","rows","value","disabled","readonly","placeholder","maxlength"],de={class:"max-length-inline"},ie={name:"yTextarea"},re=Object.assign(ie,{props:{modelValue:String,rows:{type:Number,default:4},cols:{type:Number,default:50},resize:{type:Boolean,default:!0},disabled:Boolean,readonly:Boolean,placeholder:String,maxlength:Number},emits:["update:modelValue","focus","blur"],setup(e,{emit:a}){const t=e,n=C(0),s=l=>{n.value=l.target.value.length,n.value>t.maxlength&&(n.value=t.maxlength),a("update:modelValue",l.target.value)},i=d(()=>({"y-textarea":!0,"y-textarea-disabled":t.disabled})),g=d(()=>({resize:t.resize?"auto":"none"})),u=l=>{a("focus",l)},A=l=>{a("blur",l)};return(l,xe)=>(b(),h("div",{class:_(r(i))},[p("textarea",{name:"",id:"",cols:e.cols,rows:e.rows,value:e.modelValue,onInput:s,disabled:e.disabled,readonly:e.readonly,placeholder:e.placeholder,onFocus:u,onBlur:A,maxlength:e.maxlength,style:V(r(g))},null,44,oe),p("div",de,S(n.value)+"/"+S(e.maxlength),1)],2))}}),f=v(re,[["__scopeId","data-v-731fd0c3"]]);f.install=e=>{e.component(f.name,f)};const pe={name:"ySpace",props:{inline:{type:Boolean,default:!1},size:{type:Array,default:[10,10]}},setup(e){const a=P(),t=C([]),n=d(()=>({display:e.inline?"inline-flex":"flex",gap:e.inline?`${e.size[0]}px ${e.size[1]}px`:`${e.size[0]}px`,"flex-direction":e.inline?"inherit":"column","algin-items":"center","flex-wrap":"wrap",width:"fit-content"}));return a.default().forEach((s,i)=>{t.value.push(x("div",{className:"y-space-item",style:"width:fit-content"},s))}),()=>[x("div",{className:"t-space",style:n.value},t.value)]}},ue={class:"y-space"};function ce(e,a,t,n,s,i){return b(),h("div",ue,[B(e.$slots,"default",{},void 0,!0)])}const y=v(pe,[["render",ce],["__scopeId","data-v-ae72870d"]]);y.install=e=>{e.component(y.name,y)};const me=e=>{e.use(m).use(c).use(f).use(y)},fe={install:me};const ye={...Q,enhanceApp:async({app:e,router:a,siteData:t})=>{e.use(fe)}};function I(e){if(e.extends){const a=I(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=I(ye),be=E({name:"VitePressApp",setup(){const{site:e}=$();return D(()=>{j(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),T(),k(),o.setup&&o.setup(),()=>x(o.Layout)}});async function he(){const e=ge(),a=ve();a.provide(F,e);const t=L(e.route);return a.provide(H,t),a.component("Content",G),a.component("ClientOnly",K),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:M}),{app:a,router:e,data:t}}function ve(){return U(be)}function ge(){let e=w,a;return q(t=>{let n=J(t);return e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),w&&(e=!1),Y(()=>import(n),[])},o.NotFound)}w&&he().then(({app:e,router:a,data:t})=>{a.go().then(()=>{O(a.route,t.site),e.mount("#app")})});export{he as createApp};