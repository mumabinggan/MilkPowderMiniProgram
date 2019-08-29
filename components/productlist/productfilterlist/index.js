// components/productlist/productfilterlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onHide: function (e) {
      this.triggerEvent('onHide', this.dataset.id)
    },

    onClick: function (e) {
      this.triggerEvent('onClickItem', e.currentTarget.dataset.id)
    },

    onConfirm: function(e) {
      this.triggerEvent('onConfirm', {})
    },

    onReset: function (e) {
      this.triggerEvent('onReset', {})
    }
  }
})
