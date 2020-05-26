//VERSION 2

//display todos
var todos = ['item1', 'item2', 'item3']

function displayTodos() {
  console.log('My todos:', todos)
}

// add new todos

function addTodos(todos, newItem) {
  todos.push(newItem)
}
// change a todo

function changeTodos(position, newValue) {
  todos[position] = newValue
}
// delete a todo

function deleteTodo(position) {
  todos.splice(position, 1)
}

/* functions and variables scope relationship
circles and arrows are useful, to visually represent scope
circle around function and draw arrow to variable
think about access points to easily parse scope restrictions
*/

//OBJECTS
// this keyword on a function in an object refers to the whole object
