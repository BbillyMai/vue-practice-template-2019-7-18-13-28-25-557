<template>
  <div id="app">
      <input tpye="number" v-model="num"/>
      <CounterGroup :num="parseInt(num)||0"></CounterGroup>
      <SumCounter></SumCounter>
  </div>
</template>


<script>

import CounterGroup from "./components/CountGroup"
import SumCounter from "./components/SumCounter"

export default {
    name: 'app',
    components: {CounterGroup, SumCounter},
    data(){
        return{
            num:0,
        }
    }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
