let myBook = {
  title: "Hello",
  author: "George Orwell",
  pageCount: 326,
}

let otherBook = {
  title: "A people History",
  author: "Howard Zinn",
  pageCount: 723,
}

function getSummary(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  }
}

console.log(getSummary(myBook).summary)
console.log(getSummary(otherBook).pageCountSummary)

// Challenge area
// Create function - take fahrenheit in - return object with all three parameters

function convertMachine(temp) {
  return {
    fahrenheit: temp,
    celsius: (temp - 32) * 5 / 9,
    kelvin: (temp + 459.67) * 5 / 9,
  }
}

console.log(convertMachine(74))
