"use strict";


const myString =  "somethingLongHere"

const fighter = {
    name: "Arata",
    HP: 18,
    maxDamage: 8
    // attack: function(enemy){
    //     console.log(`${enemy.name} has ${enemy.HP}`);
    //     console.log(this.name + " attacks!");
    //     const damage = Math.ceil(Math.random() * this.maxDamage);
    //     console.log(`${this.name} does ${damage} points of damage!`)
    //     enemy.HP -= damage;
    //     console.log(`${enemy.name} has ${enemy.HP} left!`)
    // }
}

/* use "this" to reference the object that it is in.
math.ceil will round to a whole number upwards, the damage will pick a random number between 1-8  and x by max damage
use fighter.attack(); (it's called a method) in terminal to make fighter attack monster. */

const fighter2 = {
    name: "Bigfoot",
    HP: 17,
    madDamage: 13,
    attack: function (){
        console.log("Bigfoot attacks!");
    }
}


const monster = {
    name: "Hoblin the Goblin",
    HP: 8,
    maxDamage: 6
}


//controller and view are part of a design pattern called model-view-controller
// controller has methods that control effects on game state,
//example: would take user input and determine the effect of the user actions on the program state
const controller = {
    attack: function(attacker, defender){
        const startingHP = defender.HP
        const damage = Math.ceil(Math.random() * attacker.maxDamage);
        defender.HP -= damage;
        view.displayAttackResults(attacker.name, defender.name, startingHP, defender.HP, damage);
    }
}

//can abstract all output into a view object, separate concerns so our game/program logic is independent of output
const view = {
    displayAttackResults: function(attackerName, defenderName, hpBeforeAttack, hpAfterAttack, damage){
        console.log(`${defenderName} has ${hpBeforeAttack} hit points!`);
        console.log(`${attackerName} attacks!`);
        console.log(`${attackerName} does ${damage} damage.`)
        console.log(`${defenderName} has ${hpAfterAttack} hit points left!`);
        console.log(`----------------------------------------------`)
    }
}

//object constructors is a function.
// function goblin(name, HP, maxDamage){
//     this.name = name;
//     this.HP = HP;
//     this.maxDamage = maxDamage;
// }
// const goblin1 = new Goblin("Goblin 1", 8, 6);
// const goblin2 = new Goblin("Goblin 2", 8, 6);

function Goblin(name){
    this.name = name;
    this.HP = 8
    this.maxDamage = 6
}
// const goblin1 = new Goblin("Goblin 1");
// const goblin2 = new Goblin("Goblin 2");
// const goblin3 = new Goblin("Goblin 3");

const goblins = [];
goblins.push(new Goblin("Goblin 1"))
goblins.push(new Goblin("Goblin 2"))
goblins.push(new Goblin("Goblin 3"))

goblins.forEach(goblin => controller.attack(goblin, fighter));

// goblins.forEach(goblin => {
//     console.log(goblin.name);
//     console.log(goblin.HP);
//     console.log(goblin.maxDamage);
// })
//
// console.log(goblins);
// goblin.forEach(function(goblin){
//     console.log(goblin.name);
//     console.log(goblin.HP);
// });

for (let i = 0; i < goblins.length; i++){
    console.log(`we are at index ` + i);
    console.log(goblins[i].name);
    console.log(goblins[i].HP);
}

