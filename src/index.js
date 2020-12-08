/*
 * @Author: your name
 * @Date: 2020-12-08 10:11:32
 * @LastEditTime: 2020-12-08 16:44:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base\src\index.js
 */
//index.js
import './index.less'
// import './test.sass'
import './test1.scss'

class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

const dog = new Animal('dog');
