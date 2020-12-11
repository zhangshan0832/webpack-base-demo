/*
 * @Author: your name
 * @Date: 2020-12-08 10:11:32
 * @LastEditTime: 2020-12-11 15:42:27
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

fetch("/api/user")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
fetch("/login/account", {
    method: "POST",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: "admin",
        password: "888888"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

console.log($, _map)

$('#login').click(function() {
    location.href = '/login.html';
});