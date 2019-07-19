<template>
  <div>
		<button @click="printPage" v-print="'#printTest'">打印</button>
    <div ref="print" id="printTest" >
			<h2>金卡智能集团收费票据</h2>
      <span>金额</span><input type="text">
    </div>
    <!-- <lodopDom/> -->
    <cb/>
  </div>
</template>

<script>
import lodopDom from './lodop.vue'
export default {
  name: "index",
  data() {
    return {};
  },
  components:{
    lodopDom
  },
	methods:{
		printPage () {
    //  this.$print(this.$refs.print)
		}
	},
	mounted () {
		
	}
};
</script>

