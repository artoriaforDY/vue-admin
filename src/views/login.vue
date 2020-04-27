<template>
  <div class="loginWrap">
    <input type="text" v-model="username" placeholder="输入用户名" />
    <input type="text" v-model="password" placeholder="输入密码" />
    <input type="button" value="登录" @click="loginSubmit" />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginSubmit() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>