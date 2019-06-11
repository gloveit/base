<template>
	<div>
		<p>我是从父组件的根实例继承的属性coo{{coo.coo}}</p>
        <button @click="testListen">点我就可以触发父组件的父组件的endUp事件</button>
	<!-- <ren/> -->
    </div>
</template>

<script>
// import ren from './render.vue'
export default {
		name:'sun',
		props:{
            coo:''
        },
        // components:{
        //     ren
        // },
		// inheritAttrs:true,
    data () {
			return {

			}
    },
    methods:{
        testListen () {
            this.$emit("endUp");
        },
        createInput () {

        }
    },
}
</script>