// VERSION 8
// REFACTORING - Eliminate Complexity
// Requirements
// * It should have working controls for .addTodo
// * It should have working controls for .changeTodo
// * It should have working controls for .deleteTodo
// * It should have working controls for .toggleCompleted

// Create new object called handlers. The methods in this new object will handle different events (clicks, mouseover, etc....)

// JUDGEMENT CALL - This method of adding event listeners is much cleaner, less complex and more specific; however, we can only add one per element this way - another option to consider!!!!

// var todoList = {
//   // the object which will have objects in it
//   todos: [], // empty array which will hold new objects
//   //   displayTodos: function () {
//   //     //console.log('My Todos', this.todos); // print array of objects
//   //     if (this.todos.length === 0) {
//   //       console.log('My Todos:')
//   //       console.log('Yo this is empty!')
//   //     } else console.log('My Todos:')
//   //     for (var i = 0; i < this.todos.length; i++) {
//   //       if (this.todos[i].completed === true) {
//   //         console.log('(x)' + ' ' + this.todos[i].todoText)
//   //       } else console.log('( )' + ' ' + this.todos[i].todoText)
//   //     }
//   //   },
//   addTodo: function (todoText) {
//     this.todos.push({
//       // take todoList object and push new object into its todos array
//       todoText: todoText, // text description
//       completed: false, // default state should be false since todo isn't complete when initially added
//     })
//     // this.displayTodos()
//   },
//   changeTodo: function (position, newValue) {
//     this.todos[position].todoText = newValue
//     // this.displayTodos()
//   },
//   deleteTodo: function (position, deleteNumber) {
//     const deleteAmount = deleteNumber
//     this.todos.splice(position, deleteAmount)
//     // this.displayTodos()
//   },
//   toggleCompleted: function (position) {
//     // debugger;
//     var todo = this.todos[position]
//     //console.log(todo);
//     todo.completed = !todo.completed
//     //console.log(todo);
//     // this.displayTodos()
//   },
//   // .toggleAll: If everything's true, make everything false
//   // .toggleAll: Otherwise, make everything true
//   toggleAll: function () {
//     //debugger;
//     var isTrue = 0
//     for (var i = 0; i < this.todos.length; i++) {
//       if (this.todos[i].completed === true) {
//         isTrue++
//         if (isTrue === this.todos.length) {
//           for (var j = 0; j < isTrue; j++) {
//             this.todos[j].completed = false
//           }
//         }
//       } else {
//         for (var i = 0; i < this.todos.length; i++) {
//           this.todos[i].completed = true
//         }
//       }
//     }
//     // this.displayTodos()
//   },
// }

// var handlers = {
//   //   displayTodos: function () {
//   //     todoList.displayTodos()
//   //   },
//   addTodo: function () {
//     var addTodoTextInput = document.getElementById('addTodoTextInput')
//     todoList.addTodo(addTodoTextInput.value)
//     addTodoTextInput.value = ''
//     view.displayTodos()
//   },
//   changeTodo: function () {
//     var changeTodoTextInput = document.getElementById('changeTodoTextInput')
//     todoList.changeTodo(
//       changeTodoPositionInput.valueAsNumber,
//       changeTodoTextInput.value,
//     )
//     changeTodoPositionInput.value = ''
//     changeTodoTextInput.value = ''
//     view.displayTodos()
//   },
//   deleteTodo: function () {
//     var deleteTodoPositionInput = document.getElementById(
//       'deleteTodoPositionInput',
//     )
//     todoList.deleteTodo(
//       deleteTodoPositionInput.valueAsNumber,
//       deleteTodoAmountInput.value,
//     )
//     deleteTodoPositionInput.value = ''
//     deleteTodoAmountInput.value = ''
//     view.displayTodos()
//   },
//   toggleCompleted: function () {
//     var toggleCompletedPositionInput = document.getElementById(
//       'toggleCompletedPositionInput',
//     )
//     todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
//     toggleCompletedPositionInput.value = ''
//     view.displayTodos()
//   },
//   toggleAll: function () {
//     todoList.toggleAll()
//     view.displayTodos()
//   },
// }
// With this handlers object, we can now access this in the HTML we can use this as an interface to access the original object functionality
