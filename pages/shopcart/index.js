// pages/cart/index.js
import { ShopCartViewModel } from '../../viewmodels/shopcartviewmodel.js'

import { UserUtils } from '../../utils/userutil.js'
import { ArrayUtils } from '../../utils/arrayutils.js'

let shopcartVM = new ShopCartViewModel()

var ChangeProductType = {
  //改变数量
  AddCount: 0,
  SubCount: 1,
  //改变选中状态
  Selected: 2,
  UnSelected: 3,
  //选中所有
  SelectAll: 4,
  UnSelectAll: 5,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcart: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车',
    })
    shopcartVM.fetchShopCartList(UserUtils.user.userId, {
      success: (res) => {
        console.log(res)
        this.setData({
          shopcart: res.data
        })
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

  handleAddCount: function (e) {
    console.log(e.detail)
    this.handleBuyCount(e.detail, true)
  },

  handleSubCount: function (e) {
    this.handleBuyCount(e.detail, false)
  },

  handleBuyCount: function (productId, isAdd) {
    if (UserUtils.isLogined) {
      let userId = UserUtils.user.id
      shopcartVM.changeCartShopCount(isAdd, productId, userId, {
        success: (res) => {
          this.handleProductSuccess(productId, isAdd ? ChangeProductType.AddCount : ChangeProductType.SubCount, res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:登录
    }
  },

  handleSelectProduct: function (e) {
    let productId = e.detail
    let isSelect = true
    let products = this.data.shopcart.products
    for (let item of products) {
      if (item.id == productId) {
        isSelect = item.isSelected
        break
      }
    }
    isSelect = !isSelect
    console.log("sd" + isSelect)
    if (UserUtils.isLogined) {
      let userId = UserUtils.user.id
      shopcartVM.selectCartShopProduct(isSelect, productId, userId, {
        success: (res) => {
          this.handleProductSuccess(productId, isSelect ? ChangeProductType.Selected : ChangeProductType.UnSelected, res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:登录
    }
  },

  handleSelectAllProduct: function (e) {
    let isSelect = !e.detail
    console.log("sd" + isSelect)
    if (UserUtils.isLogined) {
      let userId = UserUtils.user.id
      shopcartVM.selectCartShopAllProduct(isSelect, userId, {
        success: (res) => {
          this.handleProductSuccess(0, isSelect ? ChangeProductType.SelectAll : ChangeProductType.UnSelectAll, res)
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
  handleProductSuccess: function (productId, changeType, res) {
    if (res == null || !res.success()) {
      //TODO 错误提示
      wx.showToast({
        title: res.msg,
        duration: 2000
      })
      return
    }
    var products = this.data.shopcart.products
    for (let item of products) {
      if (changeType == ChangeProductType.SelectAll ||
          changeType == ChangeProductType.UnSelectAll) {
        item.isSelected = (changeType == ChangeProductType.SelectAll)
      } else {
        if (item.id == productId) {
          if (changeType == ChangeProductType.AddCount ||
            changeType == ChangeProductType.SubCount) {
            item.buyCount = item.buyCount + ((changeType == ChangeProductType.AddCount) ? 1 : -1)
            if (item.buyCount == 0) {
              ArrayUtils.removeItem(products, item)
            }
          }
          if (changeType == ChangeProductType.Selected ||
            changeType == ChangeProductType.UnSelected) {
            item.isSelected = (changeType == ChangeProductType.Selected)
          }
          break;
        }
      }
    }
    let data = res.data
    this.setData({
      'shopcart.products': products,
      'shopcart.totalPrice': data.totalPrice,
      'shopcart.currentTotalPrice': data.currentTotalPrice,
      'shopcart.favourablePrice': data.favourablePrice
    })
  },

  handleTap:function() {

  }
})