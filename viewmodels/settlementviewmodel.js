import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  SettlementResponse
} from '../models/settlementresponse.js'

let http = new HTTP()

class SettlementViewModel {
  fetchSettlement(userId, productIds, callback) {
    let res = SettlementResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.product_detail,
      method: 'POST',
      data: {
        userId: userId,
        products: productIds
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

export { SettlementViewModel }