// components/home/homecategory/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: null
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
    onBuy: function(e) {
      let item = e.detail.item
      this.triggerEvent('onItemBuy', { item })
    }
  }
})
