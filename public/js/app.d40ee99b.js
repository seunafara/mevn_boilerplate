(function(e){function t(t){for(var n,o,c=t[0],s=t[1],i=t[2],l=0,f=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-174318ba":"87e499ae","chunk-2becde72":"9a1ff1ac","chunk-2d22d746":"8478609c","chunk-5577eac7":"9d07f418"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-174318ba":1,"chunk-2becde72":1,"chunk-5577eac7":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-174318ba":"0c4428d5","chunk-2becde72":"8b7ef67c","chunk-2d22d746":"31d6cfe0","chunk-5577eac7":"8b7ef67c"}[e]+".css",a=s.p+n,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],l=i.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var f=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=l;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"3e80":function(e,t,r){"use strict";var n=r("6beb"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",[r("router-view")],1)])},a=[],u={},c=u,s=(r("034f"),r("2877")),i=Object(s["a"])(c,o,a,!1,null,null,null),l=i.exports,f=(r("45fc"),r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Navbar"),e._m(0)],1)},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"main-home"},[r("div",{staticClass:"main-home-contents"},[r("h2",[e._v("MEVN")]),r("p",[e._v("Built by Afara Seun (@seunafara)")])])])}],h=r("d178"),m={name:"Home",components:{Navbar:h["a"]},methods:{},created:function(){}},g=m,v=(r("3e80"),Object(s["a"])(g,p,d,!1,null,"956c8782",null)),b=v.exports,_=r("2f62"),k=(r("99af"),r("96cf"),r("1da1")),y=r("bc3a"),w=r.n(y),x=r("ae92"),O="v1",j=x["appURL"],E={token:localStorage.getItem("token")||"",user:{},status:"",error:null},L={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},S={login:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function r(){var n,o,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,n("auth_request"),r.prev=2,r.next=5,w.a.post("".concat(j,"/api/").concat(O,"/auth/login"),t);case 5:if(o=r.sent,!o||!o.data.success){r.next=13;break}return a=o.data.token,u=o.data.user,localStorage.setItem("token",a),w.a.defaults.headers.common["Authorization"]=a,n("auth_success",a,u),r.abrupt("return",o);case 13:r.next=18;break;case 15:r.prev=15,r.t0=r["catch"](2),n("auth_error",r.t0);case 18:case"end":return r.stop()}}),r,null,[[2,15]])})))()},register:function(e,t){return Object(k["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,n("register_request"),r.next=5,w.a.post("".concat(j,"/api/").concat(O,"/auth/register"),t);case 5:if(o=r.sent,!o||void 0===o.data.success){r.next=9;break}return n("register_success"),r.abrupt("return",o);case 9:r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](1),n("register_error",r.t0);case 14:case"end":return r.stop()}}),r,null,[[1,11]])})))()},getProfile:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,r("profile_request"),t.next=5,w.a.get("".concat(j,"/api/").concat(O,"/auth/profile"));case 5:if(o=t.sent,!o||void 0===o.data.success){t.next=9;break}return r("user_profile",o.data.user),t.abrupt("return",o);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),401==t.t0.response.status&&n("logout");case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))()},logout:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,localStorage.removeItem("token");case 3:return r("logout"),delete w.a.defaults.headers.common["Authorization"],R.push("/login"),t.abrupt("return");case 7:case"end":return t.stop()}}),t)})))()}},A={auth_request:function(e){e.error=null,e.status="loading"},auth_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},auth_error:function(e,t){e.error=t.response.data.errors},register_request:function(e){e.error=null,e.status="loading"},register_success:function(e){e.error=null,e.status="success"},register_error:function(e,t){e.error=t.response.data.errors},logout:function(e){e.error=null,e.status="",e.token="",e.user=""},profile_request:function(e){e.status="loading"},user_profile:function(e,t){e.user=t}},q={state:E,actions:S,mutations:A,getters:L};n["a"].use(_["a"]);var C=new _["a"].Store({modules:{Auth:q},state:{},mutations:{},actions:{}});n["a"].use(f["a"]);var I=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return r.e("chunk-2d22d746").then(r.bind(null,"f820"))}},{path:"/login",name:"login",meta:{requiresGuest:!0},component:function(){return r.e("chunk-2becde72").then(r.bind(null,"d60c"))}},{path:"/register",name:"register",meta:{requiresGuest:!0},component:function(){return r.e("chunk-5577eac7").then(r.bind(null,"3232"))}},{path:"/profile",name:"profile",meta:{requiresAuth:!0},component:function(){return r.e("chunk-174318ba").then(r.bind(null,"c66d"))}}],P=new f["a"]({mode:"history",base:"/",routes:I});P.beforeEach((function(e,t,r){e.matched.some((function(e){return e.meta.requiresAuth}))?C.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requiresGuest}))&&C.getters.isLoggedIn?r("/profile"):r()}));var R=P;n["a"].config.productionTip=!1,n["a"].prototype.$http=w.a;var N=localStorage.getItem("token");N&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=N),new n["a"]({router:R,store:C,render:function(e){return e(l)}}).$mount("#app")},"6beb":function(e,t,r){},"85ec":function(e,t,r){},ae92:function(e,t,r){e.exports={appURL:"",secret:"thebigsecret",api_version:"v1"}},d178:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav-container"},[r("nav",[r("input",{attrs:{type:"checkbox",id:"nav",hidden:""}}),e._m(0),r("div",{staticClass:"logo"},[r("router-link",{attrs:{to:"/"}},[e._v("MEVN")])],1),r("div",{staticClass:"nav-wrapper"},[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),e.isLoggedIn?e._e():r("li",[r("router-link",{attrs:{to:"/login"}},[e._v("Login ")])],1),e.isLoggedIn?e._e():r("li",[r("router-link",{attrs:{to:"/register"}},[e._v("Register ")])],1),e.isLoggedIn?r("li",[r("router-link",{attrs:{to:"/profile"}},[e._v("Profile ")])],1):e._e(),e.isLoggedIn?r("li",[r("a",{attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logoutUser(t)}}},[e._v("Logout ")])]):e._e()])])])])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"nav-btn",attrs:{for:"nav"}},[r("i"),r("i"),r("i")])}],a=r("5530"),u=r("2f62"),c={computed:Object(a["a"])({},Object(u["c"])(["isLoggedIn"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},s=c,i=r("2877"),l=Object(i["a"])(s,n,o,!1,null,null,null);t["a"]=l.exports}});