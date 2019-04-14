const underscore = require('underscore')

let keys = Object.keys(underscore)
let exceptions = ['VERSION','_'];
keys = keys.filter((name)=> !exceptions.includes(name))

// console.log(keys.length)
// console.log(keys);

//zrobic losowanie liczby od 1-139

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let nrZadania = getRandomInt(139)

console.log("Zaimplementuj funkcje " + keys[nrZadania])



