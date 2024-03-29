/**
 * Convert Address to Object
 * Write a function named convertAddressToObject that accepts a string that contains a street number (as a string) and street name separated by a space characters, and returns an object with properties streetNumber and streetName.
 *
 * Examples
 *
 * >> convertAddressToObject('8646 Sunny Oaks') ➞ {streetNumber: '8646', streetName: 'Sunny Oaks'}
 * >> convertAddressToObject('5408 Villa Nueva') ➞ {streetNumber: '5408', streetName: 'Villa Nueva'}
 **/
const address1 = '8646 Sunny Oaks';
const address2 = '5408 Villa Nueva';
function convertAddressToObject(input){
    const indexOfSpace = input.indexOf(' ');
    const streetNumber = input.substring(0, indexOfSpace);
    const streetName= input.substring(indexOfSpace +1);
    return {
        streetName: streetName
    }
}
/**
 * Count total pets
 * Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
 *
 * Examples
 *
 * >> totalPets([
 *       {name: 'Fernando Mendoza', pets: 1},
 *       {name: 'Douglas Hirsh', pets: 8},
 *       {name: 'Kenneth Howell', pets: 2}
 *    ]) ➞ 11
 */

const people = [
    {name: 'Fernando Mendoza', pets: 1},
    {name: 'Douglas Hirsh', pets: 8},
    {name: 'Kenneth Howell', pets: 2}
]
function totalPets (input) {
    let totalPets = 0;
    for (let i = 0; i < input.length; i++) {
        totalPets += input[i].pets;
    }
    return totalPets;
}
// can also do
// let total = 0;
// input.forEach(person => total += person.pets);
// return total;


/**
 * Find the Smallest and Biggest Numbers
 * Create a function named minMax that takes an array of numbers and return both the minimum and maximum numbers, in that order.
 *
 * Examples
 * >> minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
 * >> minMax([2334454, 5]) ➞ [5, 2334454]
 * >> minMax([1]) ➞ [1, 1]
 *
 * Notes
 * All test arrays will have at least one element and are valid.
 */

const array1 = ([1, 2, 3, 4, 5])
// [1, 5]
const array2 = ([2334454, 5])
// [5, 2334454]
const array3 = ([1])
// [1, 1]
function minMax(input) {
    const minAndMax = [];
    minAndMax[0] = Math.min(...input);
    minAndMax[1] = Math.max(...input);
    return minAndMax;

}

/**
 * Drink Sorting
 * You will be given an array of drinks, with each drink being an object with two properties: name and price.
 * Create a function named sortDrinkByPrice that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
 *
 * Assume that the following array of drink objects needs to be sorted:
 * drinks = [
 *     {name: "lemonade", price: 50},
 *     {name: "lime", price: 10}
 * ]
 *
 * Examples
 * >> sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]
 */
const drink1 = {name: "lemonade", price: 50};
const drink2 = {name: "lime", price: 10};

function drinkSorting (drinksArray) {
return drinksArray.sort((a, b) => a.price - b.price);
}
/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

const cities = [
    {
        name: "New York City",
        state: "New York",
        population: 8336817
    },
    {
        name: "Los Angeles",
        state: "California",
        population: 3979576
    },
    {
        name: "Chicago",
        state: "Illinois",
        population: 2693976
    },
    {
        name: "Houston",
        state: "Texas",
        population: 2320268
    },
    {
        name: "Phoenix",
        state: "Arizona",
        population: 1680992
    },
    {
        name: "Philadelphia",
        state: "Pennsylvania",
        population: 1584064
    },
    {
        name: "San Antonio",
        state: "Texas",
        population: 1547253
    },
    {
        name: "San Diego",
        state: "California",
        population: 1423851
    },
    {
        name: "Dallas",
        state: "Texas",
        population: 1343573
    },
    {
        name: "San Jose",
        state: "California",
        population: 1030119
    },
    {
        name: "Austin",
        state: "Texas",
        population: 964254
    },
    {
        name: "Jacksonville",
        state: "Florida",
        population: 903889
    },
    {
        name: "Fort Worth",
        state: "Texas",
        population: 895008
    },
    {
        name: "Columbus",
        state: "Ohio",
        population: 892533
    },
    {
        name: "San Francisco",
        state: "California",
        population: 883305
    },
    {
        name: "Charlotte",
        state: "North Carolina",
        population: 885708
    },
    {
        name: "Indianapolis",
        state: "Indiana",
        population: 876384
    },
    {
        name: "Seattle",
        state: "Washington",
        population: 753675
    },
    {
        name: "Denver",
        state: "Colorado",
        population: 727211
    },
    {
        name: "Washington",
        state: "District of Columbia",
        population: 702455
    }
];


