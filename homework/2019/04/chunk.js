function chunk(klasa, wielkoscGrupy) {
    let bramkaKlasy1A = bramka(klasa)
    let klasaPodzielona = []

    for (let current of bramkaKlasy1A) {
        let grupa = [current]
        for (let i = 0; i < wielkoscGrupy - 1; i++) {
            const value = bramkaKlasy1A.next().value
            if (value !== undefined) {
                grupa.push(value)
            }
        }
        klasaPodzielona.push(grupa)
    }
    return klasaPodzielona
}

function* bramka(dzieci) {
    for (let i = 0; i < dzieci.length; i++) {
        yield dzieci[i]
    }
}

let klasa1a = ["A", "B", "C", "D", "E", "F", "G", "H"]
    .concat(["A", "B", "C", "D", "E", "F", "G", "H"])

console.log(chunk(klasa1a, 5))



