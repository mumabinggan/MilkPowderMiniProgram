// components/classic/classicproductlistitem/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAddCount: function () {
      this.triggerEvent('onAdd', 
        this.dataset.id)
    },
    handleSubCount: function () {
      this.triggerEvent('onSub', this.dataset.id)
    }
  }
})
