function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
}

const result = addTwoNumbers(4, 5);

console.log(result);

// Creating a function
// calling a function
// addTwoNumber  ---> reference
// addTwoNumbers()  ---> using the function
function loggedIn(username) {
  if (username === undefined) {
    console.log("Please enter usename");
    return;
  }
  return `${username} just  logged in`;
}

// console.log(loggedIn("Gautam"));

// console.log(loggedIn("Divya"));
// console.log(loggedIn("Vinita"));
// console.log(loggedIn());

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500));

const user1 = {
  username: "gautam",
  price: 220,
};

const user2 = {
  username: "Vinu",
  price: 20000,
};

const user3 = {
  username: "Diyu",
  price: 600,
};

function handleObject(randomObject) {
  //in braces thing call the parameterq
  console.log(
    `username is ${randomObject.username} and price is ${randomObject.price}`,
  );
}

handleObject(user1); //calling of function. in braces thing call argument

handleObject(user2);

handleObject(user3);

const myArray = [200, 300, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myArray));
