let fullName : string = "Oscar";
let boolean : boolean = true;
const versionNumber : number = 1.3;

// console.log(fullName);
// console.log(boolean);
// console.log(versionNumber);

function printName(f, l) {
    let greeting : string = "Hi there, ";
    console.log(greeting + f + " " + l);

    greeting = "Hey there, ";
    console.log(greeting + f + " " + l);
}

printName("David", "Skodaweesely");