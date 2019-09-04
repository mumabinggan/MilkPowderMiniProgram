// components/address/regionselectpicker/index.js
import {
  Province
} from '../../../models/province.js'

import {
  City
} from '../../../models/city.js'

import {
  County
} from '../../../models/county.js'

import {
  Town
} from '../../../models/town.js'

import {
  BaseRegion
} from '../../../models/baseregion.js'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        this.changeRegion(newValue)
      }
    },
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentList: null,
    titleList: [],
    selectedIndex: 0,
    showSelectTitle: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeRegion:function(region) {
      console.log(region)
      this.setData({
        currentList: region
      })
    },

    onHide:function(e) {
      this.triggerEvent('onHide')
    },

    onListItem:function(e) {
      const id = e.target.dataset.id
      let selectedItem = null
      let data = this.data

      //设置当前选中
      for (let item of data.currentList) {
        if (item.id == id) {
          item.isSelected = true
          selectedItem = item
        } else {
          item.isSelected = false
        }
      }
      
      for (let i = data.selectedIndex + 1; i < data.titleList.length; ++i) {
        let item = data.titleList[i]
        item.isSelected = false
      }
      var arr = Array.from(data.titleList);
      const count = arr.length - data.selectedIndex
      for (let i = 0; i < count; ++i) {
        arr.pop()
      }
      this.setData({
        titleList: arr
      })
      var titleListItem = 'titleList[' + data.selectedIndex + ']'
      this.setData({
        currentList: selectedItem.subs,
        [titleListItem]: selectedItem,
        selectedIndex: data.selectedIndex + 1
      })

      const showSelectTitle = !(data.currentList == null ||
        data.currentList.length == 0)
      this.setData({
        showSelectTitle: showSelectTitle
      })

      if (data.currentList == null || 
          data.currentList.length == 0) {
        let region = data.titleList
        this.triggerEvent('onSelectFinish', { region })
      }
    },

    onTitleItem:function(e) {
      const index = e.target.dataset.id
      let list = null
      if (index == 0) {
        list = this.data.list
      } else {
        list = this.data.titleList[index - 1].subs
      }
      console.log(list)
      this.setData({
        currentList: list,
        selectedIndex: index
      })
    }
  }
})
