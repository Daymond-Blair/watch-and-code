// VERSION 9
// ESCAPE THE CONSOLE - Output data directly to screen
// Requirements
// * There should be an li element for every todo
// * Each li element should contain .todoText
// * Each li element should show .completed

// // Create list item
// var todosLi = document.createElement('li');

// // Select unordered list to fill with list items
// var todosUL = document.querySelector(ul);
// todosUL.appendChild(todosLi);

// // Create object to display todos array to screen by inserting elements into the DOM
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

//       //assign the text at each index to the new list item
//       todoLi.textContent = todoTextWithCompletion
//       // Nests and inserts list item element along with new text into Unodered List
//       todosUl.appendChild(todoLi)
//     }
//   },
// }

// We now have 3 objects which make up this program, the todoList, handlers, and view
// todoList is the core of the program which stores and represents todo data in the array and exposes methods to manipulate it
// handlers can interface with the todoList and call its functions to manipulate the data through a user interface of buttons and input text fields
// view is solely focused on displaying the handled data to the screen
// *NOTE* you can create a runWithDebugger function that calls any function with the debugger rather than placing it randomly in your code
// *NOTE* --- setTimeout will call the function passed into it after a specified interval of time in milliseconds - 5000 is 5 seconds
// *NOTE* --- forEach improved way to iterate over an array; this allows us to run functions on every item in an array. all objects have this function because it exists in the prototype(); we only need to call it and pass in the function we want to run. We can pass the function 3 different ways, we can pass in a reference object.forEach(functionName), pass in the whole function explicitly object.forEach(function functionName(name){}) or pass it in as an annonymous function object.forEach(function(name){})
// *NOTE* --- addEventListener will listen for different types of events like onclick, onhover, mouseover, etc.  element.addEventListener('click', function(){ console.log('you clicked me fool!')}) this logs to the console when the element is clicked, these methods also come with an event object that can be used optionally, all we must do is pass it as a parameter to the function we choose to run when the event happens. this will allow us to see much more information about the event
// *NOTE* --- higher order functions accept other functions and enhance them in some way like forEach, addEventListener, setTimeout, etc.
// *NOTE* --- callback functions are the functions that are passed into higher order functions
