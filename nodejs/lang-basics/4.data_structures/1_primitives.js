// Primitive is data that is not an object and has no methods or properties

/*
    string
    number
    bigint
    boolean
    undefined
    symbol
    null
*/

/* 
Primitives are immutable, meaning they cannot be altered once created
The variables that point to them can be reassigned

When properties are accessed on primitives,
JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead.
For example, "foo".includes("f")
    implicitly creates a String wrapper object and calls String.prototype.includes() on that object
*/
