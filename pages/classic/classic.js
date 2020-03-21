// pages/classic/index.js
import { ClassicModel } from '../../viewmodels/classicmodel.js'

import { UserUtils } from '../../utils/userutil.js'

import {
  AddCartResponse, AddCart
} from '../../models/addcartresponse.js'

let classicModel = new ClassicModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedTitleIndex: 0,
    classic:[],
    subClassic: [],
    branches: [],
    spus:[],
    isRefreshing: false,  //正在下拉
    isLoadingMore: false, //正在上拉
    enableLoadingMore: true,
    pageNum: 1,
    pageSize: 15,
    spusRequest: null,
    refreshingTimeoutId: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类',
    })
    classicModel.fetchClassic({
      success: (res) => {
        console.log(res.data)
        this.setData({
          classic: res.data
        })
        this.setRefreshing(true, 0)
        // this.fetchProducts()
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
    // setTimeout(() => {
    //   this.setData({
    //     triggered: true,
    //   })
    // }, 1000)
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

  onHeaderRefresh() {
    this.setData({
      pageNum: 1
    })
    this.fetchProducts()
  },

  onFooterRefresh() {
    this.fetchProducts()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleAddCount: function(e) {
    this.handleBuyCount(e.detail, true)
  },
  
  handleSubCount: function(e) {
    this.handleBuyCount(e.detail, false)
  },

  handleBuyCount: function(index, isAdd) {
    if (UserUtils.isLogined) {
      let userId = UserUtils.user.id
      classicModel.cartChangeCount(isAdd, 0, userId, {
        success: (res) => {
          console.log("sf=", res)
          this.handleBuyCountSuccess(index, isAdd, res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:登录
    }
  },

  //操作商品数量成功
  handleBuyCountSuccess: function (index, isAdd, res) {
    if (res == null || !res.success()) {
      //TODU 错误提示
      wx.showToast({
        title: res.msg,
        duration: 2000
      })
      return
    }
    var buyCount = this.data.products[index].buyCount
    buyCount = isAdd ? buyCount + 1 : buyCount - 1
    if (buyCount < 0) {
      return
    }
    var ab = "products[" + index + "].buyCount"
    this.setData({
      [ab]: buyCount
    })
  },

  handleTitleItem: function(e) {
    console.log("===========")
    const touchIndex = e.detail
    let data = this.data
    if (touchIndex == data.selectedTitleIndex &&
      data.spus != null && 
      data.spus.length > 0) {
          return
    }
    this.setData({
      selectedTitleIndex: e.detail,
      // spus: [],
      pageNum: 1,
      isLoadingMore: false
    })
    this.setRefreshing(true, 0)
  },
  
  fetchProducts:function() {
    console.log("<><><>><>><><><<>")
    var classicItem = this.data.classic[this.data.selectedTitleIndex]
    console.log(classicItem.id)
        this.setData({
      //     spus: classicItem.spus,
      // branches: classicItem.hotBranches,
          // isRefreshing: false
    })
    // return
    const pageNum = this.data.pageNum
    const pageSize = this.data.pageSize
    console.log("===================")
    console.log(pageNum)
    classicModel.fetchSpusByClassicId(classicItem.id, pageNum, pageSize, {
      success: (res) => {
        console.log(res.data)
        const data = this.data
        var spus = (data.pageNum == 1) ? [] : data.spus;
        const newSpus = res.data.list
        const hasMore = (newSpus != null && newSpus.length >= data.pageSize)
        this.setData({
          spus: spus + newSpus,
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
  }
})