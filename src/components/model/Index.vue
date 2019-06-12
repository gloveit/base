<template>
  <div class="baseTtileColor">
    <!-- v-model .sync修饰符实现双向绑定-->
    <model v-model="person" :address.sync="address"/>
    <!-- prop -->
    <model :person="person" :address="address" @update:address="getAddress"/>
    手机号：{{person.phone}}
    邮箱： {{person.email}}
    地址： {{address}}
    <tem/>
    <ren/>
    <p id="jq"></p>
    <img src="../../assets/t.jpg" style="width:100px;">
    <label>lifeTest值</label>
    <input type="text" v-model="lifeTest">
    <p>{{lifeTest}}</p>
    <p>this is a beaute girl</p>
    <button @click="hanldPrintModule" class="base baseBt">懒加载打印模块</button>
    <button @click="goDetail">跳转到detail页面</button>
  </div>
</template>
<script>
import model from "./Model.vue";
import test from "@/mixins/test.js";
import tem from "./tem.vue";
import ren from "./ren.js";
import loadTime from "@/utils/loadTime";
import { loginUser as userLogin } from "../../../client/javascript/vue-api-client.js";

export default {
  name: "Index",
  mixins: [test],
  data() {
    return {
      person: {
        phone: "",
        email: ""
      },
      address: "",
      lifeTest: 1
      //  addPrint:()=>import(/* webpackChunkName: "print"*/ "../print.js").then(module=>{
      // 	 let print = module.default
      // 	 print()
      //  })
    };
  },
  components: {
    model,
    tem,
    ren
  },
  methods: {
    getAddress(val) {
      this.address = val;
    },
    hanldPrintModule() {
      import(/* webpackChunkName: "print"*/ "../print.js").then(module => {
        console.log(module);
        let print = module.default;
        print();
      });
    },
    goDetail() {
      this.$router.push({ name: "Detail", params: { id: "d" } }, () => {
        console.log("恭喜导航完成" + this.lifeTest);
      });
    }
  },
  beforeCreate() {
    this.lifeTest += 1;
    console.log(this.lifeTest);
  },
  created() {
    this.lifeTest += 1;
    console.log(this.lifeTest);
  },
  beforeMount() {
    this.lifeTest += 1;
    console.log(this.lifeTest);
  },
  mounted() {
    this.lifeTest += 1;
    console.log(this.lifeTest);
    $(function() {
      $("#jq").html("我是通过jq直接添加的内容");
    });
    let that = this;
    let load = loadTime();
    console.log(load);
    // throw new Error("this is error")
    console.log(this.userLogin)
    // userLogin(
    //   {
    //   credentials:{
    //     name:"xiaoming"
    //   }  
    // }).then(function(response) {
    //   console.log(response.data); // {id: "<token>", ttl: 1209600, created: "2017-01-01T00:00:00.000Z", userId: 1}
    // });
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>

<style lang="less">
@width: 100px;
@height: 50px;
@background: #f00;
.baseBt {
  //   width: @width;
  //   height: @height;
  background: @background;
}
</style>

