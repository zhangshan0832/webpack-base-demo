/*
 * @Author: your name
 * @Date: 2020-12-08 10:11:32
 * @LastEditTime: 2020-12-08 10:41:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base\src\index.js
 */
//index.js
import './index.less'
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');
