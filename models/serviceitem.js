class ServiceItem {
  constructor() {
    this.id = 0
    this.title = "全部"
    this.url = "/images/order/wait_pay.png"
  }

  //订单状态
  static waitPay() {
    let item = new ServiceItem()
    item.id = 1
    item.title = "待付款"
    item.url = '/images/order/wait_pay.png'
    return item
  }

  static waitShip() {
    let item = new ServiceItem()
    item.id = 2
    item.title = "待收货"
    item.url = "/images/order/wait_ship.png"
    return item
  }

  static waitReceipt() {
    let item = new ServiceItem()
    item.id = 3
    item.title = "已完成"
    item.url = "/images/order/wait_receipt.png"
    return item
  }

  static waitComment() {
    let item = new ServiceItem()
    item.id = 4
    item.title = "全部"
    item.url = "/images/order/wait_comment.png"
    return item
  }

  static allOrder() {
    let item = new ServiceItem()
    item.id = 5
    item.title = "全部"
    item.url = "/images/order/wait_comment.png"
    return item
  }

  //我的服务
  static address() {
    let item = new ServiceItem()
    item.id = 100
    item.title = "地址管理"
    item.url = "/images/order/wait_comment.png"
    return item
  }

  static chat() {
    let item = new ServiceItem()
    item.id = 101
    item.title = "联系客服"
    item.url = "/images/order/wait_comment.png"
    return item
  }

  static setting() {
    let item = new ServiceItem()
    item.id = 102
    item.title = "设置"
    item.url = "/images/order/wait_comment.png"
    return item
  }
}

export { ServiceItem }