for(let i = 0; i < cities.length; i++){
    if (cities[i].state === "Texas" &&  cities[i].population > 1000000) {
        console.log(`${cities[i].name} ${cities[i].state}`);
    }
}

function isInTexas(input) {
    return input.state === "Texas";
}


/**
 * Get Sum of People's Budget
 * Create the function named getBudgets that takes an array with objects and returns the sum of people's budgets.
 *
 * Examples
 *
 * >> getBudgets([
 *        { name: "John", age: 21, budget: 23000 },
 *        { name: "Steve",  age: 32, budget: 40000 },
 *        { name: "Martin",  age: 16, budget: 2700 }
 *    ]) ➞ 65700
 * >> getBudgets([
 *        { name: "John",  age: 21, budget: 29000 },
 *        { name: "Steve",  age: 32, budget: 32000 },
 *        { name: "Martin",  age: 16, budget: 1600 }
 *    ]) ➞ 62600
 */

const peopleBudgets = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
]

function getBudgets(input) {
    let totalBudgets = 0;
    for (let i = 0; i < input.length; i++) {
        totalBudgets += input[i].budget;
    }
    return totalBudgets;
}

function getBudget(input){
    return input.reduce((total, object) => {return total + object.budget}, 0);
}

/**
 * Hashes and Pluses
 * Create a function named hashPlusCount that returns the number of hashes and pluses in a string.
 *
 * Examples
 *
 * hashPlusCount("###+") ➞ [3, 1]
 * hashPlusCount("##+++#") ➞ [3, 3]
 * hashPlusCount("#+++#+#++#") ➞ [4, 6]
 * hashPlusCount("") ➞ [0, 0]
 *
 * Notes
 * Return [0, 0] for an empty string.
 * Return in the order of [hashes, pluses].
 */


// const hashPlusCount1 = ("###+");
// hashPlusCount("##+++#");
// hashPlusCount("#+++#+#++#");
// hashPlusCount("");
// function hashPlusCount(input) {
//     let totalHash = 0;
//     for(let i =0; i < input.length; i++);
//     totalHash += input[i].hash;
//     let totalCount = 0;
//     for(let i =0; i < input.length; i++);
//
//
// }

/**
 * TODO:
 * Write a function named reverseOdd that will take a string as argument, reverse all the words which have odd length. The even length words are not changed.
 *
 * Examples
 *
 * >> reverseOdd("Bananas") ➞ "sananaB"
 * >> reverseOdd("One two three four") ➞ "enO owt eerht four"
 * >> reverseOdd("Make sure uoy only esrever sdrow of ddo length") ➞ "Make sure you only reverse words of odd length"
 *
 * Notes
 * There is exactly one space between each word and no punctuation is used.
 * Should work with empty string.
 * Should work with only one word.
 */

