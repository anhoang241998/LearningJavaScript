let myBook = {
  title: "Hello",
  author: "George Orwell",
  pageCount: 326,
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"
console.log(`${myBook.title} by ${myBook.author}`)

//Challenge area
// name, age, location
// Andrew is 27 and lives in Philadelphia
// increase age by 1 and print message again
let myInformation = {
  name: "Nguyen Hoang An",
  age: 22,
  location: "Ho Chi Minh city",
}

console.log(`${myInformation.name} is ${myInformation.age} and lives in ${myInformation.location}`)

myInformation.age = myInformation.age + 1
console.log(`${myInformation.name} is ${myInformation.age} and lives in ${myInformation.location}`)

