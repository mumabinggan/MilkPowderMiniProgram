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

  fetchGoodsSku(spuId, specValues, callback) {
    http.request({
      url: apiConfig.product_fetch_sku,
      method: 'POST',
      data: {
        spuId: spuId,
        specValues: specValues
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
}

export { ProductViewModel }