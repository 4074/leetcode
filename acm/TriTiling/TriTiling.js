function get(n) {
    if (n % 2 !== 0) return 0;

    const result = {
        '0-0': 1,
        '1-1': 1,
        '0-2': 1,
    }

    function f(i, j) {
        const key = i + '-' + j
        if (typeof result[key] !== 'undefined') return result[key];

        let r
        if (j === 0) {
            r = f(i - 2, 0) + f(i - 1, 1) + f(i-2, 2)
        } else if (j === 1) {
            r = f(i-1, 2)
        } else if (j === 2) {
            r = f(i, 0) + f(i - 1, 1)
        }
        
        result[key] = r

        return r
    }

    return f(n, 0)
}

console.log(get(2)) // 3
console.log(get(8)) // 153
console.log(get(12)) // 2131