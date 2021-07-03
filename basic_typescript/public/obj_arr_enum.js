"use strict";
var Skills;
(function (Skills) {
    Skills["LOW"] = "foo";
    Skills[Skills["MIDDLE"] = 77] = "MIDDLE";
    Skills["HIGHT"] = "true";
})(Skills || (Skills = {}));
const person = {
    name: "Fella",
    age: 30,
    hasCar: false,
    hobbies: ["football", "gym", "fishing"],
    role: [99, "driver"],
    skills: Skills.LOW,
};
let boom;
boom = ["sport", false];
console.log(person);
