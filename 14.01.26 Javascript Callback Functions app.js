console.log('Test, test')

function runsOtherFunctions(a) {
  console.log(a)
  greet()
}

runsOtherFunctions(greet)

runsOtherFunctions('Sarah')

runsOtherFunctions(1)

function greet() {
  console.log(`Hello`)
}

function byeBye() {
  console.log(`See ya!')
