const carMakers = ['ford', 'chevy', 'toyota'];

const carMakersNotIntialized 
: string [] =[];

// 2 dimensional array
const carsByMake: string [][] = [['f150'], ['corolla']];

// Help with inference when extracting values

const carArray = carMakers[0];

// Prevent incompatibe values

//carMakers.push(1000);

// Help with map
carMakers.map((car: string): string => {
    return car.toLowerCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];