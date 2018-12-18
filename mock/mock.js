/**
 * 模拟数据的自定义接口文件
 */
let Mock = require('mockjs');

Mock.mock('/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});