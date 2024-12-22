# javascript
## 1.JavaScript 的数据类型

共有 7 种数据类型分为：

**基本数据类型：**`string`、`number`、`boolean`、`null`、`undefined`、`symbol`(ES6 新增，创建之后第独一无二不可以改变的数据类型)

**引用数据类型：**`Object`  (`Array`、`Date`、`RegExp`、`Error`、`Function`、`Map`、`Set`)

## 2. new 操作符做了什么事情

1. 创建一个新对象
2. 设置原型，将对象的原型设置为函数的 prototype 对象
3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个对象添加属性）
4. 绑定函数的返回值类型，如果是值类型，返回创建的对象，如果是引用类型，就返回这个引用类型的对象

```javascript
/*
  myNew函数要接收不定量的参数，第一个参数是构造函数（也就是new操作符的目标函数），其余参数被构造函数使用。
  new myNew() 是一种js语法糖。我们可以用函数调用的方式模拟实现
*/
function myNew(Fn, ...args) {
  // 1、创建一个空的对象
  let obj = {}; // let obj = Object.create({});
  // 2、将空对象的原型prototype指向构造函数的原型
  Object.setPrototypeOf(obj, Fn.prototype); // obj.__proto__ = Fn.prototype
  // 以上 1、2步还可以通过 const obj = Object.create(Fn.prototype) 实现
  // 3、改变构造函数的上下文（this）,并将参数传入
  let result = Fn.apply(obj, args);
  // 4、如果构造函数执行后，返回的结果是对象类型，则直接将该结果返回，否则返回 obj 对象
  return result instanceof Object ? result : obj;
  // return typeof result === 'object' && result != null ? result : obj
}
```

## 3. 什么是闭包，闭包的作用是什么

> 闭包：如果一个函数内部定义了另一个函数，并且内部的函数引用了外部函数的变量，那么内部的函数就构成了一个闭包。
>
> 作用：
>
> 1.实现私有变量：闭包可以封装变量，防止变量被外部访问和修改，从而实现数据的私有化和保护。
>
> 2.延长变量的生命周期：当函数执行完毕后，其内部的变量通常会被销毁，但是如果该函数返回了一个闭包，那么该闭包就可以一直访问和使用这些变量，从而延长了它们的生命周期。
>
> 3.实现函数的柯里化：闭包可以实现函数的柯里化，即将一个多参数的函数转换成一个单参数的函数序列，这样可以更加灵活地使用函数。
>
> 4.实现模块化：通过使用闭包，可以实现模块化的编程方式，将函数和变量封装在一个作用域内，避免了命名冲突和全局变量的污染。
>
> **过度使用闭包可能会导致内存泄漏和性能问题，因此需要谨慎使用。**

## 4. Promise 是什么

> `Promise` 是异步编程的一种解决方案,从语法上讲,`Promise`是一个对象,从它可以获取异步操作的消息,本意上讲,它是承诺,承诺它过一段时间会给你一个结果.`Promise`有三种状态: `pending`(等待),fulfiled(成功),rejected(失败),状态一旦改变就不会再变.创建 promise 实例后它会立即执行.

## 5.null 和 undefined 的不同

- `null`：没有对象，表示该处不应该有值

- `undefined`：缺少值，该处应该有一个值，但还没用定义
- `null`转换为数值为 0，`undefined`转换为数字为 NaN(不是一个数字)

什么时候为`null`：

- 作为函数的参数，表示该函数的参数为空。
- 作为对象原型链的终点。

什么时候会出现`undefined`：

- 变量被声明了，但没有赋值。
- 调用函数时，应该提供的参数没有提供。
- 对象没有赋值的属性
- 函数没有返回值时，默认`undefined`

```javascript
null == undefined; // ture
null === undefined; // false
```

## 6.js 运行机制

