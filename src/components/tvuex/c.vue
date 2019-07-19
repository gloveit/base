<template>
  <div>
		<p>{{wAccount}}</p>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	name:'c',
	computed:{
		...mapGetters(['wAccount'])
	}
};
</script>
