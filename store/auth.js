export const state = () => ({
  login: false
})

export const mutations = {
  toggleLogin(state) {
    state.login = !state.login
  }
}