import {
  ClassicProductItem
} from 'classicproductitem.js'

import {
  Utils
} from '../utils/util.js'

class ClassicItem {
  constructor() {
    this.id = 12
    this.name = "苹果"
  }

  static test() {
    let item = new ClassicItem()
    item.id = 12
    item.name = "苹果"
    let length = Number.parseInt(Math.random() * 20) + 3
    let products = new Array
    for (let num = 0; num < length; ++num) {
      products.push(ClassicProductItem.test())
    }
    item.products = products
    return item
  }
}

export { ClassicItem }