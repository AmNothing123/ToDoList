<template>
  <div class="todo-container">
    <h2>待办事项列表</h2>
    <div class="todo-input">
      <input 
        type="text" 
        v-model="newTodo" 
        @keyup.enter="addTodo" 
        placeholder="请输入待办事项，按回车添加"
      />
      <button @click="addTodo">添加</button>
    </div>
    
    <!-- 添加过滤按钮 -->
    <div class="todo-filters">
      <button 
        @click="filter = 'all'" 
        :class="{ active: filter === 'all' }"
      >全部</button>
      <button 
        @click="filter = 'active'" 
        :class="{ active: filter === 'active' }"
      >未完成</button>
      <button 
        @click="filter = 'completed'" 
        :class="{ active: filter === 'completed' }"
      >已完成</button>
    </div>


     <!-- 使用过滤后的列表 -->
    <ul class="todo-list">
      <li v-for="(todo, index) in filteredTodos" :key="todo.id" :class="{ completed: todo.completed }">
        <input type="checkbox" v-model="todo.completed">
        <span>{{ todo.text }}</span>
        <button @click="removeTodo(index)" class="delete-btn">删除</button>
      </li>
    </ul>
    
    <div class="todo-footer" v-if="todos.length > 0">
      <span>{{ completedCount }}/{{ todos.length }} 已完成</span>
      <button @click="clearCompleted">清除已完成</button>
    </div>
  </div>
</template>

<script>
import todoListScript from './TodoListScript.js';
export default todoListScript;
</script>

<style src="../assets/styles/todolist.css"></style>

