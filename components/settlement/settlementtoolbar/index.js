// components/settlement/settlementtoolbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalCount: {
      type: Number,
      value: 2
    },
    price: null
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
    onBuy:function(e) {
      //购买
      this.triggerEvent('onBuy',
        {})
    }
  }
})
