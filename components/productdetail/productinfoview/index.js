// components/productdetail/productinfo/index.js
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
    shareIcon: 'images/detail_share.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShare:function(e) {
      this.triggerEvent('onShare', {})
    }
  }
})
