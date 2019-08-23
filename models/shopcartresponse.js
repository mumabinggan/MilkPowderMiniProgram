import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ShopCart
} from 'shopcart.js'

class ShopCartResponse extends JHBaseResponse {
  constructor() {
    super()
  }

  static test() {
    let item = new ShopCartResponse()
    item.code = 1
    item.msg = "得到成功"
    item.data = ShopCart.test()
    return item
  }
}

export { ShopCartResponse }