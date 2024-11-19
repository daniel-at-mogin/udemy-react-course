import name, { age } from "./util";

console.log("name", name);
console.log("age", age);

const hobbies = ["Eat 🍽️", "Drink 🍺", "Play Guitar 🎸"];
// All
console.log(hobbies);
// Eat
console.log(hobbies[0]);

hobbies.push("Turu");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Drink 🍺");
console.log(index);

const mapping = hobbies.map((hobby, idx) => `${idx + 1}. ${hobby}`);
console.log(mapping);
