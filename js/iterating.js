(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
const names = ["Jen", "Barb", "Tim", "Angel"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    for(let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i < names.length; i++) {
        let name = names[i];
        for(let i = 0; i < name.length; i++) {
            console.log(name[i])
        }
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach((element, index, array) => {
        console.log(`the element follows`, element)
        console.log(`the index follows`, index)
        console.log(`the array follows`, array)
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(names) {
        console.log(names[0])
    }
    first(names)

    function second(names) {
        console.log(names[1])
    }
    second(names)

    function last(names) {
        console.log(names[names.length - 1])
    }
    last(names)

})();