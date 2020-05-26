//VERSION 2

// display todos
// var todos = ['item1', 'item2', 'item3'];

// function displayTodos() {
//     console.log('My todos:', todos);
// }

// // add new todos

// function addTodos(todos, newItem) {
//     todos.push(newItem);
// }
// // change a todo

// function changeTodos(position, newValue) {
//     todos[position] = newValue;
// }
// // delete a todo

// function deleteTodo(position) {
//     todos.splice(position, 1);
// }

/* functions and variables scope relationship
circles and arrows are useful, to visually represent scope
circle around function and draw arrow to variable
think about access points to easily parse scope restrictions
*/

// OBJECTS
// this keyword on a function in an object refers to the whole object
//------------------------------------------------------------------------------
// VERSION 3

// store todos array on an object
// var myTodos = {
//     todos: ['item1', 'item2', 'item3'],
//     // displayTodos method
//     displayTodos: function () {
//         console.log('My Todos', this.todos);
//     },
//     // addTodo method
//     addTodos: function (newItem) {
//         this.todos.push(newItem);
//     },
//     // changeTodo method
//     changeTodos: function (position, newValue) {
//         this.todos[position] = newValue;
//     },
//     // deleteTodo method
//     deleteTodo: function (position) {
//         this.todos.splice(position, 1);
//     },

// };
//------------------------------------------------------------------------------
// VERSION 4

// var todoList = { // the object which will have objects in it
//     todos: [], // empty array which will hold new objects
//     displayTodos: function () {
//         console.log('My Todos', this.todos); // print array of objects
//     },
//     addTodo: function (todoText) {
//         this.todos.push({ // take todoList object and push new object into its todos array
//             todoText: todoText, // text description
//             completed: false // default state should be false since todo isn't complete when initially added
//         });
//         this.displayTodos();
//     },
//     changeTodo: function (position, newValue) {
//         this.todos[position].todoText = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function (position, deleteNumber) {
//         const deleteAmount = deleteNumber;
//         this.todos.splice(position, deleteNumber);
//         this.displayTodos();
//     },
//     toggleCompleted: function (position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         this.displayTodos();
//     }
// };

// todoList.addTodo('testing');
// todoList.toggleCompleted(0);
// -----------------------------------------------------------------------------
// VERSION 5 REQUIREMENTS
// .displayTodos should show .todoText
// .displayTodos should tell you if .todos is empty
// .displayTodos should show .completed

// var todoList = { // the object which will have objects in it
//     todos: [], // empty array which will hold new objects
//     displayTodos: function () {
//         //console.log('My Todos', this.todos); // print array of objects
//         if (this.todos.length === 0) {
//             console.log('My Todos:');
//             console.log('Yo this is empty!');
//         } else
//             console.log('My Todos:');
//         for (var i = 0; i < this.todos.length; i++) {
//             if (this.todos[i].completed === true) {
//                 console.log('(x)' + ' ' + this.todos[i].todoText);
//             } else
//                 console.log('( )' + ' ' + this.todos[i].todoText);
//         }
//     },
//     addTodo: function (todoText) {
//         this.todos.push({ // take todoList object and push new object into its todos array
//             todoText: todoText, // text description
//             completed: false // default state should be false since todo isn't complete when initially added
//         });
//         //this.displayTodos();
//     },
//     changeTodo: function (position, newValue) {
//         this.todos[position].todoText = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function (position, deleteNumber) {
//         const deleteAmount = deleteNumber;
//         this.todos.splice(position, deleteNumber);
//         this.displayTodos();
//     },
//     toggleCompleted: function (position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         this.displayTodos();
//     }
// };
// todoList.displayTodos();
// console.log('-----');
// todoList.addTodo('yep');
// console.log('-----');
// todoList.addTodo('uhuh');
// console.log('-----');
// console.log(todoList.todos);
// console.log('-----');
// todoList.addTodo('ahha');
// todoList.toggleCompleted(2);
// console.log('-----');
// console.log('-----');
// todoList.addTodo('nah');
// console.log('-----');
// todoList.displayTodos();
// todoList.addTodo('ok');
// console.log('-----');
// todoList.toggleCompleted(2);
// -----------------------------------------------------------------------------
// VERSION 6
// .toggleAll: If everything's true, make everything false
// .toggleAll: Otherwise, make everything true
// *NOTE* In the real world, project managers, designers, and CEO's will give descriptions and want something to work a specific way - it is our job to think about what may happen and write code against each scenario so that it functions in the proper way we all expect it to

