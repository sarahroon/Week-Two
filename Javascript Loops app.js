console.log("Hello world!");

// FOR LOOP WHICH RUNS 5 TIMES

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

// WHILE LOOP RUNS UNTIL COUNTER REACHES 5

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

// WHILE LOOP RUNS UNTIL THE FUNCTION Math.random() RETURNS A VALUE LOWER THAN 0.1 AKA A RANDOM FLOATING POINT AKA DECIMAL VALUE BETWEEN 0 AND 1
// IF VALUE IS LOWER THAN 0.1 keepLooping SET TO true STOPS THE LOOP

let keepLooping = false;
let i = 0;
while (keepLooping === false) {
  console.log("Iteration", i);

  keepLooping = Math.random() < 0.1; // keepLooping IS SET TO FALSE WITH 10% CHANCE THEREFORE Math.random() RETURNS A RANDOM VALUE BETWEEN 0 AND 1
  i++;
}

// LOOPING OVER ARRAY

const favouriteFoods = ["cucumber", "spinach", "avocado", "tuna"];
for (let i = 0; i < favouriteFoods.length; i++) {
  console.log(favouriteFoods[i];
}

// ALTERNATIVE SYNTAX FOR LOOPS FOR ARRAYS

// for...of LOOP

const favouriteFoods = ["cucumber", "spinach", "avocado", "tuna"];
for (let Food of favouriteFoods) {
  console.log(Food);
}

const favouriteNumbers = [6, 2, 18, 26, 30, Infinity];
for (let Number of favouriteNumbers) {
  console.log(Number);
}

// forEach METHOD

const favouriteFoods = ["cucumber", "spinach", "avocado", "tuna"];
favouriteFoods.forEach(function (Food) {
  console.log(Food);
});








