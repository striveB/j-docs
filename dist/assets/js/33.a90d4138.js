(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{323:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[t._v("#")]),t._v(" vue")]),t._v(" "),a("h1",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),a("h2",{attrs:{id:"_1-为什么-data-是个函数并且返回一个对象呢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么-data-是个函数并且返回一个对象呢"}},[t._v("#")]),t._v(" 1. 为什么 data 是个函数并且返回一个对象呢？")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("data")]),t._v("之所以是一个函数，是因为一个组件可能会多处调用，而每一次调用就会执行"),a("code",[t._v("data函数")]),t._v("并返回新的数据对象，这样，可以避免多处调用之间的"),a("code",[t._v("数据污染")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"_2-子父生命周期顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-子父生命周期顺序"}},[t._v("#")]),t._v(" 2. 子父生命周期顺序")]),t._v(" "),a("p",[a("strong",[t._v("创建阶段")])]),t._v(" "),a("p",[t._v("父（beforeCreate） => 父 （created）=> 父（beforeMount） => 子（beforeCreate） => 子（created） => 子（beforeMount） => 子（Mounted） => 父（Mounted）")]),t._v(" "),a("p",[a("strong",[t._v("更新阶段")])]),t._v(" "),a("p",[t._v("父（beforeUpdate） => 子（beforeUpdate） => 子（updated） => 父（updated）")]),t._v(" "),a("p",[a("strong",[t._v("销毁阶段")])]),t._v(" "),a("p",[t._v("父（beforeDestroy） => 子（beforeDestroy） => 子（destroyed） => 父（destroyed）")]),t._v(" "),a("h2",{attrs:{id:"_3-组件之间传值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-组件之间传值"}},[t._v("#")]),t._v(" 3. 组件之间传值")]),t._v(" "),a("p",[t._v("emit、props、ref、$parent、$children、eventBus、provide/inject、vuex")]),t._v(" "),a("h2",{attrs:{id:"_4-vue优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue优缺点"}},[t._v("#")]),t._v(" 4. vue优缺点")]),t._v(" "),a("p",[t._v("优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开")]),t._v(" "),a("p",[t._v("缺点：单页面不利于seo，不支持IE8以下，首屏加载时间长")]),t._v(" "),a("h2",{attrs:{id:"_5-为什么v-if和v-for不建议用在同一标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-为什么v-if和v-for不建议用在同一标签"}},[t._v("#")]),t._v(" 5. 为什么v-if和v-for不建议用在同一标签？")]),t._v(" "),a("p",[t._v("在Vue2中，"),a("code",[t._v("v-for")]),t._v("优先级是高于"),a("code",[t._v("v-if")]),t._v("的")]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item in [1, 2, 3, 4, 5, 6, 7]"')]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item !== 3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("上面的写法是"),a("code",[t._v("v-for")]),t._v("和"),a("code",[t._v("v-if")]),t._v("同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题。")]),t._v(" "),a("p",[a("strong",[t._v("在vue3中v-if优先级高于v-for，所以他们混用时会直接报错！")])]),t._v(" "),a("h2",{attrs:{id:"_6-自定义v-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-自定义v-model"}},[t._v("#")]),t._v(" 6.自定义v-model")]),t._v(" "),a("p",[t._v("默认情况下，v-model 是 @input 事件侦听器和 :value 属性上的语法糖。但是，你可以在你的Vue组件中指定一个模型属性来定义使用什么事件和value属性")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("model")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("prop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'checked'")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_7-vue的双向绑定原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-vue的双向绑定原理是什么"}},[t._v("#")]),t._v(" 7.vue的双向绑定原理是什么")]),t._v(" "),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" vue-router")]),t._v(" "),a("h2",{attrs:{id:"_1-hash-和-history-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-hash-和-history-的区别"}},[t._v("#")]),t._v(" 1. Hash 和 History 的区别")]),t._v(" "),a("blockquote",[a("p",[t._v("对于现代开发的项目来说，稍微复杂一点的 "),a("code",[t._v("SPA")]),t._v(" ，都需要用到"),a("strong",[t._v("路由")]),t._v("。而 "),a("code",[t._v("vue-router")]),t._v(" 正是 "),a("code",[t._v("vue")]),t._v(" 的路由标配，且 "),a("code",[t._v("vue-router")]),t._v(" 有"),a("strong",[t._v("两种模式")]),t._v("： "),a("code",[t._v("hash")]),t._v(" 和 "),a("code",[t._v("history")]),t._v(" 。")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-hash-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-hash-模式"}},[t._v("#")]),t._v(" 1.1 Hash 模式")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("hash")]),t._v(" 模式是一种把前端路由的路径用井号 "),a("code",[t._v("#")]),t._v(" 拼接在真实 "),a("code",[t._v("url")]),t._v(" 后面的模式。当井号 "),a("code",[t._v("#")]),t._v(" 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 "),a("code",[t._v("onhashchange")]),t._v(" 事件。")])]),t._v(" "),a("p",[a("strong",[t._v("特点：")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("hash")]),t._v(" 变化会触发网页跳转，即浏览器的前进和后退。")]),t._v(" "),a("li",[a("code",[t._v("hash")]),t._v(" 可以改变 "),a("code",[t._v("url")]),t._v(" ，但是不会触发页面重新加载（hash 的改变是记录在 "),a("code",[t._v("window.history")]),t._v(" 中），即不会刷新页面。")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("hash")]),t._v(" 通过 "),a("code",[t._v("window.onhashchange")]),t._v(" 的方式，来监听 "),a("code",[t._v("hash")]),t._v(" 的改变，借此实现无刷新跳转的功能。")])]),t._v(" "),a("li",[a("code",[t._v("hash")]),t._v(" 永远不会提交到 "),a("code",[t._v("server")]),t._v(" 端")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-1-url-的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-url-的属性"}},[t._v("#")]),t._v(" 1.1.1 url 的属性")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.protocal")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("协议")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.hostname")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主机名")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.host")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主机")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.port")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("端口号")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.pathname")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("访问页面")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.search")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("搜索内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("location.hash")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("哈希值")])])])]),t._v(" "),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//http://127.0.0.1:8001/01-hash.html?a=100&b=20#/aaa/bbb")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'http:'")]),t._v("\nlocaltion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hostname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '127.0.0.1'")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '127.0.0.1:8001'")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//8001")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//'01-hash.html'")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serach"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '?a=100&b=20'")]),t._v("\nlocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// '#/aaa/bbb'")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1-2-history-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-history-模式"}},[t._v("#")]),t._v(" 1.2 History 模式")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("history API")]),t._v(" 是 "),a("code",[t._v("H5")]),t._v(" 提供的新特性，允许开发者"),a("strong",[t._v("直接更改前端路由")]),t._v("，即更新浏览器 "),a("code",[t._v("URL")]),t._v(" 地址而"),a("strong",[t._v("不重新发起请求")]),t._v("。")])]),t._v(" "),a("p",[a("strong",[t._v("特点：")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("新的 "),a("code",[t._v("url")]),t._v(" 可以是与当前 "),a("code",[t._v("url")]),t._v(" 同源的任意 "),a("code",[t._v("url")]),t._v(" ，也可以是与当前 "),a("code",[t._v("url")]),t._v(" 一样的地址，但是这样会导致的一个问题是，会把"),a("strong",[t._v("重复的这一次操作")]),t._v("记录到栈当中。")])]),t._v(" "),a("li",[a("p",[t._v("通过 "),a("code",[t._v("history.state")]),t._v(" ，添加任意类型的数据到记录中。")])]),t._v(" "),a("li",[a("p",[t._v("可以额外设置 "),a("code",[t._v("title")]),t._v(" 属性，以便后续使用。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("通过 "),a("code",[t._v("pushState")]),t._v(" 、 "),a("code",[t._v("replaceState")]),t._v(" 来实现无刷新跳转的功能")]),t._v("。")])])]),t._v(" "),a("h3",{attrs:{id:"_1-2-1-history-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-history-api"}},[t._v("#")]),t._v(" 1.2.1 History API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("API")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("history.pushState(data, title[, url])")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("主要用于往历史记录堆栈顶部添加一条记录，data：会在 onpopsate 事件触发时作为参数传递过去，title：为页面标题，当前所有浏览器都会忽略此参数，url：为页面地址，可选，缺少时表示为当前页面地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("history.replaceState(data, title[,url])")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("更改当前的历史记录，参数同上")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("history.state")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用于存储以上方法的 data 数据，不同浏览器的读写权限不一样")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("window.onpopstate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("点击浏览器前进、后退以及调用 history.go,history.back,history.forward 会触发")])])])]),t._v(" "),a("h2",{attrs:{id:"vuex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" vuex")]),t._v(" "),a("h2",{attrs:{id:"_1-vuex的有哪些属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-vuex的有哪些属性"}},[t._v("#")]),t._v(" 1. vuex的有哪些属性？")]),t._v(" "),a("ul",[a("li",[t._v("State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。")]),t._v(" "),a("li",[t._v("Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。")]),t._v(" "),a("li",[t._v("Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。")]),t._v(" "),a("li",[t._v("Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。")]),t._v(" "),a("li",[t._v("Modules：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);