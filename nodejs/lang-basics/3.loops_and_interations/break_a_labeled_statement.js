let x = 10;
let y = 1;

labeledStatement: while (true) {
    x += 1;
    y = 1;
    while (true) {
        console.log("Inner loop:", y)
        y += 1;
        if (y == 10 && x == 10) {
            break labeledStatement;
        } else if (y == 10) {
            break;
        }
    }

}