const JHRouter = {
  addressList: "/pages/addresslist/index",
  addAddress: "/pages/addaddress/index",
  index: "pages/index/index",
  home: "pages/home/index",
  productList: "pages/productlist/index",
  orderDetail: "pages/orderdetail/index",
  orderList: "pages/orderlist/index",
  settlement: "pages/settlement/index",
  productDetail: "pages/productdetail/index",
  mine: "pages/mine/index",
  classic: "pages/classic/classic",
  shopcart: "pages/shopcart/index",
  addCommunity: "/pages/community/index"
}

class JHRouterUtils {
  static addressList(canAdd, isSelected) {
    return JHRouter.addressList + "canAdd=" + canAdd + "&isSelected=" + isSelected
  }

  static addAddress() {
    return JHRouter.addAddress + "?isAdd=" + 1
  }

  static editAddress(addressId) {
    return JHRouter.addAddress + "?isAdd=" + 0 + "&addressId=" + addressId
  }

  static addCommunity(id) {
    return JHRouter.addCommunity + "?id=" + id
  }
}

export { JHRouterUtils }
