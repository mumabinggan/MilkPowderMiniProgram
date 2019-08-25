import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ShopCartProductItem
} from 'shopcartproductitem.js'

class ShopCart {
  constructor() {
    totalPrice: 34.0;
    currentTotalPrice: 232.0;
    favourablePrice: 2.0;
    products: []
  }

  static test() {
    let item = new ShopCart()
    item.totalPrice = 4322.00
    item.currentTotalPrice = 12;
    item.favourablePrice = 122;
    let product = ShopCartProductItem.test()
    let product1 = ShopCartProductItem.test()
    let product2 = ShopCartProductItem.test()
    let product3 = ShopCartProductItem.test()
    let product4 = ShopCartProductItem.test()
    let product5 = ShopCartProductItem.test()
    let product6 = ShopCartProductItem.test()
    let product7 = ShopCartProductItem.test()
    item.products = [product, product1, product2, 
      product3, product4, product5, product6, product7]
    return item
  }
}

export { ShopCart }