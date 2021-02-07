(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5577eac7"],{3012:function(e,t,a){"use strict";var s=a("6918"),r=a.n(s);r.a},3232:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"main"},[e._m(0),a("div",{staticClass:"second-half"},[a("div",{staticClass:"login-f-container"},[a("h3",[e._v("Create an account.")]),e.error?a("div",e._l(e.error,(function(e){return a("Error",{key:e.param,attrs:{msg:e.msg}})})),1):e._e(),a("form",{on:{submit:function(t){return t.preventDefault(),e.registerUser(t)}}},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Username ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-input",attrs:{required:"",id:"username",name:"username",type:"text",placeholder:"e.g john_doe"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),a("div",{staticClass:"form-group-2"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Full Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-input",attrs:{required:"",id:"name",name:"name",type:"text",placeholder:"e.g John Doe"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),a("div",{staticClass:"form-group-2"},[a("label",{staticClass:"form-label",attrs:{for:"email"}},[e._v("Email Address ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-input",attrs:{required:"",id:"email",name:"email",type:"email",placeholder:"xyz@example.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-group-2"},[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-input",attrs:{required:"",name:"password",id:"password",type:"password",placeholder:"6 characters minimum"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group-2"},[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:e.confirm_password,expression:"confirm_password"}],staticClass:"form-input",attrs:{required:"",name:"confirm_password",id:"confirm_password",type:"password",placeholder:"Re-type your password"},domProps:{value:e.confirm_password},on:{input:function(t){t.target.composing||(e.confirm_password=t.target.value)}}})]),e._m(3)]),a("div",{staticClass:"new-user-box"},[a("p",{staticClass:"form-label"},[e._v("Already have an account?")]),a("router-link",{staticClass:"text-link",attrs:{to:"/login"}},[e._v("Login")])],1)])])])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"first-half"},[a("h1",[e._v("Hi")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item-flex"},[a("label",{staticClass:"form-label fl-l",attrs:{for:"password"}},[e._v("Password ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-item-flex"},[a("label",{staticClass:"form-label fl-l",attrs:{for:"confirm_password"}},[e._v("Confirm Password ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-btn-container"},[a("button",{staticClass:"button login-btn",attrs:{type:"submit"}},[e._v(" Register ")])])}],n=(a("b0c0"),a("5530")),i=a("2f62"),o=a("df21"),l={components:{Error:o["a"]},computed:Object(n["a"])({},Object(i["c"])(["error"])),data:function(){return{username:"",password:"",confirm_password:"",name:"",email:""}},methods:Object(n["a"])(Object(n["a"])({},Object(i["b"])(["register"])),{},{registerUser:function(){var e=this,t={username:this.username,password:this.password,confirm_password:this.confirm_password,email:this.email,name:this.name};this.register(t).then((function(t){t&&t.data.success&&e.$router.push("login")}))}})},m=l,c=(a("3012"),a("2877")),u=Object(c["a"])(m,s,r,!1,null,null,null);t["default"]=u.exports},"645a":function(e,t,a){},6918:function(e,t,a){},a590:function(e,t,a){"use strict";var s=a("645a"),r=a.n(s);r.a},b0c0:function(e,t,a){var s=a("83ab"),r=a("9bf2").f,n=Function.prototype,i=n.toString,o=/^\s*function ([^ (]*)/,l="name";s&&!(l in n)&&r(n,l,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(e){return""}}})},df21:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alert alert-danger"},[e._v(e._s(e.msg))])},r=[],n={props:["msg"]},i=n,o=(a("a590"),a("2877")),l=Object(o["a"])(i,s,r,!1,null,"4af0b814",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-5577eac7.9d07f418.js.map