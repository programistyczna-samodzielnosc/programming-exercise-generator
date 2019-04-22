const underscore = require('underscore')

function functions(obj) {
    return Object.keys(obj)
        .filter(function(key){
            return typeof obj[key] === 'function'
        })
}


console.log(functions(underscore))
