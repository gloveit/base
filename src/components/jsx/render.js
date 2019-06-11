export default{
	props:{
		level:{
			type: Number,
			default: 1
		}
	},
	render:function(h){
		return h(
			`h${this.level}`,{
				attrs:{
					id:"hhh"
				}
			},this.$slots.default
		)
	}
}