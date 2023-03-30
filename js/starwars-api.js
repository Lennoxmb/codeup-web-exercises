import {randomEyeColor, randomMovie, randomPlanet} from "./functions-for-starwars.js";


(async ()=>{

    let firstPlanet = await randomPlanet('4');
    console.log(firstPlanet);

    let person = await randomEyeColor('22');
    console.log(person.name, person.eye_color);

    let movieInfo = await randomMovie('2');
    console.log(movieInfo);

})();

// make dummy data then render function

// (async ()=>{
//     return await randomPlanet(`4`);
// })();
//
// (async ()=>{
//     return await randomEyeColor(`23`);
// })();
//
// (async ()=>{
//     return await randomMovie(`2`);
// })();