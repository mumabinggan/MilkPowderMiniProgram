// components/home/broadcast/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log(newValue)
        this.handleItemsChange()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    text: '51淘甄貨,一个可以省钱的购物平台',
    broadcastIcon: "/images/home_broadcast.png",
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    size: 13,
    orientation: 'left',//滚动方向
    interval: 30, // 时间间隔
    textWidth: 0, //文字长度
    containerWidth: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    handleItemsChange: function() {
      var text = ""
      let items = this.properties.items
      for (let num = 0; num < items.length; ++num) {
        text += items[num].title
        if (num != items.length - 1) {
          text += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'
        }
      }
      let windowWidth = wx.getSystemInfoSync().windowWidth
      const size = windowWidth * this.data.size / 375.0
      const containerWidth = (wx.getSystemInfoSync().windowWidth * 13.0) / 15;// 屏幕宽度
      const textWidth = text.length * size;
      this.setData({
        text: text,
        textWidth: textWidth,
        containerWidth: containerWidth,
      });
      this.runMarquee();
    },

    runMarquee: function () {
      var that = this;
      var interval = setInterval(function () {
        //文字一直移动到末端
        if (-that.data.marqueeDistance < that.data.textWidth) {
          that.setData({
            marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
          });
        } else {
          clearInterval(interval);
          that.setData({
            marqueeDistance: that.data.containerWidth
          });
          that.runMarquee();
        }
      }, that.data.interval);
    }
  }
})
