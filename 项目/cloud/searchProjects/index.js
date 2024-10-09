// 云函数代码示例
const cloud = require('wx-server-sdk');
cloud.init();
const db = cloud.database();

exports.main = async (event, context) => {
  const searchTerm = event.searchTerm;  // 接收页面传递的搜索词

  try {
    // 正则表达式匹配
    const result = await db.collection('projects').where({
      title: db.RegExp({
        regexp: searchTerm,  // 使用传递的搜索词
        options: 'i'  // 忽略大小写
      })
    }).get();

    console.log('查询成功，数据库返回的数据：', result.data);

    if (result.data.length > 0) {
      // 输出数据库中每一条数据的 title，检查是否与搜索词对比失败
      result.data.forEach(item => {
        console.log('数据库项目 title:', item.title);
        console.log('输入的搜索词:', searchTerm);
      });

      return {
        success: true,
        data: result.data
      };
    } else {
      console.log('无匹配项，搜索词:', searchTerm);
      return {
        success: false,
        message: '无匹配项'
      };
    }
  } catch (err) {
    console.error('数据库查询失败:', err);
    return {
      success: false,
      message: '数据库查询失败'
    };
  }
};