/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    var result = 0
    var max = Math.pow(2, 31) - 1
    var isNegative = dividend > 0 ^ divisor > 0
    
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    substract(divisor, 1)
    
    function substract(s, t) {
        if (dividend > s) {
            substract(s + s, t + t)
        }
        if (dividend >= s) {
            dividend -= s
            result += t
        }
    }
    
    if (isNegative) {
        result = -result
    }
    
    return result > max ? max : result
};