// VERSION 5 REQUIREMENTS
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

var todoList = {
  // the object which will have objects in it
  todos: [], // empty array which will hold new objects
  displayTodos: function () {
    //console.log('My Todos', this.todos); // print array of objects
    if (this.todos.length === 0) {
      console.log('My Todos:')
      console.log('Yo this is empty!')
    } else console.log('My Todos:')
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        console.log('(x)' + ' ' + this.todos[i].todoText)
      } else console.log('( )' + ' ' + this.todos[i].todoText)
    }
  },
  addTodo: function (todoText) {
    this.todos.push({
      // take todoList object and push new object into its todos array
      todoText: todoText, // text description
      completed: false, // default state should be false since todo isn't complete when initially added
    })
    //this.displayTodos();
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
todoList.displayTodos()
console.log('-----')
todoList.addTodo('yep')
console.log('-----')
todoList.addTodo('uhuh')
console.log('-----')
console.log(todoList.todos)
console.log('-----')
todoList.addTodo('ahha')
todoList.toggleCompleted(2)
console.log('-----')
console.log('-----')
todoList.addTodo('nah')
console.log('-----')
todoList.displayTodos()
todoList.addTodo('ok')
console.log('-----')
todoList.toggleCompleted(2)
