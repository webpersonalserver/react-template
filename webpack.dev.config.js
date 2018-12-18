const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.config.js');
const webpack = require('webpack');

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    devServer: {
        host: 'localhost', // 指定的host
        port: '8080', // 端口
        contentBase: path.join(__dirname, './dist'), // URL的根目录
        historyApiFallback: true // 任意的404响应都被替代为index.html
    },
    module: {
        rules: [
            // 对src文件夹下的css、scss文件进行解析
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader', "postcss-loader"]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader', "postcss-loader"]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: process.env.NODE_ENV === 'mock' ? true : false
        })
    ]
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(baseConfig, devConfig);