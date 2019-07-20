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

            }
        },
        methods:{
            sub(){
                this.count--;
                this.$emit('getCount',-1);
            },
            add(){
                this.count++;
                this.$emit('getCount',1);
            }
        }
    }
</script>

<style scoped>
button{
    margin: 10px;
}
</style>