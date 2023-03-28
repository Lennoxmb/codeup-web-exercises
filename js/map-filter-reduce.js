const prices = [32.99, 21.99, 6.99, 4.99, 12.99, 8.98, 5.99];
//methods are functions that are part of an object. it can be called on an object or array
prices.forEach(price => console.log(price));

const pricesAfterTax = prices.map(price => {
    const tax = (price * 0.0825).toFixed(2);
    const total = (price + parseFloat(tax)).toFixed(2);
    if (total < 10) return total;
});

let randomNumbers = [70, 30, 73, 22, 40, 48, 76, 20, 13, 92, 20, 56, 97, 76, 26, 77, 57, 47, 83, 70 ];

const numbersSquared = randomNumbers.map(number => number**2);

const cars = [
    {
        make: "Honda",
        model: "Civic",
        mileage: 10428
    },
    {
        make: "Toyota",
        model: "Corolla",
        mileage: 9425
    },
    {
        make: "Ford",
        model: "Mustang",
        mileage: 2567
    },
    {
        make: "Audi",
        model: "A3",
        mileage: 14500
    },
    {
        make: "Mazda",
        model: "3",
        mileage: 11248
    }
];

const mileages = cars.map(car => car.mileage);

const carNames = cars.map(car => `${car.make} ${car.model}`);


const books = [
    {
        title: "Mexican Gothic",
        author: {
            firstName: "Sylvia",
            lastName: "Moreno"
        }
    },
    {
        title: "All Systems Red",
        author: {
            firstName: "Martha",
            lastName: "Wells"
        }
    },
    {
        title: "1177 B.C.: The Year Civilization Collapsed",
        author: {
            firstName: "Eric",
            lastName: "Cline"
        }
    },
    {
        title: "Version Control With Git",
        author: {
            firstName: "Jon",
            lastName: "Loeliger"
        }
    },
    {
        title: "Data Structures the Fun Way",
        author: {
            firstName: "Jeremy",
            lastName: "Kubica"
        }
    }
]

// const authors = books.map(book => `${book.author.firstName} ${book.author.lastName}`);

const authors = books.map(book => {
    return {
        title: book.title,
        author: `${book.author.firstName} ${book.author.lastName}`
    }
});

