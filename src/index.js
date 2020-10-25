module.exports = function check(str, bracketsConfig) {
    let objBrackets = Object.fromEntries(bracketsConfig);
    let arr = [];
    for (let i of str.split('')) {
        if (arr[0] === i) {
            arr.shift();
        } else if (objBrackets[i]) {
            arr.unshift(objBrackets[i]);
        } else {
            return false;
        }
    }
    return arr.length === 0;
}
