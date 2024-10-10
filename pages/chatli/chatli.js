Page({
  data: {
    sender: '我',
    messages: [
      { id: 1, sender: '我', content: '您好，李教授！' },
      { id: 2, sender: '李教授', content: '同学你好，可以先看看我们课题' }
    ],
    inputMessage: ''
  },
  sendMessage() {
    const newMessage = {
      id: this.data.messages.length + 1,
      sender: '我',
      content: this.data.inputMessage
    };
    this.setData({
      messages: [...this.data.messages, newMessage],
      inputMessage: ''
    });
  },
  bindInput(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },
  navigateBack() {
    wx.navigateBack();
  }
});
