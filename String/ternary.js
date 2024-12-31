var a = 10;
var b = 11;
var c = 12;

// var x = a > b ? "a is gretter" : "b is gretter";
// console.log(x);


// a > b ? console.log("A is gretter") : console.log("B is gretter");

// a > b ? a : b;

var x = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(x + " is gretter");
