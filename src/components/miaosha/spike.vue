<template>
	<div>
		<button :disabled="disabled" @click="handleSpike">{{done?"已参加活动":"立即购买"}}</button>
		<p>{{tip}}</p>
	</div>
</template>

<script>
import moment from 'moment'
export default {
  name:'spike',
	data () {
		return {
			// disabled:false,
			done: false,
			tip:"",
			start:false,
			end:false,
			//服务器与前端误差时间
			timeGap: 0
		}
	},
	props:{
		startTime:{
			required:true,
			validate:(value)=>{
				return moment.ismoment(value)
			}
		},
		endTime:{
			required:true,
			validate:(value)=>{
				return moment.ismoment(value)
			}
		}
	},
	computed:{
		disabled(){
			return !(this.start && !this.end && !this.done)
		}
	},
	methods: {
		handleSpike () {
			alert("已购买商品");
			this.done = true
		},
		getServerTime() {
			return new Promise((reslove, reject) => {
				console.log(Date.now())
				setTimeout(() => {
					reslove(new Date(Date.now() - 60 * 1000).getTime());
				}, 0);
			});
		},
		updateState() {
      const now = Date.now() - this.timeGap;
      const diffStart = this.startTime.diff(now);
			const diffEnd = this.endTime.diff(now);
			console.log(diffStart);
			console.log(diffEnd);
      if (diffStart <= 0) {
        this.start = true;
        this.tip = "秒杀已开始";
      } else {
        this.tip = `距离秒杀开始还剩 ${Math.ceil(diffStart / 1000)} 秒`;
      }
      if (diffEnd <= 0) {
        this.end = true;
        this.tip = "秒杀已结束";
      }
    },
	},
	async created() {
		const time = this.getServerTime()
		const serverTime = await this.getServerTime();
		this.timeGap = Date.now() - serverTime;
    this.updateState();
    this.timeInterval = setInterval(() => {
      this.updateState();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
	updated() {
    if (this.end || this.done) {
      clearInterval(this.timeInterval);
    }
  },
}
</script>

<style>

</style>
