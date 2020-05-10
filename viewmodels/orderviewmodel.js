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

  fetchOrderList(orderType, pageNum, pageSize, callback) {
    let requestTask = http.request({
      url: apiConfig.order_list,
      method: 'POST',
      data: {
        orderType: orderType,
        pageNum: pageNum,
        pageSize: 10
      },
      success: (res) => {
        console.log("===========test=======order")
        console.log(res.data)
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
    return requestTask
  }

  fetchOrderDetail(orderNo, callback) {
    http.request({
      url: apiConfig.order_detail,
      method: 'POST',
      data: {
        orderNo: orderNo
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