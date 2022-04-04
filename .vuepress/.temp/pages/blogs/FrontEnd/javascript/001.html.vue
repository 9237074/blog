<template><h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> javascript</h1>
<h3 id="new-的过程" tabindex="-1"><a class="header-anchor" href="#new-的过程" aria-hidden="true">#</a> new 的过程</h3>
<pre><code>1.新生成了一个对象
2.链接到原型
3.绑定this
4.返回新对象
</code></pre>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个空的对象</span>
	<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 获得构造函数</span>
	<span class="token keyword">let</span> Con <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>
	<span class="token comment">// 链接到原型</span>
	obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Con</span><span class="token punctuation">.</span>prototype
	<span class="token comment">// 绑定 this，执行构造函数</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
	<span class="token comment">// 确保 new 出来的是个对象</span>
	<span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></template>
