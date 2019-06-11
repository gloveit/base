<template>
	<div>
		<child :childAttr="childAttr" :coo="parentAttr" @endUp="sayName" v-on="$listeners"/>
	</div>
</template>

<script>
import child from './child.vue'
export default {
    name:'parent',
		components: {
			child
		},
		// props:{
		// 	parentAttr:""
		// },
    data () {
			return {
				parentAttr:"我是父组件的属性",
			  childAttr:"我是子组件的属性"
			}
		},
		methods:{
			sayName  () {
				console.log("这个事件是通过子组件监听$listeners触发的")
			}
		}
}
</script>

