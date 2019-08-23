class BaseProductItem {
  constructor() {
    this.id = 0;
    this.title = null;
    this.currentPrice = null;
    this.url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564509166771&di=ac3d9946a42a0515e7826ee87fa8ff52&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg";
    this.stock = 10000;
  }

  static test() {
    let item = new BaseProductItem()
    item.id = 0;
    item.title = "苹果";
    item.currentPrice = 54.2;
    item.url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564509166771&di=ac3d9946a42a0515e7826ee87fa8ff52&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg";
    item.stock = 10000;
    return item
  }
}

export { BaseProductItem }