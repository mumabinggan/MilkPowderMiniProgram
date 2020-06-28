// components/mine/userinfogroup/index.js

import { UserUtils } from '../../../utils/userutil.js'

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
    userHeaderImageUrl: "",
    name: ""
  },

  ready: function() {
    this.setData({
      userHeaderImageUrl: UserUtils.user.avatar,
      name: UserUtils.user.nickname
    })
  }, // 组件挂载后执行

  /**
   * 组件的方法列表
   */
  methods: {
    onIntegration: function() {
      this.triggerEvent('onIntegration')
    },

    onCoupon: function() {
      this.triggerEvent('onCoupon')
    }
  }
})
