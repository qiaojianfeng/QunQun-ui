(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(t,n,e){},272:function(t,n,e){"use strict";var c=e(243);e.n(c).a},277:function(t,n,e){"use strict";e.r(n);var c={data:function(){return{types:["简洁","参数调用"]}},methods:{handleClick:function(t){"简洁"===t?this.$confirm.show("这是一个对话框").then(function(t){alert("确认")}).catch(function(t){alert("取消")}):this.$confirm.show({title:"提示",message:"这是一个alert提示信息",cancelText:"不好",confirmText:"可以的"}).then(function(t){}).catch(function(t){})}}},i=(e(272),e(1)),a=Object(i.a)(c,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"test"},t._l(t.types,function(n,c){return e("qun-button",{key:c,staticClass:"btn",nativeOn:{click:function(e){return t.handleClick(n)}}},[t._v("\n    "+t._s(n)+"\n  ")])}),1)},[],!1,null,"4c6e6aa3",null);n.default=a.exports}}]);