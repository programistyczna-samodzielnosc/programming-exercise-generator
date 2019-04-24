function isFinite(obj) {
    return !(obj === Infinity || obj === -Infinity)
}

let result = isFinite(-Infinity)

console.log(result)