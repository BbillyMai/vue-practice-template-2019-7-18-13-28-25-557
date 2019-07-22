<template>
    <div>
        <button v-on:click="decrease"> - </button>
        <span>{{ count }}</span>
        <button v-on:click="increase"> + </button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data() {
            return{
                count: 0,
            }
        },
        methods:{
            increase(){
                this.count++;
                this.$store.commit('increase');
            },
            decrease(){
                this.count--;
                this.$store.commit('decrease');
            },
        }
    }
</script>

<style scoped>
button{
    margin: 10px;
}
</style>