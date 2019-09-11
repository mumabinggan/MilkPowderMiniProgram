import {
  Order
} from '../models/order.js'

class OrderUtils {
  static showUrge(item) {
    console.log(item)
    return !this.isClosed(item) && !this.isWaitPay(item) && !this.isFinished(item)
  }

  static showReBuy(item) {
    return !this.isWaitPay(item)
  }

  static showWaitPay(item) {
    return this.isWaitPay(item)
  }

  static showWaitComment(item) {
    return this.isWaitComment(item)
  }

  static showWaitConfirm(item) {
    return this.isWaitReceive(item)
  }

  static isClosed(item) {
    return (item.state == 1)
  }

  static isWaitPay(item) {
    return item.state == 10
  }

  static isWaitReceive(item) {
    return item.state == 20
  }

  static isWaitComment(item) {
    return item.state == 30
  }

  static isFinished(item) {
    return item.state == 40
  }
}

export { OrderUtils }