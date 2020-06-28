// components/home/homecategoryitemgood/index.js
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
    buyIcon: '/images/shopcartselected/productlist-buy.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onClick: function(e) {
      let item = this.data.item
      console.log("点击森")
      JHRouterUtils.toProductDetail(item.id)
    },

    onBuy: function(e) {
      let item = this.data.item
      this.triggerEvent('onBuy', { item })
    }
  }
})
