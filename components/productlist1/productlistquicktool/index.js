// components/productlist/productlistquicktool/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopCount: {
      type: Number,
      value: 0,
    },
    showTopIcon: {
      type: Boolean,
      value: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    toTopIcon: 'images/arrow_up.png',
    shopcartIcon: 'images/shopcart.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onToShopCart:function(e) {
      this.triggerEvent('onToShopCart', {})
    },
    onToTop:function(e) {
      this.triggerEvent('onToTop', {})
    }
  }
})
