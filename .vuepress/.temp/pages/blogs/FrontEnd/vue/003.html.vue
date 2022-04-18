<template><h1 id="数据驱动" tabindex="-1"><a class="header-anchor" href="#数据驱动" aria-hidden="true">#</a> 数据驱动</h1>
<h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h2>
<ul>
<li>数据驱动</li>
<li>响应式的核心原理</li>
<li>发布订阅模式和观察者模式</li>
</ul>
<h2 id="数据驱动-1" tabindex="-1"><a class="header-anchor" href="#数据驱动-1" aria-hidden="true">#</a> 数据驱动</h2>
<ul>
<li>数据响应式、双向绑定、数据驱动</li>
<li>数据响应式
<ul>
<li>数据模型仅仅是普通的JavaScript对象，而当我们修改数据时，视图会进行更新，避免了繁琐的DOM操作，提高开发效率</li>
</ul>
</li>
<li>双向绑定
<ul>
<li>数据改变，视图改变；视图改变，数据也随之改变</li>
<li>使用v-model在表单元素上创建双向数据绑定</li>
</ul>
</li>
<li>数据驱动是Vue最独特的特性之一
<ul>
<li>开发过程中仅需要关注数据本身，不需要关心数据是如何渲染到视图</li>
</ul>
</li>
</ul>
<h2 id="vue2-object-definepro" tabindex="-1"><a class="header-anchor" href="#vue2-object-definepro" aria-hidden="true">#</a> vue2 Object.DefinePro</h2>
<h2 id="vue3-proxy" tabindex="-1"><a class="header-anchor" href="#vue3-proxy" aria-hidden="true">#</a> vue3 Proxy</h2>
<h2 id="发布订阅模式-观察者模式" tabindex="-1"><a class="header-anchor" href="#发布订阅模式-观察者模式" aria-hidden="true">#</a> 发布订阅模式 观察者模式</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> eventHub <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 发布</span>
eventHub<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span><span class="token punctuation">)</span>
<span class="token comment">//订阅</span>
eventHub<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'eventName'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<ul>
<li>观察者模式（订阅者） --Watch
<ul>
<li>update(): 当时间发生时，，具体要做的事情</li>
</ul>
</li>
<li>目标(发布者) --Dep
<ul>
<li>subs数组：存储所有的观察者</li>
<li>addSub(): 添加观察者</li>
<li>notify(): 当事件发生，调用所有观察者的update()方法</li>
</ul>
</li>
<li>没有事件中心</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span> <span class="token punctuation">(</span> <span class="token parameter">options</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.通过属性保存选项的数据</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$options <span class="token operator">=</span> options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$data <span class="token operator">=</span> options<span class="token punctuation">.</span>data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>$el <span class="token operator">=</span> <span class="token keyword">typeof</span> options<span class="token punctuation">.</span>el <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> document<span class="token punctuation">.</span>querySelector
        <span class="token comment">//2.把data中的成员转换成getter和setter，注入到vue实例中</span>

        <span class="token comment">//3.调用observer对象，监听数据的变化</span>

        <span class="token comment">//4.调用compiler对象，解析指令和差值表达式</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></template>
