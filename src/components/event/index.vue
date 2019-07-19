<template>
  <div>
		<Cinput @change="getChange"/>

		<p v-for="key in list" :key="key">
			<input type="number" >
			<button @click="removeInput(key)">删除</button>
		</p>
		<button @click="addInput">添加</button>
	</div>
</template>

<script>
import Cinput from './event.vue'
export default {
	name: "index",
	components:{
    Cinput
	},
	data () {
		return {
			name: "success",
			key:1,
			list:[]
		}
	},
	methods:{
		getChange (val,callback){
			callback(this.name)
			console.log(val)
		},
		addInput() {
			console.log(this.key)
			this.list.push(this.key++);
			console.log(this.key)
		},
		removeInput(key) {
			console.log(key)
			const index = this.list.findIndex(k=>k === key);
			this.list.splice(index,1)
		}
	}
};
</script>

