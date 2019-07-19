<template>
  <div>
		<p>{{account}}</p>
		<button @click="handleA(2)">account增加</button>
		<child/>
	</div>
</template>
<script>
import {mapState} from 'vuex'
import child from './c.vue'
export default {
	name: 'index',
	components:{
		child
	},
	computed:{
		...mapState({
			account:(state)=>state.account
		  }
		)
	},
	methods:{
		handleA (data) {
			this.$store.dispatch('handleAccount',data)
		}
	}
}
</script>
<style scoped>

</style>

