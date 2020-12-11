/*
 * @Author: your name
 * @Date: 2020-12-11 14:54:00
 * @LastEditTime: 2020-12-11 15:33:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-second\webpack.config.dev.js
 */
const webpack = require("webpack");
const {merge} = require("webpack-merge");
const baseWebpackConfig = require("./webpack.config.base");
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEV: JSON.stringify("development"),
      FLAG: "true",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      DEV: JSON.stringify("development"), //字符串
      FLAG: "true", //FLAG 是个布尔类型
    }),
  ],
});
