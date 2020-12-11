/*
 * @Author: your name
 * @Date: 2020-12-11 15:06:27
 * @LastEditTime: 2020-12-11 15:08:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-second\server.js
 */
let express = require("express");
let app = express();
app.get("/user", (req, res) => {
  res.json({ name: "zhangshan" });
});
app.listen(4000);
