// WHILE LOOP

let counter = 0;

while (counter < 10) {
     console.log(`Running counter ${counter} value`)

counter++
}

let usernumber;

do {
   usernumber = prompt(`What is your number?`)
} while (usernumber === null)

// WORKING WITH ARRAYS AND LOOPS

const myCoworkers = ['Catherine', 'Thomas', 'Matthew', 'Annabelle', 'Jake', 'Harry']

// THE LAST INDEX OF ARRAY IS ALWAYS LENGTH OF ARRAY MINUS 1.
console.log(myCoworkers.length)

for (let i = 0; i < myCoworkers.length; i++) {
    console.log(myCoworkers[i])

// INSTEAD OF JUST console.logging EACH OF OUR COWORKERS, WE`LL TRY TO CREATE SOME HTML FOR THEM

    const h2 = document.createElement('h2')
    h2.innerText = myCoworkers[i]
    document.body.append(h2)
}

// {} ALLOWS REPETITION OF DECLARATION OF ELEMENTS, FOR EXAMPLE H2

// A COUPLE OF SHORTHANDS

for (const coworker of myCoworkers) {
    console.log(`I work with ${coworker}`)
}

// forEach IS AN 'ARRAY METHOD'
// IT TAKES A FUNCTION AS AN ARGUMENT


myCoworkers.forEach(function(item) {
  console.log(`In my forEach loop, I`m logging ${item}`)
})

