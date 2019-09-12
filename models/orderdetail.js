import {
  Order
} from 'order.js'

import {
  OrderPay
} from 'orderpay.js'

import {
  Address
} from 'address.js'

import {
  BaseOrderDelivery
} from 'basedelivery.js'

import {
  SettlementPrice
} from 'settlementprice.js'

import {
  OrderProductItem
} from 'orderproductitem.js'

class OrderDetail extends Order {
  constructor() {
    super()
    this.stateDetailStr = null
    this.address = null
    this.pay = null
    this.delivery = null
    this.price = null
  }

  static test() {
    let order = new OrderDetail()
    order.orderId = '124323323232'
    order.orderTimeStr = '1932.12.32 21:32:23'
    order.stateStr = "待支付"
    order.stateDetailStr = "您的订单正在配送中,请耐心等待"
    order.products = [OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test(), OrderProductItem.test()]
    order.address = Address.test()
    order.price = SettlementPrice.test()
    order.delivery = BaseOrderDelivery.test()
    order.pay = OrderPay.test()
    return order
  }
}

export { OrderDetail }