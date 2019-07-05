function fullName(first, last) {
    return first + " " + last;
}

console.log(fullName("Oscar", "Azpeitia"));

function gradeGenerator(grade: number): string {
    let letter: string;
    if(grade < 60) {
        letter = "F";
    } else if(grade >= 60) {
        letter = "B"
    }
    return `Your grade is ${letter}, congratulations`;
}

console.log(gradeGenerator(55));
console.log(gradeGenerator(95));

function printAddress(street: string, streetTwo?: string, state = "Berlin") {
    console.log(street);
    if(streetTwo) {
        console.log(streetTwo);
    }

    console.log(state);
}

printAddress("1223 Somestrasse");
printAddress("1223 Somestrasse", "", "Münich");

//rest arg (rest of items)
function lineupCard(team: string, ...players: string[]) {
    console.log(`Team: ${team}`);
    for(let player of players) {
        console.log(player);
    }
}

lineupCard('Red Sox', "John", "Peter");