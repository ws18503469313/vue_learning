import axios from 'axios'

const Util = {
    imagePath: "http://127.0.0.1:8011/img/",
    apiPath: "http://127.0.0.1:8010/"
}
//ajax通用配置
Util.ajax = axios.create({
    baseUrl: Util.apiPath
})
//响应拦截器
Util.ajax.interceptors.response.use(res =>{
    return res.data
})

export default Util