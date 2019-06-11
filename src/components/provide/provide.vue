<template>
  <div>
		<div class="a">
			<span :style="{color:color,fontSize:'20px'}">A节点</span>
		  <button @click="hanldeColor">更改子组件颜色</button>
			<injectB/>
			<injectC/>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import injectB from './injectB'
import injectC from './injectC'
export default {
	name: "provide",
	components:{
		injectB,
		injectC
	},
	data () {
		const data = {
			color:"red"
		};

		this.bg = Vue.observable({
			color:data.color
		}); 
		return data;
		
	},
	watch:{
		color(val){
			this.bg.color = val;
			// immediate:true;
			// deep:true
		}
	},
	provide(){
		return {
			bg:this.bg
		}
	},
	methods:{
		hanldeColor () {
			this.color = "#ccc"
		}
	}
}
</script>

<style>
.a{
	width: 100%;
	height: 100%;
	border:1px solid #000
}
</style>

