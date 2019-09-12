// components/orderdetail/orderdelivery/index.js
import {
  OrderDetail
} from '../../../models/orderdetail.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    order: {
      type: OrderDetail,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon: '',
    showTitle2: true
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
