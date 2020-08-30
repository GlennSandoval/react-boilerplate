const fs = require("fs");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { yellow } = require("chalk");
const { merge } = require("webpack-merge");

const NODE_ENV = process.env.NODE_ENV || "production";
const IS_DEV = process.env.NODE_ENV === "development";
const IS_DEV_SERVER = process.argv[1].indexOf("webpack-dev-server") >= 0;

if (IS_DEV_SERVER) {
  console.log("Dev server");
}

// Load the webpack config for the current build environment. Environment variables need to be set prior to this.
const webPackEnvConfigPath = path.resolve(__dirname, `webpack.${NODE_ENV}.js`);
let webPackEnvConfig;
if (NODE_ENV === "production") {
  webPackEnvConfig = {};
} else {
  if (fs.existsSync(webPackEnvConfigPath)) {
    webPackEnvConfig = require(webPackEnvConfigPath);
  } else {
    throw Error(
      `Cant find webpack config files for build environment: ${yellow(
        NODE_ENV
      )}`
    );
  }
}

const baseConfig = {
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

  optimization: {
    namedModules: true,
    moduleIds: "hashed",
    splitChunks: {
      chunks: "async",
      minSize: 30000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: false,
      cacheGroups: {
        react: {
          test: /[\\\/]node_modules[\\/]react.*[\\\/]/,
          name: "react",
          chunks: "all",
          enforce: true
        },
        default: {
          priority: -20,
          name: "core",
          reuseExistingChunk: true
        }
      }
    },
    runtimeChunk: "single",
    noEmitOnErrors: false,
    concatenateModules: true,
    minimize: !IS_DEV,
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],

  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: "empty",
    fs: "empty",
    net: "empty",
    tls: "empty",
    child_process: "empty"
  },
};

module.exports = merge(baseConfig, webPackEnvConfig);
