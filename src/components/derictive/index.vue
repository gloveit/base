<template>
  <div>
		<h4>v-text</h4>
		<p v-text="'hello world'">hello people</p>
		<h4>v-html</h4>
		<p v-html="'<a href=www.baidu.com>去百度</a>'"></p>
		<h4>v-show</h4>
		<p v-show="show">hello v-show</p>
		<button v-on:click="handleShow">{{sText}}</button>
		<h4>v-if v-else-if v-else</h4>
		<p v-if="number===1">{{number}}</p>
		<p v-else-if="number===2">{{number}}</p>
		<p v-else>{{number}}</p>
		<h4>v-for</h4>
		<p v-for="(ite,index) in forArr" v-bind:key=index>{{ite.name}}{{index}}</p>
		<h4>v-once</h4>
		<p v-once>{{number}}</p>
	</div>
</template>

<script>
export default {
	name: "derictive",
	data () {
		return {
			show: true,
			sText: "隐藏show",
			number: 1,
			forArr:[
				{name:"xiaoming"},
				{name:"honghong"}
			]
		}
	},
	methods: {
		handleShow () {
			this.show = !this.show;
			this.show ? this.sText= "隐藏show": this.sText= "显示show";
			this.number+=1;
		}
	}
}
</script>

