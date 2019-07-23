import Vue from 'vue'
const Mstore = function Mstore(options = {}) {
	const { state = {}, mutations = {} } = options;
	this._vm = new Vue({
		data: {
			$$state: state
		}
	})
	this._mutations = mutations
}
Mstore.prototype.commit = function(type,data){
	if(this._mutations[type]){
		this._mutations[type](this.state,data)
	}
}
Object.defineProperties(Mstore.prototype,{
	state:{
		get:function(){
			return this._vm._data.$$state;
		}
	}
})
export default { Mstore };