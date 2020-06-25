let num = 103.146

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 10
let max = 20
//Math.random is 0 - .99999
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)

// Challenge area
// 1 - 5 - true if current - false if  not current

function makeGuest(guest) {
    let min = 1
    let max = 5
    let num = Math.floor(Math.random() * (max - min + 1)) + min
    return guest === num
}

console.log(makeGuest(10))