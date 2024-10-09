Page({
  // 其他页面的代码...
  Next:function(){
    wx.navigateTo({
      url: '/pages/xiugaimima/xiugaimima' // 确保路径正确，指向你的忘记密码页面
    });
  },

  goBack: function() {
    wx.navigateTo({
      url: '/pages/wangjimima/wangjimima' // 确保路径正确，指向你的忘记密码页面
    });
  }
});