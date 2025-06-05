export default {
  name: 'ToDoList',
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all', // 新增：过滤状态（all, active, completed）
      nextTodoId: 1 // 用于生成唯一ID
    }
  },
  created() {
    // 从localStorage加载数据
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos)
      // 找出最大ID值，确保新添加的待办事项ID不重复
      if (this.todos.length > 0) {
        const maxId = Math.max(...this.todos.map(todo => todo.id || 0));
        this.nextTodoId = maxId + 1;
      }
    } else {
      // 初始数据
      this.todos = [
        { id: this.nextTodoId++, text: '学习Vue基础', completed: false },
        { id: this.nextTodoId++, text: '完成待办事项应用', completed: false },
        { id: this.nextTodoId++, text: '部署应用', completed: false }
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
          // 在"全部"视图中，将未完成的事项排在前面
          return [...this.todos.filter(todo => !todo.completed), ...this.todos.filter(todo => todo.completed)];
      }
    },
  
  },
  
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          id: this.nextTodoId++,
          text: this.newTodo.trim(),
          completed: false
        })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      // 获取要删除的todo项
      const todoToRemove = this.filteredTodos[index];
      // 在原始todos数组中查找对应项的索引
      const originalIndex = this.todos.findIndex(todo => todo === todoToRemove);
      // 使用原始索引删除
      if (originalIndex !== -1) {
        this.todos.splice(originalIndex, 1);
      }
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
}