import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ClassicItem
} from 'classicitem.js'

class ClassicResponse extends JHBaseResponse {
  constructor() {
    super()
    this.data = []
  }

  static test() {
    let response = new ClassicResponse()
    response.code = 1
    response.msg = "得到成功"
    response.data = [
      // ClassicItem.test(),
      // ClassicItem.test(),
      // ClassicItem.test(),
      // ClassicItem.test(),
      // ClassicItem.test(),
      // ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test(),
      ClassicItem.test()]
    return response
  }
}

export { ClassicResponse }

