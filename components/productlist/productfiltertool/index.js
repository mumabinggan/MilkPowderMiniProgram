// components/productlist/productfiltertool/index.js
import {
  ProductSortFilterCondition, ProductSortItem
} from '../../../models/productsortfiltercondition.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sortfilterCondition: {
      type: ProductSortFilterCondition,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.handleConditionChange()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hasSelectedBranch: false,
    hasSelectedClassic: false,
    moreDownIcon: 'images/more_down_icon.png',
    moreDownSelectedIcon: 'images/more_down_selected_icon.png',
    moreUpIcon: 'images/more_up_icon.png',
    moreUpSelectedIcon: 'images/more_up_selected_icon.png',
    showRowListIcon: 'images/show_row_icon.png',
    showColumnListIcon: 'images/show_column_icon.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleConditionChange:function() {
      const hasSelectedBranch = this.hasSelectedArr(this.data.sortfilterCondition.branches)
      const hasSelectedClassic = this.hasSelectedArr(this.data.sortfilterCondition.classics)
      this.setData({
        hasSelectedBranch: hasSelectedBranch,
        hasSelectedClassic: hasSelectedClassic,
      })
    },

    hasSelectedArr: function (arr) {
      let hasSelected = false
      for (const item of arr) {
        if (item.isSelected) {
          hasSelected = true
          break
        }
      }
      return hasSelected
    },

    //行, 列
    changeShowType:function(e) {
      this.triggerEvent('onChangeShowType', e.detail)
    },
    
    //排序
    showSortList:function(e) {
      this.triggerEvent('onSort', e.detail)
    },

    //品类
    showClassicList: function (e) {
      this.triggerEvent('onClassic', e.detail)
    },

    //品牌
    showBranchList: function (e) {
      this.triggerEvent('onBranch', e.detail)
    }
  }
})
