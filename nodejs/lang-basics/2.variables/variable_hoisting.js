/* 
When using `var` the variable declaration is hoisted to the top of the function or global scope
but not its initialization.
*/

console.log(hello); // undefined
var hello = 'World';
console.log(hello); // World

// Not hoisted, will throw reference error
// console.log(x)
// let x = 1;
// console.log(x)
