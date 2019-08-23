import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  AddCartResponse
} from '../models/addcartresponse.js'

import {
  ShopCartResponse
} from '../models/shopcartresponse.js'

let http = new HTTP()

class ShopCartViewModel {
  fetchShopCartList(userId, callback) {
    let res = ShopCartResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.cart_list,
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
}

export { ShopCartViewModel }