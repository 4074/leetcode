function get(n, m, s, prices) {
    var store = {}

    for (var c in prices) {
        if (prices.hasOwnProperty(c)) {
            prices[c] = Math.min(prices[c].add, prices[c].remove)
        }
    }

    function f(i, j) {
        var key = i + '-' + j
        if (store[key]) return store[key];

        var min = 0
        if (i < j && !isPalindRome(s.substr(i, j-i+1))) {
            min = Math.min(
                prices[s[i]] + f(i+1, j),
                prices[s[j]] + f(i, j-1)
            )
        }

        store[key] = min
        return min
    }

    function isPalindRome(s) {
        return s === s.split('').reverse().join('')
    }

    return f(0, m-1)
}

console.log(
    get(3, 4, 'abcb', {
        a: {add: 1000, remove: 1100},
        b: {add: 350, remove: 700},
        c: {add: 200, remove: 800}
    })
)