import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    main:path.resolve(__dirname, 'src/index'),
    vendor:path.resolve(__dirname, 'src/vendor')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
      new ExtractTextPlugin('[name].[contenthash].css'),
      new WebpackMd5Hash(),
      new webpack.optimize.CommonsChunkPlugin({
        name:'vendor'
      }),
       new HtmlWebpackPlugin({
         template:'src/index.html',
         minify:{
            removeComments:true,
            minifyCSS:true
         },
         inject:true
       }),
       new webpack.optimize.DedupePlugin(),
      //minify js
       new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
     // {test: /\.css$/, loaders: ['style','css']}
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
