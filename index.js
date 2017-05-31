/**
 * Created by ryancui on 2017/5/28.
 */

// Header dropdown btn
var dropdownBtns = document.getElementsByClassName('dropdown-btn')
var dropdownPanels = document.getElementsByClassName('dropdown-panel')
var menuItems = document.getElementsByClassName('menu-item')
var submenuPanels = document.getElementsByClassName('submenu-box-expand')

var sidebarCollapseBtn = document.getElementsByClassName('sidebar-collapse-btn')
var sidebar = document.getElementsByClassName('sidebar')
var content = document.getElementsByClassName('content')

var i

// Toogle sidebar and content
sidebarCollapseBtn[0].onclick = function () {
  sidebar[0].style.width = sidebar[0].style.width === '0px' ? '200px' : '0px'
  content[0].style.left = content[0].style.left === '0px' ? '200px' : '0px'
}

for (i = 0; i < submenuPanels.length; i++) {
  submenuPanels[i].style.maxHeight = '0px'
}

for (i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].onmouseenter = function (evt) {
    var ele = evt.target
    var panel = ele.nextElementSibling
    panel.style.visibility = 'visible'
  }

  dropdownBtns[i].onmouseleave = function (evt) {
    var ele = evt.target
    var panel = ele.nextElementSibling
    panel.style.visibility = 'hidden'
  }
}

for (i = 0; i < dropdownPanels.length; i++) {
  dropdownPanels[i].onmouseenter = function (evt) {
    var ele = evt.target
    ele.style.visibility = 'visible'
  }

  dropdownPanels[i].onmouseleave = function (evt) {
    var ele = evt.target
    ele.style.visibility = 'hidden'
  }
}

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function (evt) {
    var ele = evt.currentTarget
    var submenuPanel = ele.nextElementSibling

    // toggle menu-item-active class in menu-item
    if (ele.classList.contains('menu-item-active')) {
      ele.classList.remove('menu-item-active')
    } else {
      ele.classList.add('menu-item-active')
    }

    // Has submenu box
    if (submenuPanel && submenuPanel.classList.contains('submenu-box-expand')) {
      var height = submenuPanel.childElementCount * 50
      submenuPanel.style.maxHeight = submenuPanel.style.maxHeight === '0px' ? height + 'px' : '0px'
    }
  }

  // pop a fa-caret-right icon to the menu-item which has submenu
  var submenu = menuItems[i].nextElementSibling
  if (submenu && submenu.classList.contains('submenu-box-expand')) {
    var iconDom = document.createElement('i')
    iconDom.classList.add('fa')
    iconDom.classList.add('fa-caret-right')
    menuItems[i].appendChild(iconDom)
  }

}
