// false
// undefined
// null
// 0
// NaN

console.log(false == null) // false
console.log(false == undefined) // false
console.log(false == NaN) // false
console.log(false == 0) // true
console.log(false == -0) // true
console.log(false == "") // true
console.log(false == '') // true
console.log(false == ``) // true

if (!null) {
  console.log('null is falsey')
}

if (!undefined) {
  console.log('undefined is falsey')
}

if (!NaN) {
  console.log('NaN is falsey')
}


// Note Do not confuse the primitive boolean values true and false
//  with the true and false values of the Boolean
const b = new Boolean(false);
if (b) {
  console.log('Boolean b is true!')
}
if (b == true) {
  console.log('b is true!!')
}

