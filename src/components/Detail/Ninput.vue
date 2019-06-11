<template>
	<div>
			<input :type="type" :value="value" :name="name" :disabled="disabled" class="Ninput" />
	</div>
</template>

<script>
export default {
	name: 'Ninput',
	props: {
		type:{
			type:String,
			default:'text'
		},
		value:'',
		name: {
			type: String,
			default: ''
		},
		disabled:{
			type:Boolean,
			default: false
		}
	},
}
</script>

<style scoped>
.Ninput{
  width : 100%;
  height: 38px;
  line-height: 38px;
  border: 1px solid #d9d9d9;
	border-radius: 4px;
	box-sizing: border-box;
	padding:4px 11px;
}
</style>


