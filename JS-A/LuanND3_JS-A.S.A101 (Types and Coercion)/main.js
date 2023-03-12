// function empty(o) {
// o = null;
// }

// var x = [];
// empty(x);
// console.log(x);
// Problem 1: []

// Problem 2: 1
// function swap(a, b) {
// var tmp = a;
// a = b;
// b = tmp;
// }

// var x = 1;
// var y = 2;

// swap(x, y);
// console.log(x);
function reverse(s) {
  // Split the string into words
  let words = s.split("_");

  // Capitalize the first letter of each word and concatenate them
  let pascalCase = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");

  return pascalCase;
}
console.log(reverse("snake_case_string"));

function mul(a, b) {
  let product = BigInt(a) * BigInt(b);
  return product.toString();
}
console.log(mul("12345678901234567890", 42));
