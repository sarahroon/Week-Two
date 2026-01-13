console.log("Hello world!");

// CALLBACK FUNCTION

function notifyUser() {
  console.log("notifyUser function was called!");

function myFirstFunction(notifyUserCallback) {
  console.log("Running myFirstFunction... doing task one...");
  console.log("Task one complete. I will notify the user");
  notifyUserCallback();
}

myFirstFunction(notifyUser);

function myFirstFunction(onCompleteCallback) {
  console.log("Running myFirstFunction... doing task one...");
  console.log("Task one complete. I will notify the user");
  onCompleteCallback();
}

myFirstFunction(function () {
  console.log("notifyUser function was called!");
});

myFirstFunction(() => {
  console.log("notifyUser function was called!");
});

function myFirstFunction(onSuccessCallback, onFailureCallback) {
  console.log("Running myFirstFunction... doing task one...");
  console.log("Task one complete. I will notify the user");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }

  function onFirstSuccess(data) {
    console.log("It was successful: ", data.message);
  }

  function onFirstFailure() {
    console.log("It failed :(");
  }

  myFirstFunction(onFirstSuccess, onFirstFailure);

  // MATHEMATICAL FUNCTIONS

  // ADD
  
  function add(a, b) {
    return a + b;
  }

  function myCalculatorFunction(a, b, operationCallback) {
    console.log("Doing a calculation using the numbers: ", a, b);
    console.log(
      "We might have code that saves the result to a log or a database"
      );

      return operationCallback(a, b);
  }

  const result = myCalculatorFunction(1, 2, add);
  console.log(result);

  const finalResult = myCalculatorFunction(result, result2, add);
  console.log(finalResult);

  // MULTIPLY

  function multiply(a, b) {
    return a * b;
  }

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
    );

    return operationCallback(a, b);
}

const result = myCalculatorFunction(2, 2, multiply);
console.log(finalResult);

// ADD A BUTTON
  
button.addEventListener("click", handleClick);
