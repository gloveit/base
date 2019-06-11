const test = {
    methods:{
        say () {
            console.log("我是被混入的方法say")
        }
    },
    created () {
        this.say();
        console.log("我是被混入的created生命周期方法")
    }
}
export default test
