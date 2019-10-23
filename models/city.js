import {
  County
} from 'county.js'

import {
  BaseRegion
} from 'baseregion.js'

class City extends BaseRegion {
  constructor() {
    super()
    // this.cityId = 0
  }

  //山西城市
  static shanxi1() {
    let item = new City()
    item.id = 1
    item.name = "运城"
    // item.cityId = 1000
    item.subs = [
      County.shanxi11(),
      County.shanxi12()
    ]
    return item
  }

  static shanxi2() {
    let item = new City()
    item.id = 2
    item.name = "太原"
    // item.cityId = 1001
    item.subs = [County.shanxi21()]
    return item
  }

  static shanxi3() {
    let item = new City()
    item.id = 3
    item.name = "晋城"
    // item.cityId = 1002
    item.subs = [County.shanxi31()]
    return item
  }

  static shanxi4() {
    let item = new City()
    item.id = 4
    item.name = "长治"
    // item.cityId = 1003
    item.subs = [County.shanxi41()]
    return item
  }

  //河北城市
  static hebei1() {
    let item = new City()
    item.id = 10
    item.name = "石家庄"
    // item.cityId = 1000
    item.subs = [County.hebei11()]
    return item
  }

  static hebei2() {
    let item = new City()
    item.id = 12
    item.name = "邢台"
    // item.cityId = 1001
    item.subs = [County.hebei21()]
    return item
  }

  static hebei3() {
    let item = new City()
    item.id = 13
    item.name = "保定"
    // item.cityId = 1002
    item.subs = [County.hebei31()]
    return item
  }

  static hebei4() {
    let item = new City()
    item.id = 14
    item.name = "张家口"
    // item.cityId = 1003
    item.subs = [County.hebei41()]
    return item
  }

  //河北城市
  static henan1() {
    let item = new City()
    item.id = 100
    item.name = "郑州"
    // item.cityId = 1000
    item.subs = [County.henan11()]
    return item
  }

  static henan2() {
    let item = new City()
    item.id = 101
    item.name = "洛阳"
    // item.cityId = 1001
    item.subs = [County.henan21()]
    return item
  }
}

export { City }