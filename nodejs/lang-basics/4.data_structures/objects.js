// Named contianers for values



// Shorthand for delcaring: {prop_name: prop_name}
let yo = () => "yo";
const x = {
    yo,   
    toString() {
        return "yo";
    }
}

console.log(x.yo());
console.log(x.toString());