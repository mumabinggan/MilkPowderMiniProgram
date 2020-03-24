import {
  JHStorageUtils
} from 'storageutils.js'

import {
  JHObjectUtils
} from 'objectutils.js'

let OMShopCartListKey = "OMShopCartListKey"

class OMCartStorageUtils {

  static addItemToCartAsync(value) {
    this.handleProductToCartAsync(value, true)
  }
  
  static removeItemToCartAsync(value) {
    this.handleProductToCartAsync(value, false)
  }

  static handleProductToCartAsync(value, isAdd) {
    if (JHObjectUtils.isNullOrEmptyOrUndefined(value)) {
      return
    }

    this.handleProductToGlobalCart(value, isAdd)
    getApp().globalData.shopcartProductCount += (isAdd ? 1 : -1)
    JHStorageUtils.fetchItemAsync(OMShopCartListKey, 
      (res) => {
        let items = getApp().globalData.shopcartList
        let json = JSON.stringify(items)
        JHStorageUtils.addItemAsync(OMShopCartListKey, json)
      })
  }

  static handleProductToGlobalCart(value, isAdd) {
    if (JHObjectUtils.isNullOrEmptyOrUndefined(value)) {
      return
    }
    let list = getApp().globalData.shopcartList
    let contain = false
    let index = null
    console.log("=========saf:" + list.length)
    for (let num = 0; num < list.length; ++num) {
      let item = list[num]
      if (item.id == value.id && item.skuId == value.skuId) {
        item.count += (isAdd ? 1 : -1)
        if (item.count == 0) {
          index = num
        }
        contain = true
        break
      }
    }
    if (!contain) {
      list.push(value)
    }
    if (!isAdd && contain && index != null) {
      list.splice(index, 1)
    }
  }

  static fetchItemsSync() {
    let items = getApp().globalData.shopcartList
    if (items.length > 0) {
      return items
    }
    const data = JHStorageUtils.fetchItemSync(OMShopCartListKey)
    if (!JHObjectUtils.isNullOrEmptyOrUndefined(data)) {
      let models = JSON.parse(data)
      if (!JHObjectUtils.isNullOrUndefined(models)) {
        items = models
      }
    }
    getApp().globalData.shopcartList = items
    return items
  }

  static fetchItemsCountSync() {
    let count = getApp().globalData.shopcartProductCount
    if (count > 0) {
      return count
    }
    let list = this.fetchItemsSync()
    list.forEach(item => {
      count += item.count
    })
    getApp().globalData.shopcartProductCount = count
    return count
  }
}

export { OMCartStorageUtils }