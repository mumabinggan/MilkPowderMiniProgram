// components/address/addresslistitem/index.js
import {
  Address
} from '../../../models/address.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Address,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log("change address")
        this.handleAddressChange()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstName: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAddressChange:function() {
      this.setData({
        firstName: this.properties.item.name.charAt(0)
      })
    }
  }
})
