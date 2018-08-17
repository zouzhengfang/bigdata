import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        list: []
    },
    mutations: {
        saveShopList(state, newDate) {
            console.log(state.list);
            state.list = state.list.concat(newDate);
        }

    }
});