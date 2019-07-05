var names: string[] = ["Oscar","Justus","David"];
var counter: number = 0;

(function() {
    for (let name in names) {
        counter++;
    }
})();

console.log(counter);