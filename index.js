/**
 * Created by ryancui on 2017/5/28.
 */

(function() {
  // Options
  var options = {
    onlySingleExpand: true,
    sidebarWidth: 200,
    menuItemHeight: 35,
    logoText: 'Aliyun Console Like'
  }

  // whether the sidebar is expanded
  var _sidebarExpand = true

  // DOM Nodes
  var $dropdownBtns = document.getElementsByClassName('dropdown-btn')
  var $dropdownPanels = document.getElementsByClassName('dropdown-panel')
  var $menuItems = document.getElementsByClassName('menu-item')
  var $topMenuItems = document.getElementsByClassName('menu-item-1')
  var $submenuPanels = document.getElementsByClassName('submenu-box')
  var $topSubmenuPanels = document.getElementsByClassName('top-submenu-box')

  var $sidebarCollapseBtn = document.getElementsByClassName('sidebar-collapse-btn')
  var $sidebar = document.getElementsByClassName('sidebar')
  var $content = document.getElementsByClassName('content')

  var $headerLogo = document.getElementsByClassName('header-float-left')

  var i, j

  // Toogle sidebar and content
  $sidebarCollapseBtn[0].addEventListener('click', function () {
    if (_sidebarExpand) {
      _sidebarExpand = false
      $sidebar[0].style.width = '0px'
      $content[0].style.left = '0px'

      $headerLogo[0].style.width = '0px'
      $headerLogo[0].innerText = ''
    } else {
      _sidebarExpand = true
      $sidebar[0].style.width = options.sidebarWidth + 'px'
      $content[0].style.left = options.sidebarWidth + 'px'

      $headerLogo[0].style.width = options.sidebarWidth + 'px'
      $headerLogo[0].innerText = options.logoText
    }
  })

  // prepare the max-height style on submenu-box for animation
  for (i = 0; i < $submenuPanels.length; i++) {
    $submenuPanels[i].style.maxHeight = '0px'
  }

  for (i = 0; i < $dropdownBtns.length; i++) {
    $dropdownBtns[i].addEventListener('mouseenter', function (evt) {
      var ele = evt.target
      var panel = ele.nextElementSibling
      panel.style.visibility = 'visible'
    })

    $dropdownBtns[i].addEventListener('mouseleave', function (evt) {
      var ele = evt.target
      var panel = ele.nextElementSibling
      panel.style.visibility = 'hidden'
    })
  }

  for (i = 0; i < $dropdownPanels.length; i++) {
    $dropdownPanels[i].addEventListener('mouseenter', function (evt) {
      var ele = evt.target
      ele.style.visibility = 'visible'
    })

    $dropdownPanels[i].addEventListener('mouseleave', function (evt) {
      var ele = evt.target
      ele.style.visibility = 'hidden'
    })
  }

  for (i = 0; i < $menuItems.length; i++) {

    // For convenient, has not use event deligation, because the menu-item is not too much
    $menuItems[i].addEventListener('click', function (evt) {
      var ele = evt.currentTarget
      var submenuPanel = ele.nextElementSibling

      if (submenuPanel && submenuPanel.classList.contains('submenu-box')) {
        // has sub menu

        var isCollapse = submenuPanel.style.maxHeight === '0px'

        if (isCollapse) {
          // if click top level, collapse others
          if (options.onlySingleExpand && ele.classList.contains('menu-item-1')) {

            for (j = 0; j < $topSubmenuPanels.length; j++) {
              $topSubmenuPanels[j].style.maxHeight = '0px'
            }

            for (j = 0; j < $topMenuItems.length; j++) {
              $topMenuItems[j].classList.remove('menu-item-expand')
            }
          }

          // Expand it, iteratively calculate the menu-item in children
          var height = submenuPanel.getElementsByClassName('menu-item').length * (options.menuItemHeight + 10)

          submenuPanel.style.maxHeight = height + 'px'
          ele.classList.add('menu-item-expand')
        } else {
          // Collapse it
          submenuPanel.style.maxHeight = '0px'
          ele.classList.remove('menu-item-expand')
        }
      } else {
        // a normal menu
        for (j = 0; j < $menuItems.length; j++) {
          $menuItems[j].classList.remove('menu-item-active')
        }

        ele.classList.add('menu-item-active')
      }


    })

  }

  window.options = options


})()

