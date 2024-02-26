var output = [];
var count = 1;
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        output.push("fizzbuzz");
        count++;
    } else if (count % 3 === 0) {
        output.push("fizz");
        count++;
    } else if (count % 5 === 0) {
        output.push("buzz");
        count++;
    } else {
        output.push(count);
        count++;
    }
    console.log(output);
}
