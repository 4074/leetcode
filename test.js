function convertToBaseK(n, k, chars) {
    if (n === 0) return '0'
    const result = []
    while (n != 0) {
        let r = n % k
        n = (n - r) / k

        // r is negative
        if (r < 0) {
            r -= k
            n += 1
        }

        result.unshift(chars ? chars[r] : r)
    }
    return result.join('')
}

console.log(
    convertToBaseK(18, 2) === '10010'
)
console.log(
    convertToBaseK(18, 16, [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']) === '12'
)
console.log(
    convertToBaseK(18, -2) === '10110'
)