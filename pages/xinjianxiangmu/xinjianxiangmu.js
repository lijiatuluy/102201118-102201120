Page({
  
  data: {
    initiator: '', // 项目发起者
    members: [], // 项目成员
    tags: [], // 项目标签
    introduction: '', // 项目简介
    requirements: [], // 人员需求
    title:''
  },

  goBack: function() {
    wx.navigateTo({
      url: '/pages/xiangmuguangchang/xiangmuguangchang' // 
    });
  },

  // 项目发起者输入
  onInitiatorInput: function(e) {
    this.setData({ initiator: e.detail.value });
  },

  // 成员输入
  onMemberNameInput: function(e) {
    const index = e.currentTarget.dataset.index;
    const members = this.data.members;
    members[index].name = e.detail.value;
    this.setData({ members });
  },
  
  onMemberPositionInput: function(e) {
    const index = e.currentTarget.dataset.index;
    const members = this.data.members;
    members[index].position = e.detail.value;
    this.setData({ members });
  },

  addMember: function() {
    this.setData({ members: [...this.data.members, { name: '', position: '' }] });
  },

  removeMember: function(e) {
    const index = e.currentTarget.dataset.index;
    const members = this.data.members.filter((_, i) => i !== index);
    this.setData({ members });
  },

  // 标签输入
  onTagInput: function(e) {
    const index = e.currentTarget.dataset.index;
    const tags = this.data.tags;
    tags[index] = e.detail.value;
    this.setData({ tags });
  },

  addTag: function() {
    this.setData({ tags: [...this.data.tags, ''] });
  },

  removeTag: function(e) {
    const index = e.currentTarget.dataset.index;
    const tags = this.data.tags.filter((_, i) => i !== index);
    this.setData({ tags });
  },

  onIntroductionInput(e) {
    const fullText = e.detail.value;  // 获取输入的完整文本
    this.setData({
      introduction: fullText // 直接更新为当前输入内容
    });
},

// 失去焦点事件处理函数
onIntroductionBlur(e) {
    const fullText = e.detail.value;  // 获取完整文本
    const lines = fullText.split('\n');  // 按行分割文本

    // 提取项目标题（第一行）和项目简介（其余行）
    this.setData({
      title: lines[0] || '',  // 第一行作为标题，如果没有输入则为 ''
      introduction: lines.slice(1).join('\n') // 其余作为项目简介
    });

    // 输出提取的标题和简介
    console.log("项目标题:", this.data.title);  // 输出项目标题
    console.log("项目简介:", this.data.introduction);  // 输出项目简介
},
  

  // 人员需求输入
  onRequirementPositionInput: function(e) {
    const index = e.currentTarget.dataset.index;
    const requirements = this.data.requirements;
    requirements[index].position = e.detail.value;
    this.setData({ requirements });
  },

  onRequirementNumberInput: function(e) {
    const index = e.currentTarget.dataset.index;
    const requirements = this.data.requirements;
    requirements[index].number = e.detail.value;
    this.setData({ requirements });
  },

  addRequirement: function() {
    this.setData({ requirements: [...this.data.requirements, { position: '', number: '' }] });
  },

  removeRequirement: function(e) {
    const index = e.currentTarget.dataset.index;
    const requirements = this.data.requirements.filter((_, i) => i !== index);
    this.setData({ requirements });
  },

  // 确认新建项目并上传到数据库
  confirmNewProject: function() {
    const db = wx.cloud.database();

    // 控制台输出要上传的数据
    console.log('准备上传的数据:', {
      title:this.data.title,
      initiator: this.data.initiator,
      members: this.data.members,
      tags: this.data.tags,
      introduction: this.data.introduction,
      requirements: this.data.requirements,
      date: new Date()
    });

    wx.cloud.callFunction({
      name: 'addProject',
      data: {
        title:this.data.title,
        initiator: this.data.initiator,
        members: this.data.members,
        tags: this.data.tags,
        introduction: this.data.introduction,
        requirements: this.data.requirements,
        date: new Date()
      },
      success: res => {
        console.log('项目创建成功:', res);

        wx.showToast({
          title: '项目创建成功',
        });

        // 清空表单
        this.setData({
          initiator: '',
          members: [],
          tags: [],
          introduction: '',
          requirements: []
        });
      },
      fail: err => {
        console.error('项目创建失败:', err);
        
        wx.showToast({
          title: '项目创建失败',
          icon: 'none'
        });
      }
    });
  }

});