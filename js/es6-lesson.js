// With module syntax, you can import code that is exported from other files
// The file that is running in HTML must have type="module"
// Read more in the lesson in the md folder
import {randomNumber} from './utils-module.js'

const employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        position: 'Software Engineer',
        startDate: '2020-01-01'
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        position: 'Product Manager',
        startDate: '2019-06-01'
    },
    {
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob.smith@example.com',
        position: 'Data Analyst',
        startDate: '2021-03-01'
    },
    {
        firstName: 'Alice',
        lastName: 'Jones',
        email: 'alice.jones@example.com',
        position: 'UX Designer',
        startDate: '2020-09-01'
    },
    {
        firstName: 'David',
        lastName: 'Lee',
        email: 'david.lee@example.com',
        position: 'Front-end Developer',
        startDate: '2018-12-01'
    },
    {
        firstName: 'Samantha',
        lastName: 'Chen',
        email: 'samantha.chen@example.com',
        position: 'Full-stack Developer',
        startDate: '2021-01-01'
    },
    {
        firstName: 'Mike',
        lastName: 'Brown',
        email: 'mike.brown@example.com',
        position: 'Marketing Manager',
        startDate: '2019-03-01'
    },
    {
        firstName: 'Emily',
        lastName: 'Wilson',
        email: 'emily.wilson@example.com',
        position: 'Sales Representative',
        startDate: '2022-01-01'
    },
    {
        firstName: 'Mark',
        lastName: 'Davis',
        email: 'mark.davis@example.com',
        position: 'Project Manager',
        startDate: '2020-06-01'
    },
    {
        firstName: 'Julia',
        lastName: 'Nguyen',
        email: 'julia.nguyen@example.com',
        position: 'Data Scientist',
        startDate: '2019-01-01'
    }
];

// // Using for...of compared to forEach
// employees.forEach(function(employee){
//     console.log('forEach => ', employee.firstName);
//     fetch('https://swapi.dev/api/people/1')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.name);
//         });
// });
//
// // For...of can run as async await
// (async ()=>{
//     for await (const employee of employees){
//         console.log('for...of => ', employee.firstName);
//         let response = await fetch('https://swapi.dev/api/people/1');
//         let data = await response.json();
//         console.log(data.name);
//     }
// })();

// Default Function Parameter Values
// const HelloWorld = (name = 'World', ) => {
//     // if (!name) {
//     //     name = 'World';
//     // }
//     return `Hello, ${name}!`;
// }
// let response = HelloWorld();
// console.log(response);
//
// const getPerson = async (id = 1) => {
//     let response = await fetch(`https://swapi.dev/api/people/${id}`);
//     let data = await response.json();
//     console.log(data.name);
// }

// // Object Construction Shorthand
// const getEmployee = async (id) => {
//     // let response = await fetch();
//     // let data = await response.json();
//     let firstName = data.name.split(' ')[0];
//     let lastName = data.name.split(' ')[1];
//     // return {
//     //     firstName: firstName,
//     //     lastName: lastName
//     // }
//     return {
//         firstName,
//         lastName,
//         email: 'jason@codeup.com'
//     }
// }

// Object Deconstruction Shorthand
let employee = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    position: 'Software Engineer',
    startDate: '2020-01-01',
    projects: {
        currentProject: {
            name: 'Nexus',
            startDate: '01-01-2001'
        },
        previousProjects: []
    }
}
// // The old way of deconstructing
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

let {firstName, lastName, email, position, startDate, projects} = employee;
// console.log(firstName);

// You can then reconstruct the object just as easily
let employee2 = {
    firstName,
    lastName,
    email,
    position,
    startDate,
    currentProject: projects.currentProject
}

let myNumber = randomNumber(1, 100);
console.log(myNumber);




