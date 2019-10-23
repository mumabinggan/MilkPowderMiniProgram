class HomeCarouselItem {
  constructor() {
    this.type = 1
    this.id = 12
    this.url = "asdfa"
  }

  static test() {
    let item = new HomeCarouselItem()
    item.id = 1000
    item.type = 21
    item.url = "http://www.baidu.com"
    return item
  }
}

export { HomeCarouselItem }