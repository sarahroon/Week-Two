console.log("Hello world!");

// METHOD

const person = {
  name: "John",
  age: 26,
  favouriteColour: "blue",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello();

// PASSING ARGUMENTS

const person = {
  name: "John",
  age: 26,
  favouriteColour: "blue",
  sayHello: function () {
    console.log("Hello!");
  },
};

person.sayHello("Kate");

// RETURNING VALUES

const person = {
  name: "John",
  age: 26,
  favouriteColour: "blue",
  getAge: function () {
    return this.age;
  },
};

const age = person.getAge();

console.log(age);
