(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39ae2527","chunk-2d0d7dd6"],{1148:function(t,e,n){"use strict";var a=n("a691"),r=n("1d80");t.exports="".repeat||function(t){var e=String(r(this)),n="",c=a(t);if(c<0||c==1/0)throw RangeError("Wrong number of repetitions");for(;c>0;(c>>>=1)&&(e+=e))1&c&&(n+=e);return n}},"408a":function(t,e,n){var a=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},7942:function(t,e,n){"use strict";n.r(e),n.d(e,"getAlarmDetail",(function(){return r})),n.d(e,"getAlarmCount",(function(){return c})),n.d(e,"getMachineList",(function(){return i})),n.d(e,"getMachineCapacity",(function(){return u})),n.d(e,"getMachineStatus",(function(){return o})),n.d(e,"getMachineAlarms",(function(){return s})),n.d(e,"getLensPackerStatusCount",(function(){return l}));var a=n("b775");function r(t,e,n){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getAlarmDetail",method:"get",headers:{"Content-Type":"application/json"},params:{startTime:t,endTime:e,machineName:n}})}function c(t,e,n){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getAlarmCount",method:"get",headers:{"Content-Type":"application/json"},params:{startTime:t,endTime:e,machineName:n}})}function i(){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getMachineList",method:"get",headers:{"Content-Type":"application/json"}})}function u(t,e){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getMachineCapacity",method:"get",headers:{"Content-Type":"application/json"},params:{startTime:t,endTime:e}})}function o(){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getAllStatus",method:"get",headers:{"Content-Type":"application/json"}})}function s(){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getCurrentAlarm",method:"get",headers:{"Content-Type":"application/json"}})}function l(){return Object(a["default"])({url:"/lenspacker/lenspackerDashboard/getStatusCount",method:"get",headers:{"Content-Type":"application/json"}})}},b680:function(t,e,n){"use strict";var a=n("23e7"),r=n("a691"),c=n("408a"),i=n("1148"),u=n("d039"),o=1..toFixed,s=Math.floor,l=function(t,e,n){return 0===e?n:e%2===1?l(t,e-1,n*t):l(t*t,e/2,n)},b=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},d=function(t,e,n){var a=-1,r=n;while(++a<6)r+=e*t[a],t[a]=r%1e7,r=s(r/1e7)},f=function(t,e){var n=6,a=0;while(--n>=0)a+=t[n],t[n]=s(a/e),a=a%e*1e7},h=function(t){var e=6,n="";while(--e>=0)if(""!==n||0===e||0!==t[e]){var a=String(t[e]);n=""===n?a:n+i.call("0",7-a.length)+a}return n},p=o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){o.call({})}));a({target:"Number",proto:!0,forced:p},{toFixed:function(t){var e,n,a,u,o=c(this),s=r(t),p=[0,0,0,0,0,0],j="",O="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return String(o);if(o<0&&(j="-",o=-o),o>1e-21)if(e=b(o*l(2,69,1))-69,n=e<0?o*l(2,-e,1):o/l(2,e,1),n*=4503599627370496,e=52-e,e>0){d(p,0,n),a=s;while(a>=7)d(p,1e7,0),a-=7;d(p,l(10,a,1),0),a=e-1;while(a>=23)f(p,1<<23),a-=23;f(p,1<<a),d(p,1,1),f(p,2),O=h(p)}else d(p,0,n),d(p,1<<-e,0),O=h(p)+i.call("0",s);return s>0?(u=O.length,O=j+(u<=s?"0."+i.call("0",s-u)+O:O.slice(0,u-s)+"."+O.slice(u-s))):O=j+O,O}})},c52f:function(t,e,n){"use strict";n.r(e);n("b680");var a=n("7a23"),r={class:"crumbs"},c=Object(a["p"])("i",{class:"el-icon-lx-calendar"},null,-1),i=Object(a["o"])(" 包料机监控 "),u={class:"container"},o={style:{"margin-bottom":"20px"}},s={style:{"font-weight":"bold"}},l={style:{"text-align":"center","font-weight":"bold",color:"#008000","font-size":"24px"}},b=Object(a["o"])("类型：");function d(t,e,n,d,f,h){var p=this,j=Object(a["P"])("el-breadcrumb-item"),O=Object(a["P"])("el-breadcrumb"),g=Object(a["P"])("el-col"),m=Object(a["P"])("el-row"),k=Object(a["P"])("el-card");return Object(a["G"])(),Object(a["l"])("div",null,[Object(a["p"])("div",r,[Object(a["p"])(O,{separator:"/"},{default:Object(a["eb"])((function(){return[Object(a["p"])(j,null,{default:Object(a["eb"])((function(){return[c,i]})),_:1}),Object(a["p"])(j,null,{default:Object(a["eb"])((function(){return[Object(a["o"])("新能源"+Object(a["T"])(p.$route.query.position),1)]})),_:1})]})),_:1})]),Object(a["p"])("div",u,[Object(a["p"])("div",o,[(Object(a["G"])(!0),Object(a["l"])(a["b"],null,Object(a["N"])(f.statusRadio,(function(t,e){return Object(a["G"])(),Object(a["l"])("div",{key:e,class:"status_radio_type",style:"background-color:"+h.getStatusRadioColor(t)+";text-align:center",onClick:function(e){return h.onStatusRadioClick(t)}},Object(a["T"])(t+"("+p.statusCount[t]+")"),13,["onClick"])})),128))]),(Object(a["G"])(!0),Object(a["l"])(a["b"],null,Object(a["N"])(h.LensPackerMachineInfo,(function(t,e){return Object(a["G"])(),Object(a["l"])(k,{key:e,"body-style":{padding:"0px",height:"120px"},shadow:"hover",class:"lenspacker_card_type",style:{cursor:"pointer"}},{default:Object(a["eb"])((function(){return[Object(a["p"])(m,null,{default:Object(a["eb"])((function(){return[Object(a["p"])(g,null,{default:Object(a["eb"])((function(){return[Object(a["p"])("div",s,[Object(a["p"])(m,{style:{"text-align":"center",height:"30px","font-weight":"bold","font-size":"16px","border-bottom":"1px solid cornflowerblue"}},{default:Object(a["eb"])((function(){return[Object(a["p"])(g,{span:24},{default:Object(a["eb"])((function(){return[Object(a["p"])("p",l,Object(a["T"])(t.machineNo.substr(4)),1)]})),_:2},1024)]})),_:2},1024),Object(a["p"])(m,{style:{"text-align":"center",height:"30px","font-weight":"bold","font-size":"16px"}},{default:Object(a["eb"])((function(){return[Object(a["p"])(g,{span:24},{default:Object(a["eb"])((function(){return[2===t.status?(Object(a["G"])(),Object(a["l"])("div",{key:0,style:"background-color:"+f.statusType[h.getMachineStatus(t.status)]+";height:30px;line-height:30px"},Object(a["T"])(t.alarmInfo),5)):(Object(a["G"])(),Object(a["l"])("div",{key:1,style:"background-color:"+f.statusType[h.getMachineStatus(t.status)]+";height:30px;line-height:30px"},Object(a["T"])(h.getMachineStatus(t.status)),5))]})),_:2},1024)]})),_:2},1024),Object(a["p"])(m,{style:{height:"30px","line-height":"30px"}},{default:Object(a["eb"])((function(){return[Object(a["p"])(g,{span:12},{default:Object(a["eb"])((function(){return[Object(a["o"])("产能："+Object(a["T"])(t.outputQty),1)]})),_:2},1024),Object(a["p"])(g,{span:12},{default:Object(a["eb"])((function(){return[Object(a["o"])("节拍："+Object(a["T"])(t.machineCT.toFixed(2)),1)]})),_:2},1024)]})),_:2},1024),Object(a["p"])(m,{style:{height:"30px","line-height":"30px"}},{default:Object(a["eb"])((function(){return[0!==t.status?(Object(a["G"])(),Object(a["l"])(g,{key:0,span:12},{default:Object(a["eb"])((function(){return[Object(a["o"])("类型："+Object(a["T"])(24===t.cavityNums?24:16)+"穴",1)]})),_:2},1024)):(Object(a["G"])(),Object(a["l"])(g,{key:1,span:12},{default:Object(a["eb"])((function(){return[b]})),_:1})),Object(a["p"])(g,{span:12},{default:Object(a["eb"])((function(){return[Object(a["o"])("握手信号："+Object(a["T"])(t.isComplete),1)]})),_:2},1024)]})),_:2},1024)])]})),_:2},1024)]})),_:2},1024)]})),_:2},1024)})),128))])])}n("159b"),n("a434");var f=n("7942"),h={name:"CoatingMachineMonitor",created:function(){var t=this;this.getLensPackerStatus(),this.timer=setInterval((function(){t.getLensPackerStatus()}),1e4)},computed:{LensPackerMachineInfo:function(){var t=this,e=[];this.setDefaultCount();var n=this.$route.query.position;return this.$route.params.status&&(this.setStatusRadioValue(this.$route.params.status),this.refreshPage()),this.LensPackerInfoList.forEach((function(a){var r=t.getMachineStatus(a.status);0===a.machineNo.indexOf(n)&&(t.statusRadioValue.indexOf(r)>-1&&e.push(a),t.statusCount[r]++)})),e}},methods:{refreshPage:function(){this.$router.push(this.$route.fullPath)},setStatusRadioValue:function(t){this.statusRadioValue=[],this.statusRadioValue.push(t)},setAllStatusRadioValue:function(){this.statusRadioValue=["正常运行","报警","设备离线"]},getMachineStatus:function(t){return 0===t?"设备离线":1===t?"正常运行":2===t?"报警":void 0},getStatusRadioColor:function(t){return this.statusRadioValue.indexOf(t)>-1?this.statusType[t]:"rgba(235,235,235,1)"},setDefaultCount:function(){this.statusCount={"设备离线":0,"正常运行":0,"报警":0}},onStatusRadioClick:function(t){var e=this.statusRadioValue.indexOf(t);e>-1?this.statusRadioValue.splice(e,1):this.statusRadioValue.push(t)},getLensPackerStatus:function(){var t=this;Object(f["getMachineStatus"])().then((function(e){var n=e.data;"000000"===n.code&&(t.LensPackerInfoList=n.data)})),Object(f["getMachineAlarms"])().then((function(e){var n=e.data;"000000"===n.code&&(t.LensPackerAlarmInfo=n.data)}))}},beforeUnmount:function(){clearInterval(this.timer)},data:function(){return{LensPackerInfoList:[],LensPackerAlarmInfo:[],statusType:{"设备离线":"gray","正常运行":"rgba(59,162,114,1)","报警":"rgba(238,102,102,1)"},statusRadio:["正常运行","报警","设备离线"],statusRadioValue:["正常运行","报警","设备离线"],statusCount:{"设备离线":0,"正常运行":0,"报警":0}}}};h.render=d;e["default"]=h}}]);
//# sourceMappingURL=chunk-39ae2527.d84e2dd1.js.map