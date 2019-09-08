// components/settlement/settlementremarks/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    remarks: null,
    hidden: {
      type: Boolean,
      value: false,
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
    onUnFocus:function(e) {
      this.triggerEvent('unFocus',
        {})
    },
    onFocus: function (e) {
      this.triggerEvent('focus',
        {})
    },
    onClick:function(e) {
      console.log("onClick")
      this.triggerEvent('focus',
        {})
    }
  }
})
