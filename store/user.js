// 用户登录信息
const userText = sessionStorage.getItem('user')
const user = userText ? JSON.parse(userText) : {}
export const state = () => ({
  user
})

export const mutations = {
  set (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    state.user = user
  }
}