// var todoList = { // the object which will have objects in it
//     todos: [], // empty array which will hold new objects
//     displayTodos: function () {
//         //console.log('My Todos', this.todos); // print array of objects
//         if (this.todos.length === 0) {
//             console.log('My Todos:');
//             console.log('Yo this is empty!');
//         } else
//             console.log('My Todos:');
//         for (var i = 0; i < this.todos.length; i++) {
//             if (this.todos[i].completed === true) {
//                 console.log('(x)' + ' ' + this.todos[i].todoText);
//             } else
//                 console.log('( )' + ' ' + this.todos[i].todoText);
//         }
//     },
//     addTodo: function (todoText) {
//         this.todos.push({ // take todoList object and push new object into its todos array
//             todoText: todoText, // text description
//             completed: false // default state should be false since todo isn't complete when initially added
//         });
//         //this.displayTodos();
//     },
//     changeTodo: function (position, newValue) {
//         this.todos[position].todoText = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function (position, deleteNumber) {
//         const deleteAmount = deleteNumber;
//         this.todos.splice(position, deleteNumber);
//         this.displayTodos();
//     },
//     toggleCompleted: function (position) {
//         var todo = this.todos[position];
//         todo.completed = !todo.completed;
//         // this.displayTodos();
//     },
//     // .toggleAll: If everything's true, make everything false
//     // .toggleAll: Otherwise, make everything true
//     toggleAll: function () {
//         var isTrue = 0;
//         for (var i = 0; i < this.todos.length; i++) {
//             if (this.todos[i].completed === true) {
//                 isTrue++;
//                 if (isTrue === this.todos.length) {
//                     for (var j = 0; j < isTrue; j++) {
//                         this.todos[j].completed = false;
//                     }
//                 }
//             } else {
//                 for (var i = 0; i < this.todos.length; i++) {
//                     this.todos[i].completed = true;
//                 }
//             }
//         }
//     },
// };

// todoList.displayTodos();
// console.log('-----');
// todoList.addTodo('yep');
// console.log('-----');
// todoList.addTodo('uhuh');
// console.log('-----');
// console.log(todoList.todos);
// console.log('-----');
// todoList.addTodo('ahha');
// todoList.toggleCompleted(2);
// console.log('-----');
// console.log('-----');
// todoList.addTodo('nah');
// console.log('-----');
// todoList.displayTodos();
// todoList.addTodo('ok');
// console.log('-----');
// todoList.toggleCompleted(2);
// todoList.displayTodos();
// todoList.toggleAll();
// console.log('-----');
// todoList.displayTodos();
// todoList.toggleAll();
// todoList.displayTodos();
// todoList.toggleAll();
// todoList.displayTodos();

// *NOTE* Unexpected behavior was caused by the following:
// 1. Placed counter variable inside for loop rather than outside it
// 2. When updating arrays.completed to false or true, I used comparison operator 3x === instead of assign 1x =
// Think about why these things broke the program
//-----------------------------------------------------------------------------
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

// var todoList = { // the object which will have objects in it
//     todos: [], // empty array which will hold new objects
//     displayTodos: function () {
//         //console.log('My Todos', this.todos); // print array of objects
//         if (this.todos.length === 0) {
//             console.log('My Todos:');
//             console.log('Yo this is empty!');
//         } else
//             console.log('My Todos:');
//         for (var i = 0; i < this.todos.length; i++) {
//             if (this.todos[i].completed === true) {
//                 console.log('(x)' + ' ' + this.todos[i].todoText);
//             } else
//                 console.log('( )' + ' ' + this.todos[i].todoText);
//         }
//     },
//     addTodo: function (todoText) {
//         this.todos.push({ // take todoList object and push new object into its todos array
//             todoText: todoText, // text description
//             completed: false // default state should be false since todo isn't complete when initially added
//         });
//         this.displayTodos();
//     },
//     changeTodo: function (position, newValue) {
//         this.todos[position].todoText = newValue;
//         this.displayTodos();
//     },
//     deleteTodo: function (position, deleteNumber) {
//         const deleteAmount = deleteNumber;
//         this.todos.splice(position, deleteAmount);
//         this.displayTodos();
//     },
//     toggleCompleted: function (position) {
//         // debugger;
//         var todo = this.todos[position];
//         //console.log(todo);
//         todo.completed = !todo.completed;
//         //console.log(todo);
//         this.displayTodos();
//     },
//     // .toggleAll: If everything's true, make everything false
//     // .toggleAll: Otherwise, make everything true
//     toggleAll: function () {
//         //debugger;
//         var isTrue = 0;
//         for (var i = 0; i < this.todos.length; i++) {
//             if (this.todos[i].completed === true) {
//                 isTrue++;
//                 if (isTrue === this.todos.length) {
//                     for (var j = 0; j < isTrue; j++) {
//                         this.todos[j].completed = false;
//                     }
//                 }
//             } else {
//                 for (var i = 0; i < this.todos.length; i++) {
//                     this.todos[i].completed = true;
//                 }
//             }
//         }
//         this.displayTodos();
//     },
// };

