const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


//Use .map to create an array of strings where each element is a user's email address
const emails = users.map(user => user.email);
emails.forEach(email => {
    return (email)
});

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const langs = users.filter(language => language.languages.length >= 3)

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average

let totalYears = users.map(years =>years.yearsOfExperience);
let totalExpYears = totalYears.reduce((total, years) => total + years);
let averageExp = totalYears.reduce((total, years, index, array) => {
    total = total + years;
    if (index === array.length - 1) {
        return total / array.length;
    } else {
        return total;
    }
});

//Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((acc, user) => {
    if (user.email.length > acc.length) {
    return user.email;
    } else {
        return acc;
    }
}, '');

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const stringOfNames = users.reduce((acc, names, index) => {
    if (index + 1 === users.length) {
        return acc + `${names.name}.`;
    } else {
        return acc + ` ${names.name},`;
    }
}, `Your teachers are`);

let uniqueLanguages = users.reduce((acc, user)=> {
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language)
        }
    })
    return acc;
}, []);



