const state = {
  carts: [],
  cartName:"GY高端商城"
}
const getters = {
   ca(state){
    return state.carts;
   }
}
const mutations = {
  cartsAdd(state,data){
    state.carts.push(data)
  }
}
const actions = {
  handleCarts({ commit, state, rootState, rootGetters },data){
    commit('cartsAdd',data)
  }
}

export default {
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}