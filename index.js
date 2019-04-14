const underscore = require('underscore')


let keys = Object.keys(underscore)
let exceptions = ['VERSION', '_'];

let pastExercises = [];

let allExceptions = exceptions.concat(pastExercises)

keys = keys.filter((name) => !allExceptions.includes(name))

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let nrZadania = getRandomInt(keys.length)

console.log("Liczba pozostałych zadan: " + keys.length)

console.log("Zaimplementuj funkcje " + keys[nrZadania])