const moreCars = [
    { make: 'Ford', model: 'Mustang', mileage: 34567 },
    { make: 'Ford', model: 'F-150', mileage: 12345 },
    { make: 'Ford', model: 'Escape', mileage: 45678 },
    { make: 'Chevrolet', model: 'Camaro', mileage: 56789 },
    { make: 'Chevrolet', model: 'Silverado', mileage: 23456 },
    { make: 'Chevrolet', model: 'Equinox', mileage: 78901 },
    { make: 'Buick', model: 'Enclave', mileage: 23456 },
    { make: 'Buick', model: 'Regal', mileage: 56789 },
    { make: 'Jeep', model: 'Wrangler', mileage: 34567 },
    { make: 'Jeep', model: 'Grand Cherokee', mileage: 67890 },
    { make: 'Dodge', model: 'Charger', mileage: 12345 },
    { make: 'Dodge', model: 'Durango', mileage: 45678 },
    { make: 'Lincoln', model: 'MKZ', mileage: 78901 },
    { make: 'Lincoln', model: 'Navigator', mileage: 23456 },
    { make: 'GMC', model: 'Sierra', mileage: 56789 },
    { make: 'GMC', model: 'Terrain', mileage: 34567 },
    { make: 'Ford', model: 'Focus', mileage: 12345 },
    { make: 'Ford', model: 'Explorer', mileage: 45678 },
    { make: 'Chevrolet', model: 'Impala', mileage: 23456 },
    { make: 'Chevrolet', model: 'Suburban', mileage: 78901 },
    { make: 'Buick', model: 'LaCrosse', mileage: 34567 },
    { make: 'Jeep', model: 'Renegade', mileage: 12345 },
    { make: 'Jeep', model: 'Compass', mileage: 45678 },
    { make: 'Dodge', model: 'Challenger', mileage: 78901 },
    { make: 'Lincoln', model: 'Continental', mileage: 23456 },
    { make: 'Lincoln', model: 'Aviator', mileage: 56789 },
    { make: 'GMC', model: 'Yukon', mileage: 34567 },
    { make: 'GMC', model: 'Acadia', mileage: 12345 },
    { make: 'Ford', model: 'Ranger', mileage: 45678 },
    { make: 'Ford', model: 'Bronco', mileage: 78901 },
    { make: 'Chevrolet', model: 'Malibu', mileage: 23456 },
    { make: 'Chevrolet', model: 'Tahoe', mileage: 56789 },
    { make: 'Buick', model: 'Encore', mileage: 34567 },
    { make: 'Jeep', model: 'Cherokee', mileage: 12345 },
    { make: 'Dodge', model: 'Journey', mileage: 45678 },
    { make: 'Lincoln', model: 'Corsair', mileage: 78901 },
    { make: 'GMC', model: 'Canyon', mileage: 23456 },
    { make: 'Honda', model: 'Civic', mileage: 34567 },
    { make: 'Honda', model: 'Accord', mileage: 12345 },
    { make: 'Honda', model: 'CR-V', mileage: 45678 },
    { make: 'Toyota', model: 'Corolla', mileage: 56789 },
    { make: 'Toyota', model: 'Camry', mileage: 23456 },
    { make: 'Toyota', model: 'Rav4', mileage: 78901 },
    { make: 'Kia', model: 'Optima', mileage: 23456 },
    { make: 'Kia', model: 'Sportage', mileage: 56789 },
    { make: 'Kia', model: 'Soul', mileage: 34567 },
    { make: 'Hyundai', model: 'Elantra', mileage: 67890 },
    { make: 'Hyundai', model: 'Sonata', mileage: 12345 },
    { make: 'Hyundai', model: 'Tucson', mileage: 45678 },
    { make: 'Suzuki', model: 'Swift', mileage: 78901 },
    { make: 'Suzuki', model: 'Vitara', mileage: 23456 },
    { make: 'Mazda', model: 'CX-5', mileage: 56789 },
    { make: 'Mazda', model: 'Mazda3', mileage: 34567 },
    { make: 'Daihatsu', model: 'Charade', mileage: 12345 },
    { make: 'Daihatsu', model: 'Mira', mileage: 45678 },
    { make: 'Toyota', model: 'Yaris', mileage: 23456 },
    { make: 'Toyota', model: 'Highlander', mileage: 56789 },
    { make: 'Honda', model: 'Pilot', mileage: 78901 },
    { make: 'Honda', model: 'CR-Z', mileage: 23456 },
    { make: 'Suzuki', model: 'Jimny', mileage: 34567 },
    { make: 'Suzuki', model: 'Celerio', mileage: 12345 },
    { make: 'Mazda', model: 'CX-3', mileage: 45678 },
    { make: 'Mazda', model: 'Mazda6', mileage: 78901 },
    { make: 'Toyota', model: 'Tacoma', mileage: 23456 },
    { make: 'Toyota', model: 'Sienna', mileage: 56789 },
    { make: 'Kia', model: 'Stinger', mileage: 34567 },
    { make: 'Kia', model: 'Niro', mileage: 12345 },
    { make: 'Hyundai', model: 'Venue', mileage: 45678 },
    { make: 'Hyundai', model: 'Santa Fe', mileage: 78901 },
    { make: 'Daihatsu', model: 'Terios', mileage: 23456 },
    { make: 'Daihatsu', model: 'Materia', mileage: 56789 },
    { make: 'Suzuki', model: 'Alto', mileage: 34567 },
    { make: 'Suzuki', model: 'Escudo', mileage: 12345 },
    { make: 'Fiat', model: '500', mileage: 56789 },
    { make: 'Fiat', model: 'Panda', mileage: 98765 },
    { make: 'Fiat', model: 'Tipo', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'C-Class', mileage: 12345 },
    { make: 'Mercedes-Benz', model: 'E-Class', mileage: 78901 },
    { make: 'Mercedes-Benz', model: 'S-Class', mileage: 23456 },
    { make: 'BMW', model: '3 Series', mileage: 56789 },
    { make: 'BMW', model: '5 Series', mileage: 98765 },
    { make: 'BMW', model: 'X5', mileage: 23456 },
    { make: 'Volvo', model: 'XC40', mileage: 56789 },
    { make: 'Volvo', model: 'XC60', mileage: 98765 },
    { make: 'Volvo', model: 'XC90', mileage: 12345 },
    { make: 'Audi', model: 'A3', mileage: 78901 },
    { make: 'Audi', model: 'A4', mileage: 23456 },
    { make: 'Audi', model: 'Q5', mileage: 56789 },
    { make: 'Jaguar', model: 'F-PACE', mileage: 23456 },
    { make: 'Jaguar', model: 'XE', mileage: 98765 },
    { make: 'Jaguar', model: 'XF', mileage: 12345 },
    { make: 'Volkswagen', model: 'Golf', mileage: 56789 },
    { make: 'Volkswagen', model: 'Jetta', mileage: 78901 },
    { make: 'Volkswagen', model: 'Tiguan', mileage: 23456 },
    { make: 'Fiat', model: 'Doblo', mileage: 12345 },
    { make: 'Fiat', model: '500L', mileage: 56789 },
    { make: 'Fiat', model: 'Spider', mileage: 98765 },
    { make: 'Mercedes-Benz', model: 'GLE', mileage: 23456 },
    { make: 'Mercedes-Benz', model: 'GLC', mileage: 56789 },
    { make: 'Mercedes-Benz', model: 'GLA', mileage: 78901 },
    { make: 'BMW', model: 'M3', mileage: 23456 },
    { make: 'BMW', model: 'M5', mileage: 56789 },
    { make: 'BMW', model: 'X3', mileage: 98765 },
    { make: 'Volvo', model: 'S60', mileage: 12345 },
    { make: 'Volvo', model: 'S90', mileage: 23456 },
    { make: 'Volvo', model: 'V90', mileage: 56789 },
    { make: 'Audi', model: 'Q3', mileage: 78901 },
    { make: 'Audi', model: 'Q7', mileage: 23456 },
    { make: 'Audi', model: 'TT', mileage: 56789 }
];

