let name = "  Andrew Mead "

// Length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//convert to lower case
console.log(name.toLowerCase())

//Include method
let password = "abc123password098"
console.log(password.includes("qord"))

// Trim: remove white space
console.log(name.trim())

// Challenge area:
// isValidPassword
function isValidPassword(password) {
    // if (password.length > 8 && !password.includes("password"))
    //     return true
    // else
    //     return false
    return password.length > 8 && !password.includes("password")
}
// length is more than 8 - and it doesn't contain the word password
console.log(isValidPassword('adsd'))
console.log(isValidPassword('sdadsadsads'))
console.log(isValidPassword('dadsdapassword'))