const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/App.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: './',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
