import cb from './cb.vue'
const method = {
	install(Vue, options={}) {
		Vue.globalMethod = function () {
			console.log('this is globalMethod')
		}
		Vue.component(cb.name,cb)
	}
}

export default method