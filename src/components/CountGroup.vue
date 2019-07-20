<template>
    <div>
    <div v-for="index in num" :key="index">
        <Counter v-on:getCount="getCount"></Counter>
    </div>
    </div>
</template>

import Counter from "./components/Counter"

<script>
    import Counter from "./Counter";
    export default {
        name: "CountGroup",
        components: {Counter},
        props:{
            num:Number,
            sum:Number,
        },
        data(){
            return{
                sum1:0
            }
        },
        methods:{
            getCount(val){
                this.sum1 = this.sum;
                this.sum1+=val;
                this.$emit("returnNumber",this.sum1);
            }
        }
    }
</script>

<style scoped>

</style>