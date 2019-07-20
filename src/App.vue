<template>
  <div id="app">
      <!--<input tpye="number" v-model="num" />-->
      <!--<CounterGroup :num="parseInt(num)||0" :sum="sum" v-on:returnNumber="returnNumber"></CounterGroup>-->
      <!--<span>the Counter sum is:{{sum}}</span>-->
      <TodoList></TodoList>
  </div>
</template>


<script>

//import CounterGroup from "./components/CountGroup"
import TodoList from "./components/TodoList"
export default {
    name: 'app',
    //components: {CounterGroup, },
    components: {TodoList, },
    data(){
        return{
            num:0,
            sum:0
        }
    },
    methods:{
        returnNumber(val){
            this.sum = val;
        },

    },

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
