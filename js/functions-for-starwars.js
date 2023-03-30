/*
todo: using separation of concerns principles, module syntax, and async await, create a series of code that:
  uses starwars api
  returns a specific planet
  returns the eye color of a specific char
  returns all of the data on a specific movie
  bonus- add it on to the DOM
 */

import {keys} from "./keys.js";

export const randomPlanet = async (planet) => {
    try {
        let response = await fetch(`https://swapi.dev/api/planets/${planet}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const randomEyeColor = async (person) => {
    try {
        let response = await fetch(`https://swapi.dev/api/people/${person}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const getEyeColor = async(person) => {
    try {
        let character = await randomEyeColor(person);
        return character.eye_color;
    } catch(error){
        console.log(error);
    }
}

export const randomMovie = async (film) => {
    try {
        let response = await fetch(`https://swapi.dev/api/films/${film}/`);
        let data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}