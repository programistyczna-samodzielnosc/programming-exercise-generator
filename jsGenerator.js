const underscore = require('underscore')

const helpers = require('./helpers')


let keys = Object.keys(underscore)
let exceptions = ['VERSION', '_'];

let pastExercises = ['invert','chunk'];

let allExceptions = exceptions.concat(pastExercises)

keys = keys.filter((name) => !allExceptions.includes(name))

let nrZadania = helpers.getRandomInt(keys.length)

console.log("Liczba pozostałych zadan: " + keys.length)
console.log("Zaimplementuj funkcje " + keys[nrZadania] + " z biblioteki underscore")
console.log("https://underscorejs.org/")









