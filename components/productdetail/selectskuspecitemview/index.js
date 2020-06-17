// components/productdetail/selectskuspecitemview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spec: {
      type: Object,
      value: null
    },
    index: {
      type: Number,
      value: 0
    },
    specValueId: {
      type: Number,
      value: 0
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
    onSelected:function(e) {
      let obj = new Object()
      obj.index = this.properties.index
      obj.specId = this.properties.spec.id
      obj.specValueId = e.currentTarget.dataset.id
      this.triggerEvent('onSelected', obj)
    },
  }
})
