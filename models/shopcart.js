import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ShopCartProductItem
} from 'shopcartproductitem.js'

import {
  ShopCartPrice
} from 'shopcartprice.js'

class ShopCart {
  constructor() {
    this.price = new ShopCartPrice()
    this.products = []
  }
}

export { ShopCart }