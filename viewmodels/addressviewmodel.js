import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  AddressListResponse
} from '../models/addresslistresponse.js'

import {
  AddAddressResponse
} from '../models/addaddressresponse.js'

import {
  SafeValueUtils
} from '../utils/safevalueutils.js'

let http = new HTTP()

class AddressViewModel {
  fetchAddressList(userId, callback) {
    http.request({
      url: apiConfig.address_list,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("cookie") // 设置cookie
      },
      data: {
        userId: userId
      },
      success: (res) => {
        callback.success(res.data)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  fetchAddress(userId, addressId, callback) {
    http.request({
      url: apiConfig.address_detail,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("cookie") // 设置cookie
      },
      data: {
        shipId: addressId
      },
      success: (res) => {
        callback.success(res.data)
      },
      fail: (err) => {
        console.log(err)
        callback.fail(err)
      }
    })
  }

  saveAddress(userId, address, callback) {
    console.log("=======")
    http.request({
      url: (address.id === undefined) ? apiConfig.address_add : apiConfig.address_edit,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'cookie': wx.getStorageSync("cookie") // 设置cookie
      },
      data: {
        id: SafeValueUtils.safeValue(address.id, true),
        userId: SafeValueUtils.safeValue(userId),
        name: SafeValueUtils.safeValue(address.name),
        phone: SafeValueUtils.safeValue(address.phone),
        provinceId: SafeValueUtils.safeValue(address.provinceId, true),
        cityId: SafeValueUtils.safeValue(address.cityId, true),
        countyId: SafeValueUtils.safeValue(address.countyId, true),
        townId: SafeValueUtils.safeValue(address.townId, true),
        address: SafeValueUtils.safeValue(address.address),
        isDefault: address.isDefault
      },
      success: (res) => {
        callback.success(res)
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
        callback.fail(err)
      }
    })
  }

  deleteAddress(userId, addressId, callback) {
    let res = JHBaseResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.address_delete,
      method: 'POST',
      data: {
        userId: userId,
        name: address.name,
        phone: address.phone,
        provinceId: address.provinceId,
        provinceName: address.provinceName,
        cityId: address.cityId,
        cityName: address.cityName,
        countyId: address.countyId,
        countyName: address.countyName,
        townId: address.townId,
        townName: address.townName,
        address: address.address
      },
      success: (res) => {
        callback.success(res)
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
        callback.fail(err)
      }
    })
  }

  fetchAreas(callback) {
    http.request({
      url: apiConfig.fetch_area,
      method: 'GET',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        console.log(err)
        callback.fail(err)
      }
    })
  }
}

export { AddressViewModel }