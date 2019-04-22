function isBoolean(obj) {
    if(obj===true || obj === false) return true;
    return false;
}

function zniszczWiosne() {
    let wiosna = document.getElementsByClassName('wiosna')[0]
    
    let czyDowiezcKartofle = isBoolean({ziemniaki:"300kg"})
    wiosna.innerHTML = `siema heniu ${czyDowiezcKartofle}`;
}





console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean(null));
console.log(isBoolean(123));
console.log(isBoolean({ziemniaki:"300kg"}));
console.log(isBoolean("Ala ma psa a nie kota"));