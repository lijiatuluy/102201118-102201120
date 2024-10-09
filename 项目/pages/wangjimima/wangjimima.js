Page({
  // 返回按钮事件，跳转到登录页面
  goBack() {
     wx.navigateTo({url: '/pages/dengru/dengru'})
  },
  // 其他逻辑
  Next(){
    wx.navigateTo({url: '/pages/shuruyanzhengma/shuruyanzhengma'})
  }
})