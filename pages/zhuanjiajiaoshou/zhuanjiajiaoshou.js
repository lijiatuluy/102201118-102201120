Page({
  // 其他页面的代码...

  data: {
    searchTerm: '',
    professorList: [],  // 存储搜索结果
  },
  
  goTodating: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang' // 
    });
  },

  goToProjectManagement: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguanli/xiangmuguanli' // 
    });
  },

  goToPersonalCenter: function() {
    wx.navigateTo({
      url: '/pages/gerenzhongxin/gerenzhongxin' // 
    });
  },

  goToNotifications: function() {
    wx.navigateTo({
      url: '/pages/wodetongzhi/wodetongzhi' // 
    });
  },
  goToProfessorDetail:function(){
    wx.navigateTo({
      url: '/pages/ProfessorLi/ProfessorLi' // 
    });
  },

  // 获取输入框的值
  onInputChange: function(event) {
    this.setData({
      searchTerm: event.detail.value
    });
  },

  // 点击搜索按钮时触发
  onSearch: function() {
    const searchTerm = this.data.searchTerm;

    if (!searchTerm) {
      wx.showToast({
        title: '请输入搜索关键词',
        icon: 'none'
      });
      return;
    }

    wx.cloud.callFunction({
      name: 'searchProfessors',
      data: { searchTerm },
      success: res => {
        if (res.result.success && res.result.data.length > 0) {
          console.log('查询成功：', res.result.data);
          this.setData({
            professorList: res.result.data  // 更新搜索结果
          });
        } else {
          wx.showToast({
            title: '没有找到匹配的教授',
            icon: 'none'
          });
        }
      },
      fail: err => {
        console.error('查询失败：', err);
        wx.showToast({
          title: '查询失败，请稍后重试',
          icon: 'none'
        });
      }
    });
  }


});