# 渲染虚拟dom

> 虚拟dom其实就是将真正的普通 **dom树** 转换成 **js对象**。
>
> 转换为js对象之后方便通过diff算法来对比更新前后的js对象来准确找出变更的dom树节点进行更新，极大的减少了dom渲染的性能消耗。
>
> 并且也可以实现跨平台渲染

通过一个简单的案例来认识虚拟dom的渲染过程：

```html
<body>
    <div id="app"></div>
    <script>
        // 定义虚拟dom树
        let vnode = {
            tag: 'div',
            props: {
                onClick: () => {
                    alert('hello!')
                }
            },
            children: {
                tag: 'span',
                children: 'hello!'
            }
        }
        // 找到根节点
        let app = document.getElementById('app')
        reader(vnode, app)
        // 定义渲染函数 vnode: 虚拟dom树，dom: 根节点
        function reader(vnode, dom){
            // 分别取出 标签名、属性、子节点（或是文本内容）
            const { tag, props, children } = vnode
            // 根据标签名创建一个dom元素
            const el = document.createElement(vnode.tag)
            // 取出节点的属性
            for(let key in props){
                // 如果是事件那就给当前这个元素添加事件
                if(/^on/.test(key)){
                    // 截取事件名并将其准换为小写 例如：onClick => click
                    let eventName = key.substring(2).toLowerCase()
                    // 给元素绑定事件
                    el.addEventListener(eventName, props[key])
                }
            }
            if(typeof children === 'string') {
                // 如果是文本类型说明就是节点内容了 那就将其添加到当前创建的el元素中
               let childrenNode = document.createTextNode(children)
               el.append(childrenNode)
            } else if(typeof children === 'object') { 
                // 如果是对象类型那说明当前el元素的子节点有事一个标签元素 那就继续执行渲染函数
                reader(children, el)
            }
            // 将创建好的元素添加到根节点中
            dom.append(el)
        }
    </script>
</body>
```

