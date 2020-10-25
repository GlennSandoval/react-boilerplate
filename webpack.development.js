const webpack = require("webpack");

// This will help allow access to the dev server from another device, like a tablet or mobile phone.
const host = "0.0.0.0";

// Change this as needed. Be sure to do a 'find all' as the port number is needed for testing and ide launchers.
const port = 8080;

module.exports = {
  devtool: "eval-source-map",

  plugins: [
    // This enables magic
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    // Only uncomment the below line in a safe environment/
    // see: https://webpack.js.org/configuration/dev-server/#devserverdisablehostcheck
    // disableHostCheck: true,
    host,
    port,
    clientLogLevel: "warn",
    contentBase: process.env.BUILD_FOLDER,
    // Magic
    hot: true,
    // Any unrecognized urls will be sent to the default "/" page. You will want to disable this if you have custom 404 pages.
    historyApiFallback: true,
    overlay: true,
    // If you navigate to a folder, display the directory. You will probably want to disable this as well if you have custom 404 pages.
    serveIndex: true,
    stats: "minimal",
    // The server will not reload if you change an npm modules. Stop and rebuild.
    watchOptions: { ignored: /node_modules/ }
  }
};
