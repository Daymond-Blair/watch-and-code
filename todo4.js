//VERSION 4

var todoList = {
  // the object which will have objects in it
  todos: [], // empty array which will hold new objects
  displayTodos: function () {
    console.log('My Todos', this.todos) // print array of objects
  },
  addTodo: function (todoText) {
    this.todos.push({
      // take todoList object and push new object into its todos array
      todoText: todoText, // text description
      completed: false, // default state should be false since todo isn't complete when initially added
    })
    this.displayTodos()
  },
  changeTodo: function (position, newValue) {
    this.todos[position].todoText = newValue
    this.displayTodos()
  },
  deleteTodo: function (position, deleteNumber) {
    const deleteAmount = deleteNumber
    this.todos.splice(position, deleteNumber)
    this.displayTodos()
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed
    this.displayTodos()
  },
}

todoList.addTodo('testing')
todoList.toggleCompleted(0)
