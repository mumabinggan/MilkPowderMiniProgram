import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  Settlement
} from 'settlement.js'

class SettlementResponse extends JHBaseResponse {
  constructor() {
    super()
    this.data = null
  }

  static test() {
    let response = new SettlementResponse()
    response.code = 1
    response.msg = "得到成功"
    response.data = Settlement.test()
    return response
  }
}

export { SettlementResponse }