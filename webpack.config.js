const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const IS_DEV_SERVER = process.argv[1].indexOf("webpack-dev-server") >= 0;

if (IS_DEV_SERVER) {
  console.log("Dev server");
}

module.exports = {
  devtool: IS_DEV_SERVER ? "eval-source-map" : false,
  entry: {
    main: ["./src/index.tsx"]
  },
  resolve: {
    alias: {
      "@": path.join(process.cwd(), "src/"),
    },
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win" if there are any conflicts.
    modules: [
      path.resolve(process.cwd(), "./node_modules"),
      path.resolve(process.cwd(), "./src")
    ],
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: IS_DEV_SERVER } },
          { loader: "postcss-loader", options: { sourceMap: IS_DEV_SERVER } },
          { loader: "sass-loader", options: { sourceMap: IS_DEV_SERVER } }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};
