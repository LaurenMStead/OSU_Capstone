const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, './static/js/index.jsx'),
  output: {
    path: path.resolve(__dirname, './templates'),
    filename: "bundle.js",
  },
  devServer: {
    static: path.resolve(__dirname, '../Adoptr'),
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      },
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
};
