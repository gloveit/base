<script>
export default {
  props:{
		name:{
			type:String,
			default:"小明"
		}
	},
	data () {
		return {
			tname:""
		}
	},
	methods:{
		handleInput () {
			this.name = ""
		}
	},
	render(){
		//复制解构后的变量不响应
		const {name1,handleInput} = this
		return (
			<div>
				<input type="text" v-model={name}/>	
				<button onclick={handleInput}>清空</button>
			</div>
		)
	}
}
</script>
