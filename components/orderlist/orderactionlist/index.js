// components/orderlist/orderactionlist/index.js
import {
  Order
} from '../../../models/order.js'

import {
  OrderUtils
} from '../../../utils/orderutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Order,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log(newValue)
        this.handleOrderChange(newValue)
      }
    },
    showOrderRemainTime: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showUrge: false,
    showReBuy: false,
    showWaitPay: false,
    showWaitComment: false,
    showWaitConfirm: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleOrderChange: function (order) {
      this.setData({
        showUrge: OrderUtils.showUrge(order),
        showPay: OrderUtils.showBuy(order),
        showDelete: OrderUtils.showDelete(order),
        showCancel: OrderUtils.showCancel(order)
      })
    },

    onUrge: function (e) {
      let item = this.properties.item
      this.triggerEvent('onUrge', { item })
    },

    onDelete: function (e) {
      let item = this.properties.item
      this.triggerEvent('onDelete', { item })
    },

    onCancel: function(e) {
      let item = this.properties.item
      this.triggerEvent('onCancel', { item })
    },

    onPay: function (e) {
      let item = this.properties.item
      this.triggerEvent('onPay', { item })
    }
  }
})
