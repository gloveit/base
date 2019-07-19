import title from './title.vue'

const myPlugin = {
	install(Vue){
		Vue.component(title.name,title)
		Vue.prototype.sayHello =  function () {
			console.log("hello myPlugin")
		}
	}
}

export default myPlugin