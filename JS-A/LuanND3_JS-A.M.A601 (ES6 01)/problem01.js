import baz from 'baz';
// (function IIFE() {
//   function foo(x) {
//     var y = x * 2;
//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   }

//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);

//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);

//   setTimeout(function () {
//     console.log(
//       list1[0] ===
//         list2.reduce(function (s, v) {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();

(() => {
  const foo = (x) => {
    const y = x * 2;
    return (z) => {
      if (z.length > 3) {
        return z.map((v) => {
          if (v > 3) return v + y;
          else return baz(v * 4);
        });
      } else {
        const obj = [];
        setTimeout(() => {
          obj.length = 1;
          obj[0] = this.w;
        }, 100);
        return obj;
      }
    };
  };

  const p = foo(2);
  let list1 = [1, 3, 4];
  let list2 = list1.concat(6);

  list1 = p.call({ w: 42 }, list1);
  list2 = p(list2);

  setTimeout(() => {
    console.log(
      list1[0] ===
        list2.reduce((s, v) => {
          return s + v;
        }, 0)
    );
  }, 200);
})();
