export default {
	props: {
		level: {
			type: Number,
			default: 1
		}
	},
	render:function(h){
		const tag = `h${this.level}`;
		return <div><tag>{this.$slots.foo}</tag> <a href="www.baidu.com">{this.$slots.foo}</a></div>
	}
}