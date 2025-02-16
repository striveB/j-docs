# vue

# 基础
## 1. 为什么 data 是个函数并且返回一个对象呢？

> `data`之所以是一个函数，是因为一个组件可能会多处调用，而每一次调用就会执行`data函数`并返回新的数据对象，这样，可以避免多处调用之间的`数据污染`。

## 2. 子父生命周期顺序

**创建阶段**

父（beforeCreate） => 父 （created）=> 父（beforeMount） => 子（beforeCreate） => 子（created） => 子（beforeMount） => 子（Mounted） => 父（Mounted）

**更新阶段**

父（beforeUpdate） => 子（beforeUpdate） => 子（updated） => 父（updated）

**销毁阶段**

父（beforeDestroy） => 子（beforeDestroy） => 子（destroyed） => 父（destroyed）

## 3. 组件之间传值

emit、props、ref、$parent、$children、eventBus、provide/inject、vuex

## 4. vue优缺点

优点：渐进式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据与视图分开

缺点：单页面不利于seo，不支持IE8以下，首屏加载时间长

## 5. 为什么v-if和v-for不建议用在同一标签？

在Vue2中，`v-for`优先级是高于`v-if`的

例子：

```js
<div v-for="item in [1, 2, 3, 4, 5, 6, 7]" v-if="item !== 3">
    {{item}}
</div>
```

上面的写法是`v-for`和`v-if`同时存在，会先把7个元素都遍历出来，然后再一个个判断是否为3，并把3给隐藏掉，这样的坏处就是，渲染了无用的3节点，增加无用的dom操作，建议使用computed来解决这个问题。

**在vue3中v-if优先级高于v-for，所以他们混用时会直接报错！**

## 6.自定义v-model

默认情况下，v-model 是 @input 事件侦听器和 :value 属性上的语法糖。但是，你可以在你的Vue组件中指定一个模型属性来定义使用什么事件和value属性

```javascript
export default: {
  model: {
    event: 'change',
    prop: 'checked'  
  }
}
```

## 7.vue的双向绑定原理是什么
vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 vu2.x (`Object.defineProperty()`) 或 vue3.x (`Proxy `) 来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

**发布-订阅模式**

Vue 通过 Dep（依赖收集器）和 Watcher（观察者）实现发布-订阅。
- Dep：每个属性都有一个 Dep 实例，用于收集依赖（Watcher）。
- Watcher：当数据变化时，通知所有依赖的 Watcher 更新视图。



## vue-router

## 1. Hash 和 History 的区别

> 对于现代开发的项目来说，稍微复杂一点的 `SPA` ，都需要用到**路由**。而 `vue-router` 正是 `vue` 的路由标配，且 `vue-router` 有**两种模式**： `hash` 和 `history` 。

### 1.1 Hash 模式

> `hash` 模式是一种把前端路由的路径用井号 `#` 拼接在真实 `url` 后面的模式。当井号 `#` 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `onhashchange` 事件。

**特点：**

- `hash` 变化会触发网页跳转，即浏览器的前进和后退。
- `hash` 可以改变 `url` ，但是不会触发页面重新加载（hash 的改变是记录在 `window.history` 中），即不会刷新页面。
- **`hash` 通过 `window.onhashchange` 的方式，来监听 `hash` 的改变，借此实现无刷新跳转的功能。**
- `hash` 永远不会提交到 `server` 端

### 1.1.1 url 的属性

|       属性        |   含义   |
| :---------------: | :------: |
| location.protocal |   协议   |
| location.hostname |  主机名  |
|   location.host   |   主机   |
|   location.port   |  端口号  |
| location.pathname | 访问页面 |
|  location.search  | 搜索内容 |
|   location.hash   |  哈希值  |

**示例：**

```javascript
//http://127.0.0.1:8001/01-hash.html?a=100&b=20#/aaa/bbb
location.protocal; // 'http:'
localtion.hostname; // '127.0.0.1'
location.host; // '127.0.0.1:8001'
location.port; //8001
location.pathname; //'01-hash.html'
location.serach; // '?a=100&b=20'
location.hash; // '#/aaa/bbb'
```

## 1.2 History 模式

> `history API` 是 `H5` 提供的新特性，允许开发者**直接更改前端路由**，即更新浏览器 `URL` 地址而**不重新发起请求**。

**特点：**

- 新的 `url` 可以是与当前 `url` 同源的任意 `url` ，也可以是与当前 `url` 一样的地址，但是这样会导致的一个问题是，会把**重复的这一次操作**记录到栈当中。

- 通过 `history.state` ，添加任意类型的数据到记录中。

- 可以额外设置 `title` 属性，以便后续使用。

- **通过 `pushState` 、 `replaceState` 来实现无刷新跳转的功能**。

### 1.2.1 History API

|                   API                   |                                                                                                                                                                                           |
| :-------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  history.pushState(data, title[, url])  | 主要用于往历史记录堆栈顶部添加一条记录，data：会在 onpopsate 事件触发时作为参数传递过去，title：为页面标题，当前所有浏览器都会忽略此参数，url：为页面地址，可选，缺少时表示为当前页面地址 |
| history.replaceState(data, title[,url]) |                                                                               更改当前的历史记录，参数同上                                                                                |
|              history.state              |                                                                 用于存储以上方法的 data 数据，不同浏览器的读写权限不一样                                                                  |
|            window.onpopstate            |                                                        点击浏览器前进、后退以及调用 history.go,history.back,history.forward 会触发                                                        |

## vuex

## 1. vuex的有哪些属性？

- State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。
- Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。
- Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。
- Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。
- Modules：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。
