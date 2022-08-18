# slot 插槽

> 当我们想在自定义的组件中插入其他内容时我们就可以在自定义标签中使用 `slot` 标签 来占位

## 基本使用

我们先创建一个自定义组件 `MyHeader` 

```vue
<div class="myHeader">
  <slot></slot>
</div>
```

当我们想在使用 `MyHeader` 组件时插入我们想要的内容，我们可以这样写：

```vue
<MyHeader>
  <span>这是头部</span>
</MyHeader>
```

这样当组件渲染时会将 `<slot></slot>` 替换为我们插入的内容

```vue
<div class="myHeader">
  <span>这是头部</span>
</div>
```

## 后备内容

有时我们可能需要在插槽中有一个默认内容，这样我们在使用自定义组件不插入内容时就可以显示这个默认内容,那么我们就可以这样写：

我们创建一个自定义组件 `MyButton`

```vue
<button>
    <slot>按钮</slot>
</button>
```

这样当我们是使用这个组件不插入任何内容时：

```vue
<MyButton></MyButton>
```

将为渲染为：

```vue
<button>按钮</button>
```

当然，如果我们在组件中插入内容那将为把“按钮”替换为我们插入的内容。

## 具名插槽

有时我们希望可以在自定义组件中不同的位置插入不同的内容，那么这个时候就要用到具名插槽了

我们创建一个自定义组件 `MyLayout`

```vue
<div class="container">
  <header>
    <!-- 我们希望把页头放这里 --> 
    <slot name="header"></slot>
  </header>
  <main>
    <!-- 我们希望把主要内容放这里 -->
    <slot></slot>
  </main>
  <footer>
    <!-- 我们希望把页脚放这里 -->
    <slot name="footer"></slot>
  </footer>
</div>
```

如上所示 在 `slot` 标签中有一个 `name` 属性 用来给插槽命名，使用如下：

```vue
<MyLayout>
  <template v-slot:header>
    <h1>头部内容</h1>
  </template>

  <p>中间内容1</p>
  <p>中间内容2</p>

  <template v-slot:footer>
    <p>底部内容</p>
  </template>
</MyLayout>
```

如上所示 在 `template` 标签中 使用 `v-slot` 指令 可以指定插槽的名字，其中间两个 `p` 标签没有指定插槽名字 那么它默认会被编译到 没有指定名字的 `slot` 插槽中，当然也可以手动指定默认插槽：

```vue
<MyLayout>
    ...
    <template v-slot:default>
       <p>中间内容1</p>
       <p>中间内容2</p>
    </template>
    ...
</MyLayout>
```



最终编译结果：

```vue
<MyLayout>
  <header>
    <h1>头部内容</h1>
  </header>
  <main>
    <p>中间内容1</p>
    <p>中间内容2</p>
  </main>
  <footer>
    <p>底部内容</p>
  </footer>
</MyLayout>
```

## 编译作用域

如果我们想在插槽中使用数据时，例如：

```vue
<MyHeader>
    欢迎登录，{{user.name}}
</MyHeader>
```

这里的我们使用的 `user.name` 获取的是当前模板的数据，获取不到 `MyHeader` 组件中的数据。

### 编译规则

**父级模板里的所有内容都是在父级作用域中编译的，子模版里的所有内容都是在子作用域中编译的。**

那么想要使用子组件中的数据该怎么办呢？请看下一小节 - 作用域插槽。

## 作用域插槽

想要使用子组件中的数据 我们可以把想要的数据绑定到 子组件的 `slot` 标签上，例如：

```vue
<div class="myHeader">
    <slot v-bind:user="user"></slot>
</div>
```

也可以把 `v-bind` 简写为 `:` ，如 `:user="user"`

这时我们在使用组件时就可以通过 `v-slot` 来获取，例如：

```vue
<MyHeader>
    <template v-slot:default="slotProps">
       欢迎登录，{{slotProps.user.name}}
    </template>
</MyHeader>
```

当我们只有一个默认插槽时我们可以简写为如下方式：

```vue
<MyHeader v-slot:default="slotProps">
    欢迎登录，{{slotProps.user.name}}
</MyHeader>
```

`v-slot` 也可以简写为 `#` 如：`#default="slotProps"`

这样我们通过 `v-slot` 指令就可以拿到我们在子组件中通过 `v-bind` 绑定的数据了。

### 解构插槽prop

也可以通过结构的方式来获取prop值

```vue
<MyHeader v-slot:default="{user}">
    欢迎登录，{{user.name}}
</MyHeader>
```


