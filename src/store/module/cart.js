const state = {
  carts: [],
}
const getters = {
   ca(state){
    return state.carts
   }
}
const mutations = {
  cartsAdd(state,data){
    console.log($store)
    state.carts.push(data)
  }
}
const actions = {
  handleCarts ({commit,state},data){
    commit('cartsAdd',data)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}