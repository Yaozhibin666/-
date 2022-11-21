import axios from "axios";

const BASEURL  = "http://localhost:5173"
export const service  = axios.create({
    baseURL:BASEURL,
    timeout:10000
})
// 请求拦截
service.interceptors.request.use(
    config => {
    // 对响应数据做些什么
    const token=localStorage.getItem("token")
    return config
  },err =>{
    // 对拦截错误做些什么
    return Promise.reject(err)
  })


// 响应拦截
service.interceptors.response.use(
    res => {
        return res
    },err => {
        return Promise.reject(err)
    }
)


