// creates a loop iterating over iterable objects (including Array, Map, Set, arguments object and so on)
const list = [0, 1, 2, 3, 4];
for (const item in list) {
    console.log(item); // 0, 1, 2, 3, 4
}

// The for...in statement iterates over all enumerable string properties of an object
// (ignoring properties keyed by symbols), including inherited enumerable properties.

// Objects created from built–in constructors like Array and Object have inherited
// non–enumerable properties from Array.prototype and Object.
// prototype, such as Array's indexOf() method or Object's toString() method,
// which will not be visited in the for...in loop.

list.foo = "hello";

for (const i in list) {
  console.log(i);
}
// "0" "1" "2" "foo"

