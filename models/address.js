class Address {
  constructor() {
    id: 0;
    name: "郑";
    phone: "12837327";
    provinceId: 10;
    provinceName: "山西省";
    cityId: 10;
    cityName: "山西省";
    countyId: 10;
    countyName: "夏县";
    townId: 100;
    townName: "山西省";
    address: "详细地址";
    isDefault: true
  }

  static test() {
    let item = new Address()
    item.name = "郑渊"
    item.phone = "2323232332";
    item.provinceId = 122;
    item.provinceName = "4322.00"
    item.cityId = 12;
    item.cityName = "122";
    item.countyId = 4322
    item.countyName = "12";
    item.townId = 4322
    item.townName = "12";
    item.address = "微信小程序之列表左滑删除功能微信小程序之列表左滑删除功";
    item.detailAddress = item.provinceName + item.cityName +
      item.countyName + item.townName + item.address
    return item
  }
}

export { Address }