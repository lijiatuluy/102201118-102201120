Page({
  data: {
    activeTab: 'created', // 默认显示 "我创建的" 项目
    showTaskPopup: false, // 控制任务弹出框的显示
  },

  showCreatedProjects() {
    this.setData({
      activeTab: 'created'
    });
  },

  showJoinedProjects() {
    this.setData({
      activeTab: 'joined'
    });
  },

  // 显示任务弹出框
  showTasks() {
    this.setData({ showTaskPopup: true });
  },

  // 确认完成任务
  confirmTask(task) {
    wx.showToast({
      title: `${task} 已确认完成`,
      icon: 'success',
      duration: 2000
    });
  },

  // 关闭任务弹出框
  closeTasks() {
    this.setData({ showTaskPopup: false });
  },

  // 跳转到编辑项目页面
  editProject() {
    wx.navigateTo({
      url: '/pages/edit-project/edit-project'
    });
  },

  // 跳转到发布任务页面
  publishTask() {
    wx.navigateTo({
      url: '/pages/publish-task/publish-task'
    });
  },

  // 跳转到我的任务页面
  myTask() {
    wx.navigateTo({
      url: '/pages/my-task/my-task'
    });
  },

  // 退出项目
  leaveProject() {
    wx.showModal({
      title: '确认',
      content: '你确定要退出该项目吗？',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确认');
        }
      }
    });
  },

  goTodating() {
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang'
    });
  },

  goToPersonalCenter() {
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin'
    });
  },

  goToNotifications() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi'
    });
  },

  goToProfessors() {
    wx.navigateTo({
      url: '/pages/zhuanjiajiaoshou/zhuanjiajiaoshou'
    });
  }

});