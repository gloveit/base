export default {
	props: {
		level: {
			type: Number,
			default: 1
		},
		name:""
	},
	render:function(h){
		const tag = `h${this.level}`;
		const changeName = function (){
			this.name = ""
		}
		return <div>
			<tag>{this.$slots.foo}</tag> <a href="www.baidu.com">{this.$slots.foo}</a>
			<p>{this.name}</p>
			<input type="text" v-model={this.name}/>
			<button onclick={this.changeName}>重置</button>
		</div>
	}
}