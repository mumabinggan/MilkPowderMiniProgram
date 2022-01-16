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
  previewOrder(param, callback) {
    http.request({
      url: apiConfig.order_preview,
      method: 'POST',
      data: {
        useIntegration: param.useIntegration,
        coupons: param.coupons
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

  previewOrderByItem(item, param, callback) {
    console.log("=======previewOrderByItem=======")
    console.log(item)
    http.request({
      url: apiConfig.order_preview_by_item,
      method: 'POST',
      data: {
        spuId: item.spuId,
        skuId: item.skuId,
        count: item.count,
        useIntegration: param.useIntegration,
        coupons: param.coupons
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