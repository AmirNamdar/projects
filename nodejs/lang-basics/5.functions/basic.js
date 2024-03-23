// classic definition
// hoisted
function square(number) {
    return number * number
}

// don't use, don't care
//not hoisted

// anonymous function expression
const square2 = function (number) {
  return number * number;
};

// named function expression
const square3 = function square (number) {
  return number * number;
};

// Variables defined inside a function cannot be accessed from anywhere outside the function,
// because the variable is defined only in the scope of the function.
// However, a function can access all variables and functions defined inside the scope in which it is defined.
