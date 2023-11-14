const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  resolve: {
    extensions: ['.js', '.jsx', ".ts", ".tsx"],
  },
  entry: {
    app: './index.jsx',
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./index.html",
      scriptLoading: 'blocking',
    }),

  ],

};
