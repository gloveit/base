<template>
  <div>
	  <button @click="handleBtn" class="bt">{{bt}}</button>
  </div>
  
</template>
<script>
export default {
	name: "cb",
	props:{
		bt:{
			type:String,
			default:"提交按钮"
		}
	},
	data () {
		return {

		}
	},
	methods:{
		handleBtn () {
			console.log("this is button click event")
		}
	}
}
</script>

<style scoped>
.bt{
	width: 100px;
	height: 50px;
	background: blue;
	color: #fff
}
</style>

