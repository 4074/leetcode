/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    if(s === t) return true;
    
    s = s.split('').sort();
    t = t.split('').sort();
    
    for(var i=0,len=s.length; i<len; i++){
        if(s[i] !== t[i]) return false;
    }
    
    return true;
};

// Runtime: 204ms 
// Beats 40.21% of javascript submissions