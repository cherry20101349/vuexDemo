import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // 设置全局访问的state对象
    state: {
        // 设置初始属性值
        count: 0
    },
    mutations: {
        addCount(state, num) {
            state.count = state.count + num
        },
        delCount(state, num) {
            state.count = state.count ? state.count - num : 0
        }
    }
})