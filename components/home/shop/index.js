// components/home/shop/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shop: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    phoneIcon: "/images/home_phone.png",
    chatIcon: "/images/home_chat.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPhone: function(e) {
      wx.makePhoneCall({
        phoneNumber: this.properties.phone,
      })
    },

    onChat: function(e) {
      this.triggerEvent('onChat', {  })
    }
  }
})
