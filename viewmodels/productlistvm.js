import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  ProductListResponse
} from '../models/productlistresponse.js'

import {
  ProductSortFilterCondition, ProductSortItem
} from '../models/productsortfiltercondition.js'

let http = new HTTP()

class ProductListViewModel {

  constructor() {
    this.sortfilterCondition = ProductSortFilterCondition.test()
  }

  fetchChildrenClassicIds() {
    var ids = []
    for (let item of sortfilterCondition.classics) {
      if (item.isSelected) {
        ids.push(item.id)
      }
    }
    return ids
  }

  fetchBranchIds() {
    var ids = []
    for (let item of sortfilterCondition.branches) {
      if (item.isSelected) {
        ids.push(item.id)
      }
    }
    return ids
  }

  getSortType() {
    for (let item of sortfilterCondition.sortlist) {
      if (item.isSelected) {
        return item.id
      }
    }
    return 0
  }

  fetchProductList(callback) {
    let res = ProductListResponse.test()
    console.log(res)
    callback.success(res)
    return
    let subClassicIds = fetchChildrenClassicIds()
    let branchIds = fetchBranchIds()
    let sortType = getSortType()
    http.request({
      url: apiConfig.product_list,
      method: 'POST',
      data: {
        pClassicId: sortfilterCondition.pClassicId,
        subClassicIds: subClassicIds,
        branchIds: branchIds,
        sortType: sortType
      },
      success: (res) => {
        callback.success(res)
      },
      fail: (err) => {
        callback.fail(err)
      }
    })
  }

  addProductToShopCart(userId, productId, callback) {
    let res = AddCartResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.cart_add_count,
      method: 'POST',
      data: {
        userId: userId,
        productId: productId
      },
      success: (res) => {
        callback.success(res)
        console.log(res)
      },
      fail: (err) => {
        console.log(err)
        callback.fail(err)
      }
    })
  }
}

export { ProductListViewModel }