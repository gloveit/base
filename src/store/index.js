import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
	state : {
		//表格行数据
		rowData:'',
		name:"xiaoming",
		list:["西瓜","草莓",'苹果']
	},
	mutations : {
		getRowData (state,data) {
			state.rowData = data
		}
	},
	actions: {
		bindForm (context,data) {
			context.commit("getRowData",data)
		}
	}
})

export default store