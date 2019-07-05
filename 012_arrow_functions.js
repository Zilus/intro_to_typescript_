var fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Oscar", "Azpeitia"));
var gradeGenerator = function (grade) {
    var letter;
    if (grade < 60) {
        letter = "F";
    }
    else if (grade >= 60) {
        letter = "B";
    }
    return "Your grade is " + letter + ", congratulations";
};
console.log(gradeGenerator(55));
console.log(gradeGenerator(95));
//# sourceMappingURL=012_arrow_functions.js.map