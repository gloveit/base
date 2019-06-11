<template>
  <a-form
    :form="form"
    @submit="handleSubmit"
  >
    <a-button @click ="hanleDisabled" >修改</a-button>

    <a-form-item
      label="姓名"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <!-- <input type="text" :value="formData.name"/> -->
      <Ninput type="text" :value="formData.name" :disabled="disabled"/>
      <!-- <a-input   :value="formData.name" :disabled="ischange" @focus="handleFocus" @change="handleInputChange"/> -->
    </a-form-item>
    
      <a-form-item
      label="年龄"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <!-- <a-input :value="formData.age"/> -->
      <Ninput type="text" :value="formData.age" :disabled="disabled"/>
    </a-form-item>
      <a-form-item
      label="用户地址"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <Ninput type="text" :value="formData.address" :disabled="disabled"/>
      <!-- <a-input :value="formData.address"/> -->
    </a-form-item>
    <a-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <a-button
        type="primary"
        html-type="submit"
      >
        Submit
      </a-button>
      <parent/>
      <!-- <ren/> -->
      <!-- <input type="text" :value="test.name"/>
      {{test}} -->
    </a-form-item>
  </a-form>
</template>

<script>
import {bindTableRow} from '@/utils/Form.js'
import {backFill} from "@/mixins/backFill.js"
import parent from './parent.vue'
import Vue from 'vue'
import Ninput from './Ninput.vue'
// import Ren from './render.vue'

Vue.directive('unmodel', {
  bind(el, binding, node) {
    //解除数据绑定，用于表单预览，防止其它开发者去除readonly、disabled
    binding.value && node.componentInstance && node.componentInstance.$off('input');//尝试批量取消，但是失败了..
  },
})

export default {
  name: 'Form',
  mixins:[backFill],
  components:{
    parent,
    Ninput,
    // Ren
  },
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this),
      // formInput:{
      //   name:"",
      //   age:"",
      //   addrss:""
      // },
      disabled:true,
    };
  },
  computed :{
    // formInputData () {
    //   set:(){

    //   }
    //   get:(n){
    //     this.formInput = n
    //   }
    // },
    // formInput () {
    //   return this.formdateil
    // }
  },
  // watch :{
  //   formData (n,o) {
  //     this.formInputData =  n
  //   }
  // },
  methods: {
    handleSubmit (e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    // handleSelectChange (value) {
    //   console.log(value);
    //   this.form.setFieldsValue({
    //     note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    //   });
    // },
    hanleDisabled () {
      this.disabled = false;
    },
    handleFocus  (e) {
      // this.formData.name  = e
    },
    handleInputChange (e) {
      // this.$off("v-model")
      this.n = true
      console.log(e.target.value)
    }
  },
  mounted () {
    // bindTableRow("formid",formdata)
    // this.$off("v-model");
  },
  // render (h) {
  //   return h('div',{
  //     style:{
  //       width:'100px',
  //       height:'50px'
  //     },
  //     props:{
  //       btText:"成功"
  //     }
  //   },
  //   [
  //     h('span',{
  //       style: {
  //         dispaly: 'inline-block',
  //         width:'20px',
  //         height:'10px',
  //         background:'#ccc'
  //       },
  //       attrs:{
  //         id:'bt-fail'
  //       }
  //     },'我是通过render渲染的按钮')
  //   ])
  // }
  // updated () {
  //   console.log(bindTableRow())
  // }
};
</script>

<style>
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