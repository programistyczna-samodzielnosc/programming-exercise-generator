
function where(list, properties) {
    const filtry = Object.entries(properties)
    
    for (let [key,value] of filtry) {
        list = list.filter(function(element){
            return element[key] === value
        })
    }
    return list;
    // console.log('filtry', filtry)
}

const ksiazki = [ 
    {title: "Cymbeline", author: "Cyprian", year: 1611},
    {title: "The Tempest", author: "Cyprian", year: 1611},
    {title: "Polska górą", author: "Shakespeare", year: 1612},
    {title: "Bitwa pod Grunwaldem", author: "Cyprian", year: 1410},
    {title: "Cymbeline", author: "Shakespeare", year: 1611},
    {title: "The Tempest", author: "Shakespeare", year: 1611}
]

// console.log(ksiazki)

const wynik = where(ksiazki,{author: "Cyprian"})

console.log('wynik', wynik)