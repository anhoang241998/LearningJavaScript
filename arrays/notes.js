const notes = [
  {
    title: "My next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habits to work on",
    body: " Exercise. Eating a bit better",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
]

// delete the last item in the array
// console.log(notes.pop())

// // add new thing in the array
// notes.push("My new note")

// // delete the first item in the array
// console.log(notes.shift())
// // add the first item in the array
// notes.unshift("My first note")

// remove items in the middle
// notes.splice(1, 1, 'This is the new second item')

// replace the item
// notes[2] = "This is now the new note 3"

// // forEach function
// notes.forEach(function (item, index) {
//   console.log(index)
//   console.log(item)
// })
notes.findIndex

const findNote = function (notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, "office modification")
console.log(note)

// .length to see the length of the array
// console.log(notes.length)
// // console.log(notes[notes.length - 2])
// console.log(notes)

// // // Counting... 1
// // for (let count = 0; count <= 2; count++) {
// //   console.log(count)
// // }

// // for (let count = 2; count >= 0; count--) {
// //   console.log(count)
// // }

// // for (let count = 0; count < notes.length; count++) {
// //     console.log(notes[count])
// // }

// // for (let count = notes.length - 1; count >= 0; count--) {
// //     console.log(notes[count])
// // }

// // searching in array the exist item (default: -1)
// // console.log(notes.indexOf({}))

// // notes: 2 objects are equal if they have exact the same memory

// const index = notes.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === "Habits to work on"
// })
// console.log(index)
