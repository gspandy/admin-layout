/**
 * Created by ryancui on 2017/5/28.
 */

(function() {

  function Layout(params) {

  }

  // Options
  var options = {
    onlySingleExpand: true,
    sidebarWidth: 200,
    sidebarMiniWidth: 40,
    menuItemHeight: 35
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

  /** Show submenu in vertical mode */
  var showSubmenu = function(menuItem) {
    menuItem.classList.add('menu-item-expand')
    var submenuPanel = menuItem.nextElementSibling
    if (submenuPanel) {
      var height = submenuPanel.getElementsByClassName('menu-item').length * (options.menuItemHeight + 10)
      submenuPanel.style.maxHeight = height + 'px'
    }
  }

  /** Hide submenu in vertical mode */
  var hideSubmenu = function(menuItem) {
    menuItem.classList.remove('menu-item-expand')
    var submenuPanel = menuItem.nextElementSibling
    if (submenuPanel) {
      submenuPanel.style.maxHeight = '0px'
    }
  }

  /** Show submenu in hover mode */
  var showHoverSubmenu = function(submenuPanel) {
    submenuPanel.classList.remove('hover-submenu-hide')
    submenuPanel.classList.add('hover-submenu-show')
  }

  /** Hide submeu in hover mode */
  var hideHoverSubmenu = function(submenuPanel) {
    submenuPanel.classList.remove('hover-submenu-show')
    submenuPanel.classList.add('hover-submenu-hide')
  }

  // Toogle sidebar and content
  $sidebarCollapseBtn[0].addEventListener('click', function () {
    if (_sidebarExpand) {
      _sidebarExpand = false

      // Expand all the top submenu panel and add extra class to hover outside
      for (j = 0; j < $topMenuItems.length; j++) {
        showSubmenu($topMenuItems[j])

        var submenuPanel = $topMenuItems[j].nextElementSibling
        if (submenuPanel) {
          submenuPanel.classList.add('hover-submenu')
          submenuPanel.classList.add('hover-submenu-hide')
        }
      }

      $sidebar[0].style.width = options.sidebarMiniWidth + 'px'
      $content[0].style.left = options.sidebarMiniWidth + 'px'

      $headerLogo[0].style.width = options.sidebarMiniWidth + 'px'
    } else {
      _sidebarExpand = true

      // collapse all top submenu panel and remove class of hover outside
      for (j = 0; j < $topMenuItems.length; j++) {
        hideSubmenu($topMenuItems[j])
        var submenuPanel = $topMenuItems[j].nextElementSibling
        if (submenuPanel) {
          submenuPanel.classList.remove('hover-submenu')
          submenuPanel.classList.remove('hover-submenu-show')
          submenuPanel.classList.remove('hover-submenu-hide')
        }
      }

      $sidebar[0].style.width = options.sidebarWidth + 'px'
      $content[0].style.left = options.sidebarWidth + 'px'

      $headerLogo[0].style.width = options.sidebarWidth + 'px'
    }
  })

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

      // If in mini mode, just expand the sidebar and do nothing
      if (!_sidebarExpand && ele.classList.contains('menu-item-1')) {
        $sidebarCollapseBtn[0].click();
        return;
      }

      if (submenuPanel && submenuPanel.classList.contains('submenu-box')) {
        // Has sub menu, should expand/collapse the submenu panel

        var isCollapse = submenuPanel.style.maxHeight === '0px'

        if (isCollapse) {
          // if click top level, collapse others
          if (options.onlySingleExpand && ele.classList.contains('menu-item-1')) {
            for (j = 0; j < $topMenuItems.length; j++) {
              hideSubmenu($topMenuItems[j])
            }
          }

          showSubmenu(ele)
        } else {
          // Collapse it

          hideSubmenu(ele)
        }
      } else {
        // a normal menu

        // Remove others active class
        for (j = 0; j < $menuItems.length; j++) {
          $menuItems[j].classList.remove('menu-item-active')
        }

        ele.classList.add('menu-item-active')
      }

    })
  }

  for (i = 0; i < $topMenuItems.length; i++) {
    $topMenuItems[i].addEventListener('mouseenter', function (evt) {
      if (!_sidebarExpand) {
        var submenuPanel = evt.currentTarget.nextElementSibling
        if (submenuPanel) {
          showHoverSubmenu(submenuPanel)
        }
      }
    })

    $topMenuItems[i].addEventListener('mouseleave', function(evt) {
      if (!_sidebarExpand) {
        var submenuPanel = evt.currentTarget.nextElementSibling
        if (submenuPanel) {
          hideHoverSubmenu(submenuPanel)
        }
      }
    })
  }

  for (i = 0; i < $topSubmenuPanels.length; i++) {
    $topSubmenuPanels[i].addEventListener('mouseenter', function(evt) {
      if (!_sidebarExpand) {
        var submenuPanel = evt.currentTarget
        if (submenuPanel) {
          showHoverSubmenu(submenuPanel)
        }
      }
    })

    $topSubmenuPanels[i].addEventListener('mouseleave', function(evt) {
      if (!_sidebarExpand) {
        var submenuPanel = evt.currentTarget
        if (submenuPanel) {
          hideHoverSubmenu(submenuPanel)
        }
      }
    })
  }

  window.options = options

})()

