/**
 * Created by ryancui on 2017/5/28.
 */

// Header dropdown btn
var dropdownBtns = document.getElementsByClassName('dropdown-btn')
var dropdownPanels = document.getElementsByClassName('dropdown-panel')
var menuItems = document.getElementsByClassName('menu-item')
var submenuPanels = document.getElementsByClassName('submenu-box-expand')

var i

for (i = 0; i < dropdownBtns.length; i++) {
  dropdownBtns[i].onmouseenter = function (evt) {
    console.log('enter btn')

    var ele = evt.target
    var panel = ele.nextElementSibling
    panel.style.visibility = 'visible'
  }

  dropdownBtns[i].onmouseleave = function (evt) {
    console.log('leave btn')

    var ele = evt.target
    var panel = ele.nextElementSibling
    panel.style.visibility = 'hidden'
  }
}

for (i = 0; i < dropdownPanels.length; i++) {
  dropdownPanels[i].onmouseenter = function (evt) {
    console.log('enter panel')

    var ele = evt.target
    ele.style.visibility = 'visible'
  }

  dropdownPanels[i].onmouseleave = function (evt) {
    console.log('leave panel')

    var ele = evt.target
    ele.style.visibility = 'hidden'
  }
}

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = function (evt) {
    var ele = evt.target
    var submenuPanel = ele.nextElementSibling
    if (submenuPanel && submenuPanel.classList.contains('submenu-box-expand')) {
      submenuPanel.style.display = submenuPanel.style.display === 'block' ? 'none' : 'block'
    }
  }
}
