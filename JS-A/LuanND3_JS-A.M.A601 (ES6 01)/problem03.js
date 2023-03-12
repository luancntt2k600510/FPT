function foo(...args) {
    return args
}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];
  var [one, ...rest] = a2

  return foo(Math.min(...a1), ...rest);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join("") === "281012");
// true
