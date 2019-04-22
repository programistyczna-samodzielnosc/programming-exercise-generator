function isBoolean(obj) {
    if(obj===true || obj === false) return true;
    return false;
}

console.log(isBoolean(true));
console.log(isBoolean(false));
console.log(isBoolean(null));
console.log(isBoolean(123));
console.log(isBoolean({ziemniaki:"300kg"}));
console.log(isBoolean("Ala ma psa a nie kota"));
