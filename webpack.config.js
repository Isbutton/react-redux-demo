const path = require('path');
const webpack = require('webpack');

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
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:['vendor'],
        }),
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