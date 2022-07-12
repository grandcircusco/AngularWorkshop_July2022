// import the default w/ no brackets
import Racecar from "./Racecar";
// import non-default with brackets
import { findRacecarsWithEmptyFuel, getFasterRacer } from "./racecar-functions";

let car1 = new Racecar("Red", 20);
car1.accelerate();
car1.accelerate();

let car2 = new Racecar("Gold"); // note: fuel defaults to 10

let car3 = new Racecar("Blue", 3);
car3.accelerate();
car3.accelerate();
car3.accelerate();

console.log(car1);
console.log(car1.isFuelEmpty());
console.log(car2);
console.log(car3);
console.log(car3.isFuelEmpty());

console.log( getFasterRacer(car1, car2) );
console.log( findRacecarsWithEmptyFuel([car1, car2, car3]) );