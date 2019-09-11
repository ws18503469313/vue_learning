const http = require("http")
const request = require("request")

const host = '127.0.0.1'
const port = 8010
const imgPort = 8011

// 创建一个API代理服务
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
    console.log("代理接口运行在http://"+ host + ":" + port +"/")
    console.log("${host}")
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
imgServer.listen(imgPort, host, () =>{
    console.log("代理接口运行在http://"+ host + ":" + imgPort +"/")
})


// //首先启动本地服务器
// http.createServer(function(req, res) {
//     //客户端请求有两种方式，可以是对象，也可以是url字符串
//     //1.这里采取的是对象形式，包括url对象以及headers
//     var options = url.parse(req.url);
//     options.headers = req.headers;
//     //2.如果采取字符串形式，就传入一个完整的url字符串，node会自动解析成url对象
//
//     //通过客户端请求新建一个代理服务器
//     //代理请求仿照本地请求头的数据
//     var proxyRequest = http.request(options, function(proxyResponse) {     //代理请求获取的数据再返回给本地res
//         proxyResponse.on('data', function(chunk) {
//             console.log('proxyResponse length:', chunk.length);
//             res.write(chunk, 'binary');
//         });
//         //当代理请求不再收到新的数据，告知本地res数据写入完毕。
//         proxyResponse.on('end', function() {
//             console.log('proxied request ended');
//             res.end();
//         });
//
//         res.writeHead(proxyResponse.statusCode, proxyResponse.headers);
//     });
//
//     //data只有当请求体数据进来时才会触发
//     //尽管没有请求体数据进来，data还是要写，否则不会触发end事件
//     req.on('data', function(chunk) {
//         console.log('in request length:', chunk.length);
//         proxyRequest.write(chunk, 'binary');
//     });
//
//     req.on('end', function() {
//         //向proxy发送求情，这里end方法必须被调用才能发起代理请求
//         //所有的客户端请求都需要通过end来发起
//         proxyRequest.end();
//     });
//
// }).listen(8080)