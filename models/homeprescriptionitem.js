class HomePrescriptionItem {
  constructor() {
    this.id = 12
    this.url = "asdfa"
    this.name = 2332
  }

  static test() {
    let item = new HomePrescriptionItem()
    item.id = 1000
    item.name = "澳洲"
    item.url = "http://www.baidu.com"
    return item
  }
}

export { HomePrescriptionItem }