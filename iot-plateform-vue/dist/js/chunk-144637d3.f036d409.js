(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-144637d3"],{"1a83":function(t,e,s){"use strict";s("c9e7")},3855:function(t,e,s){"use strict";s.r(e);var n=s("7a23"),i={key:0,class:"tags"},c=Object(n["o"])("i",{class:"el-icon-close"},null,-1),o={class:"tags-close-box"},a=Object(n["n"])(" 标签选项 "),r=Object(n["o"])("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),l=Object(n["n"])("关闭其他"),u=Object(n["n"])("关闭所有");function h(t,e,s,h,b,d){var f=Object(n["O"])("router-link"),O=Object(n["O"])("el-button"),j=Object(n["O"])("el-dropdown-item"),g=Object(n["O"])("el-dropdown-menu"),m=Object(n["O"])("el-dropdown");return d.showTags?(Object(n["F"])(),Object(n["k"])("div",i,[Object(n["o"])("ul",null,[(Object(n["F"])(!0),Object(n["k"])(n["b"],null,Object(n["M"])(d.tagsList,(function(t,e){return Object(n["F"])(),Object(n["k"])("li",{class:["tags-li",{active:d.isActive(t.path)}],key:e},[Object(n["o"])(f,{to:t.path,class:"tags-li-title"},{default:Object(n["db"])((function(){return[Object(n["n"])(Object(n["S"])(t.title),1)]})),_:2},1032,["to"]),Object(n["o"])("span",{class:"tags-li-icon",onClick:function(t){return d.closeTags(e)}},[c],8,["onClick"])],2)})),128))]),Object(n["o"])("div",o,[Object(n["o"])(m,{onCommand:d.handleTags},{dropdown:Object(n["db"])((function(){return[Object(n["o"])(g,{size:"small"},{default:Object(n["db"])((function(){return[Object(n["o"])(j,{command:"other"},{default:Object(n["db"])((function(){return[l]})),_:1}),Object(n["o"])(j,{command:"all"},{default:Object(n["db"])((function(){return[u]})),_:1})]})),_:1})]})),default:Object(n["db"])((function(){return[Object(n["o"])(O,{size:"mini",type:"primary"},{default:Object(n["db"])((function(){return[a,r]})),_:1})]})),_:1},8,["onCommand"])])])):Object(n["l"])("",!0)}s("4de4"),s("b0c0");var b={computed:{tagsList:function(){return this.$store.state.tagsList},showTags:function(){return this.tagsList.length>0}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList[t];this.$store.commit("delTagsItem",{index:t});var s=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];s?e.path===this.$route.fullPath&&this.$router.push(s.path):this.$router.push("/")},closeAll:function(){this.$store.commit("clearTags"),this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter((function(e){return e.path===t.$route.fullPath}));this.$store.commit("closeTagsOther",e)},setTags:function(t){var e=this.tagsList.some((function(e){return e.path===t.fullPath}));e||(this.tagsList.length>=8&&this.$store.commit("delTagsItem",{index:0}),this.$store.commit("setTagsItem",{name:t.name,title:t.meta.title,path:t.fullPath}))},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},watch:{$route:function(t){this.setTags(t)}},created:function(){this.setTags(this.$route)}};s("1a83");b.render=h;e["default"]=b},"4de4":function(t,e,s){"use strict";var n=s("23e7"),i=s("b727").filter,c=s("1dde"),o=c("filter");n({target:"Array",proto:!0,forced:!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},c9e7:function(t,e,s){}}]);
//# sourceMappingURL=chunk-144637d3.f036d409.js.map