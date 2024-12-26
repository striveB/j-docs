# 功能案例

## 01.打乱数组顺序

```javascript
let arr = ['😀', '😁', '😂', '🤣', '😃', '😄', '😅']
arr.sort(() => 0.5 - Math.random())
console.log(arr)
// ['🤣', '😁', '😀', '😂', '😄', '😃', '😅']
```

### sort() 方法

`sort()` 是对数组排序的方法

如果使用 `sort()` 没有传递参数时，则会把数组中的所有元素转为字符串通过[ascii]([ASCII码表,ASCII码一览表,ASCII码对照表完整版-ASCII码中文站 (habaijian.com)](https://www.habaijian.fcom/)码进行排序

如果想按照其他标准排序可以给`sort()`传递一个比较函数（这个函数应该有两个参数，假设为 a和b），然后返回一个用于说明这两个参数关系的值：

```javascript
arr.sort( (a, b) => {
    return 0
})
```

函数返回值的含义：

- 返回小于0的值表示，a小于b，则排序后的数组中a应该在b的前面

- 返回0表示，a等于b，两者位置不变

- 返回大于0的值表示，a大于b，则排序后的数组中b应该在a的前面

这样可以实现一个纯数字数组的倒序：

```javascript
var points = [40,1,5,25,10];
points.sort((a,b) => {
    if(a < b) {
        return 1;
    } else if(a > b) {
        return -1;
    }
    return 0
});
// [40, 25, 10, 5, 1]
```

a的取值范围：**arr[1] ~ arr[arr.length -1]**

b的取值范围：**arr[0] ~ arr[arr.length -2]**

**`sort()` 方法在原数组上进行排序，不会生成副本。也就是说他会改变原数组**

## 02.数组合并加去重

```javascript
const a = [1,2,3];
const b = [1,5,6];
const c = [...new Set([...a,...b])];//[1,2,3,5,6]
```

### Set

`Set` 本身是一个构造函数，用来生成`Set`数据结构。

`Set` 数据结构里不允许有重复的值，它在初始化时可以接收一个数组：

```javascript
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set])
// [1, 2, 3, 4]
```

## 03.快速生成一个二维数组

使用`Array.from()`来生成一个二维数组，并且每个元素显示当前坐标

```javascript
const HEIGHT = 3;// 一维中有多少个元素
const WIDTH = 2; // 二维中有多少个元素
const arrs = Array.from(
    { length: HEIGHT }, 
    (_, y) =>  Array.from(
            { length: WIDTH }, 
            (_, x) => ({x, y})
        )
);
console.log(arrs)
```

输出结果：

```javascript
[
    [{x: 0, y: 0}, {x: 1, y: 0}],
    [{x: 0, y: 1}, {x: 1, y: 1}],
    [{x: 0, y: 2}, {x: 1, y: 2}]
]
```

### Array.from()

`Array.from()`方法就是将一个**类数组对象**或者**可遍历的对象**转换成真正的数组。

所谓**类数组对象**，最基本的要求就是具有`length`属性的对象，就是有数组特征的一个对象。

这个案例中就传给了`form()`方法传递一个类数组对象参数，因为他有`length`属性。

所以当我们写出如下代码时，会返回：

```javascript
Array.from({ length: 3 }); //[undefined, undefined, undefined]
```

`Array.from()`还有第二个参数，它类似于`map`的功能，看如下代码：

```javascript
let arrayLike = {
    0: 'a', 
    1: 'b',
    2: 'c',
    'length': 3
}
let newArr = Array.from(arrayLike, (item, index) => {
    return item + index
}); 
console.log(newArr);// ['a0', 'b1', 'c2']
```

所以本案例的原理其实就是：

```javascript
let arr = Array.from({ length: 3 }, ( _, x) => ({x}));
console.log(arr );// [{x: 0}, {x: 1}, {x: 2}]
```

然后外边又套了一个y层。

`Array.from()`也可以让`set`类型的数据结构转换为普通的数组：

```javascript
const set = new Set();
set.add(1)
set.add(2)
console.log(set) // Set(2) {1, 2}
console.log(Array.from(set)) // [1, 2]
```

## 04. 防抖

```html
<body>
    <button>点击</button>
    <script>
        const btn = document.querySelector('button')
        
        function out(){
            console.log('点击了')
            console.log(this)
        }
        
        function debounce(fun, delay = 500){
            let timer;
            return function (){
                let self = this;
                // 如果在setTimeout没有执行完成就再次触发了当前函数时就清除定时函数，取消执行（只执行最后一次）
                clearTimeout(timer)
                timer = setTimeout(() => {
                    // 改变this指向（因为这里是属于window调用的fun，所以this会指向window），并且传入参数
                    fun.apply(self, arguments);
                }, delay)
            }
        }
        btn.addEventListener('click', debounce(out));
    </script>
</body>
```

效果：点击按钮输出内容以及`this`指向，**500毫秒内连续点击按钮也只会执行最后一次的点击**

## 05. 节流

```html
<body>
    <script>
        function changeBg(){
            let r = Math.floor( Math.random()*255 );
            let g = Math.floor( Math.random()*255 );
            let b = Math.floor( Math.random()*255 );
            document.body.style.background = `rgb(${r}, ${g}, ${b})`
        }

        // 方式1
        function throttle1(fun, delay = 500){
            let timer = 0;
            return function (){
                let now = new Date();
                // 如果执行函数时的时间减去上一次执行此函数的没有超过指定的间隔时间就不执行函数（这里是如果这次执行的时间与上次执行的时间没有超过500毫秒就不执行）
                if(now - timer >= delay){
                    // 改变this指向（因为这里是属于window调用的fun，所以this会指向window），并且传入参数
                    fun.apply(self, arguments);
                    // 当前函数执行完后 将此次执行的时间复制给tiemr（这样此次时间就变成了上次函数执行时间了）
                    timer = now;
                }
            }
        }
        
        // 方式2
        function throttle2(fun, delay = 500){
            let timer;
            return function (){
                // 如果setTimeout还没执行完就不会继续执行
                if(timer){
                    return;
                }
                // 赋值定时函数
                timer = setTimeout(()=>{
                    // 改变this指向（因为这里是属于window调用的fun，所以this会指向window），并且传入参数
                    fun.apply(self, arguments);
                    // 函数执行完后把定时器清除（这样上面的清除判断就不会执行了）
                    timer = null;
                }, delay);
            }
        }
        window.addEventListener('resize', throttle2(changeBg));
    </script>
</body>
```

效果：当窗口改变大小时随机设置页面背景颜色，**即使不停的改变窗口大小也只会每500毫秒执行一次**

## 06. 同级父子关系转为树形

**数据：**

```javascript
const datas = [{
    id: 1,
    pid: 0,
    name: '家电'
},{
    id: 2,
    pid: 0,
    name: '数码'
},{
    id: 3,
    pid: 1,
    name: '电视'
},{
    id: 4,
    pid: 3,
    name: '4K'
},{
    id: 5,
    pid: 3,
    name: '8K'
},{
    id: 6,
    pid: 2,
    name: '摄影摄像'
},{
    id: 7,
    pid: 2,
    name: '智能设备'
},{
    id: 8,
    pid: 7,
    name: '智能手环'
},{
    id: 9,
    pid: 7,
    name: '健康检测'
}]
```

**功能函数：**

```javascript
function formatTree(datas) {
    let praents = datas.filter(data => data.pid === 0)
    let children = datas.filter(data => data.pid !== 0)
    function run(parents, children) {
        parents.forEach(p => {
            const currentChs = children.filter(data => data.pid === p.id)
            p.children = currentChs
            currentChs.forEach((child, i) => {
                let tempCh = JSON.parse(JSON.stringify(children))
                tempCh.splice(i, 1)
                run([child], tempCh)
            })
        })
    }
    run(praents, children)
    return praents
}
```

**输出结果：**

```json
[
    {
        "id": 1,
        "pid": 0,
        "name": "家电",
        "children": [
            {
                "id": 3,
                "pid": 1,
                "name": "电视",
                "children": [
                    {
                        "id": 4,
                        "pid": 3,
                        "name": "4K",
                        "children": []
                    },
                    {
                        "id": 5,
                        "pid": 3,
                        "name": "8K",
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "pid": 0,
        "name": "数码",
        "children": [
            {
                "id": 6,
                "pid": 2,
                "name": "摄影摄像",
                "children": []
            },
            {
                "id": 7,
                "pid": 2,
                "name": "智能设备",
                "children": [
                    {
                        "id": 8,
                        "pid": 7,
                        "name": "智能手环",
                        "children": []
                    },
                    {
                        "id": 9,
                        "pid": 7,
                        "name": "健康检测",
                        "children": []
                    }
                ]
            }
        ]
    }
]
```

## 07.数据脱敏

```javascript
const phone = '18739009031'
let res1 = phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
console.log(res1) // 187****9031

const idCard = '411425199810328466'
let res2 = idCard.replace(/^(.{6})(?:\d+)(.{4})$/, '$1****$2')
console.log(res2) // 411425****8466

const email = '1227491415@qq.com'
let res3 = email.replace(/(\w{1}).*(\w{1})@(.*)/, "$1***$2@$3")
console.log(res3) // 1***5@qq.com
```

## 08. 随机数的应用

```javascript
// 生成一个介于min和max之间的随机数整数
function random(min, max) {

    // 向下取整
    // 不包括max
    return Math.floor(Math.random() * (max - min)) + min;
    // 包括max
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // 及不包含min也不包括max
    min += 1
    return Math.floor(Math.random() * (max - min + 1)) + min;


    // 向上取整
    // 不包括min
    return Math.ceil(Math.random() * (max - min)) + min;
    // 包括min
    return Math.ceil(Math.random() * (max - min + 1)) + min;
    // 及不包含max也不包括min
    max -= 1
    return Math.ceil(Math.random() * (max - min + 1)) + min;

}
```