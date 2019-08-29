// components/productlist/productsortlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: null,
      // observer: function (newValue, oldValue, changePath) {
      //   console.log("list change")
      //   console.log("newValue:" + newValue)
      //   console.log("oldValue:" + oldValue)
      // }
    }
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
    onHide:function(e) {
      this.triggerEvent('onHide', this.dataset.id)
    },

    onClick:function (e) {
      this.triggerEvent('onClickItem', e.currentTarget.dataset.id)
    }
  }
})
