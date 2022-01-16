// pages/orderlist/index.js
import { OrderViewModel }
  from '../../viewmodels/orderviewmodel.js'

import { UserUtils } from
  '../../utils/userutil.js'

import { JHArrayUtils } from
  '../../utils/arrayutils.js'
import { requestConfig } from '../../config.js'

import { JHRouterUtils } from '../../utils/jsrouterutils.js'

const orderVM = new OrderViewModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [],
    currentIndex: 0,
    enableLoadingMore: true,

    allPageNum: 1,
    allOrderList: [],
    isLoadingAllList: false,
    enableLoadingAllMore: true,

    waitPayPageNum: 1,
    waitPayOrderList: [],
    isLoadingWaitPayList: false,
    enableLoadingWaitPayMore: true,

    waitReceivePageNum: 1,
    waitReceiveOrderList: [],
    isLoadingWaitReceiveList: false,
    enableLoadingWaitReceiveMore: true,

    finishedPageNum: 1,
    finishedOrderList: [],
    isLoadingFinishedList: false,
    enableLoadingFinishedMore: true,

    showEmptyView: true,
    emptyIcon: "/images/empty_order_data.png"
    // isRefreshing: false,  //正在下拉
    // isLoadingMore: false, //正在上拉
    // enableLoadingMore: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单列表',
    })
    this.fetchOrderList(false, 0)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  fetchOrderList: function(isMore, orderType) {
    console.log("====ress")
    console.log(orderType)
    wx.hideLoading()
    if (!isMore) {
      wx.showLoading({
        title: '加载数据',
      })
    }
    let pageNum = 1
    let data = this.data

    if (orderType == 0) {
      //所有
      if (data.isLoadingAllList || (!JHArrayUtils.isNullOrEmpty(data.allOrderList) && !data.enableLoadingAllMore)) {
        wx.hideLoading()
        return
      }
      pageNum = data.allPageNum
      this.setData({
        isLoadingAllList: true
      })
    } else if (orderType == 2) {
      //待付款
      if (data.isLoadingWaitPayList || (!JHArrayUtils.isNullOrEmpty(data.waitPayOrderList) && !data.enableLoadingWaitPayMore)) {
        wx.hideLoading()
        return
      }
      pageNum = data.waitPayPageNum
      this.setData({
        isLoadingWaitPayList: true
      })
    } else if (orderType == 3) {
      //待收货
      if (data.isLoadingWaitReceiveList || (!JHArrayUtils.isNullOrEmpty(data.waitReceiveOrderList) && !data.enableLoadingWaitReceiveMore)) {
        wx.hideLoading()
        return
      }
      pageNum = data.waitReceivePageNum
      this.setData({
        isLoadingWaitReceiveList: true
      })
    } else if (orderType == 4) {
      //完成
      if (data.isLoadingFinishedList || (!JHArrayUtils.isNullOrEmpty(data.finishedOrderList) && !data.enableLoadingFinishedMore)) {
        wx.hideLoading()
        return
      }
      pageNum = data.finishedPageNum
      this.setData({
        isLoadingFinishedList: true
      })
    }
    if (!isMore) {
      pageNum = 1
    }
    console.log("=============")
    orderVM.fetchOrderList(orderType, pageNum, data.pageSize, {
      success: (res) => {
        console.log(res)
        if (res.code == 0) {
          this.handleFetchOrderList(isMore, orderType, pageNum, res.data.list, !res.data.isLastPage)
        } else {
          this.handleFetchOrderListFail(isMore, orderType)
        }
      },
      fail: (err) => {
        console.log(err)
        this.handleFetchOrderListFail(isMore, orderType)
      }
    })    
  },

  handleFetchOrderListFail:function(isMore, orderType) {
    if (!isMore) {
      wx.hideLoading()
    }
    if (orderType == 0) {
      //所有
      this.setData({
        isLoadingAllList: false
      })
    } else if (orderType == 2) {
      //待付款
      this.setData({
        isLoadingWaitPayList: false
      })
    } else if (orderType == 3) {
      //待收货
      this.setData({
        isLoadingWaitReceiveList: false
      })
    } else if (orderType == 4) {
      //完成
      this.setData({
        isLoadingFinishedList: false
      })
    }
  },

  handleFetchOrderList: function(isMore, orderType, pageNum, list, hasMore) {
    if (!isMore) {
      console.log("=======================")
      wx.hideLoading()
    }
    let nextPageNum = pageNum + 1
    let data = this.data
    if (orderType == 0) {
      //所有
      let orderList = isMore ? data.allOrderList.concat(list) : list
      this.setData({
        allPageNum: nextPageNum,
        allOrderList: orderList,
        isLoadingAllList: false,
        enableLoadingAllMore: hasMore
      })
    } else if (orderType == 2) {
      //待付款
      let orderList = isMore ? data.waitPayOrderList.concat(list) : list
      this.setData({
        waitPayPageNum: nextPageNum,
        waitPayOrderList: orderList,
        isLoadingWaitPayList: false,
        enableLoadingWaitPayMore: hasMore
      })
    } else if (orderType == 3) {
      //待收货
      let orderList = isMore ? data.waitReceiveOrderList.concat(list) : list
      this.setData({
        waitReceivePageNum: nextPageNum,
        waitReceiveOrderList: orderList,
        isLoadingWaitReceiveList: false,
        enableLoadingWaitReceiveMore: hasMore
      })
    } else if (orderType == 4) {
      //完成
      let orderList = isMore ? data.finishedOrderList.concat(list) : list
      this.setData({
        finishedPageNum: nextPageNum,
        finishedOrderList: orderList,
        isLoadingFinishedList: false,
        enableLoadingFinishedMore: hasMore
      })
    }
    this.handleOrderList(data.currentIndex)
  },

  handleOrderList: function(index) {
    let list = []
    let enableLoadingMore = true
    let data = this.data
    if (index == 0) {
      list = data.allOrderList
      enableLoadingMore = data.enableLoadingAllMore
    } else if (index == 1) {
      list = data.waitPayOrderList
      enableLoadingMore = data.enableLoadingWaitPayMore
    } else if (index == 2) {
      list = data.waitReceiveOrderList
      enableLoadingMore = data.enableLoadingWaitReceiveMore
    } else if (index == 3) {
      list = data.finishedOrderList
      enableLoadingMore = data.enableLoadingFinishedMore
    }
    console.log("=========test")
    console.log(list)
    
    this.setData({
      showEmptyView: JHArrayUtils.isNullOrEmpty(list),
      currentIndex: index,
      orderList: list,
      // isLoadingMore: false,
      enableLoadingMore: enableLoadingMore
    })
  },

  handleChangeIndex: function(e) {
    let index = e.detail.index
    // this.setData({
    //   isLoadingMore: false
    // })
    this.handleOrderList(index)
    let data = this.data
    let orderType = 0
    if (data.currentIndex == 0) {
      orderType = 0
    } else if (data.currentIndex == 1) {
      orderType = 2
    } else if (data.currentIndex == 2) {
      orderType = 3
    } else if (data.currentIndex == 3) {
      orderType = 4
    }
    if (JHArrayUtils.isNullOrEmpty(data.orderList)) {
      this.fetchOrderList(false, orderType)
    }
  },

  handleToOrderDetail:function(e) {
    let item = e.currentTarget.dataset.item
    JHRouterUtils.orderDetail(item.orderNo)
  },

  handleUrgeOrder: function (e) {
    console.log(e.detail)
    console.log("====oncancel=====")
  },

  handlePayOrder: function (e) {
    console.log(e.detail)
    console.log("====oncancel=====")
  },

  handleDeleteOrder: function (e) {
    console.log(e.detail)
    console.log("====oncancel=====")
  },

  handleCancelOrder: function(e) {
    console.log(e.detail)
    console.log("====oncancel=====")
  },

  fetchOrderType: function() {
    let index = this.data.currentIndex
    if (index == 0) {
      return 0;
    } else if (index == 1) {
      return 2;
    } else if (index == 2) {
      return 3;
    } else if (index == 3) {
      return 4;
    }
    return 0;
  },


  //refresh scroll处理
  onFooterRefresh() {
    console.log("====onfooterrefresh=====")
    this.fetchOrderList(true, this.fetchOrderType())
  }
})