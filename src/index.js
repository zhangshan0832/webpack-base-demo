/*
 * @Author: your name
 * @Date: 2020-12-08 10:11:32
 * @LastEditTime: 2020-12-09 13:52:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-base\src\index.js
 */
//index.js
import './index.less'
// import './test.sass'
import './test1.scss'

if(module && module.hot) {
    module.hot.accept()
}
class Animal {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
document.getElementById('import').onclick = function(){
    import('./test').then( fn => fn.default())
}
console.log('$',$)
const dog = new Animal('dog');
