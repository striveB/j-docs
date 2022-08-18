# js常用方法

## 数组.push()

> 向数组最后的位置依次追加一个或多个元素，并返回追加后数组长度

```javascript
let arr = ['a'];
//追加一个元素
let arrLength1 = arr.push('b');
console.log(arr);// 2
console.log(arr);// ['a', 'b']

//追加多个元素
let arrLength2 = arr.push('c', 'd');
console.log(arrLength2);// 4
console.log(arr);// ['a','b','c','d']
```

## 数组.pop()

> 删除数组最后一个元素并返回

```javascript
let arr = ['a', 'b', 'c'];
let delVal = arr.pop();
console.log(delVal);  // c
console.log(arr);  // ['a', 'b']
```

## 数组.shift()

>   删除数组第一个元素并返回

```javascript
let arr = ['a', 'b', 'c'];
let delVal = arr.shift();
console.log(delVal);  // a
console.log(arr);  // ['b', 'c']
```

## 数组.unshift()

> 向数组第一个位置依次追加一个或多个元素，并返回追加后数组长度

```javascript
let arr = ['a'];
//追加一个元素
let arrLength1 = arr.unshift('b');
console.log(arrLength1);// 2
console.log(arr);// ['b', 'a']

//追加多个元素
let arrLength2 = arr.unshift('c', 'd');
console.log(arrLength2);// 4
console.log(arr);// ['c', 'd', 'b', 'a']
```

::: warning 注意

这里`unshift()`追加多个元素时先把`d`推入数组最前边，再推入`c` 所以`c`还是在`b`前边

:::

## 数组.reduce()

> 一般会用在数组中的累加求和

```javascript
let arr = [1, 2, 3, 4];
console.log(
    arr.reduce((total, num)=>{
        console.log(total, num);
        //这里会依次输出
        // 1, 2
        // 3, 3
        // 6, 4
        return total + num;
    })
);// 10
```

这里`total`的取值是每次`return`的值，执行第一次的时候取的是数组中第一个值`1`；

`num`的取值是每数组中每一个元素，执行第一次的时候取的是数组中第二个值`2`；

`reduce()`本身返回的是最有一个return出来的值`10`。

```javascript
let arr = [1, 2, null, 4];
console.log(
    arr.reduce((total, num)=>{
        console.log(total, num);
        //这里会依次输出
        // 1, 2
        // 3, null
        // 3, 4
        return total + num;
    })
);// 7
```

::: warning 注意

当元素中有存在`null`时，`total`会不取`num`为`null`时`return`出来的值，取的依然是上次得到的值

:::

## 数组.join()

> 将数组转换为字符串
> 
> 可以根据传入的参数作为拼接间隔，如果什么参数都不传会以逗号`,`隔开

```javascript
let arr = ['j', 'u', 'n'];
let str1 = arr.join();
console.log(str1);// j,u,n

let arr = ['j', 'u', 'n'];
let str2 = arr.join('');
console.log(str2);// jun

let arr = ['j', 'u', 'n'];
let str3 = arr.join(1);
console.log(str3);// j1u1n
```

## 字符串.split()

> 将字符串转换为数组
> 
> 可以根据传入的参数将字符串分割为数组，如果什么参数都不传会将整个字符串作为数组的第一个元素

```javascript
let str = 'a,b,c';
let arr1 = str.split();
console.log(arr1);// ['a,b,c']

let arr2 = str.split(',');
console.log(arr2);// ['a, 'b, 'c']
```

## Object.assign()

> 将一个或多对象的属性合并到目标对象中
>
> 语法：Object.assign(目标对象, 源对象, 源对象, 源对象......)
>
> 该方法会改变原对象

如果源对象中与目标对象的属性重复会以源对象为准，原对象之间如果有重复就以最有一个源对象为准：

