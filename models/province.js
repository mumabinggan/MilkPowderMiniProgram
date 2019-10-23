import {
  BaseRegion
} from 'baseregion.js'

import {
  City
} from 'city.js'

class Province extends BaseRegion {
  constructor() {
    super()
    // this.provinceId = 0
  }

  static shanXi() {
    let item = new Province()
    item.id = 0
    item.name = "山西"
    // item.provinceId = 12
    item.subs = [
      City.shanxi1(),
      City.shanxi2(),
      City.shanxi3(),
      City.shanxi4()
    ]
    return item
  }

  static hebei() {
    let item = new Province()
    item.id = 10
    item.name = "河北"
    // item.provinceId = 12
    item.subs = [
      City.hebei1(),
      City.hebei2(),
      City.hebei3(),
      City.hebei4()
    ]
    return item
  }

  static henan() {
    let item = new Province()
    item.id = 100
    item.name = "河南"
    // item.provinceId = 12
    item.subs = [
      City.henan1(),
      City.henan2()
    ]
    return item
  }
}

export { Province }