// VERSION 7
// {} === {}
// false
// [1,2,3] === [1,2,3]
// false
// JavaScript compares objects by their memory address so even if objects or arrays contain the same kinds of data or same exact data, they are still different because they point to different memory addresses
// JavaScript attempts to find if we are comparing the same object or different objects
// The only time we can compare the same object at the same address is by assigning it to a variable and explicitly comparing the variable to itself
// primitives are compared by value (whats stored at location) while objects are compared by reference (address or location of object)
// Requirements
// There should be a "Display todos" button and a "Toggle all" button in the app
// Clicking "Display todos" should run todoList.displayTodos
// Clicking "Toggle all" should run todoList.toggleAll

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
    this.displayTodos()
  },
  changeTodo: function (position, newValue) {
    this.todos[position].todoText = newValue
    this.displayTodos()
  },
  deleteTodo: function (position, deleteNumber) {
    const deleteAmount = deleteNumber
    this.todos.splice(position, deleteAmount)
    this.displayTodos()
  },
  toggleCompleted: function (position) {
    // debugger;
    var todo = this.todos[position]
    //console.log(todo);
    todo.completed = !todo.completed
    //console.log(todo);
    this.displayTodos()
  },
  // .toggleAll: If everything's true, make everything false
  // .toggleAll: Otherwise, make everything true
  toggleAll: function () {
    //debugger;
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
    this.displayTodos()
  },
}

// JUDGEMENT CALL - Adding event listeners this way can be useful if we need multiple listeners on an element it is less specific and makes code more complex but it is an option to consider!!!!
var displayTodosButton = document.getElementById('displayTodosButton')

displayTodosButton.addEventListener('click', function () {
  todoList.displayTodos()
})

var toggleAll = document.getElementById('toggleAllButton')

toggleAll.addEventListener('click', function () {
  todoList.toggleAll()
})

todoList.addTodo('car time')
todoList.addTodo('data is cool')
todoList.addTodo('list is growing')
todoList.addTodo('nothing to see here')
todoList.addTodo('alright this should do it')
todoList.addTodo('seriously stop')
todoList.addTodo('why i oughtta!')
