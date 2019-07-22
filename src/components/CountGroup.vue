<template>
    <div>
    <div v-for="index in num" :key="index">
        <Counter ></Counter>
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

        },
        data(){
            return{

            }
        },

    }
</script>

<style scoped>

</style>