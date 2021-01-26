
#### 模块化规范
##### CommonJS 同步模块加载模块
+ 一个文件就是一个模块
+ 每个模块都有单独的作用域
+ 通过module.exports导出成员
+ 通过require函数载入模块

##### AMD 异步
+ AMD使用起来相对复杂
+ 模块JS文件请求频繁

##### ES Modules VS CommonJS

##### ES Modules
+ 基本特性
    - 通过给 script 添加 type = module 的属性
    1. ESM 自动采用严格模式，忽略‘use strict’
    2. 每个ES Module 都是运行在单独的私有作用域中
    3. ESM是通过CORS的方式请求外部JS模块
    4. ESM的script标签会延迟执行脚本
+ 导出导入
    1. export { name } || export { name as newName }
    2. import { name } from 'path'
+ 注意事项
    1. export default { } 导出是对象
    2. export 导出引用
    3. import { name } from '完整路径名称'
+ ES Modules in Nodejs
    1. *.mjs
    2. 注意事项
        1. ESM中可以导入CommonJS
        2. CommonJS中不能导入ESM
        3. CommonJS始终只会导出一个默认成员
        4. 注意import不是解构导出对象