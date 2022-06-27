const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'response-check-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']
  },

  entry: { // 입력
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel',
        ],
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: { // 출력
    path: path.join(__dirname, 'dist'), // __dirname = 현재 폴더, 'dist' = 경로
    filename: 'app.js',
    publicPath: '/dist/'
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  },
};