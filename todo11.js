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
