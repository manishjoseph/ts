interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Name: ${vehicle.broken}`);
};

const printVehicleWithInterface = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(vehicle.summary());
};

//Promoting code reuse with creating functions which accept interfaces
const printSummary = (reportable: Reportable): void => {
  console.log(reportable.summary());
};

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

const drink = {
  name: "Coke",
  carbonated: new Date(),
  something: "",
  summary(): string {
    return `name: ${this.name}`;
  },
};

printVehicle(oldCivic);

//Promoting code reuse with creating functions which accept interfaces
// Old civic & drink both satisfy reportable interface & are eligible for print summary
//Quintessential thing is to make reusable functions, restricting them via interfaces
printSummary(oldCivic);
printSummary(drink);
