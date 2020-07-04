// components/home/category/index.js
import { JHRouterUtils } from '../../../utils/jsrouterutils.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: null
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick: function(e) {
      let item = e.currentTarget.dataset.id
      console.log(item)
      JHRouterUtils.toProductList(item.categoryId, 2)
    }
  }
})
