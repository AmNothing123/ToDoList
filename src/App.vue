<template>
    <div id="app">
      <h1>ToDoList</h1>
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
<style src="./index.css"></style>