因为 js 是单线程的只有一个调用栈，调用栈按照先入后出的规则进行，一次只调用一个，调用栈会先执行同步代码，当调用栈发现异步代码时会先将他归为异步队列，异步队列分为 **宏任务队列** 和 **微任务队列**，进入队列的代码会按照先入先出的顺序执行。

**宏任务队列**：新程序执行或是子程序被执行（也就是一个`script`标签元素里边运行的代码）、定时函数、事件回调函数，文件操作

**微任务队列**：Promise.then().catch().finally()、MutationObserver、Object.observe

他们的运行是通过 **事件循环（Event Loop）** 不断地寻找可以执行的任务来执行，首先会先执行一下宏任务因为 `script` 就属于宏任务，之后执行完同步的任务后（清空调用栈之后），**先执行微任务队列**中的任务，把微任务队列的任务**清空**以后，**再执行宏任务队列**中的任务

_在执行宏任务时如果出现了新的微任务那么执行完当前的宏任务之后会继续去执行微任务，等清空微任务队列之后才会接着执行刚才的宏任务_

代码示例：

```html
<script>
  console.log("程序执行");
  setTimeout(() => {
    console.log("4");
  }, 100);
  setTimeout(() => {
    console.log("1");
    Promise.resolve().then(() => {
      console.log("3");
    });
    console.log("2");
  }, 0);
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

### 1.this 指向

在普通函数中 this 指向（执行上下文）是动态的，取决于函数是如何被调用的，谁调用 this 就指向谁。

无论何时执行或在何处执行，箭头函数内部的 this 都指向的是外部函数，即箭头函数不会改变 this 的指向，也可以理解未箭头函数中没有 this。

注意：由于**箭头函数没有自己的 this 指针**，通过 call() 、 apply() 和 bind() 方法调用时，只能传递参数，而不能绑定 this，他们的第一个参数会被忽略。

### 2.构造函数

在 JavaScript 中，函数和类的继承是通过 prototype 属性实现的，且 prototype 拥有属性 constructor 指向构造函数，如下：

```javascript
function fnc() {}
console.lof(fnc.prototype); // {constructor: ƒ}
```

而采用箭头函数定义函数时，其是没有 prototype 属性的，也就无法指向构造函数。

```javascript
const arrowFnc = () => {};

console.log(arrowFnc.prototype); // undefined
```

### 3.参数

在普通函数中可以使用 arguments 对象获取函数参数

```javascript
function fun() {
  console.log(arguments);
}
fun(1, 2, 3); // Arguments(3)[1,2,3]
```

在箭头函数中没有 arguments 对象，不过可以使用...args

```javascript
const fun = () => {
  console.log(arguments);
};
fun(1, 2, 3); // Error: arguments is not defined

const fun = (...args) => {
  console.log(args);
};
fun(1, 2, 3); // [1,2,3]
```

### 4.返回值

在处理函数的返回值时，相比于普通函数，箭头函数可以隐式返回。

```javascript
const sum = (a, b) => {
  return a + b;
};
const sum = (a, b) => a + b;
```

## 8.显式原型和隐式原型

显式原型：`prototype`

隐式原型：`__proto__`

只有**函数**才有**显式原型**（`prototype`），它指向的是一个**Object 空对象** ，原型对象`prototype`中有一个`constructor`属性，它指向函数对象本身；

每个**实例对象**都有**隐式原型**（`__proto__`），**隐式原型**指向的是它上层的原型的**显式原型**

证实：

```javascript
function Fun() {}
const fun = new Fun();
const str = "";

//证明只有函数才有显式原型
console.log(Fun.prototype); // {}
console.log(fun.prototype); // undefied
console.log(str.prototype); // undefied

// 证明函数的显式原型指向的是一个Object 空对象
console.log(typeof Fun.prototype === "object", Object.keys(Fun.prototype)); // true, []
// 原型对象prototype中有一个constructor属性，它指向函数对象本身
console.log(Fun.prototype.constructor === Fun);

