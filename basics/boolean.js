let temp = 33
// check the program with
// === : equality operator
// !== : no equal operator
// < : less than operator
// > : greater than operator
// >= : greater and equal operator
// <= : less and equal operator

let isFreezing = temp <= 32

if (isFreezing) console.log('It is freezing outside')
else console.log('It is hot outside')


let isChecking = temp < 32
console.log(isChecking)

let isChecking1 = temp <= 32
console.log(isChecking1)

let isChecking2 = temp >= 32
console.log(isChecking2)

// Challenge area
// Create age set to your age 
// Calculate is child - if they are 7 or under 
// Calculate is senior - if they are 65 or older
// Print is child value
// Print is senior value

let child = 7
let senior = 65
let checkAge = child === senior
let checkAge1 = child !== senior
let checkAge2 = child > senior
let checkAge3 = child < senior
let checkAge4 = child >= senior
let checkAge5 = child <= senior
console.log(checkAge)
console.log(checkAge1)
console.log(checkAge2)
console.log(checkAge3)
console.log(checkAge4)
console.log(checkAge5)

let age = 6
// let isChild = age <= 7
// let isSenior = age >= 65
// console.log(isChild)
// console.log(isSenior)

// If 7 or under print message about child pricing
if (age <= 7)
    console.log('you will get a child discount')

// if 65 or older print message about senior discount
else if (age >= 65)
    console.log('you will get a senior discount')









