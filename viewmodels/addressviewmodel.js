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
      data: {
        userId: userId
      },
      success: (res) => {
        if (res.code == 0) {
          callback.success(res)
        } else {
          callback.fail(res.msg)
        }
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
      data: {
        id: addressId,
        userId: userId
      },
      success: (res) => {
        console.log("====success====")
        console.log(res)
        callback.success(res)
      },
      fail: (err) => {
        console.log("====error====")
        console.log(err)
        callback.fail(err)
      }
    })
  }

  saveAddress(userId, address, callback) {
    console.log("=====sdf==")
    console.log(userId)
    http.request({
      url: (address.id === undefined) ? apiConfig.address_add : apiConfig.address_edit,
      method: 'POST',
      data: {
        id: SafeValueUtils.safeValue(address.id, true),
        userId: SafeValueUtils.safeValue(userId),
        name: SafeValueUtils.safeValue(address.name),
        phone: SafeValueUtils.safeValue(address.phone),
        communityId: SafeValueUtils.safeValue(address.communityId, true),
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
    http.request({
      url: apiConfig.address_delete,
      method: 'POST',
      data: {
        id: addressId,
        userId: userId
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