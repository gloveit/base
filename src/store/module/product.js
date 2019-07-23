const state = {
    pro: "this is pro"
}
const getters = {
    ca(state) {
        return state.carts
    }
}
const mutations = {
    cartsAdd(state, data) {
        state.carts.push(data)
    }
}
const actions = {
    handleCarts({ commit, state }, data) {
        console.log(data)
        commit('cartsAdd', data)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}