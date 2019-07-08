//Functions have access t pub vars
function nameFunction(name: string): void {
    var n: string = name;

    function printName() {
        console.log(n);
    }

    printName();
}

nameFunction("Oscar");

//Inner function mantain access to the outer scope even after the values are returned!
function nameAgainFunction(name: string) {
    var n: string = name;

    return function() {
        console.log(n);
    }
}

var nameAgain = nameAgainFunction("Ana");
nameAgain();

function lineUp() {
    var nowBating: number = 1;

    return {
        nextBatter() { nowBating++; },
        currentBatter() { return nowBating }
    };
}

let batters = lineUp();

console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter()
console.log(batters.currentBatter());

let pitchers = lineUp();

console.log(pitchers.currentBatter());