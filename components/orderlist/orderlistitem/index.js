// components/orderlist/orderlistitem/index.js
import {
  Order
} from '../../../models/order.js'

import {
  OrderUtils
} from '../../../utils/orderutils.js'

import {
  JHDataTimeUtils
} from '../../../utils/datatimeutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Order,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.handleOrderChange(newValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    deleteOrderIcon: 'images/order_delete.png',
    storeIcon: '/images/app_icon.png',
    orderStatus: "",
    orderTime: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleOrderChange: function (item) {
      let status = OrderUtils.toStatusStr(item.status)
      this.setData({
        orderStatus: status,
        orderTime: JHDataTimeUtils.toOrderTimeStr(item.createTime)
      })
    },

    onUrge:function(e) {
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
