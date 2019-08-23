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
    products: []
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
        console.log(res)
        this.setData({
          classic: res.data,
        })
        this.fetchProducts()
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
    this.setData({
      selectedTitleIndex: e.detail
    })
    this.fetchProducts()
  },
  
  fetchProducts:function() {
    var classicItem = this.data.classic[this.data.selectedTitleIndex]
    this.setData({
      products: classicItem.products
    })
  }
})