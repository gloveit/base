const method = {
    install(Vue) {
        Vue.globalMethod = function () {
            console.log("this is globalMethod")
        }
    }
}

export default method