//Classes in Typescript is not exactly like ES 2015 Javascript.
//Classes & Inrterfaces are ways to reuse code in Typescript
class Vehicle {
  //Properties in class. Optionally initialize
  //color: string = "red";

  //   color: string;

  //   //Optionally define constructor to initialize it, if anything needs arguments

  //   constructor(color: string) {
  //     this.color = color;
  //   }

  //Line 6 to 12 can be replaced with this
  constructor(public color: string) {}

  drive(): void {
    console.log("chugga chugga");
  }
  honk(): void {
    console.log("beep");
  }
}

//Basic Inheritance
// Modifiers Public(default), private, protected(child class can access protected methods of parent)
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  //Optionally redefine drive
  drive(): void {
    console.log("vroom");
  }

  //can't be called outside
  private start() {}
}

const vehicle = new Vehicle("orange");
vehicle.drive();
vehicle.honk();
console.log(vehicle.color);

const car = new Car(4, "orange");

car.drive();
