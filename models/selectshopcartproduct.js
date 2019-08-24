import {
  AddShopCart
} from 'addshopcart.js'

//选中购物车商品返回值
class SelectShopCartProduct extends AddShopCart{
  constructor() {
    super()
  }

  static test() {
    let item = new SelectShopCartProduct()
    item.totalPrice = 4322.00
    item.currentTotalPrice = 12;
    item.favourablePrice = 122;
    return item
  }
}

export { SelectShopCartProduct }