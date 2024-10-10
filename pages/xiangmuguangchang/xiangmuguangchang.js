Page({
  data: {
    // 可根据需要定义页面数据
    searchResults: []  // 动态存放搜索结果
  },
  xiangqing: function() {
    wx.navigateTo({
      url: '/pages/xiangmuxiangqing/xiangmuxiangqing' // 
    });
  },
  goToPersonalCenter: function() {
    // 实现个人中心页面跳转逻辑
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin' // 
    });
  },
  goToNotifications: function() {
    // 实现通知页面跳转逻辑
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi' // 
    });
  },
  goToProfessors: function() {
    // 实现专家教授页面跳转逻辑
    wx.navigateTo({
      url: '/pages/zhuanjiajiaoshou/zhuanjiajiaoshou' // 
    });
  },

  goToProjectManagement: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli' // 
    });
  },

  // 搜索栏输入事件
  onSearch(e) {
    const searchTerm = e.detail.value.trim();

    if (!searchTerm) {
      wx.showToast({
        title: '请输入搜索内容',
        icon: 'none'
      });
      return;
    }
    console.log('输入的搜索词：', searchTerm);//打印接收到的文字

    wx.cloud.callFunction({
      name: 'searchProjects',
      data: { searchTerm }
    }).then(res => {
      if (res.result.success) {
        console.log('查询成功，结果为：', res.result.data);
        this.setData({
          searchResults: res.result.data  // 更新项目卡片
        });
      } else {
        console.log('查询成功，但无匹配项');
        wx.showToast({
          title: res.result.message,  // 弹窗提示无结果
          icon: 'none'
        });
        this.setData({
          searchResults: []  // 清空项目卡片
        });
      }
    }).catch(err => {
      console.error('查询失败：', err);
      wx.showToast({
        title: '查询失败',
        icon: 'none'
      });
    });
  },

  createProject() {
    wx.navigateTo({
      url: '/pages/xinjianxiangmu/xinjianxiangmu'
    });
  }

});