// components/classic/shopcartlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log("products change")
        //this.handleShopCartChange()
      }
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
    onSelect: function (e) {
      this.triggerEvent('onSelect',
        e.detail)
    },

    handleAddCount: function (e) {
      this.triggerEvent('onAdd', e.detail)
    },

    handleSubCount: function (e) {
      this.triggerEvent('onSub', e.detail)
    }
  }
})
