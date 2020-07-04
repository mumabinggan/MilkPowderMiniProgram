// components/common/emptycontainer/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageName: null,
    title: null,
    btnTitle: null
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
    onClick: function() {
      this.triggerEvent('onClick')
    }
  }
})
