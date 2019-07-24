<template>
  <div>
		<!-- <vjsxH :level="1" v-slot:foo>hello world</vjsxH> -->
		<jsx></jsx>
		<renH :level="2">hello world</renH>
		<VNode :vnodes="getV(3)"></VNode>
		<VNode :vnodes="getY(5)"></VNode>
	</div>
</template>

<script>
// import vjsxH from './v.jsx'
import jsx from './jsx.vue'
import renH from './render.js'
export default {
	name:"jindex",
	components: {
		jsx,
		renH,
		VNode:{
			functional:true,
			render:(h,ctx)=>ctx.props.vnodes
		}
	},
	methods:{
		getV(level){
			const tag = `h${level}`;
			return <tag id="m">{this.msg}</tag>
		},
		getY (level) {
			return <span onclick={this.spanHandle}>{this.msg}{level}</span>
		},
		spanHandle (level) {
			console.log(level)
		}
	},
	data (){
		return {
			msg:"hello world"
		}
	}
}
</script>
