class OrderPay {
  constructor() {
    this.type = 1
    this.name = "在线支付"
  }

  static test() {
    let order = new OrderPay()
    order.type = 1
    order.name = "在线支付"
    return order
  }
}

export { OrderPay }