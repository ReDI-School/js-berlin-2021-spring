let me = {
    name: "Anne",
    age: 34,
    favouriteFood: "Pizza",
    hobbies: "hiking and programming",
    favouriteMusic: "Jazz",
    isStudent: true,
    greet: function() { return "Hello, I am " + this.name;}
};

let classmate = {
    name: "Dan",
    age: 70,
    favouriteFood: "Brocolli",
    hobbies: "swimming and jogging",
    favouriteMusic: "New Age",
    isStudent: false,
    greet: function() { return "Hello, I am " + this.name;}
};

console.log(me.greet());
console.log(classmate.greet());