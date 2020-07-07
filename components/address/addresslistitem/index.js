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
    canEdit: {
      type: Boolean,
      value: true
    },
    showDefaultTips: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    firstName: null,
    editIcon: '/images/address_edit.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onEdit: function(e) {
      console.log(this.dataset.id)
      this.triggerEvent('onEdit', this.dataset.id)
    },

    handleAddressChange:function() {
      console.log(this.properties.item)
      this.setData({
        firstName: this.properties.item.name.charAt(0)
      })
    },

    handleDelete: function() {
      this.triggerEvent('onDelete', this.dataset.id)
    }
  }
})
