"use strict";
/**
 * Union types
 *
 */
function combine(x, y, resultChanger) {
    var res;
    if ((typeof x === "number" && typeof y === "number") ||
        resultChanger === "num") {
        res = +x + +y;
    }
    else {
        res = x.toString() + y.toString();
    }
    return res;
}
console.log(combine(89, 1, "num"));
console.log(combine("min", "max", "str"));
