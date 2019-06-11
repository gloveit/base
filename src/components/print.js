
console.log("print module")    //懒加载时只加载一次
// 普通函数写法
export const print = function () { //懒加载时可通过click事件多次触发
    console.log("this is print page")
}

// 箭头函数写法
// export default ()=>{
//     console.log("this is print page")
// }
export default print
