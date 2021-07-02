enum Skills {
  LOW = "foo",
  MIDDLE = 77,
  HIGHT = "true",
}

const person = {
  name: "Fella",
  age: 30,
  hasCar: false,
  hobbies: ["football", "gym", "fishing"],
  role: [99, "driver"],
  skills: Skills.LOW,
};

let boom: any[];
boom = ["sport", false];

console.log(person);
