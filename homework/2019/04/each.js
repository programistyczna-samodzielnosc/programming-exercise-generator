function each(list, iteratee) {
    if (list.length === undefined && typeof list === 'object') {
        let entries = Object.entries(list)
        for(let i=0; i< entries.length;i++) {
            iteratee(entries[i][0], entries[i][1],list)
        }

        // for ([key, value] of list) {
        //     iteratee(key, value, list)
        // }
    }

    for (let i = 0; i < list.length; i++) {
        iteratee(list[i], i, list)
    }
}

const ksiazki = ["Folwark Zwierzecy", "1984", "Brak tchu"]

function wydanie(ksiazka) {
    console.log("Orwell " + ksiazka)
}

function potarganie(ksiazka) {
    console.log('Zniszczylem ' + ksiazka)
}

function otwarcie(klocki, index) {
    console.log('Otwieram ' + klocki + " " + index)
}

const lego = ["technic", "city", "friends", "knights"]

const czlowiek = {
    imie: "Cyprian",
    nazwisko: "Gepfert",
    wiek: 18,
    doswiadczenie: 20,
    okrzyk: function () {
        console.log("Siema jestem Cyprian")
    }
}


czlowiek.okrzyk();

function wyswietl(cecha, wartosc, czlowiek) {
    console.log(`Cxd ${cecha} = ${wartosc}`)
}

console.log('dlugosc', czlowiek.length)

each(czlowiek, wyswietl)


// each(ksiazki, wydanie)

// each(ksiazki, potarganie)

// each(lego, otwarcie)

