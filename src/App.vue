<template>
    <div id="app">
      <h1>根组件</h1>
      <ToDoList></ToDoList>
    </div>
  </template>


<script>
import ToDoList from './components/ToDoList.vue';
export default {
    name:'App',
    components:{
        ToDoList
    },

};

</script>
<style>

</style>