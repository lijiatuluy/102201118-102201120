Page({

  data: {
    isPaperPublic: false,
    isNotificationEnabled: true,
    avatarUrl: 'default-avatar-url', // 默认头像链接
    username: 'default-username' // 默认用户名
  },
  onLoad: function() {
    // 获取用户信息并设置头像和用户名
    this.setData({
      avatarUrl: wx.getStorageSync('avatarUrl') || 'default-avatar-url',
      username: wx.getStorageSync('username') || 'default-username'
    });
  },
  changeAvatar() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        const tempFilePaths = res.tempFilePaths;
        this.setData({
          avatarUrl: tempFilePaths[0]
        });
        // 上传头像到服务器
        wx.uploadFile({
          url: 'https://your-server-url.com/upload-avatar',
          filePath: tempFilePaths[0],
          name: 'file',
          success: (res) => {
            const data = JSON.parse(res.data);
            const newAvatarUrl = data.url;
            this.setData({ avatarUrl: newAvatarUrl });
            wx.setStorageSync('avatarUrl', newAvatarUrl);
          },
          fail: (err) => {
            wx.showToast({
              title: '头像上传失败，请稍后再试',
              icon: 'none'
            });
          }
        });
      }
    });
  },
  changeUsername() {
    wx.showModal({
      title: '修改用户名',
      content: '',
      placeholderText: '请输入新的用户名',
      editable: true,
      success: (res) => {
        if (res.confirm) {
          const newUsername = res.content;
          this.setData({ username: newUsername });
          wx.setStorageSync('username', newUsername);
          // 更新用户名到服务器
          wx.request({
            url: 'https://your-server-url.com/update-username',
            method: 'POST',
            data: { username: newUsername },
            success: (res) => {
              wx.showToast({
                title: '用户名修改成功',
                icon: 'success'
              });
            },
            fail: (err) => {
              wx.showToast({
                title: '用户名修改失败，请稍后再试',
                icon: 'none'
              });
            }
          });
        }
      }
    });
  },
  changePassword() {
    wx.navigateTo({
      url: '/pages/changePassword/changePassword'
    });
  },
  togglePaperPublic(e) {
    this.setData({
      isPaperPublic: e.detail.value
    });
    // 更新设置到服务器
    wx.request({
      url: 'https://your-server-url.com/update-settings',
      method: 'POST',
      data: { isPaperPublic: e.detail.value },
      success: (res) => {
        wx.showToast({
          title: '设置已更新',
          icon: 'success'
        });
      },
      fail: (err) => {
        wx.showToast({
          title: '设置更新失败，请稍后再试',
          icon: 'none'
        });
      }
    });
  },
  toggleNotification(e) {
    this.setData({
      isNotificationEnabled: e.detail.value
    });
    // 更新设置到服务器
    wx.request({
      url: 'https://your-server-url.com/update-settings',
      method: 'POST',
      data: { isNotificationEnabled: e.detail.value },
      success: (res) => {
        wx.showToast({
          title: '设置已更新',
          icon: 'success'
        });
      },
      fail: (err) => {
        wx.showToast({
          title: '设置更新失败，可能是尚未连接到服务器，请稍后再试',
          icon: 'none'
        });
      }
    });
  },
  goToProjectManagement() {
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang'
    });
  },
  goToNotifications() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi'
    });
  }
});
