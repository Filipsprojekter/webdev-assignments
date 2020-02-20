let names = ["HenriK", "JAMshid", "AndERS", "EBBe", "pER", "MicHAel", "PETEr"];

// USING ARRAY.FOREACH
names.forEach((name, index, array) => {
  if (index == 0 || index == 4) {
    array[index] = name.toUpperCase();
  } else {
    array[index] = name.toLowerCase();
  }
});

console.log(names);

let cars = [
  { brand: "VW", model: "Passat", fuel: "diesel", owner_tax: 5550 },
  { brand: "VW", model: "Passat", fuel: "gasoline", owner_tax: 460 },
  { brand: "VW", model: "Passat", fuel: "hybrid", owner_tax: 150 },
  { brand: "BMW", model: "320i", fuel: "diesel", owner_tax: 4280 },
  { brand: "BMW", model: "320i", fuel: "gasoline", owner_tax: 430 },
  { brand: "BMW", model: "320i", fuel: "hybrid", owner_tax: 210 },
  { brand: "Tesla", model: "S", fuel: "electric", owner_tax: 0 }
];
console.table(cars);

function IncreaseTax(cars, fuel, taxPct) {
  cars.forEach(car => {
    if (car.fuel == fuel) {
      car.owner_tax += car.owner_tax * (taxPct / 100);
    }
  });
}

IncreaseTax(cars, "diesel", 50);
IncreaseTax(cars, "gasoline", 5);
console.table(cars);

// USING ARRAY.MAP
let models = cars.map(p => {
  return p.model;
});
console.log(models);

let brands = cars.map(p => {
  return { Brand: p.brand };
});
console.table(brands);

// Going to make a new array of js objects in json format, and work with those

var drivers = `[
  {
    "driverId" : "grosjean",
    "permanentNumber": "8",
    "code": "GRO",
    "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    "givenName": "Romain",
    "familyName": "Grosjean",
    "dateOfBirth": "1986-04-17",
    "nationality": "French"    
  },
  {
    "driverId" : "hamilton",
    "permanentNumber": "44",
    "code": "HAM",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "givenName": "Lewis",
    "familyName": "Hamilton",
    "dateOfBirth": "1985-01-07",
    "nationality": "British"
  },
  {
    "driverId" : "hulkenberg",
    "permanentNumber": "27",
    "code": "HUL",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "givenName": "Nico",
    "familyName": "Hülkenberg",
    "dateOfBirth": "1987-08-19",
    "nationality": "German"
  },
  {
    "driverId" : "kevin_magnussen",
    "permanentNumber": "20",
    "code": "MAG",
    "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    "givenName": "Kevin",
    "familyName": "Magnussen",
    "dateOfBirth": "1992-10-05",
    "nationality": "Danish"
  }
]`;

let f1Drivers = JSON.parse(drivers);
console.table(f1Drivers);

let myDrivers = f1Drivers.map(p => {
  return { Kode: p.code, Fornavn: p.givenName, Efternavn: p.familyName };
});
console.table(myDrivers);

// USING ARRAY.FILTER
let filteredArray = cars.filter(
  tax => tax.owner_tax < 300 && tax.fuel == "hybrid"
);
console.table(filteredArray);
// MAKING PREDICATE TO USE FOR FILTER
function FuelCriterium(car, fuel) {
  if (car.fuel == fuel) {
    return true;
  } else {
    return false;
  }
}
// USING THE FILTER WITH THE PREDICATE
let filteredByPredicate = cars.filter(p => FuelCriterium(p, "gasoline"));
console.table(filteredByPredicate);

// USING THE ARRAY.REDUCE ON JS OBJECT ARRAY

var trips = [{distance : 48}, {distance : 12}, {distance : 6}]
var totaldistance = trips.reduce((sum,value) => sum += value.distance,0)
console.log(totaldistance)

var desk = [
  {type : 'sitting'},
  {type : 'sitting'},
  {type : 'sitting'},
  {type : 'standing'},
  {type : 'standing'}
]

var desktypes = desk.reduce((acc,desk) => {
  if(desk.type == 'sitting')
  {
    acc.sitting += 1
    return acc
  }
  else if(desk.type == 'standing')
  {
    acc.standing += 2
    return acc
  }
},{sitting: 0, standing : 0})

console.table(desktypes)

// USING REDUCE TO REMOVE DUPLICATES

let numbers = [1,1,2,3,4,4]
let orderedNumbers = numbers.reduce(function (accumulator,currentValue){
  if (accumulator.indexOf(currentValue) === -1 ){
    accumulator.push(currentValue)
  }
  return accumulator
},[])

console.log(orderedNumbers)

// USING REDUCE TO BALANCE PARANTHESES

const parens1 = '(())()()';
const parens2 = '()(()';
const parens3 = ')(';

function isItBalanced(parens){
  let balance = parens.split('').reduce((acc, paren) => {
    if(acc < 0)
    {
      return acc
    }
    else if(paren === '(')
    {
      return ++acc;
    }
    else if(paren === ')')
    {
      return --acc;
    }
    return acc;
  },0)
  return balance === 0;
}

console.log(isItBalanced(parens1))
console.log(isItBalanced(parens2))
console.log(isItBalanced(parens3))


var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore : 98,
    shootingScore: 56,
    isForceUser: true

},
{
  id: 82,
  name: "Sabine Wren",
  pilotingScore : 73,
  shootingScore: 99,
  isForceUser: false

},
{
  id: 22,
  name: "Zeb Orellios",
  pilotingScore : 20,
  shootingScore: 59,
  isForceUser: false

},
{
  id: 15,
  name: "Ezra Bridger",
  pilotingScore : 43,
  shootingScore: 67,
  isForceUser: true

},
{
  id: 11,
  name: "Caleb Dume",
  pilotingScore : 71,
  shootingScore: 85,
  isForceUser: true

}  
]

// USING EVERY
let res = personnel.every(person => person.pilotingScore >= 20)
console.log(res)

// USING SOME
let resSome = personnel.some(person => person.shootingScore >= 80 && person.isForceUser === false)
console.log(resSome)
