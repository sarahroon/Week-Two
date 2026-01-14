// FIRST EXAMPLE OF A CALLBACK FUNCTION

console.log('Test, test')

function runsOtherFunctions(a) {
  console.log(a)
  a()
}

runsOtherFunctions (byeBye) // runs byeBye function - a becomes byeBye function

runsOtherFunctions(greet) // runs greet function - a becomes greet function

// SECOND EXAMPLE OF A CALLBACK FUNCTION

function notifyUser() {
  console.log(`notifyUser function called`)
}

function myCoolFunction(anythingatall) {
  console.log(`Running my awesome function`)
  anythingatall()
}

myCoolFunction(notifyUser)






