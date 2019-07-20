<template>
    <div id="main">
        <h2>Jquery To Do List</h2>
        <h5>Simple Todo List with adding and filter by diff status</h5>
        <form v-on:submit.prevent="addNewTodo">
            <input class="inputName" type="text" v-model="name" >
            <button>Add</button>
            <div class="itemList">
                <ol>
                    <li v-for="(todo, index) in todos" :key="todo.id" >
                        <input id="checkbox" type="checkbox" v-model="completed" v-bind:value="todo.id">
                        <label for="checkbox">{{ todo.title }}</label>
                    </li>
                </ol>
            </div>

        </form>
        <div>
            <button class="filterBtn" v-on:click="showAllTodos">All</button>
            <button class="filterBtn" v-on:click="showActiveTodos">Active</button>
            <button class="filterBtn" v-on:click="showCompleteTodos">Complete</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "todo-list",

        data() {
            return{
                name:"",
                nextIndex:1,
                todos:[],
                all:[],
                active:[],
                completed:[],
            }
        },
        methods: {
            addNewTodo() {
                this.all.push({
                    id:this.nextIndex++,
                    title:this.name,
                    status:false
                });
                this.todos = this.all;
            },
            showAllTodos(){
                this.todos = this.all;
            },
            showActiveTodos(){
                this.todos = [];
                this.todos = this.all.filter(todo =>this.completed.indexOf(todo.id)==-1);
            },
            showCompleteTodos(){
                this.todos = this.all.filter(todo=>this.completed.indexOf(todo.id)>-1)
            },

        }
    }
</script>

<style scoped>
    @import url("../assets/TodoList.css");
</style>