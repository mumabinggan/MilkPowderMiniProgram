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
  
  constructor(spusRequest) {
    this.spusRequest= spusRequest;
  }

  fetchClassic(callback) {
    // let res = ClassicResponse.test()
    // console.log(res)
    // callback.success(res)
    // return
    let request = http.request({
      method: "POST",
      url: apiConfig.classic_path,
      success: (res) => {
        console.log(res)
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
    console.log("=========>>========")
    console.log(request)
  }

  fetchSpusByClassicId(id, pageNum, pageSize, callback) {
    // let res = ClassicResponse.test()
    // console.log(res)
    // callback.success(res)
    // return
    if (this.spusRequest != null) {
      this.spusRequest.abort()
      this.spusRequest = null
    }
    this.spusRequest = http.request({
      method: "POST",
      url: apiConfig.classic_spus,
      data: {
        id: id,
        pageNum: pageNum,
        pageSize: pageSize
      },
      success: (res) => {
        console.log(res)
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