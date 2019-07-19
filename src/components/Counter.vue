<template>
    <div>
        <button v-on:click="sub"> - </button>
        <span>{{ count }}</span>
        <button v-on:click="add"> + </button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
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

<style scoped>
button{
    margin: 30px;
}
</style>