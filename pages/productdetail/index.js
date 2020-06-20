// pages/productdetail/index.js
import { ProductViewModel } 
from '../../viewmodels/productviewmodel.js'

import { UserUtils } from
  '../../utils/userutil.js'

import { JHRouterUtils } from '../../utils/jsrouterutils.js'
import { JHArrayUtils } from '../../utils/arrayutils.js'

import { ShopCartViewModel } 
from '../../viewmodels/shopcartviewmodel.js'

const shopCartModel = new ShopCartViewModel()
const productVM = new ProductViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    product: null,
    showTopIcon: true,
    shopCount: 2,
    selectedSpecContent: "",
    entrance: 2,
    shouldShowSelectSkuView: true,
    isShowingSelectSkuView: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let spuId = options.id
    productVM.fetchProductDetail(spuId, {
      success: (res) => {
        var bannerItem = new Object()
        bannerItem.absoluteImageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592070287641&di=da66deac2fdaf60bc6c2b44ec654e570&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2386942312%2C3102627437%26fm%3D214%26gp%3D0.jpg"
        var bannerItem2 = new Object()
        bannerItem2.absoluteImageUrl = "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3647895025,2428663167&fm=26&gp=0.jpg"
        res.data.bannerImageList = [bannerItem, bannerItem2]
        this.setData({
          product: res.data
        })
        console.log(this.data.product)
        this.handleProductChange()
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleMove: function(e) {
    // return
  },

  handleProductChange:function() {
    let specList = this.data.product.specList
    /**暂时注释, 不管是否需要选择规格都要弹sku选择框 */
    var shouldShowSelectSkuView = false
    if (!JHArrayUtils.isNullOrEmpty(specList)) {
      shouldShowSelectSkuView = true
    }
    let specContent = ""
    specList.forEach(item => {
      specContent += (item.name + " ")
    })
    this.setData({
      shouldShowSelectSkuView: shouldShowSelectSkuView,
      selectedSpecContent: specContent
    })
  },

  handleToHome:function() {
    JHRouterUtils.toTab(0)
  },

  handleFavorite: function () {
    console.log("toFavorite")
  },

  handleSelectSku: function() {
    this.setData({
      entrance: 1,
      isShowingSelectSkuView: true
    })
    console.log("handleSelectSku")
  },

  handleAddToShopCart: function () {
    let shouldShowSkuSelectView = true
    if (shouldShowSkuSelectView) {
      //弹出选择sku的选择框
      this.setData({
        entrance: 2,
        isShowingSelectSkuView: true
      })
    } else {
      //直接加入购物车
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
    }
    console.log("toAddToShopCart")
  },

  handleBuy: function () {
    if (this.data.shouldShowSelectSkuView) {
      this.setData({
        entrance: 3,
        isShowingSelectSkuView: true
      })
    } else {
      if (UserUtils.isLogined()) {
        let product = this.data.product
        let item = new Object()
        item.spuId = product.id
        item.skuId = product.skuId
        item.count = 1
        let itemStr = JSON.stringify(item)
        JHRouterUtils.preOrder(itemStr)
      }
    }
  },

  handleCloseSelectSkuView: function(e) {
    console.log("=fsd")
    this.setData({
      isShowingSelectSkuView: false
    })
  },

  //跳至顶部
  handleToTop: function () {
    console.log("handleToTop")
  },

  //跳转到购物车
  handleToShopCart: function () {
    JHRouterUtils.toShopCart()
    console.log("handleToShopCart")
  }
})