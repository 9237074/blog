# webpack

    webpack webpack-cli

## webpack 配置文件

    webpack.config.js

```js
const path = require("path");
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
```

### webpack 工作模式

1. watch
2. production
3. none

### 模块打包

    css-loader style-loader

```js
module.exports = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

### 文件资源加载器

    file-loader

```js
module.exports = {
  output: {
    publicPath: "dist/",
  },
  module: {
    rules: [
      {
        test: /.png$/,
        use: ["file-loader"],
      },
    ],
  },
};
```

### 代码检查类

    babel-loader

```js
module.exports = {
        output:{
            publicPath: 'dist/'
        },
        module:{
            rules: [{
                test: /.js$/,
                use: [
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                ]
            }]
        }
    }
```

### 常用加载器分类

1. 编译转换类 css-loader style-loader
2. 文件操作类 file-loader
3. 代码检查类 babel-loader

## webpack 模块加载方式

- 遵循 ESM 标准的 import 声明
- 遵循 CommonJS 标准的 require 函数
- 遵循 AMD 标准的 define 函数和 require 函数
- \*样式代码中的@import 指令和 url 函数
- \*HTML 代码中图片标签的 src 属性

## Loader 的工作原理

```js
module.exports = (source) => {
  return 'console.log("js代码")';
};
```

## webpack 常见插件

- clean-webpack-plugin
- html-webpack-plugin
- copy-webpack-plugin
- 需求 -> 关键词

```js
const { CleanWebpackPlugin } = reuqire("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  plugins: [
    //用于清除旧文件
    new CleanWebpackPlugin(),
    // 用于生成index.html
    new HtmlWebpackPlugin({
      title: "Webpack Plugin Sample",
      meta: {
        viewport: "width=device-width",
      },
      template: "./src/index.html",
    }),
    // 用于生成index.html
    new HtmlWebpackPlugin({
      filename: "./src/about.html",
    }),
    //用于拷贝public文件
    new CopyWebpackPlugin(),
  ],
};
```

## 开发一个 webpack 插件

- 钩子 Hooks 一个函数或者一个包含 apply 方法的对象
- 通过在生命周期中的钩子中挂在函数实现拓展

```js
class MyPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("MyPlugin", (compilation) => {
      //compilation => 可以理解为上下文
      for (const name in compilation.assets) {
        if (name.endsWith(".js")) {
          const contents = compilation.assets[name].source();
          const withoutComments = contents.replace(/\/\*\*+\*\//g, "");
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComment.length,
          };
        }
      }
    });
  }
}
```

## 增强 webpack 开发体验

- 自动编译 watch 工作模式
  webpack --watch
- 自动刷新浏览器
  BrowserSync

## webpack devServer

    webpack-dev-server --open

```js
module.exports = {
  devServer: {
    contentBase: "./public",
    proxy: {
      "/api": {
        // http://localhost:8080/api/users -> https://api.github.com/api/users
        target: "https://api.github.com",
        // http://localhost:8080/api/users -> https://api.github.com/users
        pathRewrite: {
          "^/api": "",
        },
        // 不能使用localhost:8080 作为请求GitHub的主机名
        changeOrigin: true,
      },
    },
  },
};
```

## Source Map

- 文件后缀 .map
- 构建后代码最后一行注释 //# sourceMappingURL=jquery-3.4.1.min.map

```js
module.exports = {
  devtool: "source-map",
};
```

## devtool

- 开发环境下 cheap-module-eval-source-map
- 生产环境 none ｜ nosources-source-map

## HMR 热替换

    webpack-dev-server --hot

```js
const webpack = require("webpack");
module.exports = {
  devServer: {
    hot: true,
  },
  plugin: [new webpack.HotModuleReplacementPlugin()],
};
```

- HMR apis

```js
module.hot.accept("./editor", () => {
  console.log("editor 更新了");
});
```

## 不同环境不同配置

1.  配置文件根据环境不同导出不同配置

```js
module.exports = (env, argv) => {
        const config = {}
        if(env === 'production){

        }else{

        }
    }
```

2. 一个环境对应一个配置文件
   - webpack.common.js
   - webpack.dev.js
   - webpack.prod.js

```js
const merge = require("webpack-merge");
module.exports = merge(common, {
  mode: "",
  plugin: [],
});
```

## DefinePlugin

- 为代码注入全局成员 
```js
process.env.NODE_ENV
```

```js
new webpack.DefinePlugin({
  API_BASE_URL: JSON.stringify("https://api.example.com"), // js代码片段
});
```

## Tree-shaking 未引用代码（dead code）

- 必须是 ES Module

```js
module.exports = {
  optimization: {
    // 负责标记 「枯树叶」
    usedExports: true,
    // 负责「摇掉」它们
    minimize: true,
    //合并模块函数 Scope Hoisting
    concatenateModules: true,
  },
};
```

## Tree-shaking & Babel

- Babel 可能把 ES Module -> CommonJS 导致不生效

## sideEffects 副作用

- 一般用于 npm 包标记是否有副作用

```js
module.exports = {
  optimization: {
    sideEffects: true,
  },
};
// package.json
sideEffects: [];
```

## webpack 分割代码 Code Splitting

- 分包，按需加载

## webpack 多入口打包

```js
module.exports = {
  enrty: {
    index: "./src/index.js",
    album: "./src/album.js",
  },
  output: {
    filename: "[name].bundle.js",
  },
};
```

## 提前公共模块

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
```

## 动态导入

```js
import().then(res => {

    })
```

## 魔法注释

```js
/* webpackChunkName: 'pots' */
```

## MiniCssExtractPlugin 提取 CSS 到单个文件 css 文件超过 150KB 使用

```js
new MiniCssExtractPlugin();
```

## OptimizeCssAssetsWebpackPlugin 压缩输出的 CSS 文件

```js
new OptimizeCssAssetsWebpackPlugin();
```

## 输出文件名 Hash

```js
{
    filename: '[name]-[hash:8].bundle.js',
    filename: '[name]-[hash].bundle.js',
    filename: '[name]-[chunkhash].bundle.js',
    filename: '[name]-[contenthash].bundle.js'
    }
```
