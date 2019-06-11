export default {
    render (h) {
        // return (
        //     <p>我是通过jsx编写的html</p>
        // )
        return h("button",{
            style:{
                width:'200px',
                height: '100px'
            },
            attrs:{
                id:'bu'
            },
            on:{
                click:()=>{
                    console.log("haha")
                }
            },
            props:{
                myprops:""
            },
            domProps:{
                // innerHTML:"属性优先级高于文本"
            }
        },"我是通过render渲染的按钮")
    }
}