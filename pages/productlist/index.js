// pages/productlist/index.js
import { ProductListViewModel } from '../../viewmodels/productlistvm.js'

import { ShopCartViewModel } from '../../viewmodels/shopcartviewmodel.js'

import {
  ProductSortFilterCondition, ProductSortItem
} from '../../models/productsortfiltercondition.js'

import { UserUtils } from '../../utils/userutil.js'
import { ArrayUtils } from '../../utils/arrayutils.js'

const productListVM = new ProductListViewModel()
const shopcartVM = new ShopCartViewModel()
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    sortfilterCondition: productListVM.sortfilterCondition,
    sortlist: productListVM.sortfilterCondition.sortlist,
    resetclassics: [...productListVM.sortfilterCondition.classics],
    classiclist: [...productListVM.sortfilterCondition.classics],
    resetbranches: [...productListVM.sortfilterCondition.branches],
    branchlist: [...productListVM.sortfilterCondition.branches],
    shopCount: app.globalData.shopcartCount,
    showTopIcon: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索',
    })
    console.log(this.data.sortfilterCondition.title)
    //TODO:拿到上级传的信息
    productListVM.fetchProductList({
      success: (res) => {
        this.setData({
          list: res.data
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

  //加入购物车操作
  handleAddToCart:function(e) {
    //加入购物车
    if (UserUtils.isLogined) {
      const productId = e.detail
      let userId = UserUtils.user.id
      shopcartVM.changeCartShopCount(true, productId, userId, {
        success: (res) => {
          this.handleAddToShopCartSuccess(productId)
        },
        fail: (err) => {
          console.log(err)
        }
      })
    } else {
      //TODO:登录
    }
  },

  //处理加入购物车成功(增加数量)
  handleAddToShopCartSuccess: function(productId) {

  },

  //处理行,列展示
  handleChangeShowType: function () {
    let rowType = this.data.sortfilterCondition.isRowType
    this.setData({
      'sortfilterCondition.isRowType': !rowType,
    })
  },

  handleHideBranchFilterList:function(e) {
    this.setData({
      'sortfilterCondition.isShowBranchList': false
    })
  },

  handleHideClassicFilterList: function (e) {
    this.setData({
      'sortfilterCondition.isShowClassicList': false
    })
  },

  handleHideSortList:function(e) {
    this.setData({
      'sortfilterCondition.isShowSortList': false
    })
  },

  handleShowSortList:function(e) {
    const show = this.data.sortfilterCondition.isShowSortList
    this.setData({
      'sortfilterCondition.isShowSortList': !show,
      'sortfilterCondition.isShowClassicList': false,
      'sortfilterCondition.isShowBranchList': false
    })
  },

  handleShowClassicList: function (e) {
    const show = this.data.sortfilterCondition.isShowClassicList
    this.setData({
      'sortfilterCondition.isShowSortList': false,
      'sortfilterCondition.isShowClassicList': !show,
      'sortfilterCondition.isShowBranchList': false
    })
  },

  handleShowBranchList: function (e) {
    const show = this.data.sortfilterCondition.isShowBranchList
    this.setData({
      'sortfilterCondition.isShowSortList': false,
      'sortfilterCondition.isShowClassicList': false,
      'sortfilterCondition.isShowBranchList': !show
    })
  },

  handleSortItem:function(e) {
    this.handleHideSortList()
    var arr = this.data.sortfilterCondition.sortlist
    let id = e.detail
    for (let item of arr) {
      if (item.id == id) {
        item.isSelected = true
        this.setData({
          'sortfilterCondition.sortItem': item
        })
      } else {
        item.isSelected = false
      }
    }
    this.setData({
      sortlist: arr
    })
  },

  handleClassicFilterItem:function(e) {
    let id = e.detail
    let classics = this.data.classiclist
    for (let item of classics) {
      if (item.id == id) {
        item.isSelected = !item.isSelected
        break
      }
    }
    this.setData({
      classiclist: classics
    })
  },

  handleBranchFilterItem: function (e) {
    let id = e.detail
    let branches = this.data.branchlist
    for (let item of branches) {
      if (item.id == id) {
        item.isSelected = !item.isSelected
        break
      }
    }
    this.setData({
      branchlist: branches
    })
  },

  handleResetBranch:function() {
    const resetbranches = [...this.data.resetbranches]
    const hasSelectedBranch = this.hasSelectedArr(resetbranches)
    this.setData({
      branchlist: resetbranches,
      'sortfilterCondition.branches': resetbranches,
      'sortfilterCondition.hasSelectedBranch': hasSelectedBranch
    })
  },

  handleResetClassic: function () {
    const resetclassics = [...this.data.resetclassics]
    const hasSelectedClassic = this.hasSelectedArr(resetclassics)
    this.setData({
      classiclist: resetclassics,
      'sortfilterCondition.classics': resetclassics,
      'sortfilterCondition.hasSelectedClassic': hasSelectedClassic
    })
  }, 

  handleConfirmBranch: function () {
    const hasSelectedBranch = this.hasSelectedArr(this.data.branchlist)
    this.setData({
      'sortfilterCondition.branches': this.data.branchlist,
      'sortfilterCondition.hasSelectedBranch': hasSelectedBranch
    })
    this.handleHideBranchFilterList()
  },

  handleConfirmClassic: function () {
    const hasSelectedClassic = this.hasSelectedArr(this.data.classiclist)
    this.setData({
      'sortfilterCondition.classics': this.data.classiclist,
      'sortfilterCondition.hasSelectedClassic': hasSelectedClassic
    })
    this.handleHideClassicFilterList()
  },

  hasSelectedArr:function(arr) {
    let hasSelected = false
    for (const item of arr) {
      if (item.isSelected) {
        hasSelected = true
        break
      }
    }
    return hasSelected
  },

  //跳转到购物车
  handleToShopCart:function() {

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
  }
})