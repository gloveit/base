const state = {
    pro: "this is pro"
}
const getters = {
    proA(state) {
        return "this is pro getters"
    }
}
const mutations = {
    cartAdd(state, data) {
        state.carts.push(data)
    }
}
const actions = {
    handleCarts({ commit, state }, data) {
        console.log(data)
        commit('cartAdd', data)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}