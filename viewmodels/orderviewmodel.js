import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  OrderListResponse
} from '../models/orderlistresponse.js'

import {
  OrderDetailResponse
} from '../models/orderdetailresponse.js'

let http = new HTTP()

class OrderViewModel {
  fetchOrderList(userId, type, callback) {
    let res = OrderListResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.order_list,
      method: 'POST',
      data: {
        userId: userId,
        type: type
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  fetchOrderDetail(userId, orderId, callback) {
    let res = OrderDetailResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.order_list,
      method: 'POST',
      data: {
        userId: userId,
        orderId: orderId
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

export { OrderViewModel }