// 证明隐式原型指向的是它上层的原型的显式原型
console.log(Fun.__proto__ === Function.prototype); // true
console.log(fun.__proto__ === Fun.prototype); // true
console.log(str.__proto__ === String.prototype); // true
```
**__ proto __ 和 prototype 的区别**

| 特性    | __ proto __ | prototype                           |
| ------- | ------------ | ---------------------------------- |
| 类型  | 每个对象的属性 | 构造函数的属性 |
| 用途 | 指向对象的原型，形成原型链 | 用于定义构造函数创建的实例共享的属性和方法 |
| 存在于  | 所有对象 | 只有构造函数 |
| 关系  | 对象的`__proto__` 指向构造函数的`prototype` | 构造函数的 `prototype`是其所有实例的原型 |
| 用法  | 用来查找对象原型链上的属性和方法 | 用来定义实例共享的属性和方法 |

## 9. call、apply、bind区别

**相同**：他们三个都属于函数的方案，用于改变函数内部this的指向

| 方法    | 函数执行时机 | 传参方式                           |
| ------- | ------------ | ---------------------------------- |
| call()  | 立即执行     | (this指向对象,参数1,参数2,参数3)   |
| apply() | 立即执行     | (this指向对象,[参数1,参数2,参数3]) |
| bind()  | 返回当前函数 | (this指向对象,参数1,参数2,参数3)   |



## 10. js实现深拷贝的方法有哪些，需要注意哪些问题？

   **实现方法**

   1. **JSON.parse(JSON.stringify())：** 将对象转换为字符串，然后再将字符串转换为新的对象。这种方法比较简单，但是也有一些问题，比如 `date` 类型会被转换成一个字符串，而 `RegExp` 类型会被转换成空
   2. **递归：** 这种方法是最为常见也是最容易想到的一种方法，即判断每一级的类型，如果是对象就创建新的对象，如果是数组就创建新数组。
   3. **使用第三方库：** 可以使用 `lodash` 库中的 `_.cloneDeep()` 方法，该方法可以实现对对象的深拷贝。

   **注意问题**

   1. **循环引用：** 当对象存在循环引用时，可能会导致无限递归的情况。
   2. **函数类型：** 对象中包含函数时，无法被拷贝。
   3. **特殊对象和类型：** 某些特殊对象或类型可能需要特殊处理，例如 `window`、`DOM` 节点等。
   4. **性能：** 深拷贝的性能可能会受到一些影响，例如递归调用、字符串转换等操作。
## 11. JS的数据类型有哪些？如何判断js的数据类型?

   **基础数据类型**

  `number`：数字类型

  `string`：字符串类型

  `boolean`：布尔类型

  `undefined`：变量未初始化时的默认值

  `null`：表示一个空值

  `symbol`：符号类型（ES6新增）

   **引用数据类型**

  `object`：对象类型包括普通对象、数组、函数等

   **判断js数据类型的方式**
   1. `typeof`：返回值是字符串，返回的数据类型
   2. `instanceof`：返回值是布尔类型，判断对象是否是某个构造函数的实例
   3. `Object.prototype.toString.call()`：这是最准确可靠的判断数据类型的方法，它返回一个形如 "[object Type]" 的字符串，其中 Type 是具体的数据类型。

  ```javascript
  let num = 123;
  console.log(typeof num); // 'number'

  let str = 'hello';
  console.log(typeof str); //'string'

  let bool = true;
  console.log(typeof bool); // 'boolean'

  let obj = {};
  console.log(typeof obj); // 'object'

  let arr = [1, 2, 3];
  console.log(arr instanceof Array); // true

  console.log(Object.prototype.toString.call(num)); // '[object Number]'
  console.log(Object.prototype.toString.call(str)); // '[object String]'
  console.log(Object.prototype.toString.call(bool)); // '[object Boolean]'
  console.log(Object.prototype.toString.call(obj)); // '[object Object]'
  console.log(Object.prototype.toString.call(arr)); // '[object Array]'
  ```
