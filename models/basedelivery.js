class BaseOrderDelivery {
  constructor() {
    this.type = 1
    this.name = "申通快递"
    this.number = "32324432332"
  }

  static test() {
    let order = new BaseOrderDelivery()
    order.type = 1
    order.name = "申通快递"
    order.number = "32324432332"
    return order
  }
}

export { BaseOrderDelivery }