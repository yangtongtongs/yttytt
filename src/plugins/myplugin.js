//防抖插件
let myplugin = function(Vue) {
    Vue.prototype.debouncefn = function(fn, wait) {
        let timer = null
        return function() {
            clearTimeout(timer)
            timer = setTimeout(function() {
                fn()
            }, wait)
        }
    }
}
export default myplugin