// JUDGEMENT CALL - Adding event listeners this way can be useful if we need multiple listeners on an element it is less specific and makes code more complex but it is an option to consider!!!!
// var displayTodosButton = document.getElementById('displayTodosButton');

// displayTodosButton.addEventListener('click', function () {
//     todoList.displayTodos();
// });

// var toggleAll = document.getElementById('toggleAllButton');

// toggleAll.addEventListener('click', function () {
//     todoList.toggleAll();
// });

// todoList.addTodo('car time');
// todoList.addTodo('data is cool');
// todoList.addTodo('list is growing');
// todoList.addTodo('nothing to see here');
// todoList.addTodo('alright this should do it');
// todoList.addTodo('seriously stop');
// todoList.addTodo('why i oughtta!');

//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
// VERSION 11
// DESTROY ALL FOR LOOPS - Use forEach
// Requirements
// * todoList.toggleAll should use forEach
// * view.displayTodos should use forEach

var todoList = {
  // the object which will have objects in it
  todos: [], // empty array which will hold new objects
  addTodo: function (todoText) {
    this.todos.push({
      // take todoList object and push new object into its todos array
      todoText: todoText, // text description
      completed: false, // default state should be false since todo isn't complete when initially added
    })
  },
  changeTodo: function (position, newValue) {
    this.todos[position].todoText = newValue
  },
  deleteTodo: function (position) {
    this.todos.splice(position, 1)
  },
  toggleCompleted: function (position) {
    var todo = this.todos[position]
    todo.completed = !todo.completed
  },
  // .toggleAll: If everything's true, make everything false
  // .toggleAll: Otherwise, make everything true
  toggleAll: function () {
    var totalTodos = this.todos.length
    var completedTodos = 0

    // Iterate over this.todos to get number of completed todos
    // thisObject.todos.forEach()
    this.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++
      }
    })

    // Case 1: If everything is true make everything false
    // if (completedTodos === totalTodos) {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = false
    //   })
    //   //Case 2: Otherwise make everything true
    // } else {
    //   this.todos.forEach(function (todo) {
    //     todo.completed = true
    //   })
    // }
    // *NOTE* --- Instead of having an if/else statement which each runs a forEach, put that conditional check into one forEach with two different outcomes based on [i] we passed in as todo - same functionality but cleaner
    this.todos.forEach(function (todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false
      } else {
        todo.completed = true
      }
    })
    //---------------------------------

    // Get number of completed todos
    // for (var i = 0; i < totalTodos; i++) {
    //   if (this.todos[i].completed === true) {
    //     completedTodos++
    //   }
    // }

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
  },
}

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput')
    todoList.addTodo(addTodoTextInput.value)
    addTodoTextInput.value = ''
    view.displayTodos()
  },
  changeTodo: function () {
    var changeTodoTextInput = document.getElementById('changeTodoTextInput')
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value,
    )
    changeTodoPositionInput.value = ''
    changeTodoTextInput.value = ''
    view.displayTodos()
  },
  deleteTodo: function (position) {
    todoList.deleteTodo(position)
    view.displayTodos()
  },
  toggleCompleted: function () {
    var toggleCompletedPositionInput = document.getElementById(
      'toggleCompletedPositionInput',
    )
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
    toggleCompletedPositionInput.value = ''
    view.displayTodos()
  },
  toggleAll: function () {
    todoList.toggleAll()
    view.displayTodos()
  },
}

