var x = [];
function funky (o) {
  o = null;
}
funky(x);
// Unit test
console.assert(x !== null);
console.assert(typeof x === 'object'); // swap() params are pass by value
console.assert(x.hasOwnProperty('length')); // x is array object

var x = 1;
var y = 2;
function swap (a, b) {
  var temp = a;
  a = b;
  b = temp;
}
swap(x, y)
console.assert(x === 1); // Unit test - swap() params are pass by value

// Write a function that takes an agrument and returns that argument.
var o = {};
var x = 1;
function identity (arg) {
  return arg;
}
// Unit test
console.assert(identity(-777) === -777);
console.assert(identity(o) === o);
console.assert(identity(x) === x);

// Write two binary functions add and mul, that take two numbers and
// return their sum and product, respectively.
function add (x, y) {
  return x + y;
}
function mul (x, y) {
  return x * y;
}
// Unit test
console.assert(add(2, 3) === 5);
console.assert(add(-2, 3) === 1);
console.assert(add(Number.MAX_VALUE, 1) === Number.MAX_VALUE);
console.assert(mul(2, 3) === 6);
console.assert(mul(-2, 3) === -6);
console.assert(mul(Number.MAX_VALUE, Number.MAX_VALUE) === Infinity);

// Write a function that takes an argument and returns a function
// that returns that argument
var o = {};
var x = 1;
function identityfunc (arg) {
  return function () {
    return arg;
  };
}
// Unit test
console.assert(identityfunc(3)() === 3);
console.assert(identityfunc(o)() === o);
console.assert(identityfunc(x)() === x);

// Write a function that adds from two invocations
function add1 (x) {
  return function (y) {
    return add(x, y);
  };
}
// Unit test
console.assert(add1(3)(4) === 7);
console.assert(add1('3')('4') === '34');

// Write a function that takes a binary function,
// and makes it callable with two invocations.
// aka, Higher Order Functions :)
function applyfunc (func) {
  return function (x) {
    return function (y) {
      return func(x, y);
    };
  };
}
// Unit test
console.assert(applyfunc(add)(2)(3) === 5);
console.assert(applyfunc(mul)(2)(3) === 6);

// Write a function that takes a function and an argument, and
// returns a function that can supply a second argument.
// aka, Curry Function :)
function curry (func, x) {
  return applyfunc(func)(x);
}
// Unit test
console.assert(curry(add, 2)(3) === 5);
console.assert(curry(mul, 2)(3) === 6);

// Without writing any new functions, show three ways to create the inc function
var inc1 = add1(1);
var inc2 = applyfunc(add)(1);
var inc3 = curry(add, 1);
// Unit test
console.assert(inc1(3) === 4);
console.assert(inc1(inc1(3)) === 5);
console.assert(inc2(3) === 4);
console.assert(inc2(inc2(3)) === 5);
console.assert(inc3(3) === 4);
console.assert(inc3(inc3(3)) === 5);

// Write a function that converts a binary function to a method
function methodize (func) {
  return function (x) {
    return func(this, x);
  };
}
Number.prototype.add = methodize(add);
// Unit test
console.assert((3).add(4) === 7);

// Write a function that converts a method to a binary function
function demethodize (func) {
  return function (that, y) {
    return func.apply(that, y);
  };
}

function twice (func) {
  return function (x) {
    return func(x, x);
  };
}

function composeu (uniaryFunc1, uniaryFunc2) {
  return function (x) {
    return uniaryFunc2(uniaryFunc1(x));
  };
}

function composeb (binary1, binary2) {
  return function (a, b, c) {
    return binary2(binary1(a, b), c);
  };
}

// Write a function that allows another
// function to be only called once
function once (func) {
  return (function () {
    var called = 0;
    return function (a, b) {
      called = inc1(called);
      return (called > 1)
        ? 'throw!'
        : func(a, b);
    };
  }());
}

// Write a function that returns two functions which
// implement an incrementer and decementer, i.e.,
// up and down counter
function counterfunc (start) {
  return {
    inc: function () {
      return start += 1;
    },
    dec: function () {
      return start -= 1;
    }
  };
}
var cf = counterfunc(0);
console.assert(cf.dec() === -1);
console.assert(cf.inc() === 0);
console.assert(cf.inc() === 1);

// Write a function that takes a nice function and returns two functions
// an invoke function that takes a value and calls the nice function wit the passed value
// and a revoke functions that prevents invoke from invoking the nice function.
function revocable (niceFunc) {
  var invocable = true;
  function InvokeException (message) {
    this.message = message;
    this.name = 'InvokeException';
  };

  return {
    invoke: function (x) {
      return invocable ? niceFunc(x) : 'throw!'; //throw new InvokeException('Permission revoked');
    },
    revoke: function () {
      invocable = false;
    }
  };
}
