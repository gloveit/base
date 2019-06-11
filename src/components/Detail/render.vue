<script>
export default {
    name: 'render',
    render (h) {
    return h('div',{
      style:{
        width:'100px',
        height:'50px'
      },
      props:{
        btText:"成功"
      }
    },
    [
      h('span',{
        style: {
          dispaly: 'inline-block',
          width:'20px',
          height:'10px',
          background:'#ccc'
        },
        attrs:{
          id:'bt-fail'
        }
      },'我是通过render渲染的按钮')
    ])
  }
}
</script>

