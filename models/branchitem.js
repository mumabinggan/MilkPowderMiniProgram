class BranchItem {
  constructor() {
    this.id = 12
    this.title = "苹果"
    this.url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564509166771&di=ac3d9946a42a0515e7826ee87fa8ff52&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg"
    this.parentId = 0
  }

  static test() {
    let item = new BranchItem()
    item.id = 1
    item.title = "苹果"
    item.url = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564509166771&di=ac3d9946a42a0515e7826ee87fa8ff52&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140103%2F328512-14010322134434.jpg"
    item.parentId = 0
    return item
  }
}

export { BranchItem }