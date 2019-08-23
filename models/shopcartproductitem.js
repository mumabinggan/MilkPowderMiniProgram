import {
  BaseProductItem
} from 'baseproductitem.js'

class ShopCartProductItem extends BaseProductItem {
  constructor() {
    super()
    this.buyCount = 0;
    this.outStock = false;
    this.isSelected = true
  }

  static test() {
    let item = new ShopCartProductItem()
    item.id = 0;
    item.title = "苹果";
    item.currentPrice = 54.2;
    item.url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564509166771&di=ac3d9946a42a0515e7826ee87fa8ff52&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg";
    item.buyCount = 2;
    item.outStock = false;
    return item
  }
}

export { ShopCartProductItem }