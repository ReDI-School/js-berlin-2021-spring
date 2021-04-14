// Here we define our car:
let myCar = {
  model: "VW Golf",
  engineIsWorking: true,
  wheelCount: 4,
  canBeDriven: function () {
    // Can also be done with if ( ... ) / else
    return this.engineIsWorking && this.wheelCount === 4;
  },
};

// Check that it works
console.log("My car can be driven: " + myCar.canBeDriven()); // -> true;

// break something
myCar.wheelCount -= 1;

// Check that it no longer works
console.log("My car can be driven: " + myCar.canBeDriven()); // -> false;

// Now we create a function to service it:
function serviceCar(car) {
  car.engineIsWorking = true;
  car.wheelCount = 4;
}

// Use our servicing function
serviceCar(myCar);

// Car is now working again!
console.log("My car can be driven: " + myCar.canBeDriven());

// break a different thing
myCar.engineIsWorking = false;

// Check that it can no longer be driven
console.log("My car can be driven: " + myCar.canBeDriven());

// Use our servicing function
serviceCar(myCar);

// Car is now working again!
console.log("My car can be driven: " + myCar.canBeDriven());
