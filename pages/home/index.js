// pages/home/index.js
import { UserUtils } from 
'../../utils/userutil.js'

import {
  JHObjectUtils
} from '../../utils/objectutils.js'

import { HomeViewModel } from 
'../../viewmodels/homeviewmodel.js'

import { ShopCartViewModel } 
from '../../viewmodels/shopcartviewmodel.js'

const shopCartModel = new ShopCartViewModel()
const homeModel = new HomeViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    home: null,

    //选择sku弹出框
    shouldShowSelectSkuView: true,
    isShowingSelectSkuView: false,
    entrance: 2,
    product: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '蔬果到家',
    })
    this.loadData()
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

  loadData: function() {
    wx.showLoading()
    homeModel.fetchItem({
      success: (res) => {
        console.log(res)
        wx.hideLoading()
        if (res.code == 0) {
          this.test(res)
          this.setData({
            home: res.data
          })
        } else {
          //todo:重试loading
          wx.showToast({
            title: '刷新后重试',
            duration: 2000,
            icon: 'none'
          })
        }
      },
      fail: (err) => {
        console.log(err)
        wx.hideLoading()
      }
    })
  },

  test: function(res) {
    let data = res.data
    let carouselList = data.carouselList
    carouselList.forEach(item => {
      item.absoluteImageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593359013106&di=039dcc3bd504555e254b3db6ab436f85&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F63d9f2d3572c11df40c9b4f4622762d0f603c2c9.jpg"
    })

    let categoryList = data.categoryList
    categoryList.forEach(item => {
      item.absoluteImageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593358772643&di=8624cd2ef866123a0340f1e859455df6&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1428203389%2C2577609861%26fm%3D214%26gp%3D0.jpg"
    })

    let shop = data.shop
    shop.absoluteImageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593358772643&di=8624cd2ef866123a0340f1e859455df6&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1428203389%2C2577609861%26fm%3D214%26gp%3D0.jpg"

    let homeCategoryList = data.homeCategoryList
    homeCategoryList.forEach(item => {
      item.spuList.forEach(goodItem => {
        goodItem.indexImageItem.absoluteImageUrl = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593358772643&di=8624cd2ef866123a0340f1e859455df6&imgtype=0&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1428203389%2C2577609861%26fm%3D214%26gp%3D0.jpg"
      })
      
    })
  },

  /**
   * 点击商店chat
   */
  handleChat: function() {
    console.log("点击聊天")
    //todo:聊天界面
  },

  handleHomeCategoryGoodBuy: function(e) {
    this.handleAddToCartIfNeed(e)
  },

  handleAddToCartIfNeed: function(e) {
    let item = e.detail.item
    if (JHObjectUtils.isNullOrUndefined(item)) {
      wx.showToast({
        title: '数据有错误, 刷新后重试',
      })
      return
    }
    let shouldShowSelectSkuView = false
    let isShowingSelectSkuView = false
    console.log("===============")
    console.log(item)
    if (item.skuId != null) {
      //直接加入购物车
      shouldShowSelectSkuView = false
      isShowingSelectSkuView = false
      item.count = 1
      this.handleAddToCart(item)
    } else {
      //弹出选择spu框
      shouldShowSelectSkuView = true
      isShowingSelectSkuView = true
    }
    this.setData({
      shouldShowSelectSkuView: shouldShowSelectSkuView,
      isShowingSelectSkuView: isShowingSelectSkuView,
      product: item
    })
  },

  handleAddToCart: function(item) {
    if (UserUtils.isLogined()) {
      shopCartModel.addGoodToShopCart(item, {
        success: (res) => {
          wx.showToast({
            title: res.msg,
          })
        },
        fail: (err) => {
          wx.showToast({
            title: "网络错误, 请稍后重试",
          })
        }
      })
    } else {
      let localItem = ShopCartProductLocalItem.fromProduct(item)
      console.log(localItem)
      OMCartStorageUtils.addItemToCartAsync(localItem)
    }
  },

  /**
   * =====================pop sku select begin==================
   */
  //sku选择框回调方法
  handleMove: function(e) {
    // return
  },

  handleCloseSelectSkuView: function(e) {
    console.log("=fsd")
    this.setData({
      isShowingSelectSkuView: false
    })
  },

  /**
   * =====================pop sku select end==================
   */
})