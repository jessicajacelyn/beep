import{r as n,o as c,c as a,a as s,t as r,u,b as d,w as _,d as h}from"./index.724198eb.js";const m={class:"columns is-multiline mx-6 my-6 px-6 py-6"},p={class:"column is-full"},f=s("p",{class:"title is-3"},"Page Not Found",-1),b=s("br",null,null,-1),k={class:"subtitle"},v={class:"columns is-vcentered"},w=s("div",{class:"column"},[s("p",{class:"subtitle"}," The page you tried to look for does not exists! ")],-1),g={class:"column is-narrow"},y=s("div",{class:"column is-full"},[s("hr")],-1),B={class:"column is-half"},C={class:"column is-half"},N=h(" Home "),S={setup(x){const e=window.location.toString();return(o,t)=>{const l=n("router-link");return c(),a("div",m,[s("div",p,[f,b,s("p",k,'"'+r(u(e))+'"',1),s("div",v,[w,s("div",g,[s("button",{class:"button is-light is-warning is-fullwidth",onClick:t[0]||(t[0]=(...i)=>o.report&&o.report(...i))}," report issue ")])])]),y,s("div",B,[s("button",{class:"button is-light is-warning is-fullwidth",onClick:t[1]||(t[1]=(...i)=>o.$router.back&&o.$router.back(...i))}," Back ")]),s("div",C,[d(l,{class:"button is-light is-success is-fullwidth",to:{name:"home"}},{default:_(()=>[N]),_:1})])])}}};export{S as default};