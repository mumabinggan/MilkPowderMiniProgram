// components/productlist/productrowitem/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    buyIcon: "/images/shopcartselected/productlist-buy.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onBuy:function(e) {
      this.triggerEvent('onAddToCart', this.dataset.id)
    }
  }
})
