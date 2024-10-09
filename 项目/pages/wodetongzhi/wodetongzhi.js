Page({
  data: {
    // 可根据需要定义页面数据
  },
  xiangqing: function() {
    wx.navigateTo({
      url: '/pages/xiangmuxiangqing/xiangmuxiangqing' // 
    });
  },
  goToChat: function() {
    wx.navigateTo({
      url: '/pages/chat/chat'
    });
  },
  goToProfessors: function() {
    wx.navigateTo({
      url: '/pages/zhuanjiajiaoshou/zhuanjiajiaoshou' // 
    });
  },

  goToProjectManagement: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli' // 
    });
  },
  goToNotifications() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi'
    });
  },
  goToProjectManagement() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli'
    });
  },
  goToPersonalCenter(){
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin'
    });
  },
  goToShenqing(){
    wx.navigateTo({
      url: '/pages/shenqing/shenqing'
    });
  },
  xiangqing2(){
    wx.navigateTo({
      url: '/pages/xiangmuxiangqing2/xiangmuxiangqing2'
    });
  }

});

/*
通知和私信信息可以通过与服务器通信获取，具体实现可以在 onLoad 方法中使用 wx.request 请求服务器获取数据，并更新 notifications 和 messages 数组。
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

  wx.request({
    url: 'https://your-server-url.com/get-messages',
    method: 'GET',
    success: (res) => {
      this.setData({
        messages: res.data.messages
      });
    },
    fail: (err) => {
      wx.showToast({
        title: '获取私信失败，请稍后再试',
        icon: 'none'
      });
    }
  });
}
*/
