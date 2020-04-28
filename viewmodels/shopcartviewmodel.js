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

import { UserUtils } from '../utils/userutil.js'

import { JHObjectUtils } from '../utils/objectutils'

import { JHArrayUtils } from '../utils/arrayutils'

let http = new HTTP()

class ShopCartViewModel {
  
  fetchShopCartList(callback) {
    http.request({
      url: apiConfig.cart_list,
      method: 'POST',
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  fetchShopCartListOfLogout(list, callback) {
    if (JHArrayUtils.isNullOrEmpty(list)) {
      return callback.success(new ShopCartResponse())
    }
    http.request({
      url: apiConfig.cart_list_unlogin,
      method: 'POST',
      data: {
        list: list
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  addGoodToShopCart(item, callback) {
    http.request({
      url: apiConfig.add_good_to_cart,
      method: 'POST',
      data: {
        spuId: item.id,
        skuId: item.skuId,
        count: 1,
        checked: true,
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  changeCartShopCount(item, isAdd, callback) {
    http.request({
      url: isAdd ? apiConfig.cart_add_count : apiConfig.cart_sub_count,
      method: 'POST',
      data: {
        id: item.id
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

  selectCartShopProduct(item, checked, callback) {
    http.request({
      url: apiConfig.cart_check_product,
      method: 'POST',
      data: {
        id: item.id,
        checked: checked
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

  selectCartShopAllProduct(checked, callback) {
    http.request({
      url: apiConfig.cart_check_all_product,
      method: 'POST',
      data: {
        checked: checked
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