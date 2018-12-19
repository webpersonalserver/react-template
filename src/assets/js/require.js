/**
 * 请求设置文件
 */
// 引入axios
import axios from 'axios';

/**
 * @param {请求路径：''} url 
 * @param {请求方式：post、get} method 
 * @param {请求参数：{}} data 
 * @param {成功回调：function} successCallBack 
 * @param {失败回调：funciton} failCallBack 
 */
function commonAxios (url, method, data, successCallBack, failCallBack) {
  axios({
    method: method || 'POST',
    url: url || '',
    params: data || {}
  }).then((res) => {
    successCallBack && successCallBack(res);
  }).catch((err) => {
    failCallBack && failCallBack(err);
  });
}

export default {
  commonAxios
}