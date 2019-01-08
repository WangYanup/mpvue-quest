var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// copy from ./webpack.prod.conf.js
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap,
      extract: true
    })
  },
  // cheap-module-eval-source-map is faster for development
  // devtool: '#cheap-module-eval-source-map',
  devtool: '#source-map',
  output: {
    path: config.build.assetsRoot,
    // filename: utils.assetsPath('[name].[chunkhash].js'),
    // chunkFilename: utils.assetsPath('[id].[chunkhash].js')
    filename: utils.assetsPath('[name].js'),
    chunkFilename: utils.assetsPath('[id].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),

    // copy from ./webpack.prod.conf.js
    // extract css into its own file
    new ExtractTextPlugin({
      // filename: utils.assetsPath('[name].[contenthash].css')
      filename: utils.assetsPath('[name].wxss')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/vendor',
      minChunks: function (module, count) {
        // console.log(module.resource,`引用次数${count}`);
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('node_modules') >= 0
        ) || count > 1
      }
    }),

    //新增打包文件,分离自定义公共内容
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/module.packages', //新打包文件名
      chunks: ['common/vendor'], //拆分模块名
      minChunks: function (module, count) {
        // console.log(module.resource,`引用次数${count} -- 第三方`);
        // 以下是拆分规则，返回true 则拆分，以下规则是将
        //  babel-runtime, mpvue-wxparse, mpvue-entry , vuex, flyio, mpvue-router-patch, vuex-persistedstate
        // 下的文件单独打包
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          (
            module.resource.indexOf('babel-runtime') >= 0 ||
            module.resource.indexOf('mpvue-wxparse') >= 0 ||
            module.resource.indexOf('mpvue-entry') >= 0 ||
            module.resource.indexOf('mpvue-router-patch') >= 0 ||
            module.resource.indexOf('vuex-persistedstate') >= 0 ||
            module.resource.indexOf('vuex') >= 0 ||
            module.resource.indexOf('flyio') >= 0
          )
        )
      }
    }),


    //新增打包文件,分离lodash
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/lodash', //新打包文件名
      chunks: ['common/vendor'], //拆分模块名
      minChunks: function (module, count) {
        // console.log(module.resource,`引用次数${count} -- 自定义`);
        // 以下是拆分规则，返回true 则拆分，以下规则是将 lodash 下的文件单独打包
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('lodash') >= 0
        )
      }
    }),

    //新增打包文件,分离自定义公共内容
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/webim', //新打包文件名
      chunks: ['common/vendor'], //拆分模块名
      minChunks: function (module, count) {
        // console.log(module.resource,`引用次数${count} -- 自定义`);
        // 以下是拆分规则，返回true 则拆分，以下规则是将 src 下的文件单独打包
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('src') >= 0 &&
          module.resource.indexOf('node_modules') === -1
        )
      }
    }),

    //修改入口
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common/manifest',
      chunks: ['common/webim', 'common/module.packages', 'common/lodash']
    }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common/manifest',
    //   chunks: ['common/vendor']
    // }),

    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    // new HtmlWebpackPlugin({
    //   filename: 'index.html',
    //   template: 'index.html',
    //   inject: true
    // }),
    new FriendlyErrorsPlugin()
  ]
})
