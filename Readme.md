Admin UI CSS Layout
===

# Overview

An admin UI framework depends on **NOTHING**! Only HTML/Less/CSS and pure ES5 Javascript.

> it means no jQuery or something else, no need to `npm install xxx yyy` to support the UI layer.


I wrote it to support many MVVM framework in work, like Angular/Vue.
Thought there is some repo (ng2-admin or vue-admin) give the solution, I found it too *BIG* for my project.
Also the CSS framework like Bootstrap/SemanticUI may cause some confictions when I use other components
library.


It's very simple at this moment, and I don't want it become more complex, follow KISS priciple.


# Feature

- a simple layout implemented by `absolute` display, including header/sidebar/content/footer
- a sidebar menu (Now only supports 2 levels), including some animations

# I use ...

- FontAwesome Icons
- Less

You can change anything as you like

# Inspiration

Aliyun Console

# TODO

- [ ] Menu can support as much as level you want
- [ ] There will be a smaller version menu when collapse the sidebar