var view = {
  // Add items dynamically to the page
  displayTodos: function () {
    // Select unordered list and make its content blank
    var todosUl = document.querySelector('ul')
    todosUl.innerHTML = ''
    // Iterate through todoList array and create new list item for each
    // for (var i = 0; i < todoList.todos.length; i++) {
    //   var todoLi = document.createElement('li')
    //   var todo = todoList.todos[i]
    //   var todoTextWithCompletion = ''

    //   if (todo.completed === true) {
    //     todoTextWithCompletion = '(x) ' + todo.todoText
    //   } else {
    //     todoTextWithCompletion = '( ) ' + todo.todoText
    //   }
    //   // This can be the index because there should only ever be one id for any element. It is unique like the index. We will make the button look for this id to know which todo in the list should be deleted according to its position in the array which will also be its id
    //   todoLi.id = i
    //   //assign the text at each index to the new list item
    //   todoLi.textContent = todoTextWithCompletion
    //   // Nests and inserts list item element along with new text into Unodered List
    //   todoLi.appendChild(this.createDeleteButton())
    //   todosUl.appendChild(todoLi)
    // }
    // *NOTE* --- when forEach runs it will pass in an additional argument to our callback function. this second argument is the position or [i] remember the first argument is the equivalent to a variable storing the object forEach was called on
    todoList.todos.forEach(function (todo, position) {
      var todoLi = document.createElement('li')
      var todoTextWithCompletion = ''

      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText + ' '
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText + ' '
      }

      todoLi.id = position
      todoLi.textContent = todoTextWithCompletion

      todoLi.appendChild(this.createDeleteButton())
      todosUl.appendChild(todoLi)
      // also forEach(callback, this) can take two arguments, the callback and this so that we can point to the reference of this on the parent object outside of scope
    }, this)
  },
  createDeleteButton: function () {
    // create a button in DOM
    var deleteButton = document.createElement('button')
    // set button text content to 'Delete'
    deleteButton.textContent = 'Delete'
    // set button class to 'deleteButton'
    deleteButton.className = 'deleteButton'
    // return the button so we can use it
    return deleteButton
  },
  // EVENT DELEGATION PATTERN
  setupEventListeners: function () {
    // select unordered list
    var todosUl = document.querySelector('ul')
    // anything in the unordered list that is clicked will run this function which logs the id of the button by looking one level higher up at the list item's id
    todosUl.addEventListener('click', function (event) {
      // get the element that was clicked on
      var elementClicked = event.target

      // check if element clicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        // run handlers.deleteTodo(position)
        // position is id of list item element
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
      }
    })
  },
}

view.setupEventListeners()

/* *FINAL NOTES* --- This use cases
    The this keyword is just a variable that can change based on the case its use in.
    Case 1: global this - if used in a function on outermost scope, this points to the window Object
    
    Case 2: as an object's method - if used in an object, this will point to the object; a way to remember this is the 'left of the dot rule' which states that this refers to the object the method belongs to
    
    Case 3: constructors - if creating a constructor and setting all its variables to this, the keyword will point to the new object created from the constructor, multiple objects get their own this keyword thanks to the constructor



    ------------------------IMPORTANT--------------------------
    Case 4: bind, call, apply - explicity set the value of this
        Method on all objects (in the prototype and considered higher order) 
        Returns a copy of the function where 'this' is set to the first argument passed into .bind()
        
        BIND
        var explicitlySetFunction = myFunction.bind({name: 'Daymond'})
        this does not run the function it just returns a copy of it with our custom explicitly set 'this' keyword. running the function will print out our custom explicitly set object rather than the window object
        
        The next two are VERY similar they change the 'this' value of the first argument passed in and run the function immediately

        CALL 
        This requires you to pass in the new this
        myFunction.call({name: 'Daymond'}, ['hi', 'daymond'])

        APPLY
        myFunction.apply({name: 'Daymond'}, 'hi', 'daymond')

        later I will find out when to use call and when to use apply
        
        Note that a function returned from .bind cannot be bound to a different 'this' value ever again. In other words, functions can only be bound once.
        
        var boundOnce = myFunction.bind({name: 'Joe'})
        boundOnce.bind(name: 'why even try?')() <--- this binds and calls immediately like call and apply, we jut have to put the parentheses on the end to call the function

        Case 5: Callback functions
        Look at how the higher order functions call the callbacks, they will match one of the first 4 cases above and 'this' will work accordingly
        
        *FINAL NOTE* --- callback functions are at the mercy of the higher order functions they are passed into, since we know this, just inspect the higher order function to see how its being called to know what to expect 'this' to be 
        */
