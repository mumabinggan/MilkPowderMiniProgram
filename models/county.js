import {
  BaseRegion
} from 'baseregion.js'

import {
  Town
} from 'town.js'

class County extends BaseRegion {
  constructor() {
    super()
    // this.countyId = 0
  }

  //运城
  static shanxi11() {
    let item = new County()
    item.id = 1000
    item.name = "夏县"
    // item.countyId = 1000
    item.subs = [Town.shanxi111()]
    return item
  }

  static shanxi12() {
    let item = new County()
    item.id = 1001
    item.name = "平陆县"
    // item.countyId = 1000
    item.subs = [Town.shanxi121()]
    return item
  }

  static shanxi21() {
    let item = new County()
    item.id = 2000
    item.name = "小店县"
    // item.countyId = 1000
    item.subs = [Town.shanxi211()]
    return item
  }

  static shanxi31() {
    let item = new County()
    item.id = 3000
    item.name = "高平县"
    // item.countyId = 1000
    item.subs = [Town.shanxi311()]
    return item
  }

  static shanxi41() {
    let item = new County()
    item.id = 4000
    item.name = "交区县"
    // item.countyId = 1000
    item.subs = [Town.shanxi411()]
    return item
  }

  //河北城市
  static hebei11() {
    let item = new County()
    item.id = 5000
    item.name = "晋州县"
    // item.countyId = 1000
    item.subs = [Town.hebei111()]
    return item
  }

  static hebei21() {
    let item = new County()
    item.id = 6000
    item.name = "任县"
    // item.countyId = 1000
    item.subs = [Town.hebei211()]
    return item
  }

  static hebei31() {
    let item = new County()
    item.id = 7000
    item.name = "安国县"
    // item.countyId = 1000
    item.subs = [Town.hebei311()]
    return item
  }

  static hebei41() {
    let item = new County()
    item.id = 8000
    item.name = "宜化县"
    // item.countyId = 1000
    item.subs = [Town.hebei411()]
    return item
  }

  //河南城市
  static henan11() {
    let item = new County()
    item.id = 9000
    item.name = "郑州县"
    // item.countyId = 1000
    item.subs = [Town.henan111()]
    return item
  }

  static henan21() {
    let item = new County()
    item.id = 10000
    item.name = "洛阳县"
    // item.countyId = 1000
    item.subs = [Town.henan211()]
    return item
  }
}

export { County }