const baseUrl = "http://milkmmall.com/"

const apiConfig = {
  classic_path: "http://bl.7yue.pro/v1/",
  cart_add_count: "http://bl.7yue.pro/v1/",
  cart_sub_count: "http://bl.7yue.pro/v1/",
  cart_list: "http://bl.7yue.pro/v1/",
  cart_select_product: "",
  cart_cancel_select_product: "",
  cart_select_all_product: "",
  cart_cancel_select_all_product: "",
  product_list: "",
  product_detail: "",
  address_detail: "shipping/fetchShipping.do?",
  address_list: "shipping/fetchShippingList.do?",
  address_add: "shipping/addShipping.do?",
  address_edit: "shipping/updateShipping.do?",
  address_delete: "shipping/delShipping.do?",
  fetch_area: "area/fetchAreas.do?",
  order_list: "",
  order_delete: "",
  order_commit: "",
  order_detail: "",
  login: baseUrl + "user/wxLogin.do?", 
  updateUserInfo: baseUrl + "user/wxUpdateUserInfo.do?"
}

export { apiConfig }