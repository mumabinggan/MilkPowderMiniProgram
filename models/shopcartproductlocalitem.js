class ShopCartProductLocalItem {
  //没有登录的情况下，保存在本地的购物车项
  constructor(product) {
    if (product != null) {
      this.id = product.id;
      this.subId = product.skuId;
      this.count = 1;
    }
  }

  static test() {
    let item = new ShopCartProductLocalItem()
    item.id = 0;
    item.subId = 23223;
    return item
  }
}

export { ShopCartProductLocalItem }