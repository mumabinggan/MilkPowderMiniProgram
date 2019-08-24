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

import {
  SelectShopCartProductResponse
} from '../models/selectshopcartproductresponse.js'


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

  changeCartShopCount(isAdd, userId, productId, callback) {
    let res = AddCartResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: isAdd ? apiConfig.cart_add_count : apiConfig.cart_sub_count,
      method: 'POST',
      data: {
        userId: userId,
        productId: productId
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

  selectCartShopProduct(isSelect, userId, productId, callback) {
    let res = SelectShopCartProductResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: isSelect ? apiConfig.cart_select_product : apiConfig.cart_cancel_select_product,
      method: 'POST',
      data: {
        userId: userId,
        productId: productId
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

  selectCartShopAllProduct(isSelect, userId, callback) {
    let res = SelectShopCartProductResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: isSelect ? apiConfig.cart_select_all_product : apiConfig.cart_cancel_select_all_product,
      method: 'POST',
      data: {
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

export { ShopCartViewModel }