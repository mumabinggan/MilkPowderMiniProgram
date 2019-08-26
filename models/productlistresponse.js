import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ProductListProductItem
} from 'productlistitem.js'

class ProductListResponse extends JHBaseResponse {
  constructor() {
    super()
    this.data = []
  }

  static test() {
    let response = new ProductListResponse()
    response.code = 1
    response.msg = "得到成功"
    response.data = [ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test(),
      ProductListProductItem.test()]
    return response
  }
}

export { ProductListResponse }