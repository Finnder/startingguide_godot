import{s as B,n as A,f as dt}from"../chunks/scheduler.63274e7e.js";import{S as N,i as R,g,m as W,h as m,j as w,n as F,f as b,k as x,a as V,x as l,o as ft,s as v,r as S,y as C,c as _,u as P,v as q,d as y,t as z,w as D,z as gt}from"../chunks/index.ff16eba4.js";function ct(f){return(f==null?void 0:f.length)!==void 0?f:Array.from(f)}function mt(f){let t,e,i,o;return{c(){t=g("a"),e=g("p"),i=W(f[0]),this.h()},l(a){t=m(a,"A",{href:!0,class:!0});var h=w(t);e=m(h,"P",{});var s=w(e);i=F(s,f[0]),s.forEach(b),h.forEach(b),this.h()},h(){x(t,"href",o="/"+f[1]),x(t,"class","sidebar-btn bg-white rounded border-white hover:bg-gray-700 phone:text-xl hover:text-white transition p-2 m-2 cursor-pointer")},m(a,h){V(a,t,h),l(t,e),l(e,i)},p(a,[h]){h&1&&ft(i,a[0]),h&2&&o!==(o="/"+a[1])&&x(t,"href",o)},i:A,o:A,d(a){a&&b(t)}}}function xt(f,t,e){let{text:i="placeholder"}=t,{link:o=""}=t;return f.$$set=a=>{"text"in a&&e(0,i=a.text),"link"in a&&e(1,o=a.link)},[i,o]}class et extends N{constructor(t){super(),R(this,t,xt,mt,B,{text:0,link:1})}}function pt(f){let t,e,i="<strong>Godot Starting Guide</strong>",o,a,h,s,p,c,r;return a=new et({props:{text:"Intro & Install"}}),s=new et({props:{text:"Creating The Project",link:"creating_proj"}}),c=new et({props:{text:"Creating A Moving Character"}}),{c(){t=g("div"),e=g("h1"),e.innerHTML=i,o=v(),S(a.$$.fragment),h=v(),S(s.$$.fragment),p=v(),S(c.$$.fragment),this.h()},l(u){t=m(u,"DIV",{class:!0});var n=w(t);e=m(n,"H1",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-1w972cs"&&(e.innerHTML=i),o=_(n),P(a.$$.fragment,n),h=_(n),P(s.$$.fragment,n),p=_(n),P(c.$$.fragment,n),n.forEach(b),this.h()},h(){x(e,"class","font-title text-white text-3xl p-2 mb-2 phone:hidden"),x(t,"class","sidebar rounded-xl flex flex-col fixed w-1/6 bg-blue-400 h-screen p-3 phone:w-screen phone:h-1/6 phone:bottom-0 phone:flex-row phone:flex-auto")},m(u,n){V(u,t,n),l(t,e),l(t,o),q(a,t,null),l(t,h),q(s,t,null),l(t,p),q(c,t,null),r=!0},p:A,i(u){r||(y(a.$$.fragment,u),y(s.$$.fragment,u),y(c.$$.fragment,u),r=!0)},o(u){z(a.$$.fragment,u),z(s.$$.fragment,u),z(c.$$.fragment,u),r=!1},d(u){u&&b(t),D(a),D(s),D(c)}}}class vt extends N{constructor(t){super(),R(this,t,null,pt,B,{})}}const _t=""+new URL("../assets/gd-bg.d58204fb.jpg",import.meta.url).href;function ht(f,t,e){const i=f.slice();return i[1]=t[e],i[3]=e,i}function ut(f){let t,e,i=f[3]+1+"",o,a,h=f[1].label+"",s,p,c;return{c(){t=g("li"),e=g("a"),o=W(i),a=W(": "),s=W(h),c=v(),this.h()},l(r){t=m(r,"LI",{});var u=w(t);e=m(u,"A",{href:!0,class:!0});var n=w(e);o=F(n,i),a=F(n,": "),s=F(n,h),n.forEach(b),c=_(u),u.forEach(b),this.h()},h(){x(e,"href",p=f[1].url),x(e,"class","text-xl p-2 text-blue-700 hover:text-white hover:cursor-pointer")},m(r,u){V(r,t,u),l(t,e),l(e,o),l(e,a),l(e,s),l(t,c)},p(r,u){u&1&&h!==(h=r[1].label+"")&&ft(s,h),u&1&&p!==(p=r[1].url)&&x(e,"href",p)},d(r){r&&b(t)}}}function bt(f){let t,e,i,o="Context Menu",a,h,s,p=ct(f[0]),c=[];for(let r=0;r<p.length;r+=1)c[r]=ut(ht(f,p,r));return{c(){t=g("main"),e=g("div"),i=g("h1"),i.textContent=o,a=v(),h=g("div"),s=g("ul");for(let r=0;r<c.length;r+=1)c[r].c();this.h()},l(r){t=m(r,"MAIN",{class:!0});var u=w(t);e=m(u,"DIV",{class:!0});var n=w(e);i=m(n,"H1",{class:!0,"data-svelte-h":!0}),C(i)!=="svelte-hr6dm4"&&(i.textContent=o),a=_(n),h=m(n,"DIV",{class:!0});var I=w(h);s=m(I,"UL",{});var G=w(s);for(let $=0;$<c.length;$+=1)c[$].l(G);G.forEach(b),I.forEach(b),n.forEach(b),u.forEach(b),this.h()},h(){x(i,"class","font-title text-3xl"),x(h,"class","context-list"),x(e,"class","fixed right-0 top-0 bg-black/5 w-1/6 h-screen p-2"),x(t,"class","phone:hidden")},m(r,u){V(r,t,u),l(t,e),l(e,i),l(e,a),l(e,h),l(h,s);for(let n=0;n<c.length;n+=1)c[n]&&c[n].m(s,null)},p(r,[u]){if(u&1){p=ct(r[0]);let n;for(n=0;n<p.length;n+=1){const I=ht(r,p,n);c[n]?c[n].p(I,u):(c[n]=ut(I),c[n].c(),c[n].m(s,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=p.length}},i:A,o:A,d(r){r&&b(t),gt(c,r)}}}function $t(f,t,e){let{contextItems:i=[{label:"Intro",url:"#intro-section"},{label:"Install",url:"#install-section"}]}=t;return f.$$set=o=>{"contextItems"in o&&e(0,i=o.contextItems)},[i]}class wt extends N{constructor(t){super(),R(this,t,$t,bt,B,{contextItems:0})}}function Ct(f){let t,e,i,o,a="<strong>Intro</strong>",h,s,p='Welcome to the <span class="text-blue-500">Godot Starting Guide</span>!',c,r,u="A short and simple guide to creating your first project in Godot!",n,I,G,$,nt="<strong>Installation</strong>",J,j,lt=`To install the game engine, we go to 
        <a class="link" target="_blank" href="https://godotengine.org">https://godotengine.org</a>`,K,k,st="or you can download here",O,Q,X,H,at="Linux",Y,L,rt="Windows",Z,E,ot="Mac",tt,T,it,U;return e=new wt({}),{c(){t=g("main"),S(e.$$.fragment),i=v(),o=g("h1"),o.innerHTML=a,h=v(),s=g("h2"),s.innerHTML=p,c=v(),r=g("p"),r.textContent=u,n=v(),I=g("br"),G=v(),$=g("h2"),$.innerHTML=nt,J=v(),j=g("p"),j.innerHTML=lt,K=v(),k=g("p"),k.textContent=st,O=v(),Q=g("br"),X=v(),H=g("a"),H.textContent=at,Y=v(),L=g("a"),L.textContent=rt,Z=v(),E=g("a"),E.textContent=ot,tt=v(),T=g("img"),this.h()},l(M){t=m(M,"MAIN",{});var d=w(t);P(e.$$.fragment,d),i=_(d),o=m(d,"H1",{class:!0,id:!0,"data-svelte-h":!0}),C(o)!=="svelte-f12jp0"&&(o.innerHTML=a),h=_(d),s=m(d,"H2",{"data-svelte-h":!0}),C(s)!=="svelte-efpthm"&&(s.innerHTML=p),c=_(d),r=m(d,"P",{"data-svelte-h":!0}),C(r)!=="svelte-3ho0kv"&&(r.textContent=u),n=_(d),I=m(d,"BR",{}),G=_(d),$=m(d,"H2",{class:!0,id:!0,"data-svelte-h":!0}),C($)!=="svelte-pujeu6"&&($.innerHTML=nt),J=_(d),j=m(d,"P",{"data-svelte-h":!0}),C(j)!=="svelte-loqht5"&&(j.innerHTML=lt),K=_(d),k=m(d,"P",{"data-svelte-h":!0}),C(k)!=="svelte-1yk4ifq"&&(k.textContent=st),O=_(d),Q=m(d,"BR",{}),X=_(d),H=m(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(H)!=="svelte-9au1jq"&&(H.textContent=at),Y=_(d),L=m(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(L)!=="svelte-12l1rae"&&(L.textContent=rt),Z=_(d),E=m(d,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(E)!=="svelte-1cy9icc"&&(E.textContent=ot),tt=_(d),T=m(d,"IMG",{class:!0,src:!0,alt:!0}),d.forEach(b),this.h()},h(){x(o,"class","font-title"),x(o,"id","intro-section"),x($,"class","font-title text-3xl"),x($,"id","install-section"),x(H,"class","btn-download"),x(H,"href","https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_linux.x86_64.zip"),x(L,"class","btn-download"),x(L,"href","https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_win64.exe.zip"),x(E,"class","btn-download"),x(E,"href","https://github.com/godotengine/godot/releases/download/4.1.1-stable/Godot_v4.1.1-stable_macos.universal.zip"),x(T,"class","w-2/4 mx-auto rounded mt-8 shadow-2xl"),dt(T.src,it=_t)||x(T,"src",it),x(T,"alt","")},m(M,d){V(M,t,d),q(e,t,null),l(t,i),l(t,o),l(t,h),l(t,s),l(t,c),l(t,r),l(t,n),l(t,I),l(t,G),l(t,$),l(t,J),l(t,j),l(t,K),l(t,k),l(t,O),l(t,Q),l(t,X),l(t,H),l(t,Y),l(t,L),l(t,Z),l(t,E),l(t,tt),l(t,T),U=!0},p:A,i(M){U||(y(e.$$.fragment,M),U=!0)},o(M){z(e.$$.fragment,M),U=!1},d(M){M&&b(t),D(e)}}}class It extends N{constructor(t){super(),R(this,t,null,Ct,B,{})}}function Mt(f){let t,e,i,o,a,h;return e=new vt({}),a=new It({}),{c(){t=g("main"),S(e.$$.fragment),i=v(),o=g("div"),S(a.$$.fragment),this.h()},l(s){t=m(s,"MAIN",{});var p=w(t);P(e.$$.fragment,p),i=_(p),o=m(p,"DIV",{class:!0});var c=w(o);P(a.$$.fragment,c),c.forEach(b),p.forEach(b),this.h()},h(){x(o,"class","p-2 h-screen")},m(s,p){V(s,t,p),q(e,t,null),l(t,i),l(t,o),q(a,o,null),h=!0},p:A,i(s){h||(y(e.$$.fragment,s),y(a.$$.fragment,s),h=!0)},o(s){z(e.$$.fragment,s),z(a.$$.fragment,s),h=!1},d(s){s&&b(t),D(e),D(a)}}}class Et extends N{constructor(t){super(),R(this,t,null,Mt,B,{})}}export{Et as component};
