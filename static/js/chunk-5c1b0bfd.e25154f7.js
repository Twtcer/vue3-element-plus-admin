(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c1b0bfd"],{"03de":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,"[data-v-05b2c50c] .el-form-item__label{line-height:36px!important}",""]),e.exports=t},"50f9":function(e,t,a){"use strict";a("d6b3")},"5d87":function(e,t,a){"use strict";a.r(t);a("c7cd");var n=a("7a23"),c=Object(n["withScopeId"])("data-v-05b2c50c"),o=c((function(e,t,a,o,l,r){var i=Object(n["resolveComponent"])("language"),u=Object(n["resolveComponent"])("el-form-item"),d=Object(n["resolveComponent"])("el-switch"),s=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createBlock"])(s,{"label-position":"left","label-width":"140px"},{default:c((function(){return[Object(n["createVNode"])(u,{label:e.t("base.set.language")},{default:c((function(){return[Object(n["createVNode"])(i)]})),_:1},8,["label"]),Object(n["createVNode"])(u,{label:e.t("base.set.fixedNavBar")},{default:c((function(){return[Object(n["createVNode"])(d,{modelValue:e.fixed,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.fixed=t}),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]})),_:1},8,["label"]),Object(n["createVNode"])(u,{label:e.t("base.set.showTabBar")},{default:c((function(){return[Object(n["createVNode"])(d,{modelValue:e.tabsDisplay,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.tabsDisplay=t}),"active-color":"#13ce66","inactive-color":"#ff4949"},null,8,["modelValue"])]})),_:1},8,["label"])]})),_:1})})),l=a("47e2"),r=a("9a98"),i=a("0613"),u=Object(n["defineComponent"])({components:{Language:r["a"]},setup:function(){var e=Object(l["b"])(),t=e.t,a=Object(i["c"])(i["a"]),c=Object(n["computed"])({get:function(){return a.state.setting.navbar.fixed},set:function(e){a.dispatch("setting/setFixed",e)}}),o=Object(n["computed"])({get:function(){return a.state.setting.navbar.tabsDisplay},set:function(e){a.dispatch("setting/setTabsDisplay",e)}});return{t:t,fixed:c,tabsDisplay:o}}});a("a9f7");u.render=o,u.__scopeId="data-v-05b2c50c";t["default"]=u},"83d9":function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".language .link[data-v-3c61b5c6]{cursor:pointer}.language .link[data-v-3c61b5c6]:hover{color:#409eff}",""]),e.exports=t},"9a98":function(e,t,a){"use strict";var n=a("7a23"),c=Object(n["withScopeId"])("data-v-3c61b5c6");Object(n["pushScopeId"])("data-v-3c61b5c6");var o={class:"language"},l={class:"link"},r=Object(n["createVNode"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1);Object(n["popScopeId"])();var i=c((function(e,t,a,i,u,d){var s=Object(n["resolveComponent"])("svg-icon"),b=Object(n["resolveComponent"])("el-dropdown-item"),f=Object(n["resolveComponent"])("el-dropdown-menu"),p=Object(n["resolveComponent"])("el-dropdown");return Object(n["openBlock"])(),Object(n["createBlock"])("div",o,[Object(n["createVNode"])(p,{trigger:"click",onCommand:e.commandHandle},{dropdown:c((function(){return[Object(n["createVNode"])(f,null,{default:c((function(){return[Object(n["createVNode"])(b,{command:"cn"},{default:c((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.t("language.chinese")),1)]})),_:1}),Object(n["createVNode"])(b,{command:"en"},{default:c((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.t("language.english")),1)]})),_:1})]})),_:1})]})),default:c((function(){return[Object(n["createVNode"])("span",l,[Object(n["createVNode"])(s,{name:"language"}),Object(n["createTextVNode"])(" "+Object(n["toDisplayString"])(e.lang)+" ",1),r])]})),_:1},8,["onCommand"])])})),u=a("47e2"),d=a("0613"),s=a("ebe2"),b=a("6c02"),f=Object(n["defineComponent"])({setup:function(){var e=Object(u["b"])(),t=e.t,a=e.locale,c=Object(d["c"])(d["a"]),o=Object(b["d"])(),l=function(){var e;switch(c.state.setting.set.language){case s["c"].Chinese:e=t("language.chinese");break;case s["c"].English:e=t("language.english");break;default:e=t("language.chinese");break}return e},r=Object(n["computed"])((function(){return l()})),i=function(e){c.state.setting.set.language!==e&&(a.value=e,document.title=o.meta["title_".concat(e)],c.dispatch("setting/setLanguage",e))};return{t:t,lang:r,commandHandle:i}}});a("50f9");f.render=i,f.__scopeId="data-v-3c61b5c6";t["a"]=f},a9f7:function(e,t,a){"use strict";a("e0c9")},d6b3:function(e,t,a){var n=a("83d9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("499e").default;c("719cd76e",n,!0,{sourceMap:!1,shadowMode:!1})},e0c9:function(e,t,a){var n=a("03de");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=a("499e").default;c("1546b1ca",n,!0,{sourceMap:!1,shadowMode:!1})}}]);