module.exports = function reverse (n) {
    if (n < 0) { 
        return +String(n).split('').slice(1).reverse().join('');
    } else {
        return +String(n).split('').reverse().join('');
    }
 
}
