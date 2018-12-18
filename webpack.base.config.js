const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const baseConfig = {
  // 入口文件
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom']
  },
  // 出口文件
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/'
  },
  resolve: {
    // 别名配置
    alias: {
      views: path.join(__dirname, 'src/views'),
      components: path.join(__dirname, 'src/components'),
      router: path.join(__dirname, 'src/router'),
      assets: path.join(__dirname, 'src/assets'),
      mock: path.join(__dirname, 'mock')
    }
  },
  module: {
    rules: [
      // 对src文件夹下的js文件进行babel解析
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      // 编译图片
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192 // 小于等于8K的图片会被转成base64编码，直接插入HTML中，减少HTTP请求
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  ]
};

module.exports = baseConfig;
