/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let len = s.length
    let charMap = {}
    let chars = []

    if (t.length !== len) return false;

    for (var i = 0; i < len; i++) {
        const n = s[i], m = t[i]
        if (charMap[n]) {
            if (charMap[n] !== m) return false
        } else {
            if (chars.indexOf(m) >= 0) return false;
            charMap[n] = m
            chars.push(m)
        }
    }

    return true
};

console.log(isIsomorphic('foo', 'bar'))