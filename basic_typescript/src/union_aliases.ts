/**
 * Union types
 *
 */

// function combine(x: number | string, y: number | string) {
//   let res;
//   if (typeof x === "number" && typeof y === "number") {
//     res = x + y;
//   } else {
//     res = x.toString() + y.toString();
//   }
//   return res;
// }

// console.log(combine(99, 1));
// console.log(combine("min", "max"));

/**
 * Literal types
 *
 */

// function combine(
//   x: number | string,
//   y: number | string,
//   resultChanger: "num" | "str"
// ) {
//   let res;
//   if (
//     (typeof x === "number" && typeof y === "number") ||
//     resultChanger === "num"
//   ) {
//     res = +x + +y;
//   } else {
//     res = x.toString() + y.toString();
//   }
//   return res;
// }

// console.log(combine(99, 1, "num"));
// console.log(combine("min", "max", "str"));

/**
 * Aliases types
 *
 */

type Combinetype = number | string;
type Changertype = "num" | "str";

function combine(x: Combinetype, y: Combinetype, resultChanger: Changertype) {
  let res;
  if (
    (typeof x === "number" && typeof y === "number") ||
    resultChanger === "num"
  ) {
    res = +x + +y;
  } else {
    res = x.toString() + y.toString();
  }
  return res;
}

console.log(combine(89, 1, "num"));
console.log(combine("min", "max", "str"));
