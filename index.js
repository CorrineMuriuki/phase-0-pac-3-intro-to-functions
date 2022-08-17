// Follow along with the examples here
function doNothing() {}
function sayHello() {
    console.log("Hello!");
  }
sayHello();

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();

  function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia();

  function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToBrendan();

sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();

/* arguments*/
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
say("Julio", "hello");
/* arguments*/
function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
say("Julio", "hello");

/*return values */
function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));
  function add(x, y) {
    return x + y;
  }
  console.log(add(80, 9000));

  /*rewrite*/
function say(greeting, firstName) {
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Sofia"));

function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello", "Sofia"));

function add(x, y) {
    x + y;
}
console.log(add(1, 2));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
    console.log("I was called!");
  }
  console.log(say("Howdy", "partner"));

  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
/*My example*/

function say(greeting, firstName) {
  console.log("I am confident!");
  return `${greeting}, ${firstName}!`;
}
console.log(say("Hello", "Confidence"));

