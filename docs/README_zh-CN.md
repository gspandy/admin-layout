Admin UI CSS Layout
======

## 概述

一个**不依赖**任何框架和库的前端后台管理 UI 框架。只包括最轻量的 HTML/Less 代码和原生 JavaScript(ES5) 代码。

> 这意味着不需要额外加载 jQuery 或者其他任何需要通过 `npm install` 安装的框架来支持 UI 层

这个后台管理 UI 框架是为了支持 MVVM（如 Angular、Vue、React 等）而写的。针对后台管理系统的 UI，Angular、Vue 等都有很多非官方的解决方案（如 ng2-admin、vue-admin 等），但这些方案大多包含了自己的组件，具体把 UI 跟通用组件拆分不太容易而且还容易踩坑，太重了。另外这些方案也使用了 Bootstrap 之类的 CSS 框架，有可能与我想要使用的第三方的组件库样式造成冲突。

现阶段这个项目非常简单，而且日后也不会很复杂，毕竟只是一个 UI 层。

你可以通过 MVVM 的模板、JSX 等渲染页面元素，甚至还可以使用 FreeMarker（那种后端渲染的项目也可以使用）。

## 特性

- 一个简单的三行两列绝对布局，包括顶栏、侧边栏、主界面和尾栏
- 一个带动画效果的侧边栏菜单，菜单支持**无限**层级
- 侧边栏菜单可以被折叠成迷你菜单，悬停时弹出子菜单

## 开发

```bash
$ git clone git@github.com:ryancui-/admin-layout.git
```

用 Nginx 或其他工具在这个文件夹上开一个 Web 服务，访问 `index.html` 即可看到效果。

> [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-ntp-launcher) - A Web Server for Chrome, serves web pages from a local folder over the network, using HTTP. Runs offline.

## 详细设计

### 目录结构

- index.html
- index.js
- index.less

### HTML 结构

> `[]` 中包含的是响应项目的类名

1. 顶栏

顶栏内部是 `flex` 布局，分成三部分：

- Logo 部分 [`header-float-left`]，logo 部分会与侧边栏菜单同步伸缩
- 侧边栏折叠按钮 [`sidebar-collapse-btn`]
- 下拉按钮区 [`dropdown-btn-panel`]