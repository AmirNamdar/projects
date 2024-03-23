var hello = 'World'; // Local and global
let world = 'Hello'; // Block scope
const helloWorld = 'Hello World!'; // Block scope

console.log(world + ' ' + hello);
console.log(world + ' ' + hello + '!' === helloWorld);
