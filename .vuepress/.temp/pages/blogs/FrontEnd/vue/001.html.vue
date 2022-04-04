<template><h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> VUE</h1>
<h2 id="vuejs语法和概念" tabindex="-1"><a class="header-anchor" href="#vuejs语法和概念" aria-hidden="true">#</a> vuejs语法和概念</h2>
<ul>
<li>差值表达式 {{}}</li>
<li>指令</li>
<li>计算属性和侦听器</li>
<li>Class和Style绑定</li>
<li>条件渲染/列表渲染</li>
<li>表单输入绑定</li>
<li>组件</li>
<li>插槽</li>
<li>插件</li>
<li>混入mimin</li>
<li>深入响应式原理</li>
<li>不同构建版本的vue</li>
</ul>
<h2 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h2>
<h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3>
<pre><code>1. 注册插件
2. 创建路由对象
3. 创建Vue实例，注册router对象
</code></pre>
<h3 id="动态路由" tabindex="-1"><a class="header-anchor" href="#动态路由" aria-hidden="true">#</a> 动态路由</h3>
<ul>
<li>动态导入 component: () =&gt; import('组件路径')</li>
<li>获取路由参数
<ol>
<li>$route.params.id</li>
<li>开启props 通过props:['参数']</li>
</ol>
</li>
</ul>
<h3 id="嵌套路由" tabindex="-1"><a class="header-anchor" href="#嵌套路由" aria-hidden="true">#</a> 嵌套路由</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> Layout<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'index'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Index
        <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'detail'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
            <span class="token literal-property property">component</span><span class="token operator">:</span> Detail
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="编程式导航" tabindex="-1"><a class="header-anchor" href="#编程式导航" aria-hidden="true">#</a> 编程式导航</h3>
<ul>
<li>路由跳转
<ol>
<li>this.$router.push('/')</li>
<li>this.$router.push({name:'Home', params: {id: 1}})</li>
<li>this.$router.replace()</li>
<li>this.$router.go(-2)</li>
</ol>
</li>
</ul>
<h3 id="hash和history模式区别" tabindex="-1"><a class="header-anchor" href="#hash和history模式区别" aria-hidden="true">#</a> Hash和History模式区别</h3>
<ul>
<li>表现形式的区别</li>
<li>原理区别
<ul>
<li>Hash模式是基于锚点，以及onhashchange事件</li>
<li>History模式是基于HTML5中的HistoryAPI
<ul>
<li>history.pushState()</li>
<li>history.replaceState()</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="history模式的使用" tabindex="-1"><a class="header-anchor" href="#history模式的使用" aria-hidden="true">#</a> History模式的使用</h4>
<ul>
<li>History需要服务器的支持</li>
<li>node模式 使用history中间件</li>
<li>nginx模式<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>location <span class="token operator">/</span> <span class="token punctuation">{</span>
    try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li>
</ul>
<h4 id="vue-router-实现原理" tabindex="-1"><a class="header-anchor" href="#vue-router-实现原理" aria-hidden="true">#</a> Vue Router 实现原理</h4>
<ul>
<li>Hash模式
<ul>
<li>URL中#后面的内容作为路径地址</li>
<li>监听hashchange事件</li>
<li>根据当前路由地址找到对应组件重新渲染</li>
</ul>
</li>
<li>History模式
<ul>
<li>通过history.pushState()方法改变地址栏</li>
<li>监听popstate事件</li>
<li>根据当前路由地址找到对应组件重新渲染</li>
</ul>
</li>
</ul>
<h4 id="模拟实现" tabindex="-1"><a class="header-anchor" href="#模拟实现" aria-hidden="true">#</a> 模拟实现</h4>
<ul>
<li>核心代码</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">//注册插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueRouter<span class="token punctuation">)</span>
<span class="token comment">// 创建路由对象</span>
<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">routers</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'home'</span><span class="token punctuation">,</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token literal-property property">component</span><span class="token operator">:</span> homeComponent<span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// main.js</span>
<span class="token comment">// 创建Vue实例，注册router对象</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=></span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul>
<li>类图
<ul>
<li>options</li>
<li>data</li>
<li>routeMap</li>
<li>Constructor(Options): VueRouter</li>
<li>_install(Vue):viod</li>
<li>init():void</li>
<li>initEvent():void</li>
<li>createRouterMap():void</li>
<li>initComponents(Vue):void</li>
</ul>
</li>
</ul>
<h3 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> _Vue <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">VueRouter</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token function">install</span> <span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.判断当前插件是否已经被安装</span>
        <span class="token keyword">if</span>（VueRouter<span class="token punctuation">.</span>install<span class="token punctuation">.</span>installed）<span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        VueRouter<span class="token punctuation">.</span>install<span class="token punctuation">.</span>installed <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token comment">// 2.把Vue构造函数记录到全局变量</span>
        _Vue <span class="token operator">=</span> Vue
        <span class="token comment">// 3.把创建Vue实例时候传入的router对象注入到Vue实例上</span>
        <span class="token comment">// _Vue.prototype.$router = this.$options.router</span>
        <span class="token comment">// 混入mixin</span>
        _Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token class-name">_Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$router <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>router<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span> <span class="token parameter">options</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
        <span class="token keyword">this</span><span class="token punctuation">.</span>routeMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> _Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token literal-property property">current</span><span class="token operator">:</span> <span class="token string">'/'</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">init</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createRouteMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initComponents</span><span class="token punctuation">(</span>_Vue<span class="token punctuation">)</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">createRouteMap</span> <span class="token punctuation">(</span>  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//遍历所有的路由规则，把路由规则解析成键值对的形式 存储到routerMap中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span> <span class="token parameter">route</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>routeMap<span class="token punctuation">[</span>route<span class="token punctuation">.</span>path<span class="token punctuation">]</span> <span class="token operator">=</span> route<span class="token punctuation">.</span>component
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">initComponents</span> <span class="token punctuation">(</span> <span class="token parameter">Vue</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'router-link'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">to</span><span class="token operator">:</span> String
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// template: '&lt;a :href="to">&lt;slot>&lt;/slot>&lt;/a>'</span>
            <span class="token function">render</span> <span class="token punctuation">(</span> <span class="token parameter">h</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">attrs</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to
                    <span class="token punctuation">}</span>，
                    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">click</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>clickHandler
                    <span class="token punctuation">}</span>
                    <span class="token comment">// 子元素</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>$slots<span class="token punctuation">.</span>default<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token function">chickHandler</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to<span class="token punctuation">)</span>
                    <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>data<span class="token punctuation">.</span>current <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>to
                    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> self <span class="token operator">=</span> <span class="token keyword">this</span>
        Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'router-view'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">const</span> component <span class="token operator">=</span> self<span class="token punctuation">.</span>routeMap<span class="token punctuation">[</span>self<span class="token punctuation">.</span>data<span class="token punctuation">.</span>current<span class="token punctuation">]</span>
                <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>component<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">initEvent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'popstate'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>current <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><ul>
<li>Vue的构建版本
<ul>
<li>运行时版：不支持template模板，需要打包的时候提前编译</li>
<li>完整版：包含运行时和编译器，体积比运行时版大10K左右，程序运行的时候把模板转换成render函数</li>
</ul>
</li>
</ul>
</template>
