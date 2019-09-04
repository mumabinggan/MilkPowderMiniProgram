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

let http = new HTTP()

class AddressViewModel {
  fetchAddressList(userId, callback) {
    let res = AddressListResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.address_list,
      method: 'POST',
      data: {
        userId: userId
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  saveAddress(userId, address, callback) {
    let res = AddAddressResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: (address.id == 0) ? apiConfig.address_add : apiConfig.address_edit,
      method: 'POST',
      data: {
        userId: userId,
        name: address.name,
        phone: address.phone,
        privinceId: address.privinceId,
        privinceName: address.privinceName,
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

  editAddress(userId, address, callback) {
    let res = JHBaseResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.address_edit,
      method: 'POST',
      data: {
        userId: userId,
        addressId: address.id,
        name: address.name,
        phone: address.phone,
        privinceId: address.privinceId,
        privinceName: address.privinceName,
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
        privinceId: address.privinceId,
        privinceName: address.privinceName,
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
}

export { AddressViewModel }