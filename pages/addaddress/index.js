// pages/addaddress/index.js
import {
  Province
} from '../../models/province.js'

import {
  UserUtils
} from '../../utils/userutil.js'

import {
  Address
} from '../../models/address.js'

import { AddressViewModel } from '../../viewmodels/addressviewmodel.js'

let addressVM = new AddressViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAdd: false,
    addressId: null,
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
    isDefault: false,
    regionStr: "",
    region: [Province.shanXi(),
      Province.hebei(),
      Province.henan()],
    showRegionPicker: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isAdd: (options.isAdd == "1")?true:false,
      addressId: options.addressId
    })
    let data = this.data;
    let title = data.isAdd ? "增加地址" : "修改地址"
    wx.setNavigationBarTitle({
      title: title,
    })

    if (!data.isAdd && data.addressId != null) {
      let that = this
      addressVM.fetchAddress(UserUtils.user.id, data.addressId, {
        success: (res) => {
          console.log(res.data)
          let item = res.data
          this.setData({
            name: item.name,
            phone: item.phone,
            provinceId: item.provinceId,
            provinceName: item.provinceName,
            provinceId: item.provinceId,
            cityName: item.cityName,
            cityId: item.cityId,
            countyName: item.countyName,
            countyId: item.countyId,
            townName: item.townName,
            townId: item.townId,
            address: item.address,
            isDefault: item.isDefault,
            item: item
          })

          let regionStr = this.getRegionStr()
          this.setData({
            regionStr: regionStr
          })
        },
        fail: (err) => {
          console.log(err)
        }
      })
    }

    addressVM.fetchAreas({
      success: (res) => {
        let data = res.data
        if (data.code == 0) {
          this.setData({
            region: res.data.data,
          })
        }
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

  switchChange: function(e) {
    const value = e.detail.value
    this.setData({
      isDefault: value
    })
  },

  handleInputPhone: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },

  handleInputName: function (e) {
    this.setData({
      name: e.detail.value
    })
  },

  handleInputAddress: function (e) {
    this.setData({
      address: e.detail.value
    })
  },

  onSave: function() {
    //保存地址
    let item = this.data.item
    if (item == null) {
      item = new Address()
    }
    let userId = UserUtils.user.id
    let data = this.data
    item.userId = userId
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
    item.address = data.address
    item.isDefault = data.isDefault
    addressVM.saveAddress(userId, item, {
      success: (res) => {
        //TODO toast提示并且返回上一层
        wx.showToast({
          title: "地址保存成功",
          duration: 2000,
          complete: function() {
            wx.navigateBack()
          }
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
      townId: region[3].id,
    })
    let data = this.data
    let regionStr = this.getRegionStr()
    this.setData({
      regionStr: regionStr
    })
    console.log(this.data.name)
  },

  getRegionStr:function(e) {
    let data = this.data
    return data.provinceName + " " + data.cityName + " " + data.countyName + " " + data.townName
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