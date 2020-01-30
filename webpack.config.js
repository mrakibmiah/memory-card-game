var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'memory-game.[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          './src/assets/images/**/*'
        ),
        to: path.resolve(__dirname, 'dist/assets/images/'),
        context: './src/assets/images'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          './manifest.json'
        ),
        to: path.resolve(__dirname, 'dist/'),
        context: './'
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(
          __dirname,
          './sw.js'
        ),
        to: path.resolve(__dirname, 'dist/'),
        context: './'
      }
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 9000
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