```javascript
let targetObj = {
    a: 18
}
let sourceObj1 = {
    a: 10
}
let sourceObj2 = {
    a: 13
}
Object.assign(targetObj, sourceObj1, sourceObj2);
console.log(targetObj); // {a: 13}
```

该方法是浅拷贝：

```javascript
let targetObj = {
    name: '小明'
}
let sourceObj = {
    name: '小红',
    hobby: [
        '化妆',
        '跳舞',
        '购物'
    ]
}
Object.assign(targetObj, sourceObj);
// 目标对象
console.log(targetObj)
/**
{
    name: '小红',
    hobby: [
        '化妆',
        '跳舞',
        '购物'
    ]
}
*/

targetObj.name = '小明'
targetObj.hobby[0] = '玩游戏'
targetObj.hobby[1] = '玩游戏'
targetObj.hobby[2] = '玩游戏'

// 目标对象
console.log(targetObj)
/**
{
    name: '小明',
    hobby: [
        '玩游戏',
        '玩游戏',
        '玩游戏'
    ]
}
*/

//源对象
console.log(sourceObj)
/**
{
    name: '小红',
    hobby: [
        '玩游戏',
        '玩游戏',
        '玩游戏'
    ]
}
*/
```

可以看到合并后修改目标对象时源对象也会随着改变。

## 字符串/数组.indexOf()

> 作用：
>
> 1. 查询指定字符
> 2. 元素在字符串
> 3. 数组中出现的位置
>
> 语法：
>
> str.indexOf('x', 2); // 从下标2的位置开始从str（字符串）中找x出现的位置，如果x出现在2的位置就会返回2，找不到则返回-1
>
> arr.indexOf('x', 2); // 从下标2的位置开始从arr（数组）中找x出现的位置，如果x出现在2的位置就会返回2，找不到则返回-1

```javascript
let str = '这是一句话是';
console.log(str.indexOf('是')); // 1
console.log(str.indexOf('是', 1)); // 1
console.log(str.indexOf('是', 2)); // 5

let arr = [1, 2, 1, 4, 5];
console.log(arr.indexOf(1)); // 0
console.log(arr.indexOf(1, 1)); // 2
console.log(arr.indexOf(2, 3)); // -1

// 内部使用全等进行判断
let arr1 = ['1', 2];
console.log(arr1.indexOf(1)); // -1
console.log(arr1.indexOf(2)); // 1
```

## 数组.splice()

> 作用：
> 1. 删除数组中指定位置的元素
> 2. 在数组中某个位置插入指定元素
> 3. 替换数组中的元素
>
> 语法：
>
> arr.splice(开始位置的索引, 要删除的数量, ...要插入的元素)
>
> 注意：
>
> 1. 返回值是被删除的数据
> 2. 会改变原数组
> 3. 如果只写了第一个参数（开始索引） 那么就会从开始索引（包含）一直删除到最后

```javascript
let arr1 = ['郜', 3, 6, 5, 6, 78, 9]
console.log(arr1.splice(2, 4)) // [6, 5, 6, 78]
console.log(arr1) // ['郜', 3, 9]

let arr2 = ['郜', 1, 23, 4.5, 4]
console.log(arr2.splice(4, 1, 222))// [4]
console.log(arr2) // ['郜', 1, 23, 4.5, 222]
```

## 字符串.substring()

> 作用：
>
> 1. 截取字符串
>
> 语法：
>
> str.substring(开始截取的索引位置，结束截取的位置)
>
> 注意：
>
> 1. 返回截取后的内容
> 2. 不会改变原字符串
> 3. 截头不截尾

```javascript
let str = '这是一段用于测试的句子。'
let i = str.indexOf('于')
if (i !== -1) {
    let beforeStr = str.substring(0, i + 1) // 截取字符前
    let afterStr = str.substring(i) // 截取字符后

    console.log(beforeStr) // 这是一段用于
    console.log(afterStr) // 于测试的句子。
    console.log(str) // 这是一段用于测试的句子。
}
```

