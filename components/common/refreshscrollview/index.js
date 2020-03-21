// components/common/refreshscrollview/index.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  
  /**
   * 组件的属性列表
   */
  properties: {
    enableHeaderRefresh: {
      type: Boolean,
      value: true
    },
    headerRefreshTriggerHeight: {
      type: Number,
      value: 100
    },
    headerTriggered: {
      type: Boolean,
      value: false,
      observer: function (newValue, oldValue, changePath) {
        this.handleHeaderTriggeredChange(oldValue, newValue)
      }
    },

    enableFooterRefresh: {
      type: Boolean,
      value: true,
      observer: function (newValue, oldValue, changePath) {
        this.handleEnableFooterRefreshChange(oldValue, newValue)
      }
    },
    footerRefreshTriggerHeight: {
      type: Number,
      value: 160    //正数会预加载
    },
    footerTriggered: {
      type: Boolean,
      value: false,
      observer: function (newValue, oldValue, changePath) {
        this.handleFooterTriggeredChange(oldValue, newValue)
      }
    },

    offset: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isTryingFooterRefresh: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**public方法 */
    handleHeaderTriggeredChange(oldValue, newValue) {
      //1, 关闭footerTriggered
      this.triggerEvent('onEndFooterTriggered')

      //2, 
      if (newValue) {
        this.setData({
          isTryingFooterRefresh: false
        })
      }
    },

    handleFooterTriggeredChange(oldValue, newValue) {
      //1, 关闭headerTriggered
      this.triggerEvent('onEndHeaderTriggered')

      //2, 
      if (!newValue) {
        this.setData({
          isTryingFooterRefresh: false
        })
      }
    },

    handleEnableFooterRefreshChange(oldValue, newValue) {
      if (!newValue) {
        this.handleFooterTriggeredChange(true, false)
      }
    },

    /**scroll-view代理 */
    onHeaderTryRefresh() {
    },

    onHeaderRefresh() {
      this.triggerEvent('onHeaderRefresh')
    },

    onHeaderRefreshRestore() {
    },

    onHeaderTryRefreshAbort() {
    },

    onFooterTryRefresh() {
      if (this.data.isTryingFooterRefresh || !this.properties.enableFooterRefresh) {
        return
      }
      this.setData({
        isTryingFooterRefresh: true
      })
      this.triggerEvent('onFooterRefresh')
    }
  }
})
