(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{576:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"vue项目线上页面刷新报404-解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue项目线上页面刷新报404-解决方法"}},[t._v("#")]),t._v(" vue项目线上页面刷新报404 解决方法")]),t._v(" "),a("blockquote",[a("p",[t._v("在上线vue开发的前端网页上线后，刷新页面报404错误，因为网页上显示的是静态绝对路径，实际上服务器上是没有改路径的所以刷新汇报错误。")])]),t._v(" "),a("h3",{attrs:{id:"vue框架中解决404"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue框架中解决404"}},[t._v("#")]),t._v(" vue框架中解决404")]),t._v(" "),a("p",[a("code",[t._v("vue router")]),t._v(" "),a("code",[t._v("mode")]),t._v(" 默认为"),a("code",[t._v("hash")]),t._v(", 这样的"),a("code",[t._v("url")]),t._v("中带有"),a("code",[t._v("#")]),t._v("，如果把"),a("code",[t._v("mode: 'history'")]),t._v("就能去掉#号，也可以正常访问，但是再次刷新页面就会出现"),a("code",[t._v("404")]),t._v("错误。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("url")]),t._v("中带有"),a("code",[t._v("#")]),t._v("，让有强迫症的人很不爽，可以去掉，去掉后就需要改"),a("code",[t._v("nginx")]),t._v("配置文件了。")]),t._v(" "),a("h3",{attrs:{id:"修改nginx配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx配置文件"}},[t._v("#")]),t._v(" 修改nginx配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 增加下列命令，index.html可换为项目中使用的其它文件名")]),t._v("\n    try_files "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("将上面代码放入"),a("code",[t._v("nginx")]),t._v("配置文件中")]),t._v(" "),a("p",[t._v("保存退出")]),t._v(" "),a("p",[t._v(". ./nginx -t -- 验证"),a("code",[t._v("nginx")]),t._v("配置文件是否正确\n. ./nginx -s reload -- 重启"),a("code",[t._v("nginx")]),t._v("\n记得修改完"),a("code",[t._v("nginx")]),t._v("配置文件一定要重启"),a("code",[t._v("nginx")]),t._v("  不然没有效果！！！")])])}),[],!1,null,null,null);s.default=n.exports}}]);