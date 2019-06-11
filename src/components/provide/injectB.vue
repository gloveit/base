<template>
  <div>
		<div  class="a">
			<span :style="{color:this.bg.color}">B节点</span>
			<button @click="changeBcolor">更改当前B节点颜色</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "injectB",
	data () {
		return {
			// bg:"#f00"
		}
	},
	inject:{
		bg:{
			default:()=>({})
		}
	},
	methods:{
		changeBcolor () {
			this.bg["color"]= "#00f"
		}
	},
	mounted () {
		console.log(this.bg)
	},
	updated(){
		console.log(this.bg)
	}
}
</script>

<style>
.a{
	width: 10%;
	height: 100%;
	border:1px solid #ccc
}
</style>

