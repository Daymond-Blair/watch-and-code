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

var todoList = { // the object which will have objects in it
    todos: [], // empty array which will hold new objects
    displayTodos: function () {
        //console.log('My Todos', this.todos); // print array of objects
        if (this.todos.length === 0) {
            console.log('My Todos:');
            console.log('Yo this is empty!');
        } else
            console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                console.log('(x)' + ' ' + this.todos[i].todoText);
            } else
                console.log('( )' + ' ' + this.todos[i].todoText);
        }
    },
    addTodo: function (todoText) {
        this.todos.push({ // take todoList object and push new object into its todos array
            todoText: todoText, // text description
            completed: false // default state should be false since todo isn't complete when initially added
        });
        console.log('-----');
        this.displayTodos();
    },
    changeTodo: function (position, newValue) {
        this.todos[position].todoText = newValue;
        this.displayTodos();
    },
    deleteTodo: function (position, deleteNumber) {
        const deleteAmount = deleteNumber;
        this.todos.splice(position, deleteNumber);
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        console.log('-----');
        this.displayTodos();
    },
    // .toggleAll: If everything's true, make everything false
    // .toggleAll: Otherwise, make everything true
    toggleAll: function () {
        var isTrue = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                isTrue++;
                if (isTrue === this.todos.length) {
                    for (var j = 0; j < isTrue; j++) {
                        this.todos[j].completed = false;
                    }
                }
            } else {
                for (var i = 0; i < this.todos.length; i++) {
                    this.todos[i].completed = true;
                }
            }
        }
        console.log('-----');
        this.displayTodos();
    },
    toggleAllTutorial: function () {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        // Get number of completed todos
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (completedTodos === totalTodos) {
            // Make everything false
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
        console.log('-----');
        this.displayTodos();
    }
};


todoList.addTodo('yep');
todoList.addTodo('uhuh');
todoList.addTodo('ahha');
todoList.toggleCompleted(2);
todoList.addTodo('nah');
todoList.addTodo('ok');
todoList.toggleCompleted(2);
todoList.toggleAll();
todoList.toggleAll();
todoList.toggleAllTutorial();