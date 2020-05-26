// // VERSION 10
// // CLICK TO DELETE - Focus on deleting
// // Having to pass in the index and amount to delete is weird and bad UX, we should have a delete button for each list item to delete it more easily
// // Requirements
// // * There should be a way to create delete buttons
// // * There should be a delete button for each todo
// // * Each li should have an id that has the todo position
// // * Delete buttons should have access to the todo id
// // * Clicking delete should update todoList.todos and the DOM

// var todoList = {
//   // the object which will have objects in it
//   todos: [], // empty array which will hold new objects
//   addTodo: function (todoText) {
//     this.todos.push({
//       // take todoList object and push new object into its todos array
//       todoText: todoText, // text description
//       completed: false, // default state should be false since todo isn't complete when initially added
//     })
//   },
//   changeTodo: function (position, newValue) {
//     this.todos[position].todoText = newValue
//   },
//   deleteTodo: function (position) {
//     this.todos.splice(position, 1)
//   },
//   toggleCompleted: function (position) {
//     var todo = this.todos[position]
//     todo.completed = !todo.completed
//   },
//   // .toggleAll: If everything's true, make everything false
//   // .toggleAll: Otherwise, make everything true
//   toggleAll: function () {
//     var totalTodos = this.todos.length
//     var completedTodos = 0

//     // Get number of completed todos
//     for (var i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++
//       }
//     }

//     // Case 1: If everything's true, make everything false
//     if (completedTodos === totalTodos) {
//       for (i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false
//       }
//     }
//     // Case 2: If everything is false, make everything true
//     else {
//       for (i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = true
//       }
//     }
//   },
// }

// var handlers = {
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
//   deleteTodo: function (position) {
//     todoList.deleteTodo(position)
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

// var view = {
//   // Add items dynamically to the page
//   displayTodos: function () {
//     // Select unordered list and make its content blank
//     var todosUl = document.querySelector('ul')
//     todosUl.innerHTML = ''
//     // Iterate through todoList array and create new list item for each
//     for (var i = 0; i < todoList.todos.length; i++) {
//       var todoLi = document.createElement('li')
//       var todo = todoList.todos[i]
//       var todoTextWithCompletion = ''

//       if (todo.completed === true) {
//         todoTextWithCompletion = '(x) ' + todo.todoText
//       } else {
//         todoTextWithCompletion = '( ) ' + todo.todoText
//       }
//       // This can be the index because there should only ever be one id for any element. It is unique like the index. We will make the button look for this id to know which todo in the list should be deleted according to its position in the array which will also be its id
//       todoLi.id = i
//       //assign the text at each index to the new list item
//       todoLi.textContent = todoTextWithCompletion
//       // Nests and inserts list item element along with new text into Unodered List
//       todoLi.appendChild(this.createDeleteButton())
//       todosUl.appendChild(todoLi)
//     }
//   },
//   createDeleteButton: function () {
//     // create a button in DOM
//     var deleteButton = document.createElement('button')
//     // set button text content to 'Delete'
//     deleteButton.textContent = 'Delete'
//     // set button class to 'deleteButton'
//     deleteButton.className = 'deleteButton'
//     // return the button so we can use it
//     return deleteButton
//   },
//   // EVENT DELEGATION PATTERN
//   setupEventListeners: function () {
//     // select unordered list
//     var todosUl = document.querySelector('ul')
//     // anything in the unordered list that is clicked will run this function which logs the id of the button by looking one level higher up at the list item's id
//     todosUl.addEventListener('click', function (event) {
//       // get the element that was clicked on
//       var elementClicked = event.target

//       // check if element clicked is a delete button
//       if (elementClicked.className === 'deleteButton') {
//         // run handlers.deleteTodo(position)
//         // position is id of list item element
//         handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
//       }
//     })
//   },
// }

// view.setupEventListeners()
