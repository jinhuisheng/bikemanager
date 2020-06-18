<template>
  <el-card class="box-card" style="width:500px;margin: 300px auto;">
    <div slot="header" class="clearfix">
      <span>用户登录</span>
    </div>
    <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="username" label="用户名" :rules="[
    {required: true, message:'请输入账号', trigger: 'blur'}
    ]">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" :rules="[
    {required: true, message:'请输入密码', trigger: 'blur'}
    ]">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-button type="primary" @click="submitForm(loginForm)">登录</el-button>

    </el-form>
  </el-card>
</template>

<script type="es6">

import {loginUserUrl} from "../api/api";
import axios from "axios"

export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    const data = {
                        username: this.loginForm.username,
                        password: this.loginForm.password,
                        grant_type: 'password',
                        client_id: 2,
                        client_secret: 'sjdksldskdjsdkfjsdkfjsdk'
                    }
                    loginUserUrl(data).then((res) => {
                        sessionStorage.setItem('ak', res.data.access_token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer'
                            + res.data.access_token;
                        this.$router.push({path: '/'})
                    })
                }
            })
        }
    }
}
</script>

<style scoped>

</style>
