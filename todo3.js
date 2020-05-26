//VERSION 3

//store todos array on an object
var myTodos = {
  todos: ['item1', 'item2', 'item3'],
  // displayTodos method
  displayTodos: function () {
    console.log('My Todos', this.todos)
  },
  // addTodo method
  addTodos: function (newItem) {
    this.todos.push(newItem)
  },
  // changeTodo method
  changeTodos: function (position, newValue) {
    this.todos[position] = newValue
  },
  // deleteTodo method
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
  },
}
