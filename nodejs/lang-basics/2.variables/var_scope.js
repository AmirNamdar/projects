var x = 5; // declare x in global scope

function foo() {
    var x = 10; // declares new x in local scope
    console.log(x);
    bar();
}

function bar() {
    x = 15; // mutates x from the global scope
    console.log(x);
    var y = 20; // declares new y in local scope of the bar function

    function baz() {
        console.log(y); // y is accessible here becuase baz is declared in the scope of bar
    }
    baz();
}
    

console.log(x);
foo();
console.log(x);
x = 6; // global scope
console.log(x);

try {
    console.log(y);
}
catch (e) {
    console.log(String(e));
}

console.log(this)

/*
5
10
15
20
15
6
ReferenceError: y is not defined

*/