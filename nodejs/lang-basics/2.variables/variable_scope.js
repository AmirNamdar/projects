/*
A variable may belong to one of the following scopes:

Global scope: The default scope for all code running in script mode.
Module scope: The scope for code running in module mode.
Function scope: The scope created with a function.
Block scope: The scope created with a curly braced block. (only let and const)

*/


// Variable declared outside of any function is a global variable
var globalVar = 'globalVar';
let globalLet = 'globalLet';
const globalConst = 'globalConst';

// Variables declared inside a function are local variables
function localScope() {
    var localVar = 'localVar2';
    let localLet = 'localLet2';
    const localConst = 'localConst2';

    console.log('Inside localScope function');
    console.log('globalVar: ' + globalVar);
    console.log('globalLet: ' + globalLet);
    console.log('globalConst: ' + globalConst);
    console.log('localVar: ' + localVar);
    console.log('localLet: ' + localLet);
    console.log('localConst: ' + localConst);

}

// localScope();
console.log('Outside localScope function');
// Will throw reference error
// console.log('localVar: ' + localVar);
// console.log('localLet: ' + localLet);
// console.log('localConst: ' + localConst);

// Let and const are block scoped, they are local only within the block they are declared
// Var is function scoped, it is local within the function it is declared, regardless of the block
function blockScope() {
    if (true) {
        var varBlock = 'varBlock'; // will be available in the function
        let letBlock = 'letBlock'; // will be available only in this block
        const constBlock = 'constBlock';
        
        console.log('Inside blockScope function');
        console.log('varBlock: ' + varBlock);
        console.log('letBlock: ' + letBlock);
        console.log('constBlock: ' + constBlock);
    }
    console.log('varBlock: ' + varBlock);
    // Will throw reference error
    // console.log('letBlock: ' + letBlock);
    // console.log('constBlock: ' + constBlock);
}

blockScope();