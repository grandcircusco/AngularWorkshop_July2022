export default class Racecar {
  // Properties
  team: string;
  speed: number = 0;
  fuel: number;

  // Constructor
  constructor (team: string, fuel: number = 10) {
    this.team = team;
    this.fuel = fuel;
  }

  // Methods
  accelerate(): void {
    this.speed += 2;
    this.fuel--;
  }
  
  isFuelEmpty(): boolean {
    return this.fuel <= 0;
  }
}