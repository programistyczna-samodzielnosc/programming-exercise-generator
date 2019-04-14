console.log('html i css generator')

const helpers = require('./helpers')

const maxOfElements = 5 // 4el
let elementsCount1 = 3
console.log(`Layout zawiera ${elementsCount1} elementy`)


for (let i = 1; i <= elementsCount1; i++) {
    let elementsCount2 = helpers.getRandomInt(maxOfElements)
    printElements(i, elementsCount2, 2)

    for (let j = 1; j <= elementsCount2; j++) {
        let elementsCount3 = helpers.getRandomInt(maxOfElements)
        printElements(j, elementsCount3, 4)

        for (let k = 1; k <= elementsCount3; k++) {
            let elementsCount4 = helpers.getRandomInt(maxOfElements)
            printElements(k, elementsCount4, 6)
            //
            // for (let l = 1; l <= elementsCount4; l++) {
            //     let elementsCount5 = helpers.getRandomInt(maxOfElements)
            //     printElements(l, elementsCount5, 6)
            // }
        }
    }
}

function getFinalIndent(indent) {
    let finalIndent = ""
    for (let i = 0; i < indent; i++) {
        finalIndent += "-"
    }
    return finalIndent + ">"
}

function printElements(parentNumber, childrenCount, indent) {
    console.log(`${getFinalIndent(indent)}Element ${parentNumber} zawiera ${childrenCount} el.`)
}