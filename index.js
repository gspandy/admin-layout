/**
 * Created by ryancui on 2017/5/28.
 */

(function() {
  var options = {
    onlySingleExpand: true
  }

  // Header dropdown btn
  var $dropdownBtns = document.getElementsByClassName('dropdown-btn')
  var $dropdownPanels = document.getElementsByClassName('dropdown-panel')
  var $menuItems = document.getElementsByClassName('menu-item')
  var $submenuPanels = document.getElementsByClassName('submenu-box')

  var $sidebarCollapseBtn = document.getElementsByClassName('sidebar-collapse-btn')
  var $sidebar = document.getElementsByClassName('sidebar')
  var $content = document.getElementsByClassName('content')

  var i, j

  // Toogle sidebar and content
  $sidebarCollapseBtn[0].addEventListener('click', function () {
    $sidebar[0].style.width = $sidebar[0].style.width === '0px' ? '200px' : '0px'
    $content[0].style.left = $content[0].style.left === '0px' ? '200px' : '0px'
  })

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

    // append a fa-caret-right icon to the menu-item when it has submenu-box
    var submenu = $menuItems[i].nextElementSibling
    if (submenu && submenu.classList.contains('submenu-box')) {
      var iconDom = document.createElement('i')
      iconDom.classList.add('fa')
      iconDom.classList.add('fa-caret-right')
      $menuItems[i].appendChild(iconDom)
    }

    // Here has not use event deligation, because the menu-item is not too much
    // FIXME bind click event in menu-box element

    $menuItems[i].addEventListener('click', function (evt) {
      var ele = evt.currentTarget
      var submenuPanel = ele.nextElementSibling

      if (submenuPanel && submenuPanel.classList.contains('submenu-box')) {
        // has sub menu
        var isCollapse = submenuPanel.style.maxHeight === '0px'

        if (isCollapse) {
          // Collapse others
          if (options.onlySingleExpand) {
            for (j = 0; j < $submenuPanels.length; j++) {
              $submenuPanels[j].style.maxHeight = '0px'
            }

            for (j = 0; j < $menuItems.length; j++) {
              $menuItems[j].classList.remove('menu-item-expand')
            }
          }

          // Expand it
          var height = submenuPanel.childElementCount * 50
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

})()

