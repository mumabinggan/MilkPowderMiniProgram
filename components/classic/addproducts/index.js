// components/classic/addproducts/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number,
      value: 0
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    subSrc: 'images/sub_count.png',
    addSrc: 'images/add_count.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onAdd:function() {
      console.log("onAdd")
      this.triggerEvent('onAdd', {}, {})
    },
    onSub:function() {
      this.triggerEvent('onSub', {}, {})
    }
  }
})
