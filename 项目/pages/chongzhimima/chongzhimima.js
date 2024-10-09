Page({
  // 其他页面的代码...
  OK: function() {
    wx.navigateTo({
      url: '/pages/dengru/dengru' // 确保路径正确，指向重置密码之前的页面
    });
  },
  goBack: function() {
    wx.navigateTo({
      url: '/pages/previousPage/previousPage' // 确保路径正确，指向重置密码之前的页面
    });
  }
});