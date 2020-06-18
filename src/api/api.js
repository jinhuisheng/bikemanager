import axios from 'axios'

const baseUrl = 'http://demo2527818.mockable.io'

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * 用户登录
 */

export const loginUserUrl = params => {
  return axios.post(baseUrl + '/auth', params);
}
