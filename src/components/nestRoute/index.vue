<template>
  <div>
		<h2>这里是嵌套路由</h2>
		<router-link to="/nestRoute/18/first">去二级嵌套路由</router-link>
		<p>{{pathInfo}}</p>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	props: ['id'],
	computed:{
		pathInfo(){
			let {path,params,query,fullpath,name,meta} = this.$route;
			return {path,params,query,fullpath,name,meta}
		}
	},
	watch:{
		$route(val,old){
			console.log(val)
			console.log(old)
		}
	}
}
</script>
<style>

</style>

