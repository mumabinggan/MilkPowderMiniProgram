// pages/address/index.js
import { AddressViewModel } from '../../viewmodels/addressviewmodel.js'

import { UserUtils } from
 '../../utils/userutil.js'

import {
  JHRouterUtils
} from '../../utils/jsrouterutils.js' 

import {
  JHToastUtils
} from '../../utils/jhtoastutils.js' 

let addressVM = new AddressViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFullSucreen: getApp().globalData.isFullSucreen,
    
    items: null,
    canAdd: true,
    isSelected: false,
    startX: 0,  //开始坐标X
    startY: 0,  //开始坐标Y 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: "地址列表",
    })
    let canAdd = options.canAdd == '1'
    let isSelected = options.isSelected == '1'
    console.log("==========")
    console.log(canAdd)
    //接收参数
    this.setData({
      canAdd: canAdd,
      isSelected: isSelected
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
    this.fetchDatas()
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
    this.fetchDatas()
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

  fetchDatas: function(e) {
    wx.showLoading()
    addressVM.fetchAddressList(UserUtils.user.userId, {
      success: (res) => {
        console.log(res)
        wx.hideLoading()
        let data = res.data
        data.forEach(function (v, i) {
          if (v.isTouchMove)//只操作为true的
            v.isTouchMove = false;
        })
        this.setData({
          items: data,
        })
      },
      fail: (err) => {
        console.log(err)
        wx.hideLoading()
        JHToastUtils.show(err)
      }
    })
  },

  onAddAddress: function(e) {
    //TODO 添加地址
    JHRouterUtils.addAddress()
  },

  handleClickItem: function(e) {
    let item = e.target.dataset.id
    console.log(item)
    if (this.data.isSelected) {
      //TODO 选择地址
      let pages = getCurrentPages()
      let prevPage = pages[pages.length - 2]
      prevPage.setData({
        address: item
      })
      wx.navigateBack()
    }
  },

  handleEditItem: function(e) {
    let item = e.target.dataset.id
    JHRouterUtils.editAddress(item.id)
  },

  handleDelete: function (e) {
    console.log("点击删除")
    console.log(e.currentTarget.dataset.index)
    //this.triggerEvent('onDelete', e.detail)
    let index = e.currentTarget.dataset.index
    addressVM.deleteAddress(UserUtils.user.userId, e.detail, {
      success: (res) => {
        console.log(res.data)
        if (res.code == 0) {
          let items = this.data.items
          items.splice(index, 1)
          this.setData({
            items: items
          })
        } else {
          wx.showToast({
            title: "请求失败, 请稍后重试",
            duration: 2000,
            icon: "none",
            complete: function() {
              wx.navigateBack()
            }
          })
        }
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    console.log("=====================")
    //开始触摸时 重置所有删除
    this.data.items.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      items: this.data.items
    })
  },

  //滑动事件处理
  touchmove: function (e) {
    var that = this,
    index = e.currentTarget.dataset.index,//当前索引
    startX = that.data.startX,//开始X坐标
    startY = that.data.startY,//开始Y坐标
    touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
    touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标

    //获取滑动角度  
    angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

    console.log(e.currentTarget)

    console.log("===move==");
    console.log(index);

    that.data.items.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) {//右滑
          v.isTouchMove = false
        } else {
          v.isTouchMove = true
        }      
      }
    })
    
    //更新数据
    that.setData({
      items: that.data.items
    })
  },

  /**
    * 计算滑动角度
    * @param {Object} start 起点坐标
    * @param {Object} end 终点坐标
    */
  angle: function (start, end) {
    var _X = end.X - start.X,
    _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  //删除事件
  delete: function (e) {
    this.data.items.splice(e.currentTarget.dataset.index, 1)
    this.setData({    
      items: this.data.items
    })
  }
})