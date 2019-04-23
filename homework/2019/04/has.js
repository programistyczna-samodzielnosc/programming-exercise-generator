function has(obj, key) {
    const keys = Object.keys(obj);
    const zbior = new Set(keys)
    return zbior.has(key)
}
let obj = {a:1,b:2,c:3,d:undefined}
console.log(has(obj , 'd'))