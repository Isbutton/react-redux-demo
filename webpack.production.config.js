/**
 * Created by qitmac000068 on 2017/7/7.
 */
const path = require('path');
const webpack = require('webpack');
//在webpack中拷贝文件和文件夹
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool:'sourceMap',
    entry:{
        app:'./app/index.js',
        vendor:['react','react-dom','jquery','react-router','redux']
    },
    output:{
        path:path.join(__dirname,'/build'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.js','.jsx'],
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:'babel-loader',
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendor'],
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify:false,// 最紧凑的输出
            comments:false,// 删除所有的注释
            compress:{
                // 在UglifyJs删除没有用到的代码时不输出警告
                warnings: false,
                // 删除所有的 `console` 语句
                // 还可以兼容ie浏览器
                drop_console: true,
                // 内嵌定义了但是只用到一次的变量
                collapse_vars: true,
                // 提取出出现多次但是没有定义成变量去引用的静态值
                reduce_vars: true,
            }
        }),
        new CopyWebpackPlugin([
            {from:'./app/index.html',to:'index.html'}
        ])
    ],
    devServer: {
        compress:true,
        contentBase:path.join(__dirname,'app'),
        port:3000,
        inline:true,
        hot:true,
        historyApiFallback:true
    }
};