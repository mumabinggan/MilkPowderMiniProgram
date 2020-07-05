// components/classic/shopcartlistitem/index.js
import {
  JHToastUtils
} from '../../../utils/jhtoastutils.js'

import {
  JHProductUtils
} from '../../../utils/jhproductutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        let isSaleOff = JHProductUtils.isSaleOff(newValue.status, newValue.stock)
        this.setData({
          isSaleOff: isSaleOff
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedStateImage: '/images/shopcartselected/selected.png',
    unselectedStateImage: '/images/shopcartselected/unselected.png',
    saleOffImage: '/images/sale_off.png',
    isSaleOff: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    checkValid: function() {
      if (this.data.isSaleOff) {
        JHToastUtils.show('商品已下架')
        return false
      }
      return true
    },

    onSelect:function() {
      if (!this.checkValid()) {
        return
      }
      this.triggerEvent('onSelect', this.dataset.id)
    },

    onTouch: function(e) {
      this.triggerEvent('onTouch', this.dataset.id)
    },

    handleAddCount: function () {
      if (!this.checkValid()) {
        return
      }
      this.triggerEvent('onAdd',
        this.dataset.id)
    },

    handleSubCount: function () {
      if (!this.checkValid()) {
        return
      }
      this.triggerEvent('onSub', this.dataset.id)
    },

    handleDelete: function() {
      this.triggerEvent('onDelete', this.dataset.id)
    }
  }
})
