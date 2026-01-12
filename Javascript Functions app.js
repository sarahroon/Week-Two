function sayHello() {
    console.log("Hello world!");
}

sayHello();
sayHello();
sayHello();

function argumentFunction(argument1, argument2) {
    console.log(argument1, argument2);
}

function sayHelloTo(userName) {
    console.log("Hello " + userName + "!");
}

sayHelloTo("Bob");
sayHelloTo("Jimmy");
sayHelloTo("ALice");

function greet(greeting, userName) {
    console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob");
greet("Buenos dias", "Alice");
greet("Bonjour", "Charlie");

function add(a, b) {
    return a + b;
}

const result = add(1, 5);
console.log("The result is", result);
const asecondResult = add(2, 10);
console.log("A second result is", asecondResult);

function calculate(a, b, operator) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
}

function calculate(a, b, operator) {
  switch (operator) {
    case "+":
        return add(a, b);
    case "-":
        return subtract(a, b);
    case "*":
        return multiply(a, b);
    case "/":
        return divide(a, b);
    }
}

const myResult = add(1, 5, "+");
console.log("The result is", myResult);

const anotherResult = calculate(2 * 10);
console.log("Another result is", anotherResult);
