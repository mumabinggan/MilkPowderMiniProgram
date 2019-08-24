class AddShopCart {
  constructor() {
    productId: 0;
    totalPrice: 0.0;
    currentTotalPrice: 0.0;
    favourablePrice: 0.0;
  }

  static test() {
    let item = new AddShopCart()
    item.totalPrice = 4322.00
    item.currentTotalPrice = 12;
    item.favourablePrice = 122;
    return item
  }
}

export { AddShopCart }