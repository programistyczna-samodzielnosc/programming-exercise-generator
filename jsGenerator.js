function jsGenerator() {
    const underscore = _
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    
    let keys = Object.keys(underscore)
    let exceptions = ['VERSION', '_'];
    
    keys = keys.filter((name) => !exceptions.includes(name))
    
    let nrZadania = getRandomInt(keys.length)
    let nazwaFunkcji = keys[nrZadania]
    return `
    <pre>Zaimplementuj funkcje "${nazwaFunkcji}" z biblioteki underscore</pre>
    <a target="blank" href="https://underscorejs.org/#${nazwaFunkcji}">${nazwaFunkcji}</a>
   
   `;
}






