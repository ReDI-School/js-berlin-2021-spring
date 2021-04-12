let person = {
    name: "Anne",
    age: 34
};

function celebrateBirthday(person) {
    person.age += 1;
    console.log("Happy birthday! " + person.name + " is now " + person.age);
}

console.log(person.age);
celebrateBirthday(person);
console.log(person.age);