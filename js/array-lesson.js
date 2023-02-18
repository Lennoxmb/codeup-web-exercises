let fruits = ["banana", "apples", "oranges", "mangos", "tomatoes"];
let var1 = fruits[2] //will get oranges. start from 0
console.log(var1)

let numberOfFruits = fruits.length //start counting length at 1. doesn't count position just amount
console.log(`the number of fruit is => `, numberOfFruits);

let fruitsString = fruits.toString();
console.log(`fruit string =` , fruitsString) //shows the full string

let fruitsAndNumbers = ["banana", 2, "apples", 682, undefined]
console.log(fruitsAndNumbers);

const returnString = (input) => {
    return input;
}

let stringList = [returnString("jason"), returnString("Javier"), returnString("Justin")]
//

for(let i = 1; i <= fruits.length; i++){
let fruit = fruits[i];
console.log(fruit)
}

//higher lvl function "for each". can only use on arrays. element is currently having the loop, aka the fruits. index is a number
// index that you are currently on. array for logic, rare used and optional

fruits.forEach(function(element, index, array ){
    console.log(`the element follows`, element)
    console.log(`the index follows`, index)
    console.log(`the array follows`, array)
})

const forEach = (callback) =>{
    callback();
}
fruits.forEach((element, index, array ) => {
    console.log(`the element follows`, element)
    console.log(`the index follows`, index)
    console.log(`the array follows`, array)
})

let favFruits = [];
fruits.forEach((element, index, array ) => {
    if (fruit === "apples" || fruit === "tomatoes") {
        favfruits.push(fruit)
    }
});
console.log(favFruits)

let studentSeating = [
    ["name", "2", "3"],
    ["name", "2", "3"],
]