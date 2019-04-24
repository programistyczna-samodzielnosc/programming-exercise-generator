function zmienKolorCenterka(kolor) {
    let centerki = document.getElementsByClassName('centerek')
    centerki = Array.from(centerki)
    console.log('centerek', centerki)
    centerki.map(function(element){
        element.style.backgroundColor = kolor
    })
}