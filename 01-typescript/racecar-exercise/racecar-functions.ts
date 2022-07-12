import Racecar from "./Racecar";

export function findRacecarsWithEmptyFuel(cars: Racecar[]): Racecar[] {
  return cars.filter(car => car.isFuelEmpty());
}

export function getFasterRacer(car1: Racecar, car2: Racecar): Racecar|null {
  if (car1.speed > car2.speed) {
    return car1;
  } else if (car1.speed < car2.speed) {
    return car2;
  } else {
    return null;
  }
}