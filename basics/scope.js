// Lexical Scope (Static Scope)
// Global scope - Defined outside of all code blocks
// Local scope - defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope
// Global Scope (varOne)
  // Local scope (varTwo)

let varOne = 'varOne'

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'

}
console.log(varTwo)