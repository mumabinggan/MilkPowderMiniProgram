// components/productdetail/producttoolbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    homeIcon: 'images/home_icon.png',
    chatIcon: 'images/chat_icon.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onHome:function(e) {
      this.triggerEvent('onHome', {})
    },
    
    onFavorite:function(e) {
      this.triggerEvent('onFavorite', {})
    },

    onAddToShopCart: function (e) {
      this.triggerEvent('onAddToShopCart', {})
    },
  
    onBuy:function(e) {
      this.triggerEvent('onBuy', {})
    },
  }
})
