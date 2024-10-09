Page({
  data: {
    notifications: [
      { id: 1, message: '这些只是测试' },
      { id: 2, message: '你在[智能冰箱管理]的结对请求被接受' },
      { id: 3, message: 'XXX[计算机学院]向你发起私聊' }
    ]
  },
  goToPersonalCenter() {
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin'
    });
  },
  goToProjectManagement() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli'
    });
  }
});

/*
通知信息可以通过与服务器通信获取，具体实现可以在 onLoad 方法中使用 wx.request 请求服务器获取通知数据，并更新 notifications 数组。
onLoad: function() {
  wx.request({
    url: 'https://your-server-url.com/get-notifications',
    method: 'GET',
    success: (res) => {
      this.setData({
        notifications: res.data.notifications
      });
    },
    fail: (err) => {
      wx.showToast({
        title: '获取通知失败，请稍后再试',
        icon: 'none'
      });
    }
  });
}
*/