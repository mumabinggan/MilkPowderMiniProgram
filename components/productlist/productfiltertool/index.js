// components/productlist/productfiltertool/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentSortItem: null,
    isSelectedSort: false,
    isShowSortList: false,
    isSelectedSaleCount: false,
    isShowRowList: true,
    hasFilter: false,
    moreDownIcon: 'images/more_down_icon.png',
    moreDownSelectedIcon: 'images/more_down_selected_icon.png',
    moreUpIcon: 'images/more_up_icon.png',
    moreUpSelectedIcon: 'images/more_up_selected_icon.png',
    filterIcon: 'images/filter_icon.png',
    filterSelectedIcon: 'images/filter_selected_icon.png',
    showRowListIcon: 'images/show_row_icon.png',
    showColumnListIcon: 'images/show_column_icon.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeShowType:function(e) {
      this.triggerEvent('onChangeShowType', e.detail)
    }
  }
})
