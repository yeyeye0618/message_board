const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './script.js',
    admin: './admin.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './admin.html',
      filename: 'admin.html',
      chunks: ['admin']
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'styles.css', to: 'styles.css' }
      ]
    }),
  ],
  mode: 'production',
};
