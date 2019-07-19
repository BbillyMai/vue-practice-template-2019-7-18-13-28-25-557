<template>
  <button v-on:click="sub"> - </button>
  <span>{{ count }}</span>
  <button v-on:click="add"> + </button>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return{
            count: 0,
            message:"hello World"
        }
    },
    methods:{
        sub(){
            this.count--;
        },
        add(){
            this.count++;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
