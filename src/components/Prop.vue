
<template>
  <div>
    name: {{ name }}
    <br />
    type: {{ type }}
    <br />
    list: <p v-for="(ite,index) in list" :key="index">{{ite.n1}}</p>
    <br />
    isVisible: {{ isVisible }}
    <br />
    <button @click="handleClick">change type</button>
		<label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
    <!-- <div v-focus="directive"></div> -->
    <!-- <input type="text" v-focus>  -->
    <!-- <button v-buriedPoint='{type:"click",key:"shop"}' @click="handleShop">购物</button> -->
  </div>
</template>

<script>
export default {
	inheritAttrs: false, //不继承父组件的特性
	name: "Prop",
	props: {
    name: String,
    type: {
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    isVisible: {
      type: Boolean,
      default: false
    },
    onChange: {
      type: Function,
      default: () => {}
		},
		label:"",
		value:"",
		intype:"text"
  },
  data () {
    return {
      directive : "directive"
    }
  },
  methods: {
    handleClick() {
      // 不要这么做、不要这么做、不要这么做
      // this.type = "warning";

      // 可以，还可以更好
      this.onChange(this.type === "success" ? "warning" : "success");
    },
    handleShop () {
      console.log("处理购物逻辑")
    }
  },
  // 自定义指令
  directives:{
    focus:{
     bind:function(el,binding,vnode){
        el.addEventListener('click',()=>{
          // sendRequest(binding.value)
        }) 
      }
    }
  }
}
</script>

<style>

</style>


