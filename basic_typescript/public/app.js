import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("Mia", "loves", 90);
docTwo = new Payment("Jules", "kills", 1000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// console.log(docs);
const invOne = new Invoice("Mia", "kisses Vincent", 0);
const invTwo = new Invoice("Vincent", "kisses Mia", 0);
// console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const me = {
    name: "Vin",
    age: 35,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount * 1.2;
    },
};
const greetPerson = (person) => {
    console.log("hi", person.name);
};
// greetPerson(me);
/**
 * generics
 */
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc = addUID({ name: "Butch", age: 40 });
console.log(doc, doc.name);
