Page({
  data: {
    id: '',
    password: ''
  },

  // 输入框事件处理
  handleInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },

  // 登录按钮处理函数，预留跳转接口
  handleLogin() {
    const { id, password } = this.data;
    if (!id || !password) {
      wx.showToast({
        title: '请输入学号或密码',
        icon: 'none'
      });
      return;
    }
    // 预留登录接口处理
    wx.showToast({
      title: '正在登录...',
      icon: 'loading'
    });
    // 在这里加入实际的登录逻辑，如请求服务器验证
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang' // 假设忘记密码页面路径
    });
  },
  
  // 忘记密码按钮处理，预留跳转接口
  handleForgotPassword() {
    // 预留忘记密码页面跳转
    wx.navigateTo({
      url: '/pages/wangjimima/wangjimima' // 假设忘记密码页面路径
    });
  }
});