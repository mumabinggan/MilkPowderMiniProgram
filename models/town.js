import {
  BaseRegion
} from 'baseregion.js'

class Town extends BaseRegion {
  constructor() {
    super()
    // this.townId = 0
  }

  //运城
  static shanxi111() {
    let item = new Town()
    item.id = 100000
    item.name = "夏县县"
    // item.townId = 1000
    return item
  }

  static shanxi121() {
    let item = new Town()
    item.id = 100001
    item.name = "平陆县县"
    // item.townId = 1000
    return item
  }

  static shanxi211() {
    let item = new Town()
    item.id = 100002
    item.name = "小店县县"
    // item.townId = 1000
    return item
  }

  static shanxi311() {
    let item = new Town()
    item.id = 100003
    item.name = "高平县县"
    // item.townId = 1000
    return item
  }

  static shanxi411() {
    let item = new Town()
    item.id = 100004
    item.name = "交区县县"
    // item.townId = 1000
    return item
  }

  //河北城市
  static hebei111() {
    let item = new Town()
    item.id = 100005
    item.name = "晋州县县"
    // item.townId = 1000
    return item
  }

  static hebei211() {
    let item = new Town()
    item.id = 100006
    item.name = "任县县"
    // item.townId = 1000
    return item
  }

  static hebei311() {
    let item = new Town()
    item.id = 100007
    item.name = "安国县县"
    // item.townId = 1000
    return item
  }

  static hebei411() {
    let item = new Town()
    item.id = 100008
    item.name = "宜化县县"
    // item.townId = 1000
    return item
  }

  //河南城市
  static henan111() {
    let item = new Town()
    item.id = 100009
    item.name = "郑州县县"
    // item.townId = 1000
    return item
  }

  static henan211() {
    let item = new Town()
    item.id = 100010
    item.name = "洛阳县县"
    // item.townId = 1000
    return item
  }
}

export { Town }