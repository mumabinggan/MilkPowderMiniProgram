import {
  Order
} from '../models/order.js'

class OrderUtils {
  static showUrge(item) {
    return this.isPaid(item) || this.isShipped(item)
  }

  static showBuy(item) {
    return this.isUnPay(item)
  }

  static showDelete(item) {
    return this.isDeleted(item) || this.isFinished(item) || this.isClosed(item)
  }

  //在配置中不让取消
  static showCancel(item) {
    return this.isUnPay(item) || this.isPaid(item)
  }

  static isDeleted(item) {
    //已删除
    return (item.status == 0)
  }

  static isUnPay(item) {
    return item.status == 10
  }

  static isPaid(item) {
    //已付款
    return item.status == 20
  }

  static isShipped(item) {
    //已发货
    return item.status == 30
  }

  static isFinished(item) {
    //订单完成
    return item.status == 40
  }

  static isClosed(item) {
    //订单取消
    return item.status == 50
  }

  static toStatusStr(status) {
    let str = ""
    switch (status) {
      case 10:
        str = "待付款"
        break
      case 20:
        str = "待收货"
        break
      case 30:
        str = "已发货"
        break
      case 40:
        str = "已完成"
        break
      case 50:
        str = "已取消"
        break
    }
    return str
  }

  //根据剩余分钟返回支付剩余时间描述
  static toPayRemaindTimeStr(totalSecond) {
    let reminderSecond = Math.floor(totalSecond % 3600)
    let minite = Math.floor(reminderSecond / 60)
    let second = Math.floor(reminderSecond % 60)
    return "支付剩余" + minite + "分" + second + "秒"    
  }
}

export { OrderUtils }