/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const end = num / 2
    let sum = 0
    
    if (num === 0) return false;

    for (let i = 1; i <= end; i++) {
        if (num % i === 0) sum += i
    }
    return sum === num
};