import {
  Address
} from 'address.js'

import {
  SettlementProductItem
} from 'settlementproductitem.js'

import {
  SettlementPrice
} from 'settlementprice.js'

class Settlement {
  constructor() {
    this.address = null
    this.products = null
    this.remarks = null
    this.price = null
  }

  static test() {
    let settlement = new Settlement()
    settlement.address = Address.test()
    settlement.products = [SettlementProductItem.test(),
      SettlementProductItem.test(),
      SettlementProductItem.test(),
      SettlementProductItem.test(),
      SettlementProductItem.test(),
      SettlementProductItem.test()]
    settlement.remarks = "多加艳"
    settlement.price = SettlementPrice.test()
    return settlement
  }
}

export { Settlement }