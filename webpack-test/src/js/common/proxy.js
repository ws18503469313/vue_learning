const http = require("http")
const request = require("request")

const host = '127.0.0.1'
const port = 8010
const imgPort = 8011

//创建一个API代理服务
const apiServer = http.createServer((req, res) =>{
    const url = 'http://news-at.zhihu.com/api/4' + req.url
    const options = {
        url: url
    }
    function callback(error, response, body) {
        if(!error && response.statusCode === 200){
            //编码
            res.setHeader('contentType', 'text/plain;charset=UTF-8')
            //允许跨域
            req.setHeader('Access-Control-Allow-Origin', "*")
            //返回
            res.end(body)
        }
    }
    request.get(options, callback)
})
//监听8010端口
apiServer.listen(port, host, () =>{
    console.log("代理接口运行在http://${host}:${port}/")
})
//创建一个图片代理服务
const imgServer = http.createServer((req, res) =>{
    const url = req.url.split('/img')[1]
    const option = {
        url: url,
        encoding: null
    }

    function callback(error, response, body) {
        if(!error && response.statusCode === 200){
            const  contentType = response.headers['content-type']
            res.setHeader('contentType', contentType)
            res.setHeader('Access-Control-Allow-Origin', "*")
            res.end(body)
        }
    }
    request.get(option, callback)
})
imgServer.listen(port, imgPort, () =>{
    console.log("图片代理接口运行在http://${host}:${imgPort}/")
})