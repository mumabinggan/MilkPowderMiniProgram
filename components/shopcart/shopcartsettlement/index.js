// components/classic/shopcartsettlement/index.js
import {
  ShopCart
} from '../../../models/shopcart.js'

import { JHArrayUtils } from '../../../utils/arrayutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    shopcart: {
      type: ShopCart,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log("shopcart change")
        this.handleShopCartChange()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedStateImage: '/images/shopcartselected/selected.png',
    unselectedStateImage: '/images/shopcartselected/unselected.png',
    isSelectedAll: false,
    selectedProductsCount: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSettlement:function() {
      this.setData({
        a: this.data.b,
        b: this.data.a + this.data.b,
      })
      console.log(this.data.a)
    },

    handleShopCartChange:function() {
      let isSelectedAll = true
      let selectedProductsCount = 0
      let arr = this.data.shopcart.products
      if (JHArrayUtils.isNullOrEmpty(arr)) {
        isSelectedAll = false
      } else {
        for (let item of arr) {
          if (item.checked) {
            selectedProductsCount += item.count
          }
          if (isSelectedAll) {
            isSelectedAll = item.checked
          }
        }
      }
      this.setData({
        isSelectedAll: isSelectedAll,
        selectedProductsCount: selectedProductsCount
      })
    },

    onSelect:function() {
      this.triggerEvent('onSelect',
        this.data.isSelectedAll)
    }
  }
})
