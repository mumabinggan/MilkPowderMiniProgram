// pages/productlist/index.js
import { ProductListViewModel } from '../../viewmodels/productlistvm.js'

import { UserUtils } from '../../utils/userutil.js'
import { ArrayUtils } from '../../utils/arrayutils.js'

let productListVM = new ProductListViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    isRowType: true,
    isShowSortList: false,
    isShowBranchList: true,
    isShowClassicList: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索',
    })
    var pCategoryId, cCateogryIds, branchIds
    productListVM.fetchProductList(pCategoryId, cCateogryIds, branchIds, {
      success: (res) => {
        this.setData({
          list: res.data
        })
        console.log(this.data.list)
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

  //处理行,列展示
  handleChangeShowType: function () {
    let rowType = this.data.isRowType
    this.setData({
      isRowType: !rowType
    })
  }
})