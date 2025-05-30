export default {
  name: 'ToDoList',
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all' // 新增：过滤状态（all, active, completed）
    }
  },
  created() {
    // 从localStorage加载数据
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos)
    } else {
      // 初始数据
      this.todos = [
        { text: '学习Vue基础', completed: false },
        { text: '完成待办事项应用', completed: false },
        { text: '部署应用', completed: false }
      ]
    }
  },
  watch: {
    // 监听todos变化，保存到localStorage
    todos: {
      handler(newTodos) {
        localStorage.setItem('todos', JSON.stringify(newTodos))
      },
      deep: true
    }
  },
  computed: {
    completedCount() {
      return this.todos.filter(todo => todo.completed).length
    },
    filteredTodos() {
      // 根据过滤条件返回不同的待办事项列表
      switch(this.filter) {
        case 'active':
          return this.todos.filter(todo => !todo.completed);
        case 'completed':
          return this.todos.filter(todo => todo.completed);
        default:
          return this.todos;
      }
    },
  
  },
  
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}