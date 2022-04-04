<template><h2 id="函数柯里化" tabindex="-1"><a class="header-anchor" href="#函数柯里化" aria-hidden="true">#</a> 函数柯里化</h2>
<ol>
<li>当一个函数有多个参数的时候，先传递一部分参数调用它。（这部分参数以后永远不变）</li>
<li>然后返回一个新的函数接收剩余的参数，返回结果</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> <span class="token function-variable function">checkAge</span> <span class="token operator">=</span>  <span class="token parameter">min</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token parameter">age</span> <span class="token operator">=></span> age<span class="token operator">>=</span> min<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> checkAge18 <span class="token operator">=</span> <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> checkAge20 <span class="token operator">=</span> <span class="token function">checkAge</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">checkAge18</span><span class="token punctuation">(</span><span class="token number">24</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">checkAge18</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h2>
</template>
