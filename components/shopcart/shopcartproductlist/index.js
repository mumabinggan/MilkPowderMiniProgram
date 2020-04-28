// components/classic/shopcartlist/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: null,
      observer: function (newValue, oldValue, changePath) {
        console.log("products change")
        newValue.forEach(function (v, i) {
          if (v.isTouchMove)//只操作为true的
            v.isTouchMove = false;
        })
        this.setData({
          items: newValue
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [],
    startX: 0,  //开始坐标X
    startY: 0,  //开始坐标Y  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSelect: function (e) {
      this.triggerEvent('onSelect',
        e.detail)
    },

    onTouch: function(e) {
      this.triggerEvent('onTouch',
        e.detail)
    },

    handleAddCount: function (e) {
      this.triggerEvent('onAdd', e.detail)
    },

    handleSubCount: function (e) {
      this.triggerEvent('onSub', e.detail)
    },

    handleDelete: function (e) {
      this.triggerEvent('onDelete', e.detail)
    },

    //手指触摸动作开始 记录起点X坐标
    touchstart: function (e) {
      console.log("=====================")
      //开始触摸时 重置所有删除
      this.data.items.forEach(function (v, i) {
        if (v.isTouchMove)//只操作为true的
          v.isTouchMove = false;
      })
      this.setData({
        startX: e.changedTouches[0].clientX,
        startY: e.changedTouches[0].clientY,
        items: this.data.items
      })
    },
  
    //滑动事件处理
    touchmove: function (e) {
      var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标

      //获取滑动角度  
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

      console.log("===move==");
      console.log(index);

      that.data.items.forEach(function (v, i) {
        v.isTouchMove = false
        //滑动超过30度角 return
        if (Math.abs(angle) > 30) return;
        if (i == index) {
          if (touchMoveX > startX) {//右滑
            v.isTouchMove = false
          } else {
            v.isTouchMove = true
          }      
        }
      })
      
      //更新数据
      that.setData({
        items: that.data.items
      })
    },
  
    /**
      * 计算滑动角度
      * @param {Object} start 起点坐标
      * @param {Object} end 终点坐标
      */
    angle: function (start, end) {
      var _X = end.X - start.X,
      _Y = end.Y - start.Y
      //返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    },
  
    //删除事件
    delete: function (e) {
      this.data.items.splice(e.currentTarget.dataset.index, 1)
      this.setData({    
        items: this.data.items
      })
    }
  }
})
