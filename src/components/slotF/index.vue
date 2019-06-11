<template>
	<div>
		<button @click="isDestroy = !isDestroy">{{isDestroy?"销毁时钟":"加载时钟"}}</button>
		<life v-if="isDestroy"/>
		<funal :name="message"/>
		<vartem :var1="`hello ${message}`" :var2="isDestroy? 'hello' : 'byby'">
			<template v-slot:fcc="{var1,var2}">
				var1{{var1}}
				var2{{var2}}
			</template>
		</vartem>	
	</div>
</template>

<script>
import life from './life'
import funal from './functional'
import vartem from './vartem'
export default {
	name: "index",
	components : {
		life,
		funal,
		vartem
	},
	data: function () {
		return {
			isDestroy:true,
			message:"hello functional"
		}
	}
}
</script>;

<style>

</style>


