---
sidebar: auto
---

# VUE
## vuejs语法和概念
+ 差值表达式 {{}}
+ 指令
+ 计算属性和侦听器
+ Class和Style绑定
+ 条件渲染/列表渲染
+ 表单输入绑定
+ 组件
+ 插槽
+ 插件
+ 混入mimin
+ 深入响应式原理
+ 不同构建版本的vue

## Vue Router
### 步骤
    1. 注册插件
    2. 创建路由对象
    3. 创建Vue实例，注册router对象
### 动态路由
+ 动态导入 component: () => import('组件路径')
+ 获取路由参数
    1. $route.params.id
    2. 开启props 通过props:['参数']
### 嵌套路由
```js
{
    path: '/',
    component: Layout,
    children:[
        {
            name: 'index',
            path: '',
            component: Index
        },{
            name: 'detail',
            path: '',
            component: Detail
        }
    ]
}
```
### 编程式导航
+ 路由跳转
    1. this.$router.push('/')
    2. this.$router.push({name:'Home', params: {id: 1}})
    3. this.$router.replace()
    4. this.$router.go(-2)
### Hash和History模式区别
+ 表现形式的区别
+ 原理区别
    + Hash模式是基于锚点，以及onhashchange事件
    + History模式是基于HTML5中的HistoryAPI
        + history.pushState()
        + history.replaceState()
#### History模式的使用
+ History需要服务器的支持
+ node模式 使用history中间件
+ nginx模式 
    ```js
    location / {
        try_files $uri $uri/ /index.html;
    }
    ```
#### Vue Router 实现原理
+ Hash模式
    + URL中#后面的内容作为路径地址
    + 监听hashchange事件
    + 根据当前路由地址找到对应组件重新渲染
+ History模式
    + 通过history.pushState()方法改变地址栏
    + 监听popstate事件
    + 根据当前路由地址找到对应组件重新渲染
#### 模拟实现
+ 核心代码
```js
//注册插件
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
    routers: [
        {name: 'home', path: '/', component: homeComponent}
    ]
})
// main.js
// 创建Vue实例，注册router对象
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
```
+ 类图
    + options
    + data
    + routeMap
    + Constructor(Options): VueRouter
    + _install(Vue):viod
    + init():void
    + initEvent():void
    + createRouterMap():void
    + initComponents(Vue):void
### 实现代码
```js
let _Vue = null
export default class VueRouter {
    static install (Vue) {
        // 1.判断当前插件是否已经被安装
        if（VueRouter.install.installed）{
            return
        }
        VueRouter.install.installed = true
        // 2.把Vue构造函数记录到全局变量
        _Vue = Vue
        // 3.把创建Vue实例时候传入的router对象注入到Vue实例上
        // _Vue.prototype.$router = this.$options.router
        // 混入mixin
        _Vue.mixin({
            beforeCreate () {
                if (this.$options.router){
                    _Vue.prototype.$router = this.$options.router
                    this.$options.router.init()
                }
            }
        })
    }
    constructor ( options ) {
        this.options = options
        this.routeMap = {}
        this.data = _Vue.observable({
            current: '/'
        })
    }
    init () {
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent()
    }
    createRouteMap (  ) {
        //遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routerMap中
        this.options.routes.forEach( route => {
            this.routeMap[route.path] = route.component
        })
    }
    initComponents ( Vue ) {
        Vue.component('router-link', {
            props: {
                to: String
            },
            // template: '<a :href="to"><slot></slot></a>'
            render ( h ) {
                return h('a', {
                    attrs: {
                        href: this.to
                    }，
                    on: {
                        click: this.clickHandler
                    }
                    // 子元素
                }, [this.$slots.default])
            },
            methods: {
                chickHandler (e){
                    history.pushState({}, '', this.to)
                    this.$router.data.current = this.to
                    e.preventDefault()
                }
            }
        })
        const self = this
        Vue.component('router-view', {
            render (h) {
                const component = self.routeMap[self.data.current]
                return h(component)
            }
        })
    }
    initEvent () {
        window.addEventListener('popstate', () => {
            this.data.current = window.location.pathname
        })
    }
}
```
+ Vue的构建版本
    + 运行时版：不支持template模板，需要打包的时候提前编译
    + 完整版：包含运行时和编译器，体积比运行时版大10K左右，程序运行的时候把模板转换成render函数