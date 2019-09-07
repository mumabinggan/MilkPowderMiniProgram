import {
  JHBaseResponse
} from 'baseresponse.js'

import {
  ProductDetail
} from 'productdetail.js'

class ProductDetailResponse extends JHBaseResponse {
  constructor() {
    super()
  }

  static test() {
    let item = new ProductDetailResponse()
    item.code = 1
    item.msg = "得到成功"
    item.data = ProductDetail.test()
    return item
  }
}

export { ProductDetailResponse }