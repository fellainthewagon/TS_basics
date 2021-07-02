"use strict";
var Skills;
(function (Skills) {
    Skills["LOW"] = "foo";
    Skills[Skills["MIDDLE"] = 77] = "MIDDLE";
    Skills["HIGHT"] = "true";
})(Skills || (Skills = {}));
var person = {
    name: "Fella",
    age: 30,
    hasCar: false,
    hobbies: ["football", "gym", "fishing"],
    role: [99, "driver"],
    skills: Skills.LOW,
};
var boom;
boom = ["sport", false];
console.log(person);
