# HTML/CSS

## 1.什么是盒模型
### 盒模型的组成

内容（`content`）、内边距（`padding`）、边框
（`border`）、外边距（`margin`）

### 盒模型有两种类型
 
  **1. 标准盒子模型（`box-sizing: context-box`）**

  实际宽度 = `width` + `padding` + `border` + `margin`
  
  实际高度 = `height` + `padding` + `border` + `margin`


  **2. IE盒子模型（`box-sizing: border-box`）**

  实际宽度 = `width`（包含`padding` + `border`）+ `margin`

  实际高度 = `height`（包含`padding` + `border`）+ `margin`

## 2.如何实现HTML的SEO优化
- 使用语义化标签（如 `<header>`、`<main>`）。
- 添加 `<meta>` 标签（如 `description`、`keywords`）。
- 使用 `<title>` 设置页面标题。
- 为图片添加 `alt` 属性。
- 使用 `<h1>` 到 `<h6>` 标签合理设置标题层级。
- 使用 `<a>` 标签的 `rel="nofollow"` 避免权重流失。

## 3.HTML5 新增了哪些语义化标签
- `<header>`：页面或区块的头部。

- `<footer>`：页面或区块的底部。

- `<nav>`：导航栏。

- `<article>`：独立的内容块（如博客文章）。

- `<section>`：文档中的独立部分。

- `<aside>`：侧边栏或附加内容。

- `<main>`：页面主要内容。

- `<figure>` 和 `<figcaption>`：图片及其标题。

- `<time>`：时间或日期。

## 4. 什么是BFC

BFC是块格式化上下文（Block Formatting Context）的缩写，它是一种CSS渲染机制。BFC是一个隔离的容器。
**使用BFC可以解决的问题**
- 开发BFC,可以解决浮动元素导致的父容器高度塌陷问题.
- 开发BFC,可以解决margin重叠问题
- 开发BFC,不会被其他浮动元素所覆盖

**如何开启BFC**
- 根元素
- 浮动元素（float属性不为none）
- 绝对定位元素（position属性为absolute或fixed）
- display属性值为flow-root
- 设置overflow属性不为visible
- 设置为行内块元素（display: inline-block）
- 表格布局（display: table）
