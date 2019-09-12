import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  OrderDetail
} from 'orderdetail.js'

class OrderDetailResponse extends JHBaseResponse {
  constructor() {
    super()
  }

  static test() {
    let item = new OrderDetailResponse()
    item.code = 1
    item.msg = "得到成功"
    item.data = OrderDetail.test()
    return item
  }
}

export { OrderDetailResponse }