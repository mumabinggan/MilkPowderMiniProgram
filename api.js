const baseUrl = "http://localhost:8099"

const apiConfig = {
  classic_path: "user/category/fetchAllList.do",
  classic_spus: "user/goods/fetchItemByCategoryId.do",
  cart_add_good: "user/shopcart/addItemByAddItem.do",
  cart_add_count: "user/shopcart/addItemCountByUpdateItem.do",
  cart_sub_count: "user/shopcart/subItemCountByUpdateItem.do",
  cart_list: "user/shopcart/fetchShopCart.do",
  cart_list_unlogin: "user/shopcart/fetchShopCartByAddItems.do",
  cart_check_product: "user/shopcart/updateItemCheckedByUpdateItem.do",
  cart_check_all_product: "user/shopcart/updateAllItemsCheckedByChecked.do",
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
  login: "user/wxLogin.do?", 
  updateUserInfo: "user/wxUpdateUserInfo.do?"
}

export { apiConfig }