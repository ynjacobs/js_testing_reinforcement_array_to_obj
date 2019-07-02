function arrayToObj(myArray) {
    let objToReturn = {};
    myArray.forEach(e => objToReturn[e[0]] = e[1]); 
    return objToReturn;
}

module.exports = arrayToObj;
