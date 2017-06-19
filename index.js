/**
 * Created by ryancui on 2017/5/28.
 */

(function () {

  function Layout() {
    this.cacheParam()
    this.bindSidebarCollapse()
    this.bindDropdown()
    this.bindMenuItem()
    this.bindMenuItemHover()
  }

  Layout.prototype = {
    constuctor: Layout,

    /** Const class name related to HTML */
    consts: {
      DROPDOWN_BTN: 'dropdown-btn',
      DROPDOWN_PANEL: 'dropdown-panel',
      MENU_ITEM: 'menu-item',
      TOP_MENU_ITEM: 'menu-item-1',
      SUBMENU_BOX: 'submenu-box',
      TOP_SUBMENU_BOX: 'top-submenu-box',
      MENU_ITEM_EXPAND: 'menu-item-expand',
      MENU_ITEM_ACTIVE: 'menu-item-active',
      SIDEBAR_COLLAPSE_BTN: 'sidebar-collapse-btn',
      SIDEBAR: 'sidebar',
      CONTENT: 'content',
      HEADER_LOGO: 'header-float-left',
      HOVER_SUBMENU: 'hover-submenu',
      HOVER_SUBMENU_SHOW: 'hover-submenu-show',
      HOVER_SUBMENU_HIDE: 'hover-submenu-hide'
    },

    cacheParam: function () {
      // Options
      this.options = {
        onlySingleExpand: true,
        sidebarWidth: 200,
        sidebarMiniWidth: 40,
        menuItemHeight: 35
      }

      // whether the sidebar is expanded
      this._sidebarExpand = true

      // DOM Nodes
      this.$dropdownBtns = document.getElementsByClassName(this.consts.DROPDOWN_BTN)
      this.$dropdownPanels = document.getElementsByClassName(this.consts.DROPDOWN_PANEL)

      this.$menuItems = document.getElementsByClassName(this.consts.MENU_ITEM)
      this.$topMenuItems = document.getElementsByClassName(this.consts.TOP_MENU_ITEM)
      this.$submenuPanels = document.getElementsByClassName(this.consts.SUBMENU_BOX)
      this.$topSubmenuPanels = document.getElementsByClassName(this.consts.TOP_SUBMENU_BOX)

      this.$sidebarCollapseBtn = document.getElementsByClassName(this.consts.SIDEBAR_COLLAPSE_BTN)[0]
      this.$sidebar = document.getElementsByClassName(this.consts.SIDEBAR)[0]
      this.$content = document.getElementsByClassName(this.consts.CONTENT)[0]
      this.$headerLogo = document.getElementsByClassName(this.consts.HEADER_LOGO)[0]
    },

    /** Show dropdown panel */
    showDropdown: function (dropdown) {
      dropdown.style.visibility = 'visible'
    },

    /** Hide dropdown panel */
    hideDropdown: function (dropdown) {
      dropdown.style.visibility = 'hidden'
    },

    /** Show submenu in vertical mode */
    showSubmenu: function (menuItem) {
      menuItem.classList.add(this.consts.MENU_ITEM_EXPAND)
      var submenuPanel = menuItem.nextElementSibling
      if (submenuPanel) {
        var height = submenuPanel.getElementsByClassName(this.consts.MENU_ITEM).length
          * (this.options.menuItemHeight + 10)
        submenuPanel.style.maxHeight = height + 'px'
      }
    },

    /** Hide submenu in vertical mode */
    hideSubmenu: function (menuItem) {
      menuItem.classList.remove(this.consts.MENU_ITEM_EXPAND)
      var submenuPanel = menuItem.nextElementSibling
      if (submenuPanel) {
        submenuPanel.style.maxHeight = '0px'
      }
    },

    /** Show submenu in hover mode */
    showHoverSubmenu: function (submenuPanel) {
      submenuPanel.classList.remove(this.consts.HOVER_SUBMENU_HIDE)
      submenuPanel.classList.add(this.consts.HOVER_SUBMENU_SHOW)
    },

    /** Hide submeu in hover mode */
    hideHoverSubmenu: function (submenuPanel) {
      submenuPanel.classList.remove(this.consts.HOVER_SUBMENU_SHOW)
      submenuPanel.classList.add(this.consts.HOVER_SUBMENU_HIDE)
    },

    bindSidebarCollapse: function () {
      // Toogle sidebar and content
      var self = this, j

      this.$sidebarCollapseBtn.addEventListener('click', function () {
        if (self._sidebarExpand) {
          self._sidebarExpand = false

          // Expand all the top submenu panel and add extra class to hover outside
          for (j = 0; j < self.$topMenuItems.length; j++) {
            self.showSubmenu(self.$topMenuItems[j])
            var submenuPanel = self.$topMenuItems[j].nextElementSibling
            if (submenuPanel) {
              submenuPanel.classList.add(self.consts.HOVER_SUBMENU)
              submenuPanel.classList.add(self.consts.HOVER_SUBMENU_HIDE)
            }
          }

          self.$sidebar.style.width = self.options.sidebarMiniWidth + 'px'
          self.$content.style.left = self.options.sidebarMiniWidth + 'px'
          self.$headerLogo.style.width = self.options.sidebarMiniWidth + 'px'
        } else {
          self._sidebarExpand = true

          // collapse all top submenu panel and remove class of hover outside
          for (j = 0; j < self.$topMenuItems.length; j++) {
            self.hideSubmenu(self.$topMenuItems[j])
            var submenuPanel = self.$topMenuItems[j].nextElementSibling
            if (submenuPanel) {
              submenuPanel.classList.remove(self.consts.HOVER_SUBMENU)
              submenuPanel.classList.remove(self.consts.HOVER_SUBMENU_HIDE)
              submenuPanel.classList.remove(self.consts.HOVER_SUBMENU_SHOW)
            }
          }

          self.$sidebar.style.width = self.options.sidebarWidth + 'px'
          self.$content.style.left = self.options.sidebarWidth + 'px'
          self.$headerLogo.style.width = self.options.sidebarWidth + 'px'
        }
      })
    },

    bindDropdown: function () {
      var self = this, i

      for (i = 0; i < self.$dropdownBtns.length; i++) {
        self.$dropdownBtns[i].addEventListener('mouseenter', function (evt) {
          self.showDropdown(evt.target.nextElementSibling)
        })

        self.$dropdownBtns[i].addEventListener('mouseleave', function (evt) {
          self.hideDropdown(evt.target.nextElementSibling)
        })
      }

      for (i = 0; i < self.$dropdownPanels.length; i++) {
        self.$dropdownPanels[i].addEventListener('mouseenter', function (evt) {
          self.showDropdown(evt.target)
        })

        self.$dropdownPanels[i].addEventListener('mouseleave', function (evt) {
          self.hideDropdown(evt.target)
        })
      }
    },

    bindMenuItem: function () {
      var self = this, i, j

      for (i = 0; i < self.$menuItems.length; i++) {

        // For convenient, has not use event delegation, because the menu-item is not too much
        self.$menuItems[i].addEventListener('click', function (evt) {
          var ele = evt.currentTarget
          var submenuPanel = ele.nextElementSibling

          // If in mini mode, just expand the sidebar and do nothing
          if (!self._sidebarExpand && ele.classList.contains(self.consts.TOP_MENU_ITEM)) {
            self.$sidebarCollapseBtn.click();
            return;
          }

          if (submenuPanel && submenuPanel.classList.contains(self.consts.SUBMENU_BOX)) {
            // Has sub menu, should expand/collapse the submenu panel

            var isCollapse = submenuPanel.style.maxHeight === '0px'

            if (isCollapse) {
              // if click top level, collapse others
              if (self.options.onlySingleExpand && ele.classList.contains(self.consts.TOP_MENU_ITEM)) {
                for (j = 0; j < self.$topMenuItems.length; j++) {
                  self.hideSubmenu(self.$topMenuItems[j])
                }
              }

              self.showSubmenu(ele)
            } else {
              // Collapse it

              self.hideSubmenu(ele)
            }
          } else {
            // a normal menu

            // Remove others active class
            for (j = 0; j < self.$menuItems.length; j++) {
              self.$menuItems[j].classList.remove(self.consts.MENU_ITEM_ACTIVE)
            }

            ele.classList.add(self.consts.MENU_ITEM_ACTIVE)
          }

        })
      }
    },

    bindMenuItemHover: function () {
      var self = this, i, j

      for (i = 0; i < self.$topMenuItems.length; i++) {
        self.$topMenuItems[i].addEventListener('mouseenter', function (evt) {
          if (!self._sidebarExpand) {
            var submenuPanel = evt.currentTarget.nextElementSibling
            if (submenuPanel) {
              self.showHoverSubmenu(submenuPanel)
            }
          }
        })

        self.$topMenuItems[i].addEventListener('mouseleave', function (evt) {
          if (!self._sidebarExpand) {
            var submenuPanel = evt.currentTarget.nextElementSibling
            if (submenuPanel) {
              self.hideHoverSubmenu(submenuPanel)
            }
          }
        })
      }

      for (i = 0; i < self.$topSubmenuPanels.length; i++) {
        self.$topSubmenuPanels[i].addEventListener('mouseenter', function (evt) {
          if (!self._sidebarExpand) {
            var submenuPanel = evt.currentTarget
            if (submenuPanel) {
              self.showHoverSubmenu(submenuPanel)
            }
          }
        })

        self.$topSubmenuPanels[i].addEventListener('mouseleave', function (evt) {
          if (!self._sidebarExpand) {
            var submenuPanel = evt.currentTarget
            if (submenuPanel) {
              self.hideHoverSubmenu(submenuPanel)
            }
          }
        })
      }
    }
  }

  new Layout()
})()

