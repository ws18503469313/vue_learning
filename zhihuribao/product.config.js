const webpack = require('webpack')

const HtmlwebpackPlugin = require("html-webpack-plugin")

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const merge = require("webpack-merge")

const webpackBaseConfig = require("./webpack.config.js")

webpackBseConfig .plugins = []

module.exports = merge(webpackBaseConfig, {
    output:{
        publicPath: '/dist',
        //将入口文件命名为带有20位hash值的唯一文件
        filename: '[name].[hash].js'
    },
    plugins: [
        new ExtractTextPlugin({
            //提取css,并命名为带有20位hash值的唯一文件
            filename: '[name].[hash].css',
            allChunks: true
        }),
        //定义当前node环境为生产环境
        new webpack.DefinePlugin()({
            'process.env': {
                NODE_ENV: 'production'
            }
        }),
        //压缩js
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warning: false
            }
        }),
        //提取模板
        new HtmlwebpackPlugin({
            filename: "./index.html",
            template: './index.ejs',
            inject: false
        })
    ]
})