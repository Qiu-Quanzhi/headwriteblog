import{F as I}from"./v-preview-image-CV418JT_.js";import{a as N}from"./vue-router-C9JWa5eL.js";import{u as T}from"./vuex-OS5sEosF.js";import{_ as F}from"./index-Prd-LIop.js";import{aZ as _,aN as k,aE as w,w as B,b as d,F as D,h as E,g as b,e as m,i as f,P as L,b0 as O,o as i,n as R}from"./@vue-B8udbIOa.js";import"./@kangc-nvo5awfK.js";import"./@babel-BgIvLCQ5.js";import"./vue-BX8RVE9m.js";import"./@vuepress-3yONQRlZ.js";import"./copy-to-clipboard-C0dvYkVd.js";import"./toggle-selection-DGa8lynz.js";import"./highlight.js-DsdEMM-1.js";const q={setup(){const l=N(),v=T(),o=_({title:l.params.title||"无标题",date:l.params.date||"未知日期",content:""}),t=_([]),p=_(null),u=_(!0),h=()=>{u.value=window.innerWidth>=1024};window.addEventListener("resize",h),k(h);const c=e=>{const n=sessionStorage.getItem(`article-${e}`);return n?JSON.parse(n):null},g=()=>{console.log("复制成功")},y=async e=>{const n=c(e);if(n)o.value=n;else{const s=v.state.markdownFiles.find(a=>a.title===e);s?(o.value={title:s.title,date:o.value.date,content:s.content},sessionStorage.setItem(`article-${e}`,JSON.stringify(o.value))):o.value.content="文章未找到"}},S=(e,n)=>{I(n,e)},x=e=>{const n=p.value,{lineIndex:s}=e,a=n.$el.querySelector(`[data-v-md-line="${s}"]`);a&&n.scrollToTarget({target:a,scrollContainer:window,top:60})},C=()=>{const e=p.value;if(!e)return;const n=e.$el;if(!n)return;const s=n.querySelectorAll("h1, h2, h3, h4, h5, h6"),a=Array.from(s).filter(r=>r.innerText.trim());if(!a.length)return;const A=Array.from(new Set(a.map(r=>r.tagName))).sort();t.value=a.map(r=>({title:r.innerText,lineIndex:r.getAttribute("data-v-md-line"),indent:A.indexOf(r.tagName)}))};return k(()=>{l.params.title&&y(l.params.title).then(()=>{w(()=>{C()})})}),B(()=>o.value.content,e=>{e&&w(()=>{C()})}),{article:o,titles:t,handleCopyCodeSuccess:g,handleAnchorClick:x,handleImageClick:S,previewRef:p,isDesktop:u}}},z={class:"content-wrapper"},J={key:0,class:"anchor-navigation"},V=["onClick"],M={style:{cursor:"pointer"}},P={class:"content-container"},W={class:"content-header"},Z={class:"article-title"},$={class:"article-date"},j={key:1};function G(l,v,o,t,p,u){const h=O("v-md-preview");return i(),d("div",z,[t.isDesktop?(i(),d("nav",J,[(i(!0),d(D,null,E(t.titles,c=>(i(),d("div",{key:c.lineIndex,style:R({paddingLeft:`${c.indent*20}px`}),class:"anchor-item",onClick:g=>t.handleAnchorClick(c)},[m("a",M,f(c.title),1)],12,V))),128))])):b("",!0),m("div",P,[m("header",W,[m("h1",Z,f(t.article.title),1),m("p",$,"发布日期："+f(t.article.date),1)]),t.article.content?(i(),L(h,{onImageClick:t.handleImageClick,ref:"previewRef",onCopyCodeSuccess:t.handleCopyCodeSuccess,text:t.article.content,key:t.article.title},null,8,["onImageClick","onCopyCodeSuccess","text"])):(i(),d("p",j,"加载中..."))])])}const re=F(q,[["render",G],["__scopeId","data-v-89043d06"]]);export{re as default};