/* loop through the array and output the make, model, and mileage of every Ford. Then output the make, model, and mileage of every car whose make starts with 'F'.
9:04
Output the make, model, and mileage of every car with mileage less than 25thousand.
9:05
Write a function that takes in a car object and returns true or false depending on whether its mileage is less than 50K. (true if less than 50K, false if more than 50K).
9:05
Want a more intense challenge? Sort the array alphabetically by make. */



// Car could be element, it's basically the array element'
moreCars.forEach(car => {
    if(car.make === "Ford")
    console.log(`${car.make}, ${car.model} with ${car.mileage} miles.`)
})

moreCars.forEach(({make, model, mileage}) => {
    if(make === "Ford") console.log(`${make}, ${model} with ${mileage} miles.`)
})


// can also do "If (make[0] === "F" this one is the start with F"
moreCars.forEach(({make, model, mileage}) => {
    if(make.startsWith("F")) console.log(`${make}, ${model} with ${mileage} miles.`)
})

moreCars.forEach(({make, model, mileage}) => {
    if(mileage < 25000) console.log(`${make}, ${model} with ${mileage} miles.`)
})

function lessThan50k (carObject) {
    if (carObject.mileage < 50000) {
        return true
    } else {
        return false
    }
}

// in console log can do a 'const m5 =   (the array part){ make: 'BMW', model: 'M5', mileage: 56789 }.... then do the function lessThan50k(m5)

