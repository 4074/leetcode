/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const end = num / 2
    let sum = 0
    
    if (num === 0) return false;

    for (let i = 1; i <= end; i++) {
        if (num % i === 0) {
            const j = num / i
            if (j > i) {
                sum += i
                if (j < num) {
                    sum += j
                }
            } else {
                if (i === j) sum += i;
                break
            }
        }
    }

    return sum === num
};

console.log(checkPerfectNumber(28))