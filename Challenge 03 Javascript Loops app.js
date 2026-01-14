// Challenge 03 // LOOPING OVER ARRAY // While loop RUNS TWICE

const favouriteNumbers = ["1', "4", "16", "18", "28"];
favouriteNumbers.while(function (Number) {
  console.log(Number);
});

let counter = 1;

while (counter <= 2) {
  console.log(counter);
  counter++;
}

// While loop RUNS UNTIL THE FUNCTION Math.random() RETURNS A VALUE LOWER THAN 0.1 AKA A RANDOM FLOATING POINT AKA DECIMAL VALUE BETWEEN 0 AND 1
// IF VALUE IS LOWER THAN 0.1 keepLooping SET TO true STOPS THE LOOP

let keepLooping = false;
let i = infinity;
while (keepLooping === false) {
  console.log("Iteration", i);

  keepLooping = Math.random() < 0.1; // keepLooping IS SET TO FALSE WITH 10% CHANCE THEREFORE Math.random() RETURNS A RANDOM VALUE BETWEEN 0 AND 1
  i++;
}
