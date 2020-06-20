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
  cart_delete_product: "user/shopcart/deleteItemByDeleteItem.do",
  cart_fetch_products_count: "user/shopcart/fetchShopCartCount.do",
  product_list: "",
  product_detail: "user/goods/fetchGoodsDetail.do",
  product_fetch_sku: "user/goods/fetchGoodsSku.do",
  address_detail: "user/shipping/fetchItemByIdUserId.do",
  address_list: "user/shipping/fetchItemsByUserId.do",
  address_add: "user/shipping/addItemByItem.do",
  address_edit: "user/shipping/updateItemByItem.do",
  address_delete: "user/shipping/deleteItemByUpdateItem.do",
  fetch_deliverycommunity: "user/deliverycommunity/fetchAllItems.do",
  fetch_area: "area/fetchAreas.do?",
  order_preview: "user/order/fetchPreOrder.do",
  order_preview_by_item: "user/order/fetchPreOrderByGoodsItem.do",
  order_confirm: "user/order/confirmOrder.do",
  order_list: "user/order/fetchItems.do",
  order_delete: "",
  order_commit: "",
  order_detail: "user/order/fetchItemByOrderNo.do",
  login: "user/wxLogin.do?", 
  updateUserInfo: "user/wxUpdateUserInfo.do?"
}

export { apiConfig }