function sortCarArray(carsArray) {
    return carsArray.sort((a, b)=>{
        const el1 = a.make.toLowerCase();
        const el2 = b.make.toLowerCase();
        if (el1 < el2){
        return -1;
        } else if (el1 > el2){
        return 1;
        } else {
        return 0;
        }
    })
}

/**
 * Array of Multiples
 * Create a function named arrayOfMultiples that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
 *
 * Examples
 *
 * >> arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
 * >> arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
 * >> arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
 *
 * Notes
 * Notice that num is also included in the returned array.
 */

// this for loop is for practice
// function arrayOfMultiples(num, len){
//     let arrayHelp = [];
//     for(let i = 1; arrayHelp.length < len; i++){
//         arrayHelp.push(num * i)
//     } return arrayHelp
// }

function arrayOfMultiples(num, len){
    let arrayHelp = [];
    let i = 1;
    while (arrayHelp.length < len){
        arrayHelp.push(num * i)
        i++;
    } return arrayHelp
}



/**
 * Purge and Organize
 * Given an array of numbers, write a function named uniqueSort that returns an array that...
 *   1. Has all duplicate elements removed.
 *   2. Is sorted from least to greatest value.
 *
 * Examples
 *
 * uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
 * uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
 * uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
 */

function uniqueSort(arr){
    let sorted = [];
    for(let i = 0; i < arr.length; i++ ){
        if (i === 0){
            sorted.push(arr[i])
        } else {

        }
    }
}

/* Write a code that will print each Programming Language, plus "is a nice programming language."
languages = ['bash', 'python', 'R', 'Java', 'JavaScript']*/
let languages = ['bash', 'python', 'R', 'Java', 'JavaScript']

for(let i = 0; i < languages.length; i++){
    console.log(`${languages[i]} is a nice programming language.`)
}


// ## Problem 1
// Write a function, ```filterNumbers```, that takes in an array of mixed data types and returns an array of only the number types in ascending order.
//
//     Example input:
//
//     ```js
// ["fred", true, 5, 3]
// ```
//
// Example output:
//
//     ```js
// [3, 5]
// ```
let randomArray = [
    "fried", 91, 5, 61, true
]
function filterNumbers(arr) {
    const numbers = arr.filter((item) => typeof item === "number");
    numbers.sort((a, b) => a - b); return numbers;
}


// ## Problem 2
//
// Write a function, ```getOlder```, that takes in an array of dog objects and increases the value of the age properties by 1. No return value is needed since the original array of objects will be changed by this function.
//
// Example Input:

let dogArray=
[
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//     {
//         name: "Freddy",
//         breed: "Lab",
//         age: 5
//     },
//     {
//         name: "Mr. Pig",
//         breed: "Mastif",
//         age: 11
//     }
// ];
// ```
function getOlder(dogs) {
    for (let i = 0; i < dogs.length; i++) {
        dogs[i].age++;
    } return dogs
}



// ## Problem 3
//
// Write a function, ```washCars```, that takes in a array of car objects and sets the boolean properties of ```isDirty``` to ```false```. Again, no return value is needed since the original array of objects will be changed by this function.
//
// Example Input:
//
//     ```js
let dirtyCar = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//     {
//         make: 'Toyota',
//         color: 'black',
//         year: 2004,
//         isDirty: false // stays the same
//     },
//     {
//         make: 'Ford',
//         color: 'white',
//         year: 2007,
//         isDirty: false // changed to false
//     }
// ]
// ```

function washCars(cars) {
    for (let i = 0; i < cars.length; i++) {
        cars[i].isDirty = false;
    } return cars
}


// ## Problem 4
//
// Write a function, ```adminList``` that takes in an array of user objects and returns a count of all admins based on the ```isAdmin``` property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:
//
//     ```js
let admins = [
    {
		isAdmin: true,
		email: 'user1@email.com'
    },
    {
		isAdmin: true,
		email: 'user2@email.com'
    },
    {
    	isAdmin: false,
    	email: 'user3@email.com'
    }
];
// ```
//
// Example Output (before refactor):
//
// ```js
// 2
// ```
//
// Example Output (after 1st refactor):
//
// ```js
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// ```
//
// Example Output (after 2nd refactor):
//
// ```js
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// ```

function adminList(users) {
    let adminUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin) {
            adminUsers.push(users[i]);
        }
    }
    return adminUsers;
}




