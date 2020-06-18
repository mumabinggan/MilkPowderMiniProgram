// components/productdetail/productinfo/index.js
import { JHArrayUtils } from '../../../utils/arrayutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type: Object,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.handleProductChange(newValue)
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareIcon: 'images/detail_share.png',
    priceTitle: '',
    indicatorColor: '#E6E6E6',
    indicatorActiveColor: '#3D8946',
    showSkuPrice: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onShare:function(e) {
      this.triggerEvent('onShare', {})
    },

    handleProductChange: function(e) {
      let product = this.properties.product
      let priceTitle = ''
      if (JHArrayUtils.isNullOrEmpty(product.specList)) {
        priceTitle = product.price
      } else {
        priceTitle = product.minPrice
      }
      this.setData({
        priceTitle: priceTitle,
        showSkuPrice: (product.skuId != null)
      })
    }
  }
})
