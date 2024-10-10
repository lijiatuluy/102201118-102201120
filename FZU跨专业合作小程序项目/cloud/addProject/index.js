// 云函数: addProject
const cloud = require('wx-server-sdk');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV // 使用当前云环境
});
const db = cloud.database();

// 云函数入口
exports.main = async (event, context) => {
  const {title, initiator, members, tags, introduction, requirements, date } = event;
  // 控制台输出输入的数据
  console.log('接收到的参数:', { title,initiator, members, tags, introduction, requirements, date });

  try {
    const res = await db.collection('projects').add({
      data: {
        title: title,
        initiator: initiator,
        members: members,
        tags: tags,
        introduction: introduction,
        requirements: requirements,
        date: date || new Date() // 如果没有传入日期，则使用当前时间
      }
    });

    // 控制台输出成功信息
    console.log('项目创建成功:', res);
    
    return {
      success: true,
      data: res
    };

  } catch (err) {
    // 控制台输出错误信息
    console.error('创建项目失败:', err);
    
    return {
      success: false,
      errorMessage: err.message
    };
  }
};