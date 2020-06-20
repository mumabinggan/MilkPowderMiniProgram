// components/productdetail/producttoolbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type: Object,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.handleProductChange(newValue)
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    homeIcon: 'images/home_icon.png',
    chatIcon: 'images/chat_icon.png',
    onSale: true,
    statusTitle: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleProductChange:function(e) {
      console.log("=================asdfasd")
      let status = this.properties.product.status
      var onSale = true
      var statusTitle = ''
      if (status == 2) {
        onSale = false
        statusTitle = "商品库存不足"
      } else if (status == 3) {
        onSale = false
        statusTitle = "商品已下架"
      }
      console.log(onSale, statusTitle)
      this.setData({
        onSale: onSale,
        statusTitle: statusTitle
      })
    },

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
