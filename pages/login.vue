<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/img/logo.png">
    </div>
    <input v-model="account" placeholder="请输入帐号" class="kyyInput" @keyup.enter="login">
    <input v-model="password" placeholder="请输入密码" type="password" class="kyyInput" @keyup.enter="login">
    <button class="kyyButton" @click="login">
      登录
    </button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  // 登录页面使用空布局
  layout: 'blank',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  mounted () {
    const list = localStorage.getItem('accountList')
    if (list) {
      this.accountList = JSON.parse(list)
    }
  },
  methods: {
    login () {
      if (this.account === '' || this.password === '') {
        this.$toast.fail('帐号密码不能为空')
        return
      }
      // const res = await this.$axios.post('auth/login', {
      //   email: this.account,
      //   password: this.password
      // })
      // if (!this.accountList.includes(this.account)) {
      //   this.accountList.push(this.account)
      // }
      // const userInfo = {
      //   token: res.token_type + ' ' + res.access_token,
      //   newToken: res.access_token,
      //   name: res.user_name,
      //   id: res.user_id
      // }
      // this.$store.commit('user/set', userInfo)
      // this.$store.commit('permission/set', res.menu)
      // localStorage.setItem('accountList', JSON.stringify(this.accountList))
      this.$router.replace(this.$route.query.redirect || '/')
    }
  }
}
</script>

<style scoped lang="stylus">
.login{
  padding 0 1.5625rem

  input[type=password]{
    margin-top 0.625rem
  }

  button{
    margin-top 1.875rem
  }
  .logo{
    text-align center
    padding 3.75rem 0
    img{
      width 4.8rem
      height @width
    }
  }
}
</style>
