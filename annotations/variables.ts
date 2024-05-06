let apples = 5;
let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;

// built in objects

let now = new Date();

//Array
let colors: string[]  = ['red', 'green', 'blue'];
let myNumbers: number[] = [4, 6, 7];
let truths: boolean[] = [true, false];


//Classes
class Car {

}

let car: Car = new Car();

// Object Literal
let point: { x: number; y: number} = {
    x: 10,
    y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
 console.log(i)
};


// When to use annotations
//1) When function returns any type
const json = '{"x": 10 , "y": 20}';
const coordinates: { x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// 2nd When we declare in one line & use in another;

let final;
final = true;

//3rd When we want a varible for a type to not be inferred
let numbers = [-10, -1, 12]
let numbersAboveZero: boolean | number = false;

for(let i = 0 ; i < numbers.length; i++)
{
    if(numbers[i] > 0)
    {
        numbersAboveZero = numbers[i]
    }
}

