(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209276"],{a89b:function(o,t,e){"use strict";e.r(t),e.d(t,"uploadExcel",(function(){return a})),e.d(t,"getByMonitorNo",(function(){return i})),e.d(t,"updateToolInfo",(function(){return l})),e.d(t,"getMachineList",(function(){return r})),e.d(t,"getMatInfoList",(function(){return u}));var n=e("b775");function a(o){var t=new FormData;return t.append("file",o.file),Object(n["default"])({url:"/moldToolLife/toolLife/uploadExcel",method:"post",data:t})}function i(o){return Object(n["default"])({url:"/moldToolLife/toolLife/getByMonitorNo",method:"get",headers:{"Content-Type":"application/json"},params:{monitorNo:o}})}function l(o){return Object(n["default"])({url:"/moldToolLife/toolLife/updateToolInfo",method:"post",headers:{"Content-Type":"application/json"},data:o})}function r(){return Object(n["default"])({url:"/moldToolLife/toolLife/allMachine",method:"get",headers:{"Content-Type":"application/json"}})}function u(){return Object(n["default"])({url:"/moldToolLife/toolLife/allMatInfo",method:"get",headers:{"Content-Type":"application/json"}})}}}]);
//# sourceMappingURL=chunk-2d209276.a2dac59e.js.map