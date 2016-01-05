/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var m = 1;
    var r = 0;
    while(n >= m){
        m = m * 2;
        if(n % m){
            r ++;
            n -= m / 2;
        }
    }
    return r;
};

// Runtime: 216ms 
// Beats 27.27% of javascript submissions