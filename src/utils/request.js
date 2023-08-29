import axios from "axios";

// 一些配置自己看axios官网
const service = axios.create({
  baseURL: "http://localhost:8080", // 请求地址
  timeout: 5000, // 请求响应时常, 毫秒
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 可以获取token等请求头添加信息写在请求头,
    config.headers["Token"] = "xxxxx";
    return config;
  },
  (error) => {
    // 异常处理
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // 异常处理
    if (res.code !== 400) {
      console.log(res.message);
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error);
    return Promise.reject(error);
  }
);

export default service;
