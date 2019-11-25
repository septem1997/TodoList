import Toast from 'vant/lib/toast'
import 'vant/lib/toast/style'

export default ({ app }) => {
  const urlPrefix = process.env.baseUrl
  // const urlPrefix = 'http://localhost:8000/api/'
  const loadings = []
  app.$axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.url = urlPrefix + config.url
    if (config.url.includes('auth/login')) {
    } else {
      if (!sessionStorage.getItem('user')) {
        app.router.replace('/login')
      }
      config.headers.Authorization = JSON.parse(
        sessionStorage.getItem('user')
      ).token
    }
    config.headers.Accept = '' // application/json
    if (loadings.length > 0) {
      loadings.push('fakeLoading')
    } else {
      loadings.push(Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      }))
    }
    return config
  })

  function removeLoading () {
    if (loadings.length === 1) {
      loadings.pop().clear()
    } else {
      loadings.splice(
        loadings.findIndex(item => typeof item === 'string'),
        1
      )
    }
  }
  // 添加响应拦截器
  app.$axios.interceptors.response.use(
    function (res) {
      // 对响应成功后做点什么
      removeLoading()
      // debugger
      if (res.data.code === 0) {
        return Promise.resolve(res.data.data)
      } else {
        Toast.fail('执行错误：' + res.data.msg)
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      }
    },
    function (error) {
      // 对响应错误做点什么
      removeLoading()
      const reg = new RegExp('failed with status code ([0-9]*)')
      const match = error.toString().match(reg)
      if (match.length > 1) {
        const code = match[1]
        if (code === '401') {
          if (app.router.app.$route.path !== '/login') {
            Toast.fail('无权限或已过期，请重新登录')
            app.router.replace(
              '/login?redirect=' + app.router.app.$route.fullPath
            )
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          return Promise.reject()
        } else if (code === '429') {
          Toast.fail('接口调用过于频繁，请稍后再试')
        } else {
          Toast.fail('系统错误，错误码：' + code)
        }
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject()
    }
  )
}
