// components/productdetail/selectskuview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: null
  },

  /**
   * 组件的初始数据
   */
  data: {
    closeIcon: "",
    skuUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3647895025,2428663167&fm=26&gp=0.jpg",
    specList: [],
    count: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSelected: function(e) {
      let obj = e.detail
      let index = obj.index
      let specList = this.data.specList
      specList[index] = obj
      this.setData({
        specList: specList
      })
    },

    handleAddCount: function() {
      let count = this.data.count + 1
      this.setData({
        count: count
      })
    },

    handleSubCount: function() {
      let count = this.data.count - 1
      if (count >= 0) {
        this.setData({
          count: count
        })
      }
    }
  }
})
