// VERSION 6
// .toggleAll: If everything's true, make everything false
// .toggleAll: Otherwise, make everything true
// *NOTE* In the real world, project managers, designers, and CEO's will give descriptions and want something to work a specific way - it is our job to think about what may happen and write code against each scenario so that it functions in the proper way we all expect it to

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
    // this.displayTodos();
  },
  // .toggleAll: If everything's true, make everything false
  // .toggleAll: Otherwise, make everything true
  toggleAll: function () {
    var isTrue = 0
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        isTrue++
        if (isTrue === this.todos.length) {
          for (var j = 0; j < isTrue; j++) {
            this.todos[j].completed = false
          }
        }
      } else {
        for (var i = 0; i < this.todos.length; i++) {
          this.todos[i].completed = true
        }
      }
    }
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
todoList.displayTodos()
todoList.toggleAll()
console.log('-----')
todoList.displayTodos()
todoList.toggleAll()
todoList.displayTodos()
todoList.toggleAll()
todoList.displayTodos()

// *NOTE* Unexpected behavior was caused by the following:
// 1. Placed counter variable inside for loop rather than outside it
// 2. When updating arrays.completed to false or true, I used comparison operator 3x === instead of assign 1x =
// Think about why these things broke the program
