// Problem 1:
// function test() {
//   console.log(a);
//   console.log(foo());
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();
// ở dòng 2, a có giá trị là undefined, ở dòng 3 thì hàm foo() trả về 2 nên in ra 2

// Problem 2
// function someFunction(number) {
//   function otherFunction(input) {
//     return a;
//   }
//   a = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// Hàm không trả về giá trị do otherFunction(input) không có giá trị truyền vào

// Problem 3
// var a = 1;
// function b() {
//   a = 10;
//   return;
//   function a() {}
// }
// b();
// console.log(a);
// a trả về giá trị bằng 1 vì cho dù có chạy function b() nhưng không trả về

// Problem 4:
var nodes = document.getElementsByTagName("button");
for (var i = 0; i < nodes.length; i++) {
  (function (index) {
    nodes[index].addEventListener("click", function () {
      console.log("You clicked element #" + (index + 1));
    });
  })(i);
}
// Khi t chọn vào Button 1 hay button 4 hoặc những button khác thì bên console luôn trả về i với giá trị bằng 4
// Lý do bởi vì JS sử dụng phạm vi khai báo hàm, chỉ có một biến i được chia sẻ, cho nên khi i kết thúc thì có giá trị bằng 4
// Sửa bằng cách tạo một phạm vi mới cho biến i trong vòng lặp

