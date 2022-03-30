let Mock = require('mockjs')
Mock.mock('/api/login', 'post', function(config) {
    console.log(config.body); //参数
    let obj = JSON.parse(config.body)
    console.log(obj)
    let user = obj.user
    let pw = obj.pw
    console.log(user, pw);
    if (user == "admin" && pw == "123456") {
        return {
            status: 200,
            message: "success",
            data: { user: "admin", pw: "123456", token: "0000" },

        }
    } else {
        return {
            status: 200,
            message: "fail",
            data: { message: "用户密码错误" }
        }
    }



})