// ## Problem 5
//
// Create a function, ```makeSandwhichObjects``` that takes in two arrays of strings (breads and fillings) and returns an array of sandwhich objects that contain properties for bread and filling. The values of these sandwich properties should correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length and have no invalid elements.
//
//     Example Input:
//
//     ```js
let breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

let fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
//
// makeSandwhichObjects(breads, fillings) // example call to the function
// ```
//
// Example Output:
//
//     ```js
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]
// ```

function makeSandwichObjects(breads, fillings) {
    const sandwiches = [];

    for (let i = 0; i < breads.length; i++) {
        sandwiches.push({
            bread: breads[i],
            filling: fillings[i]
        });
    }

    return sandwiches;
}


// ## Problem 6
//
// Create a function, ```firstLettersOfStringProps```, that takes in an object and returns an array of first letters for each property that is a string.
//
//     Example Input:
//
//     ```js
// {
// 	propA: true,
// 	propB: "hello"
// 	propC: 23,
// 	propD: "world"
// }
// ```
//
// Example Output:
//
//     ```js
// ['h', 'w']
// ```
//
// ## Problem 7
//
// Create a function, ```returnBasicUserData```, that takes in an array of user objects with an unknown total number of properties in each user object but containing at least a ```name``` and ```age``` property. The function will return a new array of objects that contain only ```name``` and ```age	``` properties and values from the input array of user objects.
//
//     Example Input:
//
//     ```js
let basicUsers = [
    {
        name: "Fred Smith",
        favColor: "Blue",
        age: 25
    },
    {
        name: "Sally Smith",
        favPet: "Dogs",
        isAdmin: true,
        age: 37
    },
    {
        phoneNumber: "5552759898",
        name: "Karen Smith",
        age: 19
    }
]
//
// ```
//
// Example Output:
//
//     ```js
// [
// 	{
// 		name: "Fred Smith",
// 		age: 25
// 	{,
// 	{
// 		name: "Sally Smith",
// 		age: 37
// 	{,
// 	{
// 		name: "Karen Smith",
// 		age: 19
// 	{
// ]
//
// ```

function returnBasicUserData(users) {
    const basicUserData = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const basicUser = { name: user.name, age: user.age };
        basicUserData.push(basicUser);
    }

    return basicUserData;
}
console.log(basicUsers)
// ## Problem 8
//
// Create a function, ```returnCharCount```, that takes in an array or an object and will return the total number of characters for any string elements or string properties.
//
//     Example 1 Input:
//
//     ```js
let testArray = ['hello', true, 25, null, undefined, '', 'world']
// ```
//
// Example 1 Output:
//
//     ```js
// 10
// ```
//
// Example 2 Input:
//
//     ```js
// {
// 	someProp1: true,
// 	someProp2: null,
// 	someProp3: "hello",
// 	someProp4: 88,
// 	someProp5: "world"
// }
// ```
//
// Example 2 Output:
//
//     ```js
// 10
// ```

function returnCharCount(obj) {
    let charCount = 0;
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (typeof obj[i] === "string") {
                charCount += obj[i].length;
            }
        }
    } else if (typeof obj === "object") {
        for (let key in obj) {
            if (typeof obj[key] === "string") {
                charCount += obj[key].length;
            }
        }
    } return charCount;
}
console.log(returnCharCount(testArray))