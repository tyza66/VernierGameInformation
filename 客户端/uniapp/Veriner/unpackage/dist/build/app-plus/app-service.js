(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["app-service"],{"04a3":function(t,e,n){"use strict";var r=n("4ea4"),a=r(n("9523"));n("c651");var i=r(n("4ec9")),s=r(n("8bbf"));function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}s.default.config.productionTip=!1,i.default.mpType="app";var u=new s.default(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){(0,a.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},i.default));u.$mount()},"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){return"string"===typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}function s(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console[t].apply(console,n)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var s=e.shift();if(a())return e.push(e.pop().replace("at ","uni-app:///")),console[s].apply(console,e);var o=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(a){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t})),u="";if(o.length>1){var c=o.pop();u=o.join("---COMMA---"),0===c.indexOf(" at ")?u+=c:u+="---COMMA---"+c}else u=o[0];console[s](u)}n.r(e),n.d(e,"log",(function(){return s})),n.d(e,"default",(function(){return o}))},4147:function(t,e){t.exports="/static/ui/goto.png"},"43cd":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){t("log","App Launch"," at App.vue:4")},onShow:function(){t("log","App Show"," at App.vue:7")},onHide:function(){t("log","App Hide"," at App.vue:10")}};e.default=n}).call(this,n("0de9")["default"])},"49f0":function(t,e,n){"use strict";n.r(e);var r=n("8a9b"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},"4ea4":function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports["default"]=t.exports},"4ec9":function(t,e,n){"use strict";n.r(e);var r=n("62ad");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);var i=n("f0c5"),s=Object(i["a"])(r["default"],void 0,void 0,!1,null,null,null,!1,void 0,void 0);e["default"]=s.exports},6237:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:this._$s(1,"sc","top"),attrs:{_i:1}}),e("view",{},[e("div",{directives:[{name:"show",rawName:"v-show",value:this._$s(3,"v-show",this.mainLoader),expression:"_$s(3,'v-show',mainLoader)"}],staticClass:this._$s(3,"sc","loader"),attrs:{_i:3}},[e("span",{staticClass:this._$s(4,"sc","bar"),attrs:{_i:4}}),e("span",{staticClass:this._$s(5,"sc","bar"),attrs:{_i:5}}),e("span",{staticClass:this._$s(6,"sc","bar"),attrs:{_i:6}})])])])},a=[]},"62ad":function(t,e,n){"use strict";n.r(e);var r=n("43cd"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},6478:function(t,e,n){"use strict";n.r(e);var r=n("d93f"),a=n("d9d8");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},7037:function(t,e){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports["default"]=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports["default"]=t.exports},"735c":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("view",[r("view",{staticClass:t._$s(1,"sc","top"),attrs:{_i:1}}),r("view",{},[r("div",{directives:[{name:"show",rawName:"v-show",value:t._$s(3,"v-show",t.mainLoader),expression:"_$s(3,'v-show',mainLoader)"}],staticClass:t._$s(3,"sc","loader"),attrs:{_i:3}},[r("span",{staticClass:t._$s(4,"sc","bar"),attrs:{_i:4}}),r("span",{staticClass:t._$s(5,"sc","bar"),attrs:{_i:5}}),r("span",{staticClass:t._$s(6,"sc","bar"),attrs:{_i:6}})]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:t._$s(7,"sc","input"),attrs:{_i:7},domProps:{value:t._$s(7,"v-model",t.keyword)},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},function(e){return t.searchKey(t.keyword)}]}}),t._l(t._$s(8,"f",{forItems:t.preferential}),(function(e,a,i,s){return r("view",{key:t._$s(8,"f",{forIndex:i,key:a})},[r("div",{staticClass:t._$s("9-"+s,"sc","card"),attrs:{_i:"9-"+s}},[r("h3",{staticClass:t._$s("10-"+s,"sc","card__title"),attrs:{_i:"10-"+s},on:{click:function(n){return t.openUrl(e.url)}}},[t._v(t._$s("10-"+s,"t0-0",t._s(e.title)))]),r("p",{staticClass:t._$s("11-"+s,"sc","card__content"),attrs:{_i:"11-"+s}},[t._v(t._$s("11-"+s,"t0-0",t._s(e.introduction)))]),r("div",{staticClass:t._$s("12-"+s,"sc","card__date"),attrs:{_i:"12-"+s}},[t._v(t._$s("12-"+s,"t0-0",t._s(e.date)))]),r("button",{staticClass:t._$s("13-"+s,"sc","mini-btn card__arrow"),attrs:{_i:"13-"+s},on:{click:function(n){return t.openUrl(e.url)}}},[r("image",{attrs:{src:t._$s("14-"+s,"a-src",n("4147")),_i:"14-"+s}})])])])}))],2)])},a=[]},"8a9b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("decd"),a={data:function(){return{mainLoader:!0,preferential:[],keyword:""}},onLoad:function(){var e=this;t("log",r.backend," at pages/preferential/preferential.vue:43"),uni.request({url:r.backend+"/preferential",header:{"custom-type":"application/json"},success:function(n){e.preferential=n.data,e.mainLoader=!1,t("log",n.data," at pages/preferential/preferential.vue:52")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})},onPullDownRefresh:function(){var e=this;this.keyword="",uni.request({url:r.backend+"/preferential",header:{"custom-type":"application/json"},success:function(n){e.preferential=n.data,e.mainLoader=!1,t("log",n.data," at pages/preferential/preferential.vue:73")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}),uni.stopPullDownRefresh()},onReachBottom:function(){var e=this;""==this.keyword?uni.request({url:r.backend+"/preferential",header:{"custom-type":"application/json"},success:function(n){e.preferential=e.preferential.concat(n.data),e.mainLoader=!1,t("log",n.data," at pages/preferential/preferential.vue:95")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}):uni.request({url:r.backend+"/limitPreferential?key="+this.keyword,header:{"custom-type":"application/json"},success:function(n){e.preferential=e.preferential.concat(n.data),e.mainLoader=!1,t("log",n.data," at pages/preferential/preferential.vue:114")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})},methods:{openUrl:function(e){plus.runtime.openURL(e,(function(e){t("log",e," at pages/preferential/preferential.vue:129")}))},searchKey:function(e){var n=this;this.preferential=[],""==this.keyword?uni.request({url:r.backend+"/preferential",header:{"custom-type":"application/json"},success:function(e){n.preferential=n.preferential.concat(e.data),n.mainLoader=!1,t("log",e.data," at pages/preferential/preferential.vue:143")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}):uni.request({url:r.backend+"/limitPreferential?key="+this.keyword,header:{"custom-type":"application/json"},success:function(e){n.preferential=n.preferential.concat(e.data),n.mainLoader=!1,t("log",e.data," at pages/preferential/preferential.vue:162")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})}}};e.default=a}).call(this,n("0de9")["default"])},"8bbf":function(t,e){t.exports=Vue},9523:function(t,e,n){var r=n("a395");t.exports=function(t,e,n){return e=r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},t.exports.__esModule=!0,t.exports["default"]=t.exports},9549:function(t,e,n){"use strict";n.r(e);var r=n("6237"),a=n("a843");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},a395:function(t,e,n){var r=n("7037")["default"],a=n("e50d");t.exports=function(t){var e=a(t,"string");return"symbol"===r(e)?e:String(e)},t.exports.__esModule=!0,t.exports["default"]=t.exports},a499:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{}},methods:{}}},a520:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("view",{staticClass:this._$s(1,"sc","top"),attrs:{_i:1}})])},a=[]},a7b6:function(t,e,n){"use strict";n.r(e);var r=n("a520"),a=n("c72c");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},a843:function(t,e,n){"use strict";n.r(e);var r=n("e91a"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},b96b:function(t,e,n){"use strict";n.r(e);var r=n("735c"),a=n("49f0");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);var s=n("f0c5"),o=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);e["default"]=o.exports},c651:function(t,e,n){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("9549").default)})),__definePage("pages/game/game",(function(){return Vue.extend(n("6478").default)})),__definePage("pages/game/gameInformation/gameInformation",(function(){return Vue.extend(n("a7b6").default)})),__definePage("pages/preferential/preferential",(function(){return Vue.extend(n("b96b").default)}))},c72c:function(t,e,n){"use strict";n.r(e);var r=n("a499"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},d93f:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:t._$s(1,"sc","top"),attrs:{_i:1}}),n("view",{},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._$s(3,"v-show",t.mainLoader),expression:"_$s(3,'v-show',mainLoader)"}],staticClass:t._$s(3,"sc","loader"),attrs:{_i:3}},[n("span",{staticClass:t._$s(4,"sc","bar"),attrs:{_i:4}}),n("span",{staticClass:t._$s(5,"sc","bar"),attrs:{_i:5}}),n("span",{staticClass:t._$s(6,"sc","bar"),attrs:{_i:6}})]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:t._$s(7,"sc","input"),attrs:{_i:7},domProps:{value:t._$s(7,"v-model",t.keyword)},on:{input:[function(e){e.target.composing||(t.keyword=e.target.value)},function(e){return t.searchKey(t.keyword)}]}}),t._l(t._$s(8,"f",{forItems:t.gamelist}),(function(e,r,a,i){return n("view",{key:t._$s(8,"f",{forIndex:a,key:r})},[n("div",{staticClass:t._$s("9-"+i,"sc","card"),attrs:{_i:"9-"+i}},[n("div",{staticClass:t._$s("10-"+i,"sc","card-img"),attrs:{_i:"10-"+i}},[n("image",{attrs:{src:t._$s("11-"+i,"a-src",e.image),_i:"11-"+i}})]),n("div",{staticClass:t._$s("12-"+i,"sc","card-info"),attrs:{_i:"12-"+i}},[n("p",{staticClass:t._$s("13-"+i,"sc","text-title"),attrs:{_i:"13-"+i}},[t._v(t._$s("13-"+i,"t0-0",t._s(e.name)))]),n("p",{staticClass:t._$s("14-"+i,"sc","text-body"),attrs:{_i:"14-"+i}},[t._v(t._$s("14-"+i,"t0-0",t._s(e.introduction)))])]),n("div",{staticClass:t._$s("15-"+i,"sc","card-footer"),attrs:{_i:"15-"+i}},[n("span",{staticClass:t._$s("16-"+i,"sc","text-title"),attrs:{_i:"16-"+i}},[t._v(t._$s("16-"+i,"t0-0",t._s(e.price)))]),n("span",{staticClass:t._$s("17-"+i,"sc","discount"),attrs:{_i:"17-"+i}},[n("p",[t._v(t._$s("18-"+i,"t0-0",t._s(e.discount)))])]),n("span",{staticClass:t._$s("19-"+i,"sc","platform"),attrs:{_i:"19-"+i}},[n("p",[t._v(t._$s("20-"+i,"t0-0",t._s(e.platform)))])]),n("span",{staticClass:t._$s("21-"+i,"sc","classification"),attrs:{_i:"21-"+i}},[n("p",[t._v(t._$s("22-"+i,"t0-0",t._s(e.classification)))])]),n("button",{staticClass:t._$s("23-"+i,"sc","mini-btn card-button"),attrs:{_i:"23-"+i},on:{click:function(n){return t.openAppStore(e.package,e.appleid)}}},[n("p")])])])])}))],2)])},a=[]},d9d8:function(t,e,n){"use strict";n.r(e);var r=n("e3ce"),a=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=a.a},decd:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.backend=void 0;e.backend="http://192.168.101.41:5001"},e3ce:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("decd"),a={data:function(){return{mainLoader:!0,gamelist:[],keyword:""}},onLoad:function(){var e=this;t("log",r.backend," at pages/game/game.vue:57"),""==this.keyword&&uni.request({url:r.backend+"/gamelist",header:{"custom-type":"application/json"},success:function(t){e.gamelist=t.data,e.mainLoader=!1},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})},onPullDownRefresh:function(){var t=this;this.keyword="",uni.request({url:r.backend+"/gamelist",header:{"custom-type":"application/json"},success:function(e){t.gamelist=e.data,t.mainLoader=!1},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}),uni.stopPullDownRefresh()},onReachBottom:function(){var t=this;""==this.keyword?uni.request({url:r.backend+"/gamelist",header:{"custom-type":"application/json"},success:function(e){t.gamelist=t.gamelist.concat(e.data),t.mainLoader=!1},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}):uni.request({url:r.backend+"/limitGameList?key="+this.keyword,header:{"custom-type":"application/json"},success:function(e){t.gamelist=t.gamelist.concat(e.data),t.mainLoader=!1},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})},methods:{openAppStore:function(t,e){if("Android"==plus.os.name){var n="market://details?id="+t;plus.runtime.openURL(n)}else{\u7eaf\u6570\u5b57id;plus.runtime.launchApplication({action:"itms-apps://itunes.apple.com/cn/app/id"+e})}},searchKey:function(e){var n=this;this.gamelist=[],""==this.keyword?uni.request({url:r.backend+"/gamelist",header:{"custom-type":"application/json"},success:function(t){n.gamelist=n.gamelist.concat(t.data),n.mainLoader=!1},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}}):uni.request({url:r.backend+"/limitGameList?key="+this.keyword,header:{"custom-type":"application/json"},success:function(e){n.gamelist=n.gamelist.concat(e.data),n.mainLoader=!1,t("log",e.data," at pages/game/game.vue:188")},fail:function(t){uni.showToast({icon:"error",title:"\u7f51\u7edc\u8fde\u63a5\u5931\u8d25",duration:2e3})}})}}};e.default=a}).call(this,n("0de9")["default"])},e50d:function(t,e,n){var r=n("7037")["default"];t.exports=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var a=n.call(t,e||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports["default"]=t.exports},e91a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("decd"),a={data:function(){return{mainLoader:!0}},onLoad:function(){t("log",r.backend," at pages/index/index.vue:26")},onPullDownRefresh:function(){uni.stopPullDownRefresh()},methods:{}};e.default=a}).call(this,n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,a,i,s,o,u,c){var l,f="function"===typeof t?t.options:t;if(u){f.components||(f.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(f.components,p)&&(f.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},f._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(f.functional){f._injectStyles=l;var _=f.render;f.render=function(t,e){return l.call(e),_(t,e)}}else{var v=f.beforeCreate;f.beforeCreate=v?[].concat(v,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))}},[["04a3","app-config"]]]);