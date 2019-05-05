function htmlCssGenerator (difficulty=4, maxOfBranches=3, indent=0) {
    currentExercise = ""

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    const helpers = {
        getRandomInt
    }
    
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
    function withNewLine(text) {
        return `\n${text}`
    }
    
    createTree(difficulty, maxOfBranches, indent)

    return `<pre>${currentExercise}</pre>`

    function createTree(difficulty, maxOfBranches, indent) {
    
        if(difficulty === 0) {
            return
        }
    
        const numberOfBranches = helpers.getRandomInt(maxOfBranches) +2
        let direction = ''
        if(numberOfBranches>1) {
            direction = `dzieci ${getDirection()};`
            currentExercise += withNewLine(direction)
        }
        for(let i=0; i< numberOfBranches;i++) {
            currentExercise += withNewLine(`${getFinalIndent(indent*2)} element ${i+1}:  ${manyExercises()}`)
            createTree(helpers.getRandomInt(difficulty), maxOfBranches, indent+1);   
        }
    }

    function getFinalIndent(indent) {
        let finalIndent = ""
        for (let i = 0; i < indent; i++) {
            finalIndent += "-"
        }
        return finalIndent + ">"
    }
}

