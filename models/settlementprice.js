class SettlementPrice {
  constructor() {
    this.totalPrice = null
    this.shipPrice = null
    this.balancePrice = null
    this.couponsPrice = null
    this.currentTotalPrice = null
  }

  static test() {
    let price = new SettlementPrice()
    price.totalPrice = 42323.19
    price.shipPrice = 23.89
    price.balancePrice = 123.00
    price.couponsPrice = 200.00
    price.currentTotalPrice = 40000.03
    return price
  }
}

export { SettlementPrice }