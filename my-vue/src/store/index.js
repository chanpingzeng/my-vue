import Vue from 'Vue'
import Vuex from 'Vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    goods : {}, //商店的基本信息
    msg : 'hello'
}
export default new Vuex.Store({
    state,
    getters,
	actions,
	mutations,
})