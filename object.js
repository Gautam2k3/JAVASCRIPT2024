/*Object */

// literal and constructor
// singleton

// object literal

const jsUser = {
  name: "Gautam",
  Fullname: "Gautam Kumrawat", //used for 111
  age: 21,
  location: "Alirajpur",
  email: "gautamkumrawatusp@gmail.com",
  isLoggedin: false,
  lastLoggedIn: ["monday", "tuesday"],
};

console.log(jsUser.email);
console.log(jsUser["email"]); //111

const mySymbol = Symbol("key1");

jsUser.email = "gautam@chatgpt.com";
// Object.freeze(jsUser);

jsUser.greeting = function () {
  console.log("hello jsuser");
};
console.log(jsUser.greeting());
