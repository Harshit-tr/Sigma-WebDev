let a = prompt("Enter first number");
let b = prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Number must be a number");
}
let sum = parseInt(a) + parseInt(b);
try {
    console.log(sum*X);
} catch (error) {
    console.log("Error aagya ")
}

