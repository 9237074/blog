<template><h1 id="自动化构建工具" tabindex="-1"><a class="header-anchor" href="#自动化构建工具" aria-hidden="true">#</a> 自动化构建工具</h1>
<h3 id="常见的自动化构建工具" tabindex="-1"><a class="header-anchor" href="#常见的自动化构建工具" aria-hidden="true">#</a> 常见的自动化构建工具</h3>
<ul>
<li>Grunt 基于磁盘</li>
<li>Gulp 基于内存 多任务</li>
<li>FIS</li>
</ul>
<h4 id="grunt" tabindex="-1"><a class="header-anchor" href="#grunt" aria-hidden="true">#</a> Grunt</h4>
<h4 id="gulp" tabindex="-1"><a class="header-anchor" href="#gulp" aria-hidden="true">#</a> Gulp</h4>
<pre><code>npm install gulp 
vim gulpfile.js
</code></pre>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token parameter">done</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'foo task working~'</span><span class="token punctuation">)</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

exports<span class="token punctuation">.</span><span class="token function-variable function">default</span> <span class="token operator">=</span> <span class="token parameter">done</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'default task working~'</span><span class="token punctuation">)</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'gulp'</span><span class="token punctuation">)</span>

gulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token parameter">done</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'bar working'</span><span class="token punctuation">)</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></template>
