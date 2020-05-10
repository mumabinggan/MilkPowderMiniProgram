// components/orderdetail/orderdelivery/index.js
import {
  OrderDetail
} from '../../../models/orderdetail.js'

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
    order: {
      type: OrderDetail,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.handleOrderChange(newValue)
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon: '',
    statusStr: "",
    reminderTimeStr: "",
    timer: null
  },

  detached:function () {
    if (this.data.timer != null) {
      clearInterval(this.data.timer)
      this.setData({
        timer: null
      })
    }
    console.log("land detached")
  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleOrderChange: function(order) {
      console.log("===============")
      console.log(order)
      this.setData({
        statusStr: OrderUtils.toStatusStr(order.status)
      })

      let that = this
      let timer = setInterval(function() {
        that.handleTimer()
      }, 1000)
      this.setData({
        timer: timer
      })
    },

    handleTimer: function() {
      let order = this.data.order
      let times = order.reminderSecond
      if (times == 0) {
        clearInterval(timer)
        that.setData({
          timer: null
        })
      }
      times -= 1
      order.reminderSecond = times
      
      let timeStr = ""
      if (OrderUtils.isUnPay(order)) {
        timeStr = OrderUtils.toPayRemaindTimeStr(order.reminderSecond)
      }
      this.setData({
        reminderTimeStr: timeStr
      })
    }
  }
})
