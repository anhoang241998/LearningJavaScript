// create an array with five todos
// You have x todos to
// Print the first and second to last items -> todo: walk the dog
// const todos = ["Order cat food", "Clean kitchen", "Buy food", "Do Work", "Exercise"]
// console.log(`You have ${todos.length} todos!`)
// console.log(`Todos: ${todos[0]}`)
// console.log(`Todos: ${todos[todos.length - 2]}`)


// delete the 3rd item
// add a new item onto the end
// remove the first item from the list
// todos.splice(2, 1)
// todos.push("Buy Coffee")
// todos.shift()

// console.log(`You have ${todos.length} todos!`)
// // console.log(todos)

// // 1. The first item 
// // 2. The second item 
// todos.forEach(function (todo, index) {
//     console.log(`${index + 1}. ${todo}`)
// })

// // for (let i = 0; i < todos.length; i++) {
// //     console.log(`${i + 1}. ${todos[i]}`)
// // }

// 1. Convert array to array of objects -> text, completed
// 2. Create function to remove a todo by text value

const todos = [{
    text: "Order cat food",
    complete: true
}, {
    text: "Clean kitchen",
    complete: false
}, {
    text: "Buy food",
    complete: true
}, {
    text: "Do Work",
    complete: false
}, {
    text: "Exercise",
    complete: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    }) 
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, "!asdsadclean")
console.log(todos)




