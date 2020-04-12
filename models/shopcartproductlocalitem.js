class ShopCartProductLocalItem {
  //没有登录的情况下，保存在本地的购物车项
  constructor(product) {
    if (product != null) {
      this.spuId = product.id;
      this.skuId = product.skuId;
      this.count = 1;
      this.checked = true;
    }
  }

  static fromProduct(product) {
    let item = new ShopCartProductLocalItem()
    if (product != null) {
      item.spuId = product.id;
      item.skuId = product.skuId;
      item.count = 1;
      item.checked = true;
    }
    return item
  }

  static fromShopCartProduct(product) {
    let item = new ShopCartProductLocalItem()
    if (product != null) {
      item.spuId = product.spuId;
      item.skuId = product.skuId;
      item.count = product.count;
      item.checked = product.checked;
    }
    return item
  }
}

export { ShopCartProductLocalItem }