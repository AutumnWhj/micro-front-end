// 1、设置其他项目的代理
// 2、打包时移除vue包
// 3、设置全局变量VUE_APP_NAME
// 4、设置dev-server 端口
const webpack = require('webpack')
const APP_NAME = require('./package.json').name
const PORT = require('./package.json').devPort

const PROXY = {
  '/crm/': {
    target: 'http://localhost:10241/'
  },
  '/hr/': {
    target: 'http://localhost:10242/'
  },
  '/oa/': {
    target: 'http://localhost:10243/'
  }
}
console.log('PORT', PORT)
console.log('APP_NAME', APP_NAME)
module.exports = {
  publicPath: './',
  productionSourceMap: false,

  configureWebpack: {
    externals: {
      vue: 'Vue'
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.APP_NAME': JSON.stringify(APP_NAME)
      })
    ]
  },

  devServer: {
    port: PORT,
    proxy: PROXY
  }
}