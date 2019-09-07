import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  ProductDetailResponse
} from '../models/productdetailresponse.js'

class ProductViewModel {
  fetchProductDetail(userId, callback) {
    let res = ProductDetailResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.product_detail,
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

export { ProductViewModel }