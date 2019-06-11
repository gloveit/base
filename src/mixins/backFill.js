import { mapState } from "vuex";
/**
 * backFill 表单数据回填方法
 * formdateil form表单数据对象
 */
const backFill = {
  data () {
    return {
       formdateil:{},
    }
  },
  /**
   * formData 根据依赖计算是否更新formData
   * this.$store.state.rowData 获取store库中rowData
   */
  computed:{
     formData () {
        this.formdateil = this.$store.state.rowData;
        return this.formdateil
     },
  },
  /**
   * formData 监听formData变化，只有变化时才会重新给formdateil赋值
   */
  // watch : {
  //   '$store.state.rowData':{
  //     handler(newValue,oldValue){
  //       this.formdateil = newValue;
  //       console.log(newValue)
  //     },
  //     // immediate:true,
  //     deep:true
  //   }
  // }
}

/**
 * form 表单的可编辑性方法
 */
export {backFill}