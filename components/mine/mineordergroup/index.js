// components/mine/mineordergroup/index.js
import {
  ServiceItem
} from '../../../models/serviceitem.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: null,
    title: null,
    detailTitle: {
      value: "",
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    moreIcon: "images/more_icon.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function(e) {
      let id = e.target.dataset.id
      this.triggerEvent('onItem', { id })
    },

    onMore: function() {
      this.triggerEvent('onMore')
    }
  }
})
