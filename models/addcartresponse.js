import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  AddShopCart
} from 'addshopcart.js'

class AddCartResponse extends JHBaseResponse {
  constructor() {
    super()
  }

  static test() {
    let item = new AddCartResponse()
    item.code = 1
    item.msg = "得到成功"
    item.data = AddShopCart.test()
    return item
  }
}

export { AddCartResponse }