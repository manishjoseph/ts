const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

//Issue with tuples is we lose property name and lose perspective of what it is.
//COuld be used for csv row
type Drink = [string, boolean, number];

const tupledDrink: [string, boolean, number] = ['brown', true, 40];

const pepsi: Drink = ['brown', true, 40];

//This is better
const drinkObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}