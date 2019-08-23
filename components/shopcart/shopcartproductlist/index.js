// components/classic/shopcartlist/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAdd: function () {
      this.triggerEvent('onAdd', {}, {})
    },
    onSub: function () {
      this.triggerEvent('onSub', {}, {})
    }
  }
})
