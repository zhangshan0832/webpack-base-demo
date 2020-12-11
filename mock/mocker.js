/*
 * @Author: your name
 * @Date: 2020-12-11 15:37:51
 * @LastEditTime: 2020-12-11 15:44:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack-second\mock\mocker.js
 */
module.exports = {
    'GET /api/user': {name: '刘小夕'},
    'POST /login/account': (req, res) => {
        const { password, username } = req.body
        if (password === '888888' && username === 'admin') {
            return res.send({
                status: 'ok',
                code: 0,
                token: 'sdfsdfsdfdsf',
                data: { id: 1, name: '刘小夕' }
            })
        } else {
            return res.send({ status: 'error', code: 403 })
        }
    }
}
