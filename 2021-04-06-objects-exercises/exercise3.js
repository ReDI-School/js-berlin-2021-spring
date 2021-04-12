let anne = {
  name: "Anne",
  age: 34,
};
let owen = {
  name: "Owen",
  age: 29,
};

function determineOlderPerson(person1, person2) {
  if (person1.age > person2.age) {
    let ageDifference = person1.age - person2.age;
    console.log(
      person1.name +
        " is " +
        ageDifference +
        " years older than " +
        person2.name
    );
  } else if (person1.age < person2.age) {
    let ageDifference = person2.age - person1.age;
    console.log(
      person2.name +
        " is " +
        ageDifference +
        " years older than " +
        person1.name
    );
  } else {
    console.log("Both people are the same age");
  }
}

determineOlderPerson(anne, owen);
