// pages/addaddress/index.js
import {
  Province
} from '../../models/province.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: null,
    name: "",
    phone: "",
    address: "",
    provinceName: "",
    provinceId: "",
    cityName: "",
    cityId: "",
    countyName: "",
    countyId: "",
    townName: "",
    townId: "",
    isDefault: true,
    regionStr: "",
    region: [Province.shanXi(),
      Province.hebei(),
      Province.henan()],
    showRegionPicker: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  switchChange: function(e) {
    const value = e.detail.value
    this.setData({
      isDefault: value
    })
  },

  onSave: function() {
    //保存地址
    let item = this.data.item
    if (item == null) {
      item = new Address()
    }
    let data = this.data
    item.name = data.name
    item.phone = data.phone
    item.provinceId = data.provinceId
    item.provinceName = data.provinceName
    item.cityName = data.cityName
    item.cityId = data.cityId
    item.countyId = data.countyId
    item.countyName = data.countyName
    item.townName = data.townName
    item.townId = data.townId
    item.isDefault = data.isDefault
    
    addressVM.saveAddress(UserUtils.user.userId, item, {
      success: (res) => {
        console.log(res)
        //TODO toast提示并且返回上一层
        wx.showToast({
          title: "地址保存成功",
          duration: 2000
        })
      },
      fail: (err) => {
        console.log(err)
        wx.showToast({
          title: "地址保存失败, 请稍候重试",
          duration: 2000
        })
      }
    })
  },

  handleSelectRegionFinish:function(e) {
    const region = e.detail["region"]
    this.setData({
      showRegionPicker: false,
      provinceName: region[0].name,
      provinceId: region[0].id,
      cityName: region[1].name,
      cityId: region[1].id,
      countyName: region[2].name,
      countyId: region[2].id,
      townName: region[3].name,
      townId: region[3].id
    })
  },

  onSelectRegion:function(e) {
    this.setData({
      showRegionPicker: true
    })
  },

  handleHidePicker:function(e) {
    this.setData({
      showRegionPicker: false
    })
  }
})