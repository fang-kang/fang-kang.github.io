(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{560:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"db-collection-find-查询数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#db-collection-find-查询数据"}},[t._v("#")]),t._v(" db.collection.find()查询数据")]),t._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[a("code",[t._v("db.collection.find(querys, fields, options)")])]),t._v(" "),a("h4",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("querys: 可选，使用查询操作符指定查询条件;")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"article_state"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//查询Article中所有article_state值为1的数据")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("其中，可以添加各种查询操作符，如:"),a("code",[t._v("$or")]),t._v(","),a("code",[t._v("$in")]),t._v(","),a("code",[t._v("$not")]),t._v("等")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("fields: 指定使用投影运算符返回的字段，省略此参数返回匹配文档中的所有字段;")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nfield1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1或者true表示返回字段,0或者false表示不返回该字段")]),t._v("\nfield2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("_id:默认是1，没指定返回该字段时默认会返回，设置为0时才不会返回。\n注意:投影里除了_id以外，要么全是1，要么全是0，否则会报错")]),t._v(" "),a("ol",[a("li",[t._v("options: 指定"),a("code",[t._v("sort")]),t._v("，"),a("code",[t._v("skip")]),t._v("，"),a("code",[t._v("limit")]),t._v("等条件;")])]),t._v(" "),a("h3",{attrs:{id:"举个栗子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举个栗子"}},[t._v("#")]),t._v(" 举个栗子")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" querys "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" fields "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置fields，表示返回除了article_content之外的所有字段内容")]),t._v("\n  article_content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyword "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" keywordReg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyword"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  querys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$or "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//$or条件查询")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article_title'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keywordReg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article_content'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keywordReg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article_desc'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" keywordReg "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  querys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("article_tags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//$in条件查询")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  querys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("article_state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  sort"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article_update_time'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示按article_update_time倒序查询")]),t._v("\n  skip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//跳过0条数据")]),t._v("\n  limit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//每次查询5条数据")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("querys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"in-or-all查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#in-or-all查询"}},[t._v("#")]),t._v(" $in $or $all查询")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("$in")]),t._v(":满足其中一个元素的数据\n"),a("code",[t._v("db.user.find({age: {$in:[13,73]}})")]),t._v("\n查询到"),a("code",[t._v("age")]),t._v("为13或者73的数据\n"),a("code",[t._v("db.user.find({age: {$in:[13,73]}})")]),t._v("\n查询到"),a("code",[t._v("age")]),t._v("既不是13也不是73的数据")]),t._v(" "),a("li",[a("code",[t._v("$or")]),t._v(":满足其中一个字段的元素数据\n"),a("code",[t._v("db.user.find({$or:[{age:11},{name:'xttt'}]} )")]),t._v("\n查询到"),a("code",[t._v("age")]),t._v("为11或者"),a("code",[t._v("name")]),t._v("为xttt的数据")]),t._v(" "),a("li",[t._v("几个比较的查询\n"),a("ul",[a("li",[t._v("$gt:>")]),t._v(" "),a("li",[t._v("$gte:>=")]),t._v(" "),a("li",[t._v("$lt:<")]),t._v(" "),a("li",[t._v("$lte:<=")]),t._v(" "),a("li",[t._v("$ne:!=\n"),a("code",[t._v("db.user.find({age:{$lt:100}})")]),t._v(" //查询到age<100的数据")])])]),t._v(" "),a("li",[a("code",[t._v("$not")]),t._v(":与特定模式不匹配的文档,与正则表达式联合使用时极为有效\n"),a("code",[t._v("db.inventory.find( { price: { $not: { $gt: 1.99 } } } )")]),t._v("\n查询条件如下："),a("code",[t._v("price")]),t._v("字段小于等于1.99或者"),a("code",[t._v("price")]),t._v("不存在。")]),t._v(" "),a("li",[a("code",[t._v("$all")]),t._v(":满足所有元素的数据\n"),a("code",[t._v('db.user.find({hobby:{$all:["足球","桌球"]} })')]),t._v("\n查询到"),a("code",[t._v("hobby")]),t._v("中既有足球也有桌球的数据")]),t._v(" "),a("li",[a("code",[t._v("$mod")]),t._v(":将查询的值除以第一个给定的值，若余数等于第二个给定的值，则返回该结果\n"),a("code",[t._v("db.user.find({age:{$mod:[11,0]}})")]),t._v("\n查询到"),a("code",[t._v("age")]),t._v("是整除11的值得数据")]),t._v(" "),a("li",[a("code",[t._v("and")]),t._v(":查询指定同一个字段的多个查询条件\n"),a("code",[t._v("db.inventory.find( { $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] } )")]),t._v("\n查询条件是"),a("code",[t._v("price")]),t._v("不等于1.99并且"),a("code",[t._v("price")]),t._v("字段存在；")])]),t._v(" "),a("hr"),t._v(" "),a("h2",{attrs:{id:"populate-查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#populate-查询"}},[t._v("#")]),t._v(" .populate()查询")]),t._v(" "),a("p",[t._v('因为MongoDB是文档型数据库，所以它没有关系型数据库(数据库的两张表通过"外键"，建立连接关系) 特性。也就是在建立数据的关联时会比较麻烦。为了解决这个问题，Mongoose封装了一个Population功能。使用Population可以实现在一个 document 中填充其他 collection(s) 的 document(s)。')]),t._v(" "),a("p",[t._v("建表，schema如下:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" mongoose "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mongoose'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" Schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文章表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" articleSchema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  article_title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  article_tags"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" mongoose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ObjectId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示关联的为ObjectId属性的值，如Tag表的_id")]),t._v("\n    ref"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tag'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定与Tag表建立关联")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   article_content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标签表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" TagsSchema "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Schema")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tags_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tags_desc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Article "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Article'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" articleSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Tag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mongoose"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tag'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TagsSchema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Article表的article_tags属性对应的是一个 ObjectId 的数组。ref表示关联Tag表(注意: 被关联的model的 type 必须是ObjectId, Number, String, 和 Buffer 才有效)。\n如上所示可以设置article_tags关联Tag，那么在获取articleSchema的document的时候就可以使用Population功能找到关联的TagsSchema的document，并且用它的内容替换掉原来关联字段article_tags的内容。\n其中一个article有许多的tag。")]),t._v(" "),a("blockquote",[a("p",[t._v("用.populate()查询：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("querys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("populate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'article_tags'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表示填充的是article_tags字段")]),t._v("\n select"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_id tags_name tags_desc"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定用Tag中哪些字段填充")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("p",[t._v("语法：\nQuery.populate(path, [select], [model], [match], [options])\nmodel\n　　类型：Model，可选，指定关联字段的 model，如果没有指定就会使用Schema的ref。\nmatch\n　　类型：Object，可选，指定附加的查询条件。\noptions\n　　类型：Object，可选，指定附加的其他查询选项，如排序以及条数限制等等。")])])}),[],!1,null,null,null);s.default=e.exports}}]);