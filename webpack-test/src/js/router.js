import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Routers = [
    {
        path: '/index',
        component: (resolve) => require(['../template/views/index.vue'], resolve),//一次性加载
        meta: {//自定义一些属性
            title: "首页"
        }
    },{
        path: '/about',
        component: (resolve) => require(['../template/views/about.vue'], resolve),//懒加载
        meta: {
            title: "关于"
        }
    },{
        path: '/user/:id',
        component: (resolve) => require(['../template/views/user.vue'], resolve),
        meta: {
            title: "个人主页"
        }
    },{
        path: '/login',
        component: (resolve) => require(['../template/views/login.vue'], resolve),
        meta: {
            title: "登陆"
        }
    },{
        path: '/message',
        component: (resolve) => require(['../template/views/message.vue'], resolve),
        meta: {
            title: "消息"
        }
    },{
        path: '*',
        redirect: "/index"
    }
]
const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig)
/**
 * 导航钩子函数
 * to: 即将进入的目标路由对象
 * from: 即将离开的当前路由对象
 * next: 继续执行接下来的钩子函数
 */
router.beforeEach((to ,from ,next) =>{
    console.log(to.path)
    window.document.title = to.meta.title
    // if(to.path != '/login' && window.localStorage.getItem("TOKEN") == null){//不是去登陆页面,且未登陆
    //     next("/login")
    // }else{
    //     next();
    // }
    next()

})

export default router