export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  generate: {
    dir: process.env.MY_ENV === 'production' ? 'prod' : 'dist'
  },
  env: {
    baseUrl:
      process.env.MY_ENV === 'production'
        ? 'http://caigou-api.xht-kyy.com/api/'
        : 'http://dev-caigou-api.xht-kyy.com/api/',
    NUXT_ENV_TEST:
      process.env.MY_ENV === 'production'
        ? 'http://caigou-api.xht-kyy.com/api/'
        : 'http://dev-caigou-api.xht-kyy.com/api/'
  },
  head: {
    title: '五项管理',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#2176ff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/global.styl'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // '@/plugins/kyyIcon',
    '@/plugins/axiosConfig',
    '@/plugins/global'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  },
  server: {
    host: '0.0.0.0' // default: localhost
  }
}
