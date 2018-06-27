## webpack准备工作：
`npm install webpack`
`npm install webpack-dev-server` - 带服务器的webpack
- 去package.json里配置：
    ```
    "scripts":{
        "dev":"webpack-dev-server --inline --hot --port 8080"
    }
    ```

- `npm run build`的本质是`webpack -p`打包并压缩

- webpack.config.js里配置：
```javascript
export default{
    entry:'main.js,
    output:{
        path:__dirname,
        filename:'bundle.js'
    }
}
```

- ES6用不了怎么办？
    - 第一步：安装vue-loader`npm install vue-loader`
    - 第二步：webpack.config.js里配置：
    ```javascript
    modules:{
        rules:[
            { test:/\.vue$/, loader:'vue'},
            { test: /\.js?$/, loader: 'babel-loader',  exclude: file => (
                /node_modules/.test(file) &&
                !/\.vue\.js/.test(file)
            )}
        ]
    }
    ```
    - 第三步骤：根目录新建.babelrc 
    ```
    "presets": ["env"],
    "plugins": ["transform-vue-jsx", "transform-runtime"]
    ```
`
- 所有需要安装的loader和plugin:
    - webpack:webpack和webpack-dev-server
    - vue:vue-loader
    - 热加载:vue-hot-reload-api
    - css:vue-style-loader 和 css-loader
    - html:vue-html-loader
    - babel全家桶:babel-loader 和 babel-core 和 babel-plugin-transform-runtime(不知道用不用这个：babel-plugin-transform-vue-jsx) 和 babel-preset-env 和 babel-runtime 

