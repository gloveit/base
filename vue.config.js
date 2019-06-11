var path = require('path');  //path 为node内置模块，一般解析路径使用
const webpack = require('webpack');  
const fs = require('fs')  //fs 为node内置模块，一般读取文件使用
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //引入代码压缩
module.exports = {
  configureWebpack: {
    devtool: '',   
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'foo.bundle.js'
    //   },
    entry:{
      //将第三方库统一添加到vendor包中
      vendor:['vue','vue-router','ant-design-vue','vuex']
    },
    module: {
      rules: [
      //  {         
      //    test: require.resolve('./src/global.js'),
      //    use: 'exports-loader?name,parse=sayGlobal.hello'
      //  }
      
        // {
        // test: /\.less$/,
        // loader: "style-loader!css-loader!less-loader",
        // }
      ]
    },
    //分离runtime
    optimization:{
      runtimeChunk: true,
    },
   

    // optimization: {
    //     runtimeChunk: 'single' //将运行时依赖打包为1个包
    // },
    // optimization: {
    //   splitChunks: {
    //     // chunks: "initial", // 必须三选一： "initial" | "all"(默认就是all) | "async" 
    //     // minSize: 0, // 最小尺寸，默认0
    //     // minChunks: 1, // 最小 chunk ，默认1
    //     // maxAsyncRequests: 1, // 最大异步请求数， 默认1
    //     // maxInitialRequests : 1, // 最大初始化请求书，默认1
    //     // name: function(){}, // 名称，此选项可接收 function
    //       cacheGroups: { // 这里开始设置缓存的 chunks
    //           // lodash: { // key 为entry中定义的 入口名称
    //           //   test: /node_modules/,  // 正则规则验证，如果符合就提取 chunk
    //           //   chunks: 'initial',  // 必须三选一： "initial" | "all" | "async"(默认就是异步)
    //           //   name: 'lodash',    // 要缓存的 分隔出来的 chunk 名称 
    //           //   priority: 10,
    //           //   enforce: true
    //           // },
    //           // ant-design-vue:{
    //           //   test: /node_modules/,  
    //           //   chunks: 'initial', 
    //           //   name: 'ant-design-vue', 
    //           //   priority: 10,
    //           //   enforce: true
    //           // }
    //       }
    //   }
    // },
    // entry: {
    //   index: './src/main.js',
    // },
    plugins: [
      // new HTMLWebpackPlugin({
      //   title: 'Code Splitting'
      // }),

          //添加jquery插件
          // new webpack.ProvidePlugin({ 
          //   $:"jquery", 
          //   jQuery:"jquery",
          //  "windows.jQuery":"jquery"
          // }) ,

          //启动离线服务
          // new WorkboxPlugin.GenerateSW({
          //     // 这些选项帮助 ServiceWorkers 快速启用
          //     // 不允许遗留任何“旧的” ServiceWorkers
          //   clientsClaim: true,
          //     skipWaiting: true
          //   })

          //全局添加jquery
          new webpack.ProvidePlugin({
              $: 'jquery'
            }),
          // 启用代码压缩
          // new UglifyJSPlugin()

          // new webpack.DefinePlugin({
          //     'process.env.NODE_ENV': JSON.stringify('development')
          // })
    ],
    output: {
      // 生产环境构建使用
      // filename: '[name][chunkhash].js',
      // chunkFilename: '[name].[chunkhash].js',
    },
    // externals: {
    //   jquery: 'jQuery'
    // },
    performance: {  //webpack 在打包时提示开发者哪些包体积过大
      // hints: "false",
      // assetFilter: function(assetFilename) {
      //   return assetFilename.endsWith('.js');
      // }
    },
    // watch:true   //监听文件变化是重新构建
    devServer: {
      hot: false,
    },
  },
  // devServer: {
  //     contentBase: path.join(__dirname, "dist"),
  //     compress: true,
  // },
  publicPath: './', //项目资源采用相对路径链接
}



