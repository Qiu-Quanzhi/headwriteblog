import{T as _}from"./Twikoo-B8bNjCgF.js";import{j as m}from"./js-yaml-mbYHt68G.js";import{_ as p}from"./index-Prd-LIop.js";import{aZ as f,aN as h,b as e,e as a,i as n,F as k,h as v,c as u,o,g,b0 as y}from"./@vue-B8udbIOa.js";import"./vue-router-C9JWa5eL.js";import"./@kangc-nvo5awfK.js";import"./@babel-BgIvLCQ5.js";import"./vue-BX8RVE9m.js";import"./@vuepress-3yONQRlZ.js";import"./copy-to-clipboard-C0dvYkVd.js";import"./toggle-selection-DGa8lynz.js";import"./vuex-OS5sEosF.js";import"./highlight.js-DsdEMM-1.js";import"./v-preview-image-CV418JT_.js";const w={components:{Twikoo:_},setup(){const i=f({class_name:"",class_desc:"",link_list:[]});return h(async()=>{try{const s=await(await fetch("friends.yaml")).text(),c=m.load(s);i.value=c[0]}catch(r){console.error("Error loading YAML file:",r)}}),{friendData:i,getInitials:r=>r.split(" ").map(s=>s.charAt(0).toUpperCase()).join("")}}},x={class:"friend-links-container"},D={class:"description"},I={class:"link-list"},N=["href"],T={class:"link-info"},b={key:0,class:"avatar-placeholder"},j=["src"],B={class:"link-details"},C={class:"link-name"},F={key:0,class:"link-desc"};function L(i,l,r,s,c,V){const d=y("Twikoo");return o(),e("div",x,[a("h2",null,n(s.friendData.class_name),1),a("p",D,n(s.friendData.class_desc),1),a("div",I,[(o(!0),e(k,null,v(s.friendData.link_list,t=>(o(),e("div",{key:t.name,class:"link-item"},[a("a",{href:t.url,target:"_blank",class:"link"},[a("div",T,[t.avatar?(o(),e("img",{key:1,src:t.avatar,alt:"",class:"avatar"},null,8,j)):(o(),e("div",b,n(s.getInitials(t.name)),1)),a("div",B,[a("span",C,n(t.name),1),t.descr?(o(),e("p",F,n(t.descr),1)):g("",!0)])])],8,N)]))),128))]),u(d)])}const P=p(w,[["render",L],["__scopeId","data-v-49592f48"]]);export{P as default};
