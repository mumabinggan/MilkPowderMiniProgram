class ServiceItem {
  constructor() {
    this.id = 0
    this.title = "待付款"
    this.url = "/images/order/wait_pay.png"
  }

  static waitPay() {
    let item = new ServiceItem()
    item.id = 0
    item.title = "待付款"
    item.url = '/images/order/wait_pay.png'
    return item
  }

  static waitShip() {
    let item = new ServiceItem()
    item.id = 0
    item.title = "待发货"
    item.url = "/images/order/wait_ship.png"
    return item
  }

  static waitReceipt() {
    let item = new ServiceItem()
    item.id = 0
    item.title = "待收货"
    item.url = "/images/order/wait_receipt.png"
    return item
  }

  static waitComment() {
    let item = new ServiceItem()
    item.id = 0
    item.title = "待评论"
    item.url = "/images/order/wait_comment.png"
    return item
  }
}

export { ServiceItem }