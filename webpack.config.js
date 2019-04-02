const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      }, 
      {
        test: /\.(sass|scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function plugins(loader) {
                  return [
                    require('autoprefixer')({
                      browsers: ['> 1%']
                    })
                  ];
                }
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    stats: "minimal"
  },
  plugins: [
    new ngAnnotatePlugin({
      add: true
    }),
    new ExtractTextPlugin({
      filename: '/style.css',
      allChunks: true,
    }),
  ]
};