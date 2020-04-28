// pages/cart/index.js
import { ShopCartViewModel } from '../../viewmodels/shopcartviewmodel.js'

import { UserUtils } from '../../utils/userutil.js'
import { JHArrayUtils } from '../../utils/arrayutils.js'
import {
  OMCartStorageUtils
} from '../../utils/cartstorageutils.js'
import {
  ShopCartProductLocalItem
} from '../../models/shopcartproductlocalitem.js'
import {
  ShopCart
} from '../../models/shopcart.js'
import {
  JHLoadingUtils
} from '../../utils/jhloadingutils.js'


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
    getApp().globalData.triggerRefreshShopcart = false
    let count = OMCartStorageUtils.fetchItemsCountSync()
    this.loadDatas({
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
    // wx.showLoading()
    getApp().globalData.triggerRefreshShopcart = true
    if (getApp().globalData.triggerRefreshShopcart) {
      this.loadDatas({
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
    }
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

  loadDatas: function (callback) {
    if (UserUtils.isLogined()) {
      shopcartVM.fetchShopCartList({
        success: (res) => {
          callback.success(res)
        },
        fail: (err) => {
          callback.fail(err)
        }
      })
    } else {
      let list = getApp().globalData.shopcartBriefListOfLogout
      shopcartVM.fetchShopCartListOfLogout(list, {
        success: (res) => {
          callback.success(res)
        },
        fail: (err) => {
          callback.fail(err)
        }
      })
    }
  },

  handleAddCount: function (e) {
    console.log(e.detail)
    this.handleBuyCount(e.detail, true)
  },

  handleSubCount: function (e) {
    this.handleBuyCount(e.detail, false)
  },

  handleBuyCount: function (index, isAdd) {
    let products = this.data.shopcart.products
    let item = products[index]
    if (UserUtils.isLogined()) {
      let that = this
      shopcartVM.changeCartShopCount(item, isAdd, {
        success: (res) => {
          that.handleResponse(res)
        },
        fail: (err) => {
          console.log("网络访问失败, 请稍后重试")
        }
      })
    } else {
      //TODO:未登录
      console.log("测试+++++++")
      console.log(isAdd)
      let localItem = ShopCartProductLocalItem.fromShopCartProduct(item)
      if (isAdd) {
        OMCartStorageUtils.addItemCountToCartAsync(localItem)
      } else {
        OMCartStorageUtils.subItemCountToCartAsync(localItem)
      }
      JHLoadingUtils.show()
      this.loadDatas({
        success: (res) => {
          JHLoadingUtils.hide()
          this.setData({
            shopcart: res.data
          })
          console.log(this.data.shopcart)
        },
        fail: (err) => {
          JHLoadingUtils.hide()
          console.log(err)
          if (isAdd) {
            OMCartStorageUtils.subItemCountToCartAsync(localItem)
          } else {
            OMCartStorageUtils.addItemCountToCartAsync(localItem)
          }
        }
      })
    }
  },

  handleSelectProduct: function (e) {
    let index = e.detail
    let products = this.data.shopcart.products
    let item = products[index]
    if (UserUtils.isLogined()) {
      console.log("isLogin")
      let that = this
      shopcartVM.selectCartShopProduct(item, !item.checked, {
        success: (res) => {
          that.handleResponse(res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:登录
      let localItem = ShopCartProductLocalItem.fromShopCartProduct(item)
      localItem.checked = !localItem.checked
      OMCartStorageUtils.updateItemCheckedToCartAsync(localItem)
      JHLoadingUtils.show()
      this.loadDatas({
        success: (res) => {
          JHLoadingUtils.hide()
          this.setData({
            shopcart: res.data
          })
          console.log(this.data.shopcart)
        },
        fail: (err) => {
          JHLoadingUtils.hide()
          console.log(err)
          localItem.checked = !localItem.checked
          OMCartStorageUtils.updateItemCheckedToCartAsync(localItem)
        }
      })
    }
  },

  handleSelectAllProduct: function (e) {
    let checked = !e.detail
    if (UserUtils.isLogined()) {
      let that = this
      shopcartVM.selectCartShopAllProduct(checked, {
        success: (res) => {
          that.handleResponse(res)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:未登录
      let list = getApp().globalData.shopcartBriefListOfLogout
      if (JHArrayUtils.isNullOrEmpty(list)) {
        return
      }
      list.concat().forEach(item => {
        item.checked = checked
      })
      wx.showLoading()
      shopcartVM.fetchShopCartListOfLogout(list, {
        success: (res) => {
          this.setData({
            shopcart: res.data
          })
          wx.hideLoading()
        },
        fail: (err) => {
          wx.hideLoading()
          wx.showToast(err)
        }
      })
    }
  },

  handleResponse: function(res) {
    if (res.code == 0) {
      this.setData({
        shopcart: res.data
      })
    } else {
      wx.showToast({
        title: res.msg,
        icon: "none"
      })
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
              JHArrayUtils.removeItem(products, item)
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

  //跳转到详情页面
  handleTouchProduct:function(e) {
    let index = e.detail
    let products = this.data.shopcart.products[index]
    if (JHArrayUtils.isNullOrEmpty(products)) {
      return
    }
    let item = products[index]
  }
})