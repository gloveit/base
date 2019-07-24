<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- <prop name="xiaoming" 
          :type="type" 
          :list="menu"
          :onChange="handlePropChange"
          v-model="username"
          required
          placeholder="Enter your username"
          label="姓名"
    />-->
    <!-- <p>{{username}}</p> -->
    <a-breadcrumb>
      <a-breadcrumb-item id="step-0">
        <router-link to="/">HelloWorld</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item id="step-1">
        <router-link to="/Prop">Prop</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item id="step-2">
        <router-link to="/Detail">Detail</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item id="step-3">
        <router-link to="/Model">Model</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item id="step-4">
        <router-link to="/slotF">生命周期函数和函数式组件</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/spike">秒杀组件</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/derictive">指令</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/provide">provide/inject跨组件传值</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/jsx">jsx/render</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/tvuex">状态管理</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/shop">购物车</router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/nestRoute/18">路由嵌套</router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>

    <!-- 手动引导页 -->
    <!-- <div id="backBox" v-show="isShow">
      <div class="imgs animated" :class="anmiateClass">
        <img :src="imgSrc" width="50">
      </div>
      <div class="btn animated" :class="btnAnmiateClass" @click="backClick">
        <img :src="btnImg" width="50">
      </div>
    </div>-->

    <!-- vue-tour引导页 -->
    <!-- <v-tour name="myTour" :steps="steps" :options="myoption" :callbacks="mycallback"></v-tour> -->

    <router-view style="width:100%;height:100%"></router-view>
    <Table/>

    <!-- 半插件引导页 -->
    <!-- <Modal v-if="modalOFF === 1">
      <p>这里是对话框一</p>
      <button @click="modalOFF = 2"></button>
    </Modal>
    <Modal v-if="modalOFF === 2">
      <p>这里是对话框二</p>
      <button @click="modalOFF = 3"></button>
    </Modal>
    <Modal v-if="modalOFF === 3">
      <p>这里是对话框二</p>
      <button @click="modalOFF = null"></button>
    </Modal>-->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Prop from './components/Prop.vue'
// import Table from './components/Table.vue'
import loadTime from "./utils/loadTime";
export default {
  name: "app",
  components: {
    // HelloWorld
    // Prop,
    // Table
  },
  data() {
    return {
      menu: [{ n1: "西红柿" }, { n1: "黄瓜" }],
      type: "warning",
      username: "任正非",
      myTour: "myTour"
      // vue-toure引导页
      // steps: [
      //   {
      //     target: "#step-0", // We're using document.querySelector() under the hood
      //     content: `Discover <strong>首页导航</strong>!`
      //   },
      //   {
      //     target: "#step-1",
      //     content: "步骤二导航"
      //   },
      //   {
      //     target: "#step-2",
      //     content: `<p>步骤三导航</p><h4>点击帮助</h4>`,
      //     params: {
      //       placement: "top"
      //     }
      //   },
      //   {
      //     target: "#step-3",
      //     content: "步骤四导航"
      //   },
      //   {
      //     target: "#step-4",
      //     content: `<p>步骤五导航</p><h4>点击帮助</h4>`,
      //     params: {
      //       placement: "top"
      //     }
      //   }
      // ],
      // myoption: {
      //   useKeyboardNavigation: true,
      //   labels: {
      //     buttonSkip: "跳跃引导",
      //     buttonPrevious: "上一步",
      //     buttonNext: "下一步",
      //     buttonStop: "停止引导"
      //   }
      // },
      // mycallback: {
      //   onPreviousStep: this.myCustomPreviousStepCallback,
      //   onNextStep: this.myCustomNextStepCallback,
      //   onStop: this.stopView
      // },

      //手动引导页
      // isShow: false,
      // btnAnmiateClass: "",
      // anmiateClass: "",
      // btnImg: require("./assets/images/know.jpg"),
      // imgSrc: require("./assets/images/1.png"),
      // // theme: this.$store.state.app.themeColor,
      // imgArr: [
      //   require("./assets/images/1.png"),
      //   require("./assets/images/1.png"),
      //   require("./assets/images/1.png"),
      //   require("./assets/images/1.png"),
      //   require("./assets/images/1.png"),
      //   require("./assets/images/1.png")
      // ],
      // num: 0,
      // newUser: "true"
    };
  },
  methods: {
    handlePropChange(val) {
      // console.log(val)
      this.type = val;
    },
    myCustomPreviousStepCallback(currentStep) {
      console.log("点击上一步回调" + currentStep);
    },
    myCustomNextStepCallback(currentStep) {
      console.log("点击下一步回调" + currentStep);
    },
    stopView(currentStep) {
      console.log("停止引导" + currentStep);
    },

    // 手动引导页
    // backClick() {
    //   ++this.num;
    //   var oImg = document.getElementsByClassName("imgs")[0];
    //   oImg.style.left = "auto";
    //   if (this.num == 1) {
    //     // oImg.addClass('animated bounceOutLeft')
    //     this.anmiateClass = "zoomIn";
    //     oImg.style.right = "228px";
    //   } else if (this.num == 2) {
    //     this.anmiateClass = "lightSpeedIn";
    //     oImg.style.right = "139px";
    //   } else if (this.num == 3) {
    //     this.anmiateClass = "zoomIn";
    //     oImg.style.right = "151px";
    //   } else if (this.num == 4) {
    //     this.anmiateClass = "fadeInDown";
    //     oImg.style.right = "69px";
    //   } else if (this.num == 5) {
    //     this.anmiateClass = "zoomInRight";
    //     oImg.style.right = 0;
    //     // this.btnImg = "/src/images/finish.png";
    //   }
    //   if (this.num < 6) {
    //     this.imgSrc = this.imgArr[this.num];
    //   } else {
    //     this.btnAnmiateClass = "fadeOut";
    //     this.anmiateClass = "fadeOut";
    //     setTimeout(() => {
    //       this.isShow = false;
    //       sessionStorage.setItem("newUser", "false");
    //       // document.getElementById('backBox').style.display = 'none'
    //     }, 1200);
    //   }
    // }
  },
  mounted() {
    // let loadtime = loadTime()
    // console.log(loadtime);

    // vue-tour引导页
    // this.$tours["myTour"].start();

    // 手动引导页
    //这里是调用后端接口已经ok了，后端返回的newUser为true
    // if (this.newUser == "true") {
    //   // 第一次登录网站 newUser => true, 测试使用 false
    //   this.isShow = true;
    //   var oImg = document.getElementsByClassName("imgs")[0];
    //   oImg.style.left = "45px";
    //   this.anmiateClass = "flash";
    // }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: calc(100% - 21px);
  /* margin-top: 60px; */
}
.one {
  width: 200px;
  height: 200px;
  border: 1px solid #000;
}

#backBox {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #000;
  top: 0;
  z-index: 1000;
  opacity: 0.6;
}
.imgs {
  opacity: 1;
  position: absolute;
  top: 0;
  right: 1167px;
}
.btn {
  top: 500px;
  right: 300px;
  position: absolute;
}
.app-main {
  width: 100%;
  height: 100%;
}
</style>
