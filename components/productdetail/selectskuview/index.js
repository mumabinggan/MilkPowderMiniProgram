// components/productdetail/selectskuview/index.js
import { ProductViewModel } 
from '../../../viewmodels/productviewmodel.js'

import { JHArrayUtils } from '../../../utils/arrayutils.js'
import { ShopCartViewModel } 
from '../../../viewmodels/shopcartviewmodel.js'

import { UserUtils } from '../../../utils/userutil.js'

const shopCartModel = new ShopCartViewModel()
const productVM = new ProductViewModel()

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
    //1: 购物车 2:详情页面的加入购物车 3:详情页面的立即购买
    entrance: {
      type: Number,
      value: 2
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    closeIcon: "images/close.png",
    specList: [],
    count: 1,
    skuImageUrl: '',
    //动画
    contentAnimation: "contentAnimation",
    maskAnimation: "maskAnimation",
    //内容
    sku: null,
    priceTitle: '',
    showSkuPrice: false,
  },

  lifetimes: {
    ready() {
      console.log("==========||=========")
      this.startAnimations()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    startAnimations: function() {
      let animation = wx.createAnimation({
        duration: 300,
        timingFunction: 'ease'
      });
      animation.translateY(0).step()
      this.setData({
        contentAnimation: animation.export()
      })
      
      animation.opacity(0.6).step()
      this.setData({
        maskAnimation: animation.export()
      })
    },

    handleProductChange: function(e) {
      let product = this.properties.product
      let priceTitle = ''
      if (JHArrayUtils.isNullOrEmpty(product.specList)) {
        priceTitle = product.price
      } else {
        priceTitle = product.minPrice
      }
      let indexGoodsImage = product.indexGoodsImage
      let imageUrl = ''
      if (indexGoodsImage != null) {
        imageUrl = indexGoodsImage.absoluteImageUrl
      }
      this.setData({
        priceTitle: priceTitle,
        skuImageUrl: imageUrl
      })
    },

    onSelected: function(e) {
      let obj = e.detail
      let index = obj.index
      let data = this.data
      let specList = data.specList
      specList[index] = obj
      this.setData({
        specList: specList
      })
      if (specList.count == data.product.specList.count) {
        this.fetchGoodsSku()
      }
    },

    onClose:function(e) {
      console.log("====")
      this.triggerEvent('onClose', {})
    },

    fetchGoodsSku: function() {
      let spuId = this.properties.product.id
      var specValues = []
      this.data.specList.forEach(specItem => {
        let item = new Object()
        item.specId = specItem.specId
        item.specValueId = specItem.specValueId
        specValues.push(item)
      })
      console.log(this.properties.product)
      productVM.fetchGoodsSku(spuId, specValues, {
        success: (res) => {
          let data = res.data
          let indexGoodsImage = data.skuIndexImageItem
          let imageUrl = ''
          if (indexGoodsImage != null) {
            imageUrl = indexGoodsImage.absoluteImageUrl
          }
          this.setData({
            sku: data,
            priceTitle: data.price,
            showSkuPrice: true,
            skuImageUrl: imageUrl
          })
          console.log(res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    },

    onConfirm: function() {
      let data = this.data
      if (data.sku == null) {
        wx.showToast({
          title: "没有选择规格",
          duration: 2000,
          icon: "none"
        })
        return
      }
      if (data.sku.stock < data.count) {
        wx.showToast({
          title: "库存不足, 购买数量已调整到合理数量",
          duration: 2000,
          icon: "none"
        })
        return;
      }

      let entrance = this.properties.entrance
        if (entrance == 2) {
          //加入购物车
          this.onAddToShopCart()
        } else if (entrance == 3) {
          //立即购买
          this.onBuy()
        }
    },

    onAddToShopCart: function() {
      let data = this.data
      let item = new Object()
      item.count = data.count
      item.id = data.product.id
      item.skuId = data.sku.skuId
      if (UserUtils.isLogined()) {
        shopCartModel.addGoodToShopCart(item, {
          success: (res) => {
            console.log("=====success====")
            console.log(res)
            wx.showToast({
              title: res.msg,
            })
            this.onClose()
          },
          fail: (err) => {
            console.log("=====fail====")
            wx.showToast({
              title: "网络错误, 请稍后重试",
            })
          }
        })
      }
    },

    onBuy: function() {

    },

    handleAddCount: function() {
      let count = this.data.count + 1
      this.setData({
        count: count
      })
    },

    handleSubCount: function() {
      let count = this.data.count - 1
      if (count >= 0) {
        this.setData({
          count: count
        })
      }
    }
  }
})
