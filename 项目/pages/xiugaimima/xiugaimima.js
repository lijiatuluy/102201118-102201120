Page({
  // 其他页面的代码...
  OK: function() {
    wx.navigateTo({
      url: '/pages/dengru/dengru' // 确保路径正确，指向输入验证码页面
    });
  },
  goBack: function() {
    wx.navigateTo({
      url: '/pages/shuruyanzhengma/shuruyanzhengma' // 确保路径正确，指向输入验证码页面
    });
  }
});