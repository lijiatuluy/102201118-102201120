// 初始化云数据库
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  const searchTerm = event.searchTerm;
  
  try {
    const result = await db.collection('professors').where({
      name: db.RegExp({
        regexp: '.*' + searchTerm,
        options: 'i'
      })
    }).get();

    console.log('查询结果：', result.data);  // 输出数据库查询结果
    return {
      success: true,
      data: result.data
    };
  } catch (error) {
    console.error('查询失败：', error);
    return {
      success: false,
      message: error.message
    };
  }
};