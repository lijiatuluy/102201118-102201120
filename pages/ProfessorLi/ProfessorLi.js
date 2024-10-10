Page({
  data: {
    professorName: '李教授',
    researchAreas: '\n\n---人工智能    机器学习    数据挖掘\n\n欢迎对上述方向感兴趣的、有课余时间的同学联系我，加入我的项目组。',
    contactInfo: '\n\n---邮箱：email@fzu.com\n---TEL：123-456-7890',
    currentProjects: '\n\n---智能冰箱管理系统\n---自动驾驶技术研究',
    isFriend: false
  },
  navigateBack() {
    wx.navigateBack({
      url: '/page/zhuanjiajiaoshou/zhuanjiajiaoshou'
    });
  },
  sendFriendRequest() {
    this.setData({
      isFriend: true
    });
    wx.showToast({
      title: '你们已是好友',
      icon: 'success'
    });
  }
});
