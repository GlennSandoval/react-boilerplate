const webpack = require("webpack");

const host = "0.0.0.0";
const port = 8080;

module.exports = {
  devtool: "eval-source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    host,
    port,
    clientLogLevel: "warn",
    contentBase: process.env.BUILD_FOLDER,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    serveIndex: true,
    stats: "minimal",
    watchOptions: { ignored: /node_modules/ }
  }
};
