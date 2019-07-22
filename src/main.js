import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
      sum:0
    },
    mutations:{
      increase(){
          this.state.sum++
      },
      decrease(){
          this.state.sum--
      }
    }

});

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')
