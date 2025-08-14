function arraySum(arr) {
    if(arr.length === 0) {
        return 0;
    } else {
        const firstElement = arr.shift();
        return firstElement + arraySum(arr);
    }
}

module.exports = arraySum;