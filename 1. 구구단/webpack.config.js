const path = require('path');

module.exports = {
  mode: 'response-check-setting',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // browserslist
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [],
      },
    }],
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'), // __dirname = 현재 폴더, 'dist' = 경로
  },
};