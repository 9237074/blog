# 自动化

## 自动化构建
### NPM Script & script hooks
### Gulp
#### 常见的自动化构建工具
+ Grunt 基于磁盘
+ Gulp 基于内存 多任务
+ FIS 

#### Grunt

#### Gulp
    npm install gulp 
    vim gulpfile.js
```js
exports.foo = done => {
    console.log('foo task working~')
    done()
}

exports.default = done => {
    console.log('default task working~')
    done()
}

const gulp = require('gulp')

gulp.task('bar', done => {
    console.log('bar working')
    done()
})
```
## 自动化测试
### 主要分类
### 性能与压力测试
### 实现原理
### Mocha、Jest、Enzyme、Cypress、Nightmare、Puppeteer
## 自动化部署(CI/CD)
### 持续集成与持续部署
### 自动化工作流搭建
### CI实践
### 项目自动部署