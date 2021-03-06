/*
 * @Author: your name
 * @Date: 2020-12-08 10:17:05
 * @LastEditTime: 2020-12-09 13:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base\webpack.config.js
 */
//webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// copy项目文件
const CopyWebpackPlugin = require("copy-webpack-plugin");
// 抽离css 使用该插件时 必须注释style-loader
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// css、js 压缩
const OptimizeCssPlugin = require("optimize-css-assets-webpack-plugin");

const { resolve } = require("path");
const webpack = require("webpack");
console.log("webpack", webpack);
const isDev = process.env.NODE_ENV === "development";
const config = require("./public/config")[isDev ? "dev" : "build"];
module.exports = {
  mode: isDev ? "development" : "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash:6].js",
    // 资源在cdn用 '/',本地用 './'
    publicPath: isDev ? "/" : "./",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/, //排除 node_modules 目录
      },
      // sass/less必须分开配置loader
      // less loader使用
      {
        test: /\.(le|c)ss$/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // hmr: isDev,
                  // reloadAll: true,
                  publicPath: (resourcePath, context) => {
                    return (
                      path.relative(path.dirname(resourcePath), context) + "/"
                    );
                  },
                },
              },
          // MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require("autoprefixer")({
                      overrideBrowserslist: [">0.25%", "not dead"],
                    }),
                  ];
                },
              },
            },
          },
          "less-loader",
        ],
        exclude: /node_modules/,
      },
      // sass loader使用
      {
        test: /\.(sa|sc)ss$/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  // hmr: isDev,
                  // reloadAll: true,
                  publicPath: (resourcePath, context) => {
                    return (
                      path.relative(path.dirname(resourcePath), context) + "/"
                    );
                  },
                },
              },
          // MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [
                    require("autoprefixer")({
                      overrideBrowserslist: [">0.25%", "not dead"],
                    }),
                  ];
                },
              },
            },
          },
          "sass-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              esModule: false,
              outpsth: "assets",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      config: config.template,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!dll", "!dll/**"], //不删除dll目录下的文件
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: "public/js/*.js",
            to: path.resolve(__dirname, "dist", "js"),
            flatten: true, // 只拷贝文件 不拷贝路径
            // 新版ignore配置方式变更
            // globOptions: {
            //   ignore: ["**/other.js"],
            // },
          },
        ],
      }
      //还可以继续配置其他要拷贝的文件
    ),
    // 为项目提供全局变量
    new webpack.ProvidePlugin({
      React: "react",
      Component: ["react", "component"],
      Vue: ["vue/dist/vue.esm.js", "default"],
      $: "jquery",
      _map: ["lodash", "map"],
    }),
  ],
  devServer: {
    port: "3000", //默认是8080
    // open:true,
    quiet: false, //默认不启用
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    stats: "errors-only", //终端仅打印 error
    hot: true, // 在 plugins 中增加 new webpack.HotModuleReplacementPlugin()
    // hotOnly:true,
    overlay: false, //默认不启用
    clientLogLevel: "silent", //日志等级
    compress: true, //是否启用 gzip 压缩
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": resolve("src"),
    },
  },
  devtool: isDev ? "cheap-module-eval-source-map" : "source-map", //开发环境下使用
};
