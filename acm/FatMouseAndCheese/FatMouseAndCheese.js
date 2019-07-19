function get(n, k, cheese) {
    var store = {}

    function f(i, j) {
        var key = i + '-' + j
        if (store[key]) return store[key];

        var numbers = []
        if (i-k >= 0 && cheese[i-k][j] > cheese[i][j]) {
            numbers.push(f(i-k, j))
        }
        if (i+k < n && cheese[i+k][j] > cheese[i][j]) {
            numbers.push(f(i+k, j))
        }
        if (j-k >= 0 && cheese[i][j-k] > cheese[i][j]) {
            numbers.push(f(i, j-k))
        }
        if (j+k < n && cheese[i][j+k] > cheese[i][j]) {
            numbers.push(f(i, j+k))
        }
        
        var max = cheese[i][j] + (numbers.length ? Math.max.apply(null, numbers) : 0)
        store[key] = max

        return max
    }

    return f(0, 0)
}

console.log(
    get(3, 1, [
        [1,2,5],
        [10,11,6],
        [12,12,7]
    ])
)