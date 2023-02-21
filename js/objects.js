(function() {
    "use strict";

    /*
     *
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
const person = {
    firstName: "Lennox",
    lastName: "Ballard"
}
    console.log(person.firstName)
    console.log(person.lastName)

    /*
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        console.log(`hello from ${person.firstName} ${person.lastName}`);
    }
person.sayHello()

    /*
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
      Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach (shopper => {
        let original = shopper.amount
        if (original > 200) {}
        let discountPrice = shopper.amount = shopper.amount - shopper.amount * .12;
        let discount = shopper.amount * .12;
        console.log(` ${shopper.name} has $${original} worth of groceries. They get a discount of ${discount} and will have to pay ${discountPrice}`)
    });

    // const discount = shoppers.amount > 200 ? shopper.amount * .12 : 0
    // const total = shoppers.amount - discount;
    // console.log(`${shoppers.name} -- total: $${total} -- discount ${formatToLocaleString(discount)} -- discount price $${discountPrice}`)


    /*
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
const books = [
        {
                title: `I want to be the very best`,
                author: {firstName: "Ash", lastName: "Ketchum"}
        },
        {
            title: `How far I'll go`,
            author: {firstName: "Moana", lastName: "Motunui"}
        },
    {
        title: `Third thing here`,
        author: {firstName: "Mr.", lastName: "Dude"}
    },
        {
            title: `Khajiit has wares if you have coin`,
            author: {firstName: "I am", lastName: "Khajiit"}
        },
        {
            title: `SCP- 7354: Codey`,
            author: {firstName: "SCP", lastName: "Foundation"}
        },

    ];

    /*
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach((book, index) => {
        console.log(`Book # ${index + 1}`)
        console.log(`Title: ${book.title}`)
        console.log(`Author: ${book.author.firstName} ${book.author.lastName}`);
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


})();