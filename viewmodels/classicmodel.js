import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  ClassicResponse
} from '../models/classicresponse.js'

import {
  AddCartResponse, AddCart
} from '../models/addcartresponse.js'

let http = new HTTP()

class ClassicModel {
  
  fetchClassic(callback) {
    let res = ClassicResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.classic_path,
      success: (res) => {
        res = ClassicResponse.test()
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }  

  cartChangeCount(isAdd, userId, productId, callback) {
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
}

export { ClassicModel }