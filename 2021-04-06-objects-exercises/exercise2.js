function celebrateBirthday(person) {
  person.age += 1;
  console.log("Happy birthday! " + person.name + " is now " + person.age);
}

let person = {
  name: "Anne",
  age: 34,
  canRentCar: function () {
    // You can also use if/else here: if (this.age >= 18) { ... }
    return this.age >= 18;
  },
};

if (person.canRentCar()) {
  console.log(person.name + " can rent a car!");
}

let youngerPerson = {
  name: "John",
  age: 17,
  canRentCar: function () {
    return this.age >= 18;
  },
};

if (!youngerPerson.canRentCar()) {
  console.log(youngerPerson.name + " is too young to rent a car!");
}

celebrateBirthday(youngerPerson);

if (youngerPerson.canRentCar()) {
  console.log(youngerPerson.name + " can rent a car!");
}
