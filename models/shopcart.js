import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ShopCartProductItem
} from 'shopcartproductitem.js'

class ShopCart {
  constructor() {
    price: 0.0;
    des: null;
    products: []
  }

  static test() {
    let item = new ShopCart()
    item.price = 4322.00
    item.des = "不包含运费"
    let product = ShopCartProductItem.test()
    item.products = [product, product, product, 
                      product, product, product,
                      product, product, product, 
                      product, product, product]
    return item
  }
}

export { ShopCart }