let temp = 65
if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice out')
} else if (temp <= 0 || temp >= 120)
    console.log('Do not go outside')
else
    console.log('Eh. Do what you want.')

// challenge area
let isGuestOneVegan = true
let isGuestTwoVegan = false
if (isGuestTwoVegan && isGuestOneVegan)
    console.log('only offer up vegan dishes')
else if (isGuestOneVegan || isGuestTwoVegan)
    console.log('Make sure to offer up some vegan options')
else
    console.log('Else, offer up anything on the menu')
// Are both vegan? only offer up vegan dishes
// At least one vegan? Make sure to offer up some vegan options
// Else, offer up anything on the menu