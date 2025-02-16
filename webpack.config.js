const path = require('path');
const glob = require('glob');

module.exports = {
  entry: glob.sync("dist/**/*.{js,html,css}"),
  output: {
    filename: 'widget.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'WidgetBundle',
    libraryTarget: 'umd',
    globalObject: 'this',
    clean: true,
  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: "asset/resource"
      },
    ],
  },
  externals: {
    angular: 'angular'
  },
  resolve: {
    preferRelative: true,
  },
};
