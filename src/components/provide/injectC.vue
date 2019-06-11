<template>
  <div>
		<div  class="a">
			<span :style="{color:this.cbg.color}">C节点</span>
			<button @click="changeCcolor">更改当前节点C颜色</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "injectC",
	data () {
		return {
			// bg:"#f00"
		}
	},
	inject:{
		cbg:{
			from:"bg",
			// default:()=>({})
		}
	},
	methods:{
		changeCcolor () {
			this.cbg.color = "#0ff"
		}
	},
	mounted () {
		console.log(this.bg)
	}
}
</script>

<style>
.a{
	width: 20%;
	height: 100%;
	border:1px solid #ccc
}
</style>

