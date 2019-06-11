<template>
	<div>
		<p>我是从父组件继承的属性childAttr{{childAttr}}</p>
		<button @click="testListen">点我就可以触发父组件的父组件的endUp事件</button>
		<p >我是父组件属性$attrs{{$attrs}}</p>
		<sun :coo="$attrs" v-on="$listeners"/>
	</div>
</template>

<script>
import sun from './sun.vue'
export default {
		name:'child',
		props:{
			childAttr:{
				type:String,
				default:""
			}
		},
		components:{
			sun
		},
		inheritAttrs:true,
    data () {
			return {

			}
		},
		methods:{
        testListen () {
            this.$emit("endUp")
        }
    }
}
</script>