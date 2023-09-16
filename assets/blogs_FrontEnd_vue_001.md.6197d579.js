import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.3debe746.js";const h=JSON.parse('{"title":"VUE","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/FrontEnd/vue/001.md","filePath":"blogs/FrontEnd/vue/001.md"}'),p={name:"blogs/FrontEnd/vue/001.md"},o=l(`<h1 id="vue" tabindex="-1">VUE <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;VUE&quot;">​</a></h1><h2 id="vuejs语法和概念" tabindex="-1">vuejs语法和概念 <a class="header-anchor" href="#vuejs语法和概念" aria-label="Permalink to &quot;vuejs语法和概念&quot;">​</a></h2><ul><li>差值表达式 {</li><li>指令</li><li>计算属性和侦听器</li><li>Class和Style绑定</li><li>条件渲染/列表渲染</li><li>表单输入绑定</li><li>组件</li><li>插槽</li><li>插件</li><li>混入mimin</li><li>深入响应式原理</li><li>不同构建版本的vue</li></ul><h2 id="vue-router" tabindex="-1">Vue Router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;Vue Router&quot;">​</a></h2><h3 id="步骤" tabindex="-1">步骤 <a class="header-anchor" href="#步骤" aria-label="Permalink to &quot;步骤&quot;">​</a></h3><pre><code>1. 注册插件
2. 创建路由对象
3. 创建Vue实例，注册router对象
</code></pre><h3 id="动态路由" tabindex="-1">动态路由 <a class="header-anchor" href="#动态路由" aria-label="Permalink to &quot;动态路由&quot;">​</a></h3><ul><li>动态导入 component: () =&gt; import(&#39;组件路径&#39;)</li><li>获取路由参数 <ol><li>$route.params.id</li><li>开启props 通过props:[&#39;参数&#39;]</li></ol></li></ul><h3 id="嵌套路由" tabindex="-1">嵌套路由 <a class="header-anchor" href="#嵌套路由" aria-label="Permalink to &quot;嵌套路由&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">children</span><span style="color:#E1E4E8;">:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;index&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            component: Index</span></span>
<span class="line"><span style="color:#E1E4E8;">        },{</span></span>
<span class="line"><span style="color:#E1E4E8;">            name: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            path: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            component: Detail</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: Layout,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">children</span><span style="color:#24292E;">:[</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;index&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            component: Index</span></span>
<span class="line"><span style="color:#24292E;">        },{</span></span>
<span class="line"><span style="color:#24292E;">            name: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            path: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            component: Detail</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="编程式导航" tabindex="-1">编程式导航 <a class="header-anchor" href="#编程式导航" aria-label="Permalink to &quot;编程式导航&quot;">​</a></h3><ul><li>路由跳转 <ol><li>this.$router.push(&#39;/&#39;)</li><li>this.$router.push({name:&#39;Home&#39;, params: {id: 1}})</li><li>this.$router.replace()</li><li>this.$router.go(-2)</li></ol></li></ul><h3 id="hash和history模式区别" tabindex="-1">Hash和History模式区别 <a class="header-anchor" href="#hash和history模式区别" aria-label="Permalink to &quot;Hash和History模式区别&quot;">​</a></h3><ul><li>表现形式的区别</li><li>原理区别 <ul><li>Hash模式是基于锚点，以及onhashchange事件</li><li>History模式是基于HTML5中的HistoryAPI <ul><li>history.pushState()</li><li>history.replaceState()</li></ul></li></ul></li></ul><h4 id="history模式的使用" tabindex="-1">History模式的使用 <a class="header-anchor" href="#history模式的使用" aria-label="Permalink to &quot;History模式的使用&quot;">​</a></h4><ul><li>History需要服务器的支持</li><li>node模式 使用history中间件</li><li>nginx模式<div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">location </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    try_files $uri $uri</span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">/</span><span style="color:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">location </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    try_files $uri $uri</span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">/</span><span style="color:#24292E;">index.html;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></li></ul><h4 id="vue-router-实现原理" tabindex="-1">Vue Router 实现原理 <a class="header-anchor" href="#vue-router-实现原理" aria-label="Permalink to &quot;Vue Router 实现原理&quot;">​</a></h4><ul><li>Hash模式 <ul><li>URL中#后面的内容作为路径地址</li><li>监听hashchange事件</li><li>根据当前路由地址找到对应组件重新渲染</li></ul></li><li>History模式 <ul><li>通过history.pushState()方法改变地址栏</li><li>监听popstate事件</li><li>根据当前路由地址找到对应组件重新渲染</li></ul></li></ul><h4 id="模拟实现" tabindex="-1">模拟实现 <a class="header-anchor" href="#模拟实现" aria-label="Permalink to &quot;模拟实现&quot;">​</a></h4><ul><li>核心代码</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//注册插件</span></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(VueRouter)</span></span>
<span class="line"><span style="color:#6A737D;">// 创建路由对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    routers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {name: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">, path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">, component: homeComponent}</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#6A737D;">// 创建Vue实例，注册router对象</span></span>
<span class="line"><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Vue</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    router,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"><span style="color:#E1E4E8;">}).</span><span style="color:#B392F0;">$mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//注册插件</span></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(VueRouter)</span></span>
<span class="line"><span style="color:#6A737D;">// 创建路由对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    routers: [</span></span>
<span class="line"><span style="color:#24292E;">        {name: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">, path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">, component: homeComponent}</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#6A737D;">// 创建Vue实例，注册router对象</span></span>
<span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Vue</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    router,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;">: </span><span style="color:#E36209;">h</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(App)</span></span>
<span class="line"><span style="color:#24292E;">}).</span><span style="color:#6F42C1;">$mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">)</span></span></code></pre></div><ul><li>类图 <ul><li>options</li><li>data</li><li>routeMap</li><li>Constructor(Options): VueRouter</li><li>_install(Vue):viod</li><li>init():void</li><li>initEvent():void</li><li>createRouterMap():void</li><li>initComponents(Vue):void</li></ul></li></ul><h3 id="实现代码" tabindex="-1">实现代码 <a class="header-anchor" href="#实现代码" aria-label="Permalink to &quot;实现代码&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> _Vue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">install</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 1.判断当前插件是否已经被安装</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">（VueRouter.install.installed）{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">        VueRouter.install.installed </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 2.把Vue构造函数记录到全局变量</span></span>
<span class="line"><span style="color:#E1E4E8;">        _Vue </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Vue</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 3.把创建Vue实例时候传入的router对象注入到Vue实例上</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// _Vue.prototype.$router = this.$options.router</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 混入mixin</span></span>
<span class="line"><span style="color:#E1E4E8;">        _Vue.</span><span style="color:#B392F0;">mixin</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">beforeCreate</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.router){</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">_Vue</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">prototype</span><span style="color:#E1E4E8;">.$router </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.router</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$options.router.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">constructor</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> options</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.routeMap </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> _Vue.</span><span style="color:#B392F0;">observable</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            current: </span><span style="color:#9ECBFF;">&#39;/&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">createRouteMap</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initComponents</span><span style="color:#E1E4E8;">(_Vue)</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">initEvent</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">createRouteMap</span><span style="color:#E1E4E8;"> (  ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routerMap中</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.options.routes.</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">( </span><span style="color:#FFAB70;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.routeMap[route.path] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> route.component</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initComponents</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">Vue</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;router-link&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                to: String</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// template: &#39;&lt;a :href=&quot;to&quot;&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;"> ( </span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;"> ) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    attrs: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        href: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.to</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }，</span></span>
<span class="line"><span style="color:#E1E4E8;">                    on: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        click: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.clickHandler</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#6A737D;">// 子元素</span></span>
<span class="line"><span style="color:#E1E4E8;">                }, [</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$slots.default])</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">chickHandler</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">                    history.</span><span style="color:#B392F0;">pushState</span><span style="color:#E1E4E8;">({}, </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.to)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$router.data.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.to</span></span>
<span class="line"><span style="color:#E1E4E8;">                    e.</span><span style="color:#B392F0;">preventDefault</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">self</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span></span>
<span class="line"><span style="color:#E1E4E8;">        Vue.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;router-view&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">render</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">h</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> self.routeMap[self.data.current]</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(component)</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">initEvent</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">        window.</span><span style="color:#B392F0;">addEventListener</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;popstate&#39;</span><span style="color:#E1E4E8;">, () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.current </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.location.pathname</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> _Vue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">install</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">Vue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 1.判断当前插件是否已经被安装</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">（VueRouter.install.installed）{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        VueRouter.install.installed </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 2.把Vue构造函数记录到全局变量</span></span>
<span class="line"><span style="color:#24292E;">        _Vue </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Vue</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 3.把创建Vue实例时候传入的router对象注入到Vue实例上</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// _Vue.prototype.$router = this.$options.router</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 混入mixin</span></span>
<span class="line"><span style="color:#24292E;">        _Vue.</span><span style="color:#6F42C1;">mixin</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">beforeCreate</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.router){</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">_Vue</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">prototype</span><span style="color:#24292E;">.$router </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.router</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$options.router.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">constructor</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">options</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> options</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.routeMap </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> _Vue.</span><span style="color:#6F42C1;">observable</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            current: </span><span style="color:#032F62;">&#39;/&#39;</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">init</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">createRouteMap</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initComponents</span><span style="color:#24292E;">(_Vue)</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">initEvent</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">createRouteMap</span><span style="color:#24292E;"> (  ) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routerMap中</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.options.routes.</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">( </span><span style="color:#E36209;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.routeMap[route.path] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> route.component</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initComponents</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">Vue</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">        Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;router-link&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            props: {</span></span>
<span class="line"><span style="color:#24292E;">                to: String</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// template: &#39;&lt;a :href=&quot;to&quot;&gt;&lt;slot&gt;&lt;/slot&gt;&lt;/a&gt;&#39;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;"> ( </span><span style="color:#E36209;">h</span><span style="color:#24292E;"> ) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">                    attrs: {</span></span>
<span class="line"><span style="color:#24292E;">                        href: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to</span></span>
<span class="line"><span style="color:#24292E;">                    }，</span></span>
<span class="line"><span style="color:#24292E;">                    on: {</span></span>
<span class="line"><span style="color:#24292E;">                        click: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.clickHandler</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6A737D;">// 子元素</span></span>
<span class="line"><span style="color:#24292E;">                }, [</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$slots.default])</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            methods: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">chickHandler</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">                    history.</span><span style="color:#6F42C1;">pushState</span><span style="color:#24292E;">({}, </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to)</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$router.data.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.to</span></span>
<span class="line"><span style="color:#24292E;">                    e.</span><span style="color:#6F42C1;">preventDefault</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">self</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span></span>
<span class="line"><span style="color:#24292E;">        Vue.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;router-view&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">render</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">h</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">component</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> self.routeMap[self.data.current]</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(component)</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">initEvent</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">        window.</span><span style="color:#6F42C1;">addEventListener</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;popstate&#39;</span><span style="color:#24292E;">, () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data.current </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.location.pathname</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>Vue的构建版本 <ul><li>运行时版：不支持template模板，需要打包的时候提前编译</li><li>完整版：包含运行时和编译器，体积比运行时版大10K左右，程序运行的时候把模板转换成render函数</li></ul></li></ul>`,25),e=[o];function t(c,r,E,y,i,u){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{h as __pageData,d as default};
