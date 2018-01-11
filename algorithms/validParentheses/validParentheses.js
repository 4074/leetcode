/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let chars = []
    const rightForLeft = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    for (const c of s) {
        if (rightForLeft[c]) {
            if (chars.pop() !== rightForLeft[c]) {
                return false
            }
        } else {
            chars.push(c)
        }
    }

    return !chars.length
};

console.log(isValid('()[]'))