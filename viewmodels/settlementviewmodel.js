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
  previewOrder(callback) {
    http.request({
      url: apiConfig.order_preview,
      method: 'POST',
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  confirmOrder(data, callback) {
    http.request({
      url: apiConfig.order_confirm,
      method: 'POST',
      data: {
        userId: data.userId,
        shippingId: data.shippingId,
        receiveTime: data.receiveTime,
        remarks: data.remarks
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