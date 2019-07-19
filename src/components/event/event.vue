<template>
  <div>
    <input type="text" @change="handleChange">
    <p>姓名{{fullname}}</p>
    <p><label >姓:</label><input type="text" v-model="firstname"></p>
    <p><label >名:</label><input type="text" v-model="lastname"></p>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: "event",
  data() {
    return {
      name: "",
      firstname:'',
      lastname:'',
      fullname:''
    };
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.value, val => {
        console.log(val);
      });
    }
  },
  watch:{
    firstname(nval){
      clearTimeout(this.setFirstname)
      this.setFirstname=setTimeout(()=>{
        this.fullname = nval + this.lastname
      },5000)
    },
    lastname (nval){
      this.setLasttname=setTimeout(()=>{
        this.fullname = nval + this.firstname
      },5000)
    }
  }
};
</script>

