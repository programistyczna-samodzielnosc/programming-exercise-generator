function object(list = [], values = []) {
    let result = {};

    if (isFirstElementAPair(list)) {
        for (let i = 0; i < list.length; i++) {
            result[list[i][0]] = list[i][1]
        }
        return result;
    }

    for (let i = 0; i < list.length; i++) {
        result[list[i]] = values[i]
    }
    return result;

    function isFirstElementAPair(list) {
        return list[0].length == 2
    }
}

