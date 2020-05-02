// pages/community/index.js
import {
  HTTP
} from '../../utils/http.js'

import {
  apiConfig
} from '../../api.js'

let http = new HTTP()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      "ss", "学府名都去掉的都掉", "asfd"
    ],
    selectedId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      selectedId: options.id
    })
    this.fetchItems()
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

  fetchItems: function() {
    http.request({
      url: apiConfig.fetch_deliverycommunity,
      method: 'POST',
      success: (res) => {
        console.log(res)
        if (res.code == 0) {
          this.setData({
            items: res.data
          })
        } else {
          wx.showToast({
            title: res.msg,
            duration: 2000,
            complete: function() {
              wx.navigateBack()
            }
          })
        }
      },
      fail: (err) => {
        wx.showToast({
          title: "请求失败请重试",
          duration: 2000,
          complete: function() {
            wx.navigateBack()
          }
        })
      }
    })
  },

  onTap: function(e) {
    let index = e.currentTarget.dataset.id
    let item = this.data.items[index]
    console.log(item)
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      communityId: item.id,
      communityName: item.name
    })
    wx.navigateBack()
  }

})