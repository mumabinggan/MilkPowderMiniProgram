// components/orderdetail/ordertoolbar/index.js
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
      }
    },
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
    onUrge: function (e) {
      let item = this.properties.item
      this.triggerEvent('onUrge', { item })
    },

    onDelete: function (e) {
      let item = this.properties.item
      this.triggerEvent('onDelete', { item })
    },

    onPay: function (e) {
      let item = this.properties.item
      this.triggerEvent('onPay', { item })
    },

    onComment: function (e) {
      let item = this.properties.item
      this.triggerEvent('onComment', { item })
    },

    onConfirm: function (e) {
      let item = this.properties.item
      this.triggerEvent('onConfirm', { item })
    },

    onReBuy: function (e) {
      console.log("as")
      let item = this.properties.item
      this.triggerEvent('onReBuy', { item })
    }
  }
})
