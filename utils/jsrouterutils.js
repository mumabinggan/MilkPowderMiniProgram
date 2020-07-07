const JHRouter = {
  addressList: "/pages/addresslist/index",
  addAddress: "/pages/addaddress/index",
  index: "/pages/index/index",
  home: "/pages/home/index",
  productList: "/pages/productlist/index",
  orderDetail: "/pages/orderdetail/index",
  orderList: "/pages/orderlist/index",
  settlement: "/pages/settlement/index",
  productDetail: "/pages/productdetail/index",
  mine: "/pages/mine/index",
  classic: "/pages/classic/classic",
  shopcartTab: "/pages/shopcarttab/index",
  shopcartList: "/pages/shopcartlist/index",
  addCommunity: "/pages/community/index"
}

class JHRouterUtils {

  static navigateTo(url) {
    wx.navigateTo({
      url: url,
    })
  }

  static addressList(canAdd, isSelected) {
    this.navigateTo(JHRouter.addressList + "?canAdd=" + canAdd + "&isSelected=" + isSelected)
  }

  static addAddress() {
    this.navigateTo(JHRouter.addAddress + "?isAdd=1")
  }

  static editAddress(addressId) {
    this.navigateTo(JHRouter.addAddress + "?isAdd=0" + "&addressId=" + addressId)
  }

  static addCommunity(id) {
    this.navigateTo(JHRouter.addCommunity + "?id=" + id)
  }

  static orderDetail(id) {
    this.navigateTo(JHRouter.orderDetail + "?id=" + id)
  }

  static orderList() {
    this.navigateTo(JHRouter.orderList + "?")
  }

  static toProductDetail(id) {
    this.navigateTo(JHRouter.productDetail + "?id=" + id)
  }

  static toShopCart() {
    this.navigateTo(JHRouter.shopcartList + "?")
  }

  static preOrder(item) {
    this.navigateTo(JHRouter.settlement + "?item=" + item)
  }

  static setting() {
    this.navigateTo(JHRouter.orderList + "?")
  }

  static chat() {
    this.navigateTo(JHRouter.orderList + "?")
  }

  static toProductList(id, type) {
    this.navigateTo(JHRouter.productList + "?id=" + id + '&type=' + type)
  }

  static toTab(index) {
    console.log(index)
    var url = JHRouter.index
    if (index == 1) {
      url = JHRouter.classic
    } else if (index == 2) {
      url = JHRouter.shopcartTab
    } else if (index == 3) {
      url = JHRouter.mine
    }
    wx.switchTab({
      url: url + "?",
    })
  }
}

export { JHRouterUtils }
