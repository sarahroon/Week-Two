console.log("Hello world!");

const myName = "Sarah";

function sayHello() {
  console.log("Hello " + myName + "!");
}

sayHello();
console.log(myName);

function sayHello() {
  const myName = "Sarah";
  console.log("Hello " + myName + "!");
}

sayHello();

console.log(myName);

const myGlobalVariable = 'favouritecolour'

function printColour() {

  let printColour = "green";
  favouritecolour = "pink";
  console.log(myfavouritecolour, myGlobalVariable)
}

