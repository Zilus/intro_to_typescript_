let fullName = (first: string, last: string) => {
    return first + " " + last;
}

console.log(fullName("Oscar", "Azpeitia"));

let gradeGenerator = (grade: number): string => {
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