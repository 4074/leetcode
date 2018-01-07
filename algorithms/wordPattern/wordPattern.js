/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let index = 0
    let chars = {}
    let words = []
    str = str.split(' ')

    if (pattern.length !== str.length) return false;

    for (const c of pattern) {
        const s = str[index]
        if (chars[c]) {
            if (s !== chars[c]) {
                return false
            }
        } else {
            if (words.indexOf(s) >= 0) {
                return false
            } 
            chars[c] = s
            words.push(s)
        }
        index ++
    }

    return true
};
