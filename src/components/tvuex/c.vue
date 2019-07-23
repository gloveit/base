<template>
  <div>
		<p>{{wAccount}}</p>
		<h2>模拟vuex原理</h2>
    <p>{{account}}</p>
    <p>{{this.$mstore.state.address}}</p>	
    <button @click="handleSimulationCommit(2)">模拟vuex</button>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
	name:'c',
	computed:{
    ...mapGetters(['wAccount']),
    account(){
      return this.$mstore.state.account;
    }
  },
  methods: {
    handleSimulationCommit (data){
      this.$mstore.commit('addC',data)
    }
  }
};
</script>
