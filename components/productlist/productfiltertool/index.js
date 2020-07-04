// components/productlist/productfiltertool/index.js
import {
  ProductSortFilterCondition, ProductSortItem
} from '../../../models/productsortfiltercondition.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedIndex: null,
    isRowType: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    
    ascPrice: null,
    priceIcon: 'images/price_icon.png',
    priceDownIcon: 'images/price_down_icon.png',
    priceUpIcon: 'images/price_up_icon.png',
    showRowListIcon: 'images/show_row_icon.png',
    showColumnListIcon: 'images/show_column_icon.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //综合
    onComplex:function(e) {
      this.setData({
        ascPrice: null
      })
      console.log(this.data.ascPrice)
      this.triggerEvent('onComplex')
    },
    
    //销量
    onSaleCount:function(e) {
      this.setData({
        ascPrice: null
      })
      console.log(this.data.ascPrice)
      this.triggerEvent('onSaleCount')
    },

    //品类
    onPrice: function (e) {
      let isUp = this.data.ascPrice
      if (isUp == true) {
        isUp = false
      } else {
        isUp = true
      }
      this.setData({
        ascPrice: isUp
      })
      console.log(this.data.ascPrice)
      this.triggerEvent('onPrice', isUp)
    },

    changeShowType: function() {
      let showRow = this.properties.isRowType
      this.triggerEvent('onChangeShowType', !showRow)
    }
  }
})
