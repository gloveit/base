<template>
	<div>
		  <p>{{nowtime}}</p>
			<button @click="handleBtnCon">
				{{isStart?"开始":"结束"}}
			</button>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: "life",
	data: function () {
		console.log("data");
		return {
			nowtime:moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
			isStart:true,
			clockTime:""
		}
	},
	methods:{
		handleBtnCon () {
			// console.log(!this.isStart)
		  this.isStart = !this.isStart
		},
		startClock () {
			clearInterval(this.clockTime);
			if(!this.isStart){
				this.clockTime = setInterval(()=>{
					this.nowtime = moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
				},1000)
			}
		}
	},
	watch: {
		isStart (ol,nv) {
			this.startClock();
		}
	},
	beforeCreate () {
		console.log("beforeCreate")
	},
	created () {
		console.log("created")
	},
	beforeMount () {
		console.log("beforeMount")
	},
	mounted () {
		console.log("mounted")
	},
	beforeUpdate () {
		console.log("beforeUpdate")
	},
	updated () {
		console.log("updated")
	},
	beforeDestroy () {
		console.log("beforeDestroy")
	},
	destroyed () {
		console.log("destroyed")
	}
}
</script>

<style>

</style>


