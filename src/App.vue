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
<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 20px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.1);
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(to right, #4caf50, #8bc34a);
  border-radius: 2px;
}
</style>