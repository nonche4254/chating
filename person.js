// const person = {
//   name: "nonche",
//   age: 20,
// };

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(`My name is ${this.name}`);
  }
  goodbye() {
    console.log(`잘가세요 ${this.name}님`);
  }
}

module.exports = Person;
