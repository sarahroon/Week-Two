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

let myGlobalVariable = "pink";
console.log(myGlobalVariable);

function printColour() {
  const myGlobalVariable = "pink"
}

function printColour() {
  console.log("pink " + myGlobalVariable + "!");
}
