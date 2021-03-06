function greet() {
  console.log("hello");
}
greet(); //invoke

//functions as parameters
function logGreeting(fn) {
  fn();
}
logGreeting(greet);
//pasando la funcion greet como parametro e invocandola con fn
//function expression
let greetMe = function () {
  console.log("hello from the function expression");
};
greetMe();

logGreeting(greetMe);
//functions are first class, pass it as parameter

//arrow functions
let greet2 = () => {
  console.log("new function");
};
greet2();

let logGreeting2 = (fn) => {
  fn();
};
logGreeting2(greet2);

let newGreet = () => {
  console.log("arrow functions practice");
};
newGreet();

logGreeting2(newGreet);
