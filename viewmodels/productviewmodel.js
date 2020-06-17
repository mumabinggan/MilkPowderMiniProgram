import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  ProductDetailResponse
} from '../models/productdetailresponse.js'

let http = new HTTP()

class ProductViewModel {
  fetchProductDetail(spuId, callback) {
    http.request({
      url: apiConfig.product_detail,
      method: 'POST',
      data: {
        spuId: spuId
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