import {
  Order
} from 'order.js'

import {
  JHBaseResponse
} from 'baseresponse.js'

class OrderListResponse extends JHBaseResponse {
  constructor() {
    super()
    this.data = null;
  }

  static test() {
    let response = new OrderListResponse()
    response.code = 1
    response.msg = "得到成功"
    response.data = [Order.test(),
      Order.test(),
      Order.test(),
      Order.test()]
    return response
  }
}

export { OrderListResponse }