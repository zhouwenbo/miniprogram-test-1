// pages/logs/logs.js

const util = require('../../utils/util.js')

Component({
  data: {
    logs: []
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() {
      console.log("attached")
      this.setData({
        logs: (wx.getStorageSync('logs') || []).map(log => {
          var d = util.formatTime(new Date(log))
          return d
        })
      })
    },
    moved() {
      console.log("moved")
    },
    detached() {
      console.log("detached")
    }
  }
})