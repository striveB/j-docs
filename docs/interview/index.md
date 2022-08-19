# 基础
| 链接地址 | 
| ---- |
| [vue.config.js 的配置项](https://www.jianshu.com/p/b358a91bdf2d) |
| [Vue指令大全](https://www.jianshu.com/p/c4a87e1b4ef7) |
| [VueX 和 EventBus 的区别和使用场景](https://www.jianshu.com/p/5628bb944571) |
| [forEach、filter、map间的区别以及使用场景](https://zhuanlan.zhihu.com/p/291089608) |
| [cookie、sessionStorage和localStorage的区别](https://blog.csdn.net/weixin_42614080/article/details/90706499) |
| ![img](https://img-blog.csdnimg.cn/20190530212538979.png) |

# Vue

## 1. 为什么data是个函数并且返回一个对象呢？

> `data`之所以是一个函数，是因为一个组件可能会多处调用，而每一次调用就会执行`data函数`并返回新的数据对象，这样，可以避免多处调用之间的`数据污染`。

## 2. 子父生命周期顺序

**创建阶段**

父（beforeCreate） =>  父 （created）=>  父（beforeMount） =>  子（beforeCreate） =>  子（created） =>  子（beforeMount） => 子（Mounted） => 父（Mounted） 

**更新阶段**

父（beforeUpdate） => 子（beforeUpdate） =>  子（updated） => 父（updated）

**销毁阶段**

父（beforeDestroy） => 子（beforeDestroy） => 子（destroyed） => 父（destroyed）

## 3. 组件之间传值

emit、props、ref、$parent、$children、eventBus、provide/inject、vuex



# vue-router

## 1. Hash和 History的区别

> 对于现代开发的项目来说，稍微复杂一点的 `SPA` ，都需要用到**路由**。而 `vue-router` 正是 `vue` 的路由标配，且 `vue-router` 有**两种模式**： `hash` 和 `history` 。

### 1.1 Hash模式

> `hash` 模式是一种把前端路由的路径用井号 `#` 拼接在真实 `url` 后面的模式。当井号 `#` 后面的路径发生变化时，浏览器并不会重新发起请求，而是会触发 `onhashchange` 事件。

**特点：**

- `hash` 变化会触发网页跳转，即浏览器的前进和后退。
- `hash` 可以改变 `url` ，但是不会触发页面重新加载（hash的改变是记录在 `window.history` 中），即不会刷新页面。
- `hash` 通过 `window.onhashchange` 的方式，来监听 `hash` 的改变，借此实现无刷新跳转的功能。
- `hash` 永远不会提交到 `server` 端

### 1.1.1 url的属性

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
location.protocal // 'http:'
localtion.hostname // '127.0.0.1'
location.host // '127.0.0.1:8001'
location.port //8001
location.pathname //'01-hash.html'
location.serach // '?a=100&b=20'
location.hash // '#/aaa/bbb'
```

## 1.2 History模式

> `history API` 是 `H5` 提供的新特性，允许开发者**直接更改前端路由**，即更新浏览器 `URL` 地址而**不重新发起请求**。

**特点：**

- 新的 `url` 可以是与当前 `url` 同源的任意 `url` ，也可以是与当前 `url` 一样的地址，但是这样会导致的一个问题是，会把**重复的这一次操作**记录到栈当中。

- 通过 `history.state` ，添加任意类型的数据到记录中。

- 可以额外设置 `title` 属性，以便后续使用。

- 通过 `pushState` 、 `replaceState` 来实现无刷新跳转的功能。

### 1.2.1 History API

|                   API                   |                                                              |
| :-------------------------------------: | :----------------------------------------------------------: |
|  history.pushState(data, title[, url])  | 主要用于往历史记录堆栈顶部添加一条记录，data：会在onpopsate事件触发时作为参数传递过去，title：为页面标题，当前所有浏览器都会忽略此参数，url：为页面地址，可选，缺少时表示为当前页面地址 |
| history.replaceState(data, title[,url]) |                 更改当前的历史记录，参数同上                 |
|              history.state              |    用于存储以上方法的data数据，不同浏览器的读写权限不一样    |
|            window.onpopstate            | 点击浏览器前进、后退以及调用history.go,history.back,history.forward会触发 |

# JavaScript

## 1.JavaScript的数据类型

公共有7种数据类型分为：

**基本数据类型：**`string`、`number`、`boolean`、`null`、`undefined`、`symbol`(ES6新增，创建之后第独一无二不可以改变的数据类型)

**引用数据类型：**`Object`

## 2. new操作符做了什么事情

1. 创建一个新对象
2. 设置原型，将对象的原型设置为函数的prototype对象
3. 让函数的this指向这个对象，执行构造函数的代码（为这个对象添加属性）
4. 绑定函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象

```javascript
/*
  myNew函数要接受不定量的参数，第一个参数是构造函数（也就是new操作符的目标函数），其余参数被构造函数使用。
  new myNew() 是一种js语法糖。我们可以用函数调用的方式模拟实现
*/
function myNew(Fn,...args){
    // 1、创建一个空的对象
    let obj = {}; // let obj = Object.create({});
    // 2、将空对象的原型prototype指向构造函数的原型
    Object.setPrototypeOf(obj,Fn.prototype); // obj.__proto__ = Fn.prototype 
    // 以上 1、2步还可以通过 const obj = Object.create(Fn.prototype) 实现
    // 3、改变构造函数的上下文（this）,并将参数传入
    let result = Fn.apply(obj,args);
    // 4、如果构造函数执行后，返回的结果是对象类型，则直接将该结果返回，否则返回 obj 对象
    return result instanceof Object ? result : obj;
    // return typeof result === 'object' && result != null ? result : obj
}
```

## 3. 什么是闭包，闭包的作用是什么

> 闭包：当一个内部函数被调用，就会形成闭包，闭包就是能够读取其他函数内部变量的函数。
>
> 作用：局部变量无法共享和长久的保存，而全局变量可能造成变量污染，所以我们希望有一种机制既可以长久保存变量有不会造成全局污染。

## 4. Promise是什么

> `Promise` 是异步编程的一种解决方案,从语法上讲,`Promise`是一个对象,从它可以获取异步操作的消息,本意上讲,它是承诺,承诺它过一段时间会给你一个结果.`Promise`有三种状态: `pending`(等待),fulfiled(成功),rejected(失败),状态一旦改变就不会再变.创建promise实例后它会立即执行.

## 5.null和undefined的不同

- `null`：没有对象，表示该处不应该有值

- `undefined`：缺少值，该处应该有一个值，但还没用定义
- `null`转换为数值为0，`undefined`转换为数字为NaN(不是一个数字)

什么时候为`null`：

- 作为函数的参数，表示该函数的参数为空。
- 作为对象原型链的终点。

什么时候会出现`undefined`：

- 变量被声明了，但没有赋值。
- 调用函数时，应该提供的参数没有提供。
- 对象没有赋值的属性
- 函数没有返回值时，默认`undefined`

```javascript
null == undefined // ture
null === undefined // false
```

## 6.js运行机制

因为js是单线程的只有一个调用栈，调用栈按照先入后出的规则进行，一次只调用一个，调用栈会先执行同步代码，当调用栈发现异步代码时会先将他归为异步队列，异步队列分为 **宏任务队列** 和 **微任务队列**，进入队列的代码会按照先入先出的顺序执行。

**宏任务队列**：新程序执行或是子程序被执行（也就是一个`script`标签元素里边运行的代码）、定时函数、事件回调函数，文件操作

**微任务队列：**Promise.then().catch().finally()、MutationObserver、Object.observe

他们的运行是通过 **事件循环（Event Loop）** 不断地寻找可以执行的任务来执行，首先会先执行一下宏任务因为 `script` 就属于宏任务，之后执行完同步的任务后（清空调用栈之后），**先执行微任务队列**中的任务，把微任务队列的任务**清空**以后，**再执行宏任务队列**中的任务

*在执行宏任务时如果出现了新的微任务那么执行完当前的宏任务之后会继续去执行微任务，等清空微任务队列之后才会接着执行刚才的宏任务*

代码示例：

```html
<script>
    console.log('程序执行')
    setTimeout(() => {
        console.log('4')
    }, 100)
    setTimeout(() => {
        console.log('1')
        Promise.resolve().then(() => {
            console.log('3')
        })
        console.log('2')
    }, 0)
</script>
```

运行结果：

```
程序执行
1
2
3
4
```

## 7.普通函数和箭头函数的区别

### 1.this指向

在普通函数中this指向（执行上下文）是动态的，取决于函数是如何被调用的，谁调用this就指向谁。

无论何时执行或在何处执行，箭头函数内部的this都指向的是外部函数，即箭头函数不会改变this的指向，也可以理解未箭头函数中没有this。

注意：由于**箭头函数没有自己的 this 指针**，通过 call() 、 apply() 和 bind() 方法调用时，只能传递参数，而不能绑定 this，他们的第一个参数会被忽略。

### 2.构造函数

在 JavaScript 中，函数和类的继承是通过 prototype 属性实现的，且 prototype 拥有属性 constructor 指向构造函数，如下：

```javascript
function fnc() {}
console.lof(fnc.prototype) // {constructor: ƒ}
```

而采用箭头函数定义函数时，其是没有 prototype 属性的，也就无法指向构造函数。

```javascript
const arrowFnc = () => {}

console.log(arrowFnc.prototype) // undefined
```

### 3.参数

在普通函数中可以使用arguments对象获取函数参数

```javascript
function fun(){
	console.log(arguments)
}
fun(1,2,3) // Arguments(3)[1,2,3]
```

在箭头函数中没有arguments对象，不过可以使用...args

```javascript
const fun = () => {
	console.log(arguments)
}
fun(1,2,3)// Error: arguments is not defined

const fun = (...args) => {
	console.log(args)
}
fun(1,2,3) // [1,2,3]
```

### 4.返回值

在处理函数的返回值时，相比于普通函数，箭头函数可以隐式返回。

```javascript
const sum = (a, b) => {
  return a + b
}
const sum = (a, b) => (a + b);
```

## 8.显式原型和隐式原型

显式原型：`prototype`

隐式原型：`__proto__`

只有**函数**才有**显式原型**（`prototype`），它指向的是一个**Object 空对象** ，原型对象`prototype`中有一个`constructor`属性，它指向函数对象本身；

每个**实例对象**都有**隐式原型**（`__proto__`），**隐式原型**指向的是它上层的原型的**显式原型**

证实：

```javascript
function Fun(){}
const fun = new Fun();
const str = ''

//证明只有函数才有显式原型
console.log(Fun.prototype) // {}
console.log(fun.prototype) // undefied
console.log(str.prototype) // undefied

// 证明函数的显式原型指向的是一个Object 空对象
console.log(typeof Fun.prototype === 'object', Object.keys(Fun.prototype)) // true, []
// 原型对象prototype中有一个constructor属性，它指向函数对象本身
console.log(Fun.prototype.constructor === Fun)

// 证明隐式原型指向的是它上层的原型的显式原型
console.log(Fun.__proto__ === Function.prototype) // true
console.log(fun.__proto__ === Fun.prototype) // true
console.log(str.__proto__ === String.prototype) // true
```



