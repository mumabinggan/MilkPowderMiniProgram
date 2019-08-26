import {
  HTTP
} from '../utils/http.js'

import {
  apiConfig
} from '../api.js'

import {
  ProductListResponse
} from '../models/productlistresponse.js'

var ProductListSortType = {
  //综合
  Comprehensive: 0,
  //销量
  SalesCount: 1,
  //上新
  New: 2,
  //价格从低到高
  PriceUp: 3,
  //价格从高到低
  PriceDown: 4
}

var ProductListSortStates = [
  (ProductListSortType.Comprehensive, "综合"),
  (ProductListSortType.SalesCount, "销量"),
  (ProductListSortType.New, "新品"),
  (ProductListSortType.PriceUp, "价格从低到高"),
  (ProductListSortType.PriceDown, "价格从高到低")
]

let http = new HTTP()

class ProductListViewModel {
  fetchProductList(pCategoryId, cCateogryIds, branchIds, callback) {
    let res = ProductListResponse.test()
    console.log(res)
    callback.success(res)
    return
    http.request({
      url: apiConfig.product_list,
      method: 'POST',
      data: {
        pCategoryId: userId,
        cCategoryId: cCateogryIds,
        branchIds: branchIds,
        sortType: null
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