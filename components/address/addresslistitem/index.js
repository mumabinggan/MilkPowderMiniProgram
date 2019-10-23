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
    },
    isMore: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstName: null,
    addressMore: 'images/address_more.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAddressChange:function() {
      console.log(this.properties.item)
      this.setData({
        firstName: this.properties.item.name.charAt(0)
      })
    }
  }
})
