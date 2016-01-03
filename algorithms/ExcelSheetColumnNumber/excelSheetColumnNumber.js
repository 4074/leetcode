/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var num = 0;
    var len = 0;
    var code = 'A'.charCodeAt() - 1;
    
    s = s.split('');
    len = s.length;
    
    for(var i=0; i<len; i++){
        num += Math.pow(26, len-1-i) * (s[i].charCodeAt() - code);
    }
    
    return num;
};

// Runtime: 232ms
// Beats 53.17% of javascript submissions