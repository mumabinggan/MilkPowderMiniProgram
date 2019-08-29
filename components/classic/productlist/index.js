// components/classic/productlist/index.js
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
    buySrc: 'images/buy.png',
    buyCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAddCount:function(e) {
      this.triggerEvent('onAdd', e.detail)
    },
    handleSubCount: function (e) {
      this.triggerEvent('onSub', e.detail)
    }
  }
})
