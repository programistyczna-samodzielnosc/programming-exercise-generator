function compact(list){
    return list.filter(function(element){
//     if(element===0) return false;
//     if(element==='') return false;
//     if(isNaN(element)) return false;
//     if(element === undefined) return false;
//     if(element === null) return false;
//     if(element === false) return false;
        if(!element) return false;
        return true;
    })
}

let obiekty = [0, 1, false, 2, '', 3, NaN, undefined]
console.log('poczatkowe obiekty', obiekty)
let wynik = compact(obiekty)

console.log('przefiltroawne obiekty', wynik);