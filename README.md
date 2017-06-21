Admin UI CSS Layout
======

#### English | <a href="#chinese">中文</a><a id="english"></a>

## Overview

Demo: [Admin Layout](https://ryancui-.github.io/admin-layout/)

An admin UI framework depends on **NOTHING**! Only HTML/Less/CSS and pure ES5 Javascript.

> it means no jQuery or something else, no need to `npm install xxx yyy` to support the UI layer.

I wrote it to support many MVVM framework in work, like Angular/Vue.
Thought there is some repo (ng2-admin or vue-admin) has given a full solution, I found it too **HEAVY** for my project. Also the CSS framework like Bootstrap/SemanticUI may cause some confictions when I use other components
library.

It's very simple at this moment, and I don't want it become more complex.

You can use it in other template, like Vue/Angular/React even Freemarker.

## Feature

- a simple layout implemented by `absolute` display, including header/sidebar/content/footer
- a sidebar menu, including some animations, supports **INFINITE** levels
- a mini sidebar and submenu panel will appear when you hover on the menu item

## Quick Start

```bash
$ git clone git@github.com:ryancui-/admin-layout.git
```

Use Nginx or other tools to start a web server with the folder.

> [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?utm_source=chrome-ntp-launcher) - A Web Server for Chrome, serves web pages from a local folder over the network, using HTTP. Runs offline.

## Details

### File Structure

- index.html
- index.js
- index.less

### HTML Structure

> Contents in `[]` is the class used.

#### Header

Header use flex display, there are 3 parts.

- Logo [`header-float-left`]
- Collapse Button [`sidebar-collapse-btn`]
- Dropdown Button Panel [`dropdown-btn-panel`]

#### Dropdown Panel

Each button(including the dropdown menu) is a component [`dropdown-component`]. A component consists of a button [`dropdown-btn`] and a panel [`dropdown-panel`].

#### Sidebar Menu

A typical menu example:

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

Terminology | Classes | Description
--- | --- | ---
Menu Box | [`menu-box`] | a `ul` element
Menu Item | [`menu-item`, `menu-item-xxx`] | a `div` inside `li`, includeing icon and text
Submenu Box | [`submenu-box`, `top-submenu-box`] | a `ul` inside `li`, the children of a menu

> `fa-caret-right` icon should be appended to the menu label when the menu has children(submenu box), an animation is added to that icon.

### Mini Menu

When you click the `collapse menu button`, the sidebar menu will collapse to a slim mode.

## Dependency

As I mention before, this project **SHOULD** depent on **NOTHING**. However, some CSS or Interpreter is necessary. You can change them to any subsititudes(such as scss, Google Icon) as you like.

- Font Awesome Icons
- Less

## Inspiration

- Aliyun Console
- AdminLTE

## TODO

- [x] Menu can support as much as level you want
- [x] There will be a smaller version menu when collapse the sidebar
- [ ] Add travis test
- [x] Chinese documentation
- [x] Refactor the js code into a more module form
- [x] Slim sidebar should just have the icon in the middle, no text label
- [ ] Add a header in hover submenu to indicate which top menu the submenu belongs to


#### 中文 | <a href="#english">English</a><a id="chinese"></a>

## 概述

示例: [Admin Layout](https://ryancui-.github.io/admin-layout/)

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
