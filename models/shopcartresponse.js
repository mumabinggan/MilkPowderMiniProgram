import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ShopCart
} from 'shopcart.js'

class ShopCartResponse extends JHBaseResponse {
  constructor() {
    super()
    this.data = new ShopCart()
  }
}

export { ShopCartResponse }