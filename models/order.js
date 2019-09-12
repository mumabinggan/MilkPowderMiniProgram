import {
  OrderProductItem
} from 'orderproductitem.js'

class Order {
  constructor() {
    this.orderId = 0
    this.orderTime = 0
    this.orderTimeStr = ''
    this.storeType = 0
    this.storeName = ""
    this.state = 0
    this.stateStr = ""
    this.products = null
    this.buyCount = 12
    this.currentTotalPrice = 32332.12
    this.remainderTime = 3600000
  }

  static test() {
    let order = new Order()
    order.orderId = 120
    order.orderTime = 0
    order.orderTimeStr = '2019-32-21 32.23.22'
    order.storeType = 0
    order.storeName = "京东"
    order.state = 10
    order.stateStr = "待支付"
    order.products = [OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test()]
    order.buyCount = 12
    order.currentTotalPrice = 32332.12
    order.remainderTime = 3600000
    return order
  }
}

export { Order }