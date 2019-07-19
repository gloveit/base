<template>
  <div>
		<div class="one">{{aime}}</div>
		<button class="b1" @click="handleStart">开始</button>
		<button class="b2" @click="handleStop">暂停</button>
	</div>
</template>
<script>
import { setInterval, clearInterval } from 'timers';
export default {
	name:'index',
	data () {
		return{
			allNames:['李明','王海','张三','孙悟','葛申','赵云','马飞','杨同','诸葛龙','刘诗'],
			aime:"",
			se:""
		}
	},
	methods:{
		handleStart () {
			this.se = setInterval(()=>{
				let index = Math.ceil(Math.random()*10)-1;
				this.aime = this.allNames[index];
			},100)
		},
		handleStop () {
      clearInterval(this.se)
		}
	}
}
</script>

<style scpoed>
.one{
	width: 100px;
	height: 20px;
}
</style>

