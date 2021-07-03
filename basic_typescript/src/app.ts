import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Mia", "loves", 90);
docTwo = new Payment("Jules", "kills", 1000);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

// console.log(docs);

const invOne = new Invoice("Mia", "kisses Vincent", 0);
const invTwo = new Invoice("Vincent", "kisses Mia", 0);
// console.log(invOne.format());

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices);

/**
 * interfaces
 */

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Vin",
  age: 35,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount * 1.2;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log("hi", person.name);
};
// greetPerson(me);

/**
 * generics
 */

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc = addUID({ name: "Butch", age: 40 });

console.log(doc, doc.name);
