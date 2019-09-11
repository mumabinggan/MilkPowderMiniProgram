// components/orderlist/ordertabsview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedIndex: {
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    titles: ["全部", "待付款", "待收货", "待评论"]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick:function(e) {
      const index = e.target.dataset.id
      this.setData({
        currentIndex: index
      })
      this.triggerEvent('onItem', { index })
    }
  }
})
