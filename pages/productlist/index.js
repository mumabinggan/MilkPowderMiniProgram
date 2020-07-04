// pages/productlist/index.js
import { ClassicModel } from '../../viewmodels/classicmodel.js'
import { ShopCartViewModel } from '../../viewmodels/shopcartviewmodel.js'

import { UserUtils } from '../../utils/userutil.js'
import { JHArrayUtils } from '../../utils/arrayutils.js'

import { JHRouterUtils } from '../../utils/jsrouterutils.js'

import {
  JHObjectUtils
} from '../../utils/objectutils.js'

const classicVM = new ClassicModel()
const shopcartVM = new ShopCartViewModel()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

    classicId: null,
    type: 1,      //首页还是分类页面

    spus:[],
    isRefreshing: false,  //正在下拉
    isLoadingMore: false, //正在上拉
    enableLoadingMore: true,
    isRequestSpus: false,
    pageNum: 1,
    pageSize: 15,
    spusRequest: null,
    refreshingTimeoutId: null,

    offset: 0,

    selectedIndex: 0,
    
    isRowType: false,

    shopCount: app.globalData.shopcartCount,
    showTopIcon: false,

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
      title: '搜索',
    })
    let classicId = options.id
    let type = options.type
    // classicId = 100034
    // type = 1
    this.setData({
      type: type,
      classicId: classicId
    })
    this.setRefreshing(true, 0)
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

  //处理行,列展示
  handleChangeShowType: function (e) {
    this.setData({
      isRowType: e.detail,
    })
  },

  handleComplex: function() {
    this.setData({
      selectedIndex: 0
    })
    this.requestData(false)
  },

  handleSaleCount: function() {
    this.setData({
      selectedIndex: 1
    })
    this.requestData(false)
  },

  handlePrice: function(e) {
    this.setData({
      selectedIndex: e.detail ? 2 : 3
    })
    this.requestData(false)
  },

  requestData(isMore) {
    if (!isMore) {
      this.setData({
        pageNum: 1
      })
    }
    const pageNum = this.data.pageNum
    const pageSize = this.data.pageSize
    const type = this.data.type
    const orderBy = this.data.selectedIndex + 1
    const classicId = this.data.classicId
    classicVM.fetchSpusByClassicId(classicId, type, orderBy, pageNum, pageSize, {
      success: (res) => {
        const data = this.data
        let spus = (data.pageNum == 1) ? [] : data.spus;
        const newSpus = res.data.list
        spus = spus.concat(newSpus)
        const hasMore = !res.data.isLastPage
        this.setData({
          spus: spus,
          pageNum: pageNum+1,
          enableLoadingMore: hasMore
        })
        this.setRefreshing(false, 0)
      },
      fail: (err) => {
        console.log(err)
        this.setRefreshing(false, 0)
      }
    })
  },

  setRefreshing:function(isRefreshing, timeout) {
    clearTimeout(this.data.refreshingTimeoutId)
    if (timeout == 0) {
      this.setData({
        isRefreshing: isRefreshing,
      })
    } else {
      const that = this
      var refreshingTimeoutId = setTimeout(function () {
        that.setData({
          isRefreshing: isRefreshing,
        })
      }, timeout);
      that.setData({
        refreshingTimeoutId: refreshingTimeoutId,
      })
    }
  },

  onHeaderRefresh() {
    this.setData({
      pageNum: 1
    })
    this.setRefreshing(true, 0)
    this.requestData(false)
  },

  onFooterRefresh() {
    this.setData({
        isLoadingMore: true
    })
    this.requestData(true)
  },

  onEndHeaderTriggered() {
    this.setRefreshing(false, 0)
  },

  onEndFooterTriggered() {
    this.setData({
      isLoadingMore: false
    })
  },


  //跳转到购物车
  handleToShopCart:function() {
    console.log("================")
  },

  //跳至顶部
  handleToTop: function () {

  },

  //scroll-view代理 
  didScroll:function(e) {
    const top = e.detail.scrollTop
    const windowHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      showTopIcon: top > windowHeight
    })
  },

  onClick(e) {
    let item = e.currentTarget.dataset.id
    JHRouterUtils.toProductDetail(item.id)
  },

  //加入购物车
  handleAddToCartIfNeed: function(e) {
    let item = e.detail
    console.log(item)
    console.log("handleAddToCartIfNeed")
    if (JHObjectUtils.isNullOrUndefined(item)) {
      wx.showToast({
        title: '数据有错误, 刷新后重试',
      })
      return
    }

    let shouldShowSelectSkuView = false
    let isShowingSelectSkuView = false
    console.log("====asdfasd==============")
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
    console.log("===handleAddToCart===")
    if (UserUtils.isLogined()) {
      shopcartVM.addGoodToShopCart(item, {
        success: (res) => {
          console.log("=====success====")
          console.log(res)
          wx.showToast({
            title: res.msg,
          })
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
})