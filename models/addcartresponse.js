import {
  ShopCartResponse
} from 'shopcartresponse.js'

import {
  ShopCart
} from 'shopcart.js'

class AddCartResponse extends ShopCartResponse {
  constructor() {
    super()
  }

  static test() {
    let item = new AddCartResponse()
    item.code = 1
    item.msg = "得到成功"
    item.data = ShopCart.test()
    return item
  }
}

export { AddCartResponse }