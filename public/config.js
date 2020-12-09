/*
 * @Author: your name
 * @Date: 2020-12-08 10:21:52
 * @LastEditTime: 2020-12-09 12:34:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base\public\config.js
 */
module.exports = {
    dev:{
        template:{
            title:'你好',
            header:false,
            footer:false
        }
    },
    build:{
        template:{
            title:'你好才怪',
            header:true,
            footer:false
        }
    }
}