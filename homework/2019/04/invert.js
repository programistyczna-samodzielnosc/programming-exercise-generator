function invert(obj) {
    return Object.entries(obj)
        .reduce((sum, current) => {
            sum[current[1]] = current[0]
            return sum
        }, {})
}

let naPoczatkuByloSlowo = {Moe: "Moses", Larry: "Louis", Curly: "Jerome"};
let aSlowoStaloSieCialem = invert({Moe: "Moses", Larry: "Louis", Curly: "Jerome"})

console.log('poczatek ', naPoczatkuByloSlowo);
console.log('koniec ', aSlowoStaloSieCialem);