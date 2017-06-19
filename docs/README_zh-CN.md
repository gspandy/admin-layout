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

#### 顶栏

顶栏内部是 `flex` 布局，分成三部分：

- Logo 部分 [`header-float-left`]，logo 部分会与侧边栏菜单同步伸缩
- 侧边栏折叠按钮 [`sidebar-collapse-btn`]
- 下拉按钮区 [`dropdown-btn-panel`]

#### 下拉窗

每个下拉按钮（包括下拉菜单窗口）是一个组件 [`dropdown-component`]. 组件包括一个按钮 [`dropdown-btn`] 和一个窗体 [`dropdown-panel`]。

#### 侧边栏

一个典型的菜单例子：

```HTML
<ul class="menu-box">
  <li>
    <div class="menu-item menu-item-1">
      <i class="fa fa-file"></i>Menu 1<i class="fa fa-caret-right"></i>
    </div>
    <ul class="submenu-box top-submenu-box" style="max-height: 0px;">
      <li>
        <div class="menu-item menu-item-2"><i class="fa fa-file"></i>Submenu 1-1</div>
      </li>
      <li>
        <div class="menu-item menu-item-2"><i class="fa fa-file"></i>Submenu 1-2</div>
      </li>
    </ul>
  </li>
  <li>
    <div class="menu-item menu-item-1"><i class="fa fa-cogs"></i>Menu 2</div>
  </li>
</ul>
```

术语 | CSS 类名 | 说明
--- | --- | ---
Menu Box | [`menu-box`] | 菜单容器
Menu Item | [`menu-item`, `menu-item-xxx`] | 在 `li` 中的一个 `div`， 里面包含菜单的图标和文字
Submenu Box | [`submenu-box`, `top-submenu-box`] | 在 `li` 中的 `ul`，是一个新的菜单容器，表示对应 Menu Item 的子菜单

> 当菜单项有子菜单时，需要添加一个 `fa-caret-right` 的 Font Awesome 图标到 Menu Item 元素之后。当菜单展开或收起时，图标会有相应的动画效果。

### 迷你菜单

当点击收起侧边栏按钮时，侧边栏会收起变成一个迷你模式。

## 依赖

如前所言，这个项目没有依赖任何框架。但为了方便开发，我们依然使用了 CSS 预编译和图标库。你完全可以使用另外的工具进行替换，这十分简单。

- Font Awesome Icons
- Less

## 灵感与启发

- 阿里云控制台
- AdminLTE 项目
