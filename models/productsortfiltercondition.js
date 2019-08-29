import {
  BranchItem
} from 'branchitem.js'

import {
  ClassicItem
} from 'classicitem.js'

let ProductListSortType = {
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

class ProductSortFilterCondition {
  constructor() {
    this.pClassicId = 0
    this.sortlist = ProductSortFilterCondition.getSortlist();
    this.sortItem = ProductSortItem.Comprehensive()
    this.branches = null;
    this.classics = null;
    this.isRowType = false;
    this.isShowSortList = false;
    this.isShowBranchList = false;
    this.isShowClassicList = false;
  }

  static getSortlist() {
    return [ProductSortItem.Comprehensive(),
            ProductSortItem.SalesCount(),
            ProductSortItem.New(), 
            ProductSortItem.PriceUp(), 
            ProductSortItem.PriceDown()]
  }

  static test() {
    let filter = new ProductSortFilterCondition()
    let branches = []
    let classics = []
    for (let index = 0; index < 10; ++index) {
      let item = BranchItem.test()
      item.id = index
      let item1 = ClassicItem.test()
      item1.id = index
      if (index == 4) {
        item.isSelected = true
        item1.isSelected = true
      }
      branches.push(item)
      classics.push(item1)
    }
    filter.branches = branches
    filter.classics = classics
    return filter
  }
}

class ProductSortItem {
  constructor() {
    this.id = 1;
    this.title = "";
    this.isSelected = true
  }

  static Comprehensive() {
    let item = new ProductSortItem()
    item.id = ProductListSortType.Comprehensive;
    item.title = "综合";
    item.isSelected = true
    console.log(item)
    return item
  }

  static SalesCount() {
    let item = new ProductSortItem()
    item.id = ProductListSortType.SalesCount;
    item.title = "销量";
    item.isSelected = false
    return item
  }

  static New() {
    let item = new ProductSortItem()
    item.id = ProductListSortType.New;
    item.title = "新品";
    item.isSelected = false
    return item
  }

  static PriceUp() {
    let item = new ProductSortItem()
    item.id = ProductListSortType.PriceUp;
    item.title = "价格从低到高";
    item.isSelected = false
    return item
  }

  static PriceDown() {
    let item = new ProductSortItem()
    item.id = ProductListSortType.PriceDown;
    item.title = "价格从高到低";
    item.isSelected = false
    return item
  }
}

export { ProductSortFilterCondition, ProductSortItem }