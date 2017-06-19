Admin UI CSS Layout
======

- [中文说明](https://github.com/ryancui-/admin-layout/blob/master/docs/README_zh-CN.md)

## Overview

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

> A `fa-caret-right` icon should be appended to the menu label when the menu has children(submenu box), an animation is added to that icon.

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
- [ ] Chinese documentation
- [ ] Refactor the js code into a more module form