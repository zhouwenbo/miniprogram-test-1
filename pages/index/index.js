// pages/index/index.js
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }

      console.log("show")
    }
  },
  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached() { 
      console.log("attached")
    },
    moved() { 
      console.log("moved")
    },
    detached() { 
      console.log("detached")
    }
  }
})