import {
  JHStorageUtils
} from 'storageutils.js'

import {
  JHObjectUtils
} from 'objectutils.js'

import {
  JHArrayUtils
} from 'arrayutils.js'

let OMShopCartListKey = "OMShopCartListKey"

class OMCartStorageUtils {

  //添加商品到购物车
  static addItemToCartAsync(value) {
    this.handleProductToCartAsync(value, true)
  }

  //从购物车删除商品
  static removeItemToCartAsync(value) {
    this.handleProductToCartAsync(value, true)
  }

  //更新购物车商品
  static updateAllItemsCheckedToCartAsync(checked) {
    //内存修改
    let list = getApp().globalData.shopcartBriefListOfLogout
    list.forEach(item => {
      item.checked = checked
    })
    this.addItemsToDiskAsync()
  }

  static updateItemCheckedToCartAsync(value) {
    let list = getApp().globalData.shopcartBriefListOfLogout
    for(let item of list){
      if (item.spuId == value.spuId && item.skuId == value.skuId) {
        item.checked = value.checked
        break
      }
    }
    this.addItemsToDiskAsync()
  }

  //购物车增加商品数
  static addItemCountToCartAsync(value) {
    value.count = 1
    value.checked = true
    this.handleProductToCartAsync(value, true)
  }
  
  //购物车减少商品数
  static subItemCountToCartAsync(value) {
    value.count = 1
    value.checked = true
    this.handleProductToCartAsync(value, false)
  }

  static handleProductToCartAsync(value, isAdd) {
    if (JHObjectUtils.isNullOrEmptyOrUndefined(value)) {
      return
    }

    this.handleProductToGlobalCart(value, isAdd)
    getApp().globalData.shopcartProductCount += (isAdd ? value.count : -value.count)
    this.addItemsToDiskAsync()
  }

  static addItemsToDiskAsync() {
    let items = getApp().globalData.shopcartBriefListOfLogout
    let json = JSON.stringify(items)
    JHStorageUtils.addItemAsync(OMShopCartListKey, json)
  }
  
  static handleProductToGlobalCart(value, isAdd) {
    if (JHObjectUtils.isNullOrEmptyOrUndefined(value)) {
      return
    }
    let list = getApp().globalData.shopcartBriefListOfLogout
    let contain = false
    let index = null
    for (let num = 0; num < list.length; ++num) {
      let item = list[num]
      if (item.spuId == value.spuId && item.skuId == value.skuId) {
        item.count += (isAdd ? value.count : -value.count)
        item.checked = value.checked
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
    let items = getApp().globalData.shopcartBriefListOfLogout
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
    getApp().globalData.shopcartBriefListOfLogout = items
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