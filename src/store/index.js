import Vue from 'vue'
import Vuex from 'vuex'
import cart from './module/cart.js'
import product from './module/product.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		//表格行数据
		rowData: '',
		name: "xiaoming",
		list: ["西瓜", "草莓", '苹果'],
		account: 1,
	},
	getters: {
		wAccount(state) {
			return state.account;
		}
	},
	mutations: {
		getRowData(state, data) {
			state.rowData = data
		},
		addCount(state, data) {
			state.account += data;
		}
	},
	actions: {
		bindForm(context, data) {
			context.commit("getRowData", data)
		},
		handleAccount({ commit }, data) {
			commit('addCount', data)
		}
	},
	modules: {
		cart,
		product
	}
})

export default store