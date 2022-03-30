<template>
  <div class="login">
    <div class="title">
      <h3>Login form</h3>
    </div>
    <div class="myform">
      <el-form :model="formdata" :rules="rules">
        <el-form-item prop="user" style="color:#2b374b;" class="item">
          <el-input class="elinput"  placeholder="用户名" v-model="formdata.user" style="color:#2b374b;"></el-input>
        </el-form-item>
        
        <el-form-item prop="pw" class="item">
          <el-input class="elinput" placeholder="密码" v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="submitfn"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <p class="tip">用户名:admin 密码:any</p>
    </div>
  </div>
</template>

<script>
import instance from "../api/index";
export default {
  name: "LoginView",
  data() {
       //自定义正则验证
    let userfn = function (rule, value, callback) {
      let rg = /^[a-z]\w{5,10}\w$/;
      if (rg.test(value)) return;
      return callback(new Error("请输入正确的用户名"));
    };
    let pwfn = function (rule, value, callback) {
      let rg = /^\w{6,10}$/;
      if (rg.test(value)) return;
      return callback(new Error("请输入正确的用户名"));
    };
    return {
      formdata: {
        user: "admin",
        pw: 123456,
      },
      rules: {
        user: [{ validator: userfn, trigger: "blur" }],
        pw: [{ validator: pwfn, trigger: "blur" }],
      },
      newdebouncefn: null,
    };
  },
  methods: {
    submitfn() {
      this.newdebouncefn();
    },
    async loginfn() {
      let user = this.formdata.user;
      let pw = this.formdata.pw;
      let { data } = await instance.post("/login", { user, pw });
      console.log(data);
 
      if (data.message == "fail") return this.$message.error("登录失败");
      if (data.message === "success") {
        localStorage.setItem("token", data.data.token);
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 1000,
          onClose: () => {
            this.$router.push({ name: "yang" });
          },
        });
      }
    },
  },
  created() {
    this.newdebouncefn = this.debouncefn(this.loginfn, 2000);
  },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
ul,
li {
    list-style: none;
}
body {
    font-size: 20px;
}
.login {
  background: #324057;
  width: 100vw;
  height: 100vh;
}
h3 {
  color: #fff;
  font-size: 30px;
  position: absolute;
  left: 40%;
  top: 30%;
}
.login .myform {
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  position: absolute;
  left: 45%;
  top: 40%;
  margin-left: -200px;
  mask-type: -300px;
  padding: 20px;
  
}


.login .btn {
 margin-top: 10px;
    width: 400px;
    height: 50px;
}
.login .tip {
  font-size: 16px;
  color: #fff;
  margin-top: 20px;
}
.elinput{
    width: 400px;
    
}
.item{
   width: 400px;
    margin-bottom:40px ;
}
</style>