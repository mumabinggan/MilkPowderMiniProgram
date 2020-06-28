// components/home/homecategorytitle/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: null,
    showMore: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    moreIcon: "/images/address_more.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMore: function() {
      this.triggerEvent('onMore')
    }
  }
})
