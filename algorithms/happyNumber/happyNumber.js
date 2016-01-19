/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var got = {};
    got[n] = true;
    
    while(n !== 1){
        var m = 0;
        (n + '').split('').forEach(function(val){
            m += Math.pow(parseInt(val), 2);
        })
        if(got[m]){
            return false;
        }
        got[m] = true;
        n = m;
    }
    return true;
};