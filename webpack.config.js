const fs = require("fs");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { yellow } = require("chalk");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || "production";
const IS_DEV = process.env.NODE_ENV === "development";
const IS_DEV_SERVER = (process.argv[1] || "").indexOf("webpack-dev-server") >= 0;
const IS_OSX = process.platform === "darwin";
const buildFolder = path.resolve(
  process.cwd(),
  process.env.BUILD_FOLDER || "dist/"
);

if (IS_DEV_SERVER) {
  console.log("Dev server");
}

// Load the webpack config for the current build environment. Environment variables need to be set prior to this.
// This allows you to create different webpack configurations for different environments. 
// Production is the default, a specific named environment overrides the default.
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

const publicPath = IS_OSX || !IS_DEV ? path.resolve(process.cwd(), "/") : "/";

const baseConfig = {
  mode: IS_DEV ? "development" : "production",

  // Don't attempt to continue if there are any errors.
  bail: true,

  entry: {
    main: ["./src/index.tsx"]
  },

  output: {
    path: buildFolder,
    filename: IS_DEV
      ? "[name].[hash:8].bundle.js"
      : "[name].[chunkhash].bundle.js",
    chunkFilename: IS_DEV
      ? "[name].[hash:8].chunk.js"
      : "[name].[chunkhash].chunk.js",
    publicPath
  },

  resolve: {
    // Add a handy shortcut to the root code folder so you can write "import FooComponent from "@/components/foo"
    alias: {
      "@": path.join(process.cwd(), "src/"),
    },
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win" if there are any conflicts.
    modules: [
      path.resolve(process.cwd(), "./node_modules"),
      path.resolve(process.cwd(), "./src")
    ],
    // These extentions do not need to be added to the import path. 
    // Do not have the same file name with different extensions in the same folder or Bad Things will happen.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        // Parse JS files with Babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Parse TSX files with Typescript, then Babel
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
      },
      {
        // Parse Sass files
        // sass-loader converts the files to css
        // postcss-loader applies the autoprefixer plugin to add browser specific prefixes in the CSS. ie, moz-, ms-, etc.
        // css-loader will process any import statements in your styles
        // style-loader injects the css into your html
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: IS_DEV_SERVER } },
          { loader: "postcss-loader", options: { sourceMap: IS_DEV_SERVER } },
          { loader: "sass-loader", options: { sourceMap: IS_DEV_SERVER } }
        ]
      },
      // Load image files directly. Add any needed extensions here.
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

  // These settings are designed to create decent modules from the apps js code. It is meant to be a balance between loading speed and upgradability.
  optimization: {
    namedModules: true,
    moduleIds: "hashed",
    // These values have been hand tuned to help support older browsers
    splitChunks: {
      chunks: "async",
      minChunks: 2,
      minSize: 30000,
      maxSize: 0,
      maxAsyncRequests: 20,
      maxInitialRequests: 5,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      name: false,
      cacheGroups: {
        // React and Babel will hopefully be updated infrequently so lets put it in its own module to be cached by the browser.
        react: {
          test: /[\\\/]node_modules[\\/]react.*[\\\/]/,
          name: "react",
          chunks: "all",
          enforce: true
        },
        babel: {
          test: /[\\\/]node_modules[\\/]core-js[\\\/]/,
          name: "polyfill",
          chunks: "all",
          enforce: true
        },
        // Separate node_modules from user code.
        modules: {
          priority: -10,
          test: /[\\\/]node_modules[\\/]/,
          name: "modules",
          chunks: "all",
          enforce: true
        },
        default: {
          priority: -20,
          name: "main",
          reuseExistingChunk: true,
          enforce: true
        }
      }
    },
    runtimeChunk: "single",
    noEmitOnErrors: false,
    concatenateModules: true,
    minimize: !IS_DEV,
    // If minimize is TRUE, use the Terser plugin to make the code compact.
    minimizer: [new TerserPlugin()]
  },

  plugins: [
    // Clean the dist folder before building
    new CleanWebpackPlugin(),
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
