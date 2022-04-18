<template><h1 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h1>
<h2 id="标准与规范" tabindex="-1"><a class="header-anchor" href="#标准与规范" aria-hidden="true">#</a> 标准与规范</h2>
<h3 id="commonjs-同步模块加载模块" tabindex="-1"><a class="header-anchor" href="#commonjs-同步模块加载模块" aria-hidden="true">#</a> CommonJS 同步模块加载模块</h3>
<ul>
<li>一个文件就是一个模块</li>
<li>每个模块都有单独的作用域</li>
<li>通过module.exports导出成员</li>
<li>通过require函数载入模块</li>
</ul>
<h4 id="amd-异步" tabindex="-1"><a class="header-anchor" href="#amd-异步" aria-hidden="true">#</a> AMD 异步</h4>
<ul>
<li>AMD使用起来相对复杂</li>
<li>模块JS文件请求频繁</li>
</ul>
<h4 id="es-modules-vs-commonjs" tabindex="-1"><a class="header-anchor" href="#es-modules-vs-commonjs" aria-hidden="true">#</a> ES Modules VS CommonJS</h4>
<h4 id="es-modules" tabindex="-1"><a class="header-anchor" href="#es-modules" aria-hidden="true">#</a> ES Modules</h4>
<ul>
<li>基本特性
<ul>
<li>通过给 script 添加 type = module 的属性</li>
</ul>
<ol>
<li>ESM 自动采用严格模式，忽略‘use strict’</li>
<li>每个ES Module 都是运行在单独的私有作用域中</li>
<li>ESM是通过CORS的方式请求外部JS模块</li>
<li>ESM的script标签会延迟执行脚本</li>
</ol>
</li>
<li>导出导入
<ol>
<li>export { name } || export { name as newName }</li>
<li>import { name } from 'path'</li>
</ol>
</li>
<li>注意事项
<ol>
<li>export default { } 导出是对象</li>
<li>export 导出引用</li>
<li>import { name } from '完整路径名称'</li>
</ol>
</li>
<li>ES Modules in Nodejs
<ol>
<li>*.mjs</li>
<li>注意事项
<ol>
<li>ESM中可以导入CommonJS</li>
<li>CommonJS中不能导入ESM</li>
<li>CommonJS始终只会导出一个默认成员</li>
<li>注意import不是解构导出对象</li>
</ol>
</li>
</ol>
</li>
</ul>
<h3 id="webpack配置" tabindex="-1"><a class="header-anchor" href="#webpack配置" aria-hidden="true">#</a> WebPack配置</h3>
<h3 id="插件机制" tabindex="-1"><a class="header-anchor" href="#插件机制" aria-hidden="true">#</a> 插件机制</h3>
<h3 id="打包过程和结果分析" tabindex="-1"><a class="header-anchor" href="#打包过程和结果分析" aria-hidden="true">#</a> 打包过程和结果分析</h3>
<h3 id="es-module标准" tabindex="-1"><a class="header-anchor" href="#es-module标准" aria-hidden="true">#</a> ES Module标准</h3>
<h3 id="资源模块的加载" tabindex="-1"><a class="header-anchor" href="#资源模块的加载" aria-hidden="true">#</a> 资源模块的加载</h3>
<h3 id="webpack高级特性" tabindex="-1"><a class="header-anchor" href="#webpack高级特性" aria-hidden="true">#</a> WebPack高级特性</h3>
<h3 id="webpack实现原理" tabindex="-1"><a class="header-anchor" href="#webpack实现原理" aria-hidden="true">#</a> WebPack实现原理</h3>
<h3 id="rollup、parcel" tabindex="-1"><a class="header-anchor" href="#rollup、parcel" aria-hidden="true">#</a> Rollup、Parcel</h3>
</template>
