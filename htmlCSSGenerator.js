console.log(`Zadanie domowe: ${new Date()}`)
console.log('Stworz layout strony internetowej: ')

const helpers = require('./helpers')

let elementsCount1 = 3

function direction(childrenCount) {
    if (childrenCount > 0) {
        let result = helpers.getRandomInt(2) // 0 lub 1
        if (result === 0) return 'poziomo'
        return 'pionowo'
    }
    return ''
}

//generujemy drzewko o trudnosci n (np 10)

//zaczynamy od korzenia, korzen jest tylko 1
//na kazdym poziomie generujemy losowa liczba galezi(nodow)
//kazda galaz tworzy kolejne drzewa o trudnosci mniejszej o 1
//konczymy rozgalezianie jesli trudnosc jest rowna 0

//kazdy node jest jakims elementem html i zadaniem do zrobienia

function createTree(difficulty=4, maxOfBranches=3, indent=0) {
    if(difficulty === 0) {
        // console.log('koniec')
        return
    }

    for(let i=0; i<helpers.getRandomInt(maxOfBranches) + 2;i++) {
        console.log(`${getFinalIndent(indent*2)} element ${i}`)
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