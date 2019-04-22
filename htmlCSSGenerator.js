console.log(`Zadanie domowe: ${new Date()}`)
console.log('Stworz layout strony internetowej: ')

const helpers = require('./helpers')

let elementsCount1 = 3

function getDirection() {
    let result = helpers.getRandomInt(2) // 0 lub 1
    if (result === 0) return 'poziomo'
    return 'pionowo'
}

//generujemy drzewko o trudnosci n (np 10)

//zaczynamy od korzenia, korzen jest tylko 1
//na kazdym poziomie generujemy losowa liczba galezi(nodow)
//kazda galaz tworzy kolejne drzewa o trudnosci mniejszej o 1
//konczymy rozgalezianie jesli trudnosc jest rowna 0

//kazdy node jest jakims elementem html i zadaniem do zrobienia

let exerciseTypes = [
    'ramka dookola',
    'obrazek',
    'lista numerowana elementow',
    'lista nienumerowana elementow',
    'naglowek',
    'przycisk',
    'zmien kolor czcionki',
    'zmien rozmiar czcionki',
    'gradient',
    'kolor tla',
    'pogrubiony tekst',
    'przekreslony tekst',
    'akapit tekstu',
    'tekst z tlem obrazka',
    'link do jakiejs strony'
]

function manyExercises(number=3) {
    let output = '';
    for(let i=0;i<number;i++){
        let nrZadania = helpers.getRandomInt(exerciseTypes.length)
        let trescZadania = exerciseTypes[nrZadania]
        output += `${trescZadania}; `
    }
    return output;
}

function createTree(difficulty=4, maxOfBranches=3, indent=0) {
    if(difficulty === 0) {
        return
    }

    const numberOfBranches = helpers.getRandomInt(maxOfBranches) +2
    let direction = ''
    if(numberOfBranches>1) {
        direction = `dzieci ${getDirection()};`
        console.log(direction)
    }
    for(let i=0; i< numberOfBranches;i++) {
        console.log(`${getFinalIndent(indent*2)} element ${i+1}:  ${manyExercises()}`)
        createTree(helpers.getRandomInt(difficulty), maxOfBranches, indent+1);   
    }
}

createTree()

function getFinalIndent(indent) {
    let finalIndent = ""
    for (let i = 0; i < indent; i++) {
        finalIndent += "-"
    }
    return finalIndent + ">"
}