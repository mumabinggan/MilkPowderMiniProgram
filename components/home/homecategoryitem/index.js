// components/home/homecategoryitem/index.js
import { JHRouterUtils } from '../../../utils/jsrouterutils.js'

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
    onMore: function(e) {
      let item = this.properties.item
      //todo:直接跳转
      JHRouterUtils.toClassicGoodList(item.id)
    },

    onBuy: function(e) {
      let item = e.detail.item
      this.triggerEvent('onBuy', { item })
    },

  }
})
