console.log(`Zadanie domowe: ${new Date()}`)

const helpers = require('./helpers')

const maxOfElements = 5 // 4el
let elementsCount1 = 3

function direction(childrenCount) {
    if (childrenCount > 0) {
        let result = helpers.getRandomInt(2) // 0 lub 1
        if (result === 0) return 'poziomo'
        return 'pionowo'
    }
    return ''


}


console.log(`Layout zawiera ${elementsCount1} elementy ${direction(elementsCount1)}`)


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
    console.log(`${getFinalIndent(indent)}Element ${parentNumber} zawiera ${childrenCount} el. ${direction(childrenCount)}`)
}