// components/classic/titlelist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: null,
    selectedIndex: Number
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
    click:function(e) {
      let index = e.currentTarget.dataset.id
      this.triggerEvent('onClick', index)
    }
  }
})
