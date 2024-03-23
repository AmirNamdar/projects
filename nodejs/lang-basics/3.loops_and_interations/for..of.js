const arr = [3, 5, 7];

for (const i of arr) {
    console.log(i);
  }
  // Logs: 3 5 7

// With destructuring
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}