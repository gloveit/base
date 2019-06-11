<template>
  <div>
    <TableB class="form_right"/>
    <Form class="form_left taa" />
    <span>组件动态参数(id)</span>{{id}}
  </div>
</template>

<script>
import Form from './Form.vue'
// import Table from './Table.vue'
import TableB from './TableB.vue'
export default {
  name: 'Detail',
  components: {
    Form,
    TableB
  },
  props:["id"]
}
</script>

<style scoped>
.form_left{
  width: 50%;
  height: 100%;
  float: left;
}
.form_right{
  width: 50%;
  height: 100%;
  float: left;
}
.taa{
  background:#0f0
}
</style>


