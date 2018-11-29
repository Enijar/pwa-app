const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');


const SRC_PATH = path.resolve(__dirname, 'src', 'client');
const BUILD_PATH = path.resolve(__dirname, 'build');

const postCSSLoaderPlugins = [
  require('autoprefixer')({
    browsers: [
      '> 0.3%',
      'last 7 versions',
      'Android >= 4',
      'Firefox >= 20',
      'iOS >= 8',
    ],
    flexbox: true,
  }),
];

if (process.env.NODE_ENV === 'production') {
  postCSSLoaderPlugins.push(require('cssnano')({preset: 'default'}));
}

module.exports = {
  entry: {
    'js/app.js': path.join(SRC_PATH, 'js', 'app.js'),
    'worker.js': path.join(SRC_PATH, 'js', 'worker.js'),
    'css/app.css': path.join(SRC_PATH, 'sass', 'app.scss'),
  },
  output: {
    filename: '[name]',
    path: BUILD_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                importLoaders: 1,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => postCSSLoaderPlugins,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  devServer: {
    port: 8081,
    proxy: {
      '/': `http://localhost:${process.env.PORT || 3000}`,
    },
  },
  plugins: [
    new CleanWebpackPlugin([BUILD_PATH]),
    new WebpackNotifierPlugin({
      alwaysNotify: process.env.NODE_ENV === 'development',
      skipFirstNotification: process.env.NODE_ENV === 'production',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      minify: process.env.NODE_ENV === 'development' ? false : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
      template: path.join(SRC_PATH, 'index.html'),
    }),
    new ExtractTextPlugin({
      filename: '[name]',
      allChunks: true,
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(SRC_PATH, 'img'),
        to: path.join(BUILD_PATH, 'img'),
      },
      {
        from: path.join(SRC_PATH, 'fonts'),
        to: path.join(BUILD_PATH, 'fonts'),
      },
    ]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      plugins: [
        imageminMozjpeg({
          quality: 85,
          progressive: true
        }),
      ],
    }),
    new ImageminWebpWebpackPlugin(),
  ],
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
};
