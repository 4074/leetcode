function get(boards) {
    const store = {}

    function f(i, j) {
        const key = i + '-' + j
        if (store[key]) return store[key];

        const number = boards[i][j]
        let max = []
        for (let n=0; n<boards.length; n++) {
            for (let m=0; m<boards.length; m++) {
                if (
                    boards[n][m] > number && (
                        (Math.abs(n-i) === 1 && Math.abs(m-j) === 2) ||
                        (Math.abs(n-i) === 2 && Math.abs(m-j) === 1)
                    )
                ) {
                    const r = f(n, m)
                    if (r.length > max.length) {
                        max = r
                    }
                }
            }
        }

        max = [boards[i][j]].concat(max)
        store[key] = max

        return max
    }

    let result = []
    for (let i=0; i<boards.length; i++) {
        for (let j=0; j<boards.length; j++) {
            const r = f(i, j)
            if (r.length > result.length) {
                result = r
            }
        }
    }

    return result
}

console.log(
    get(
        [
            [1, 3, 2, 16],
            [4, 10, 6, 7],
            [8, 11, 5, 12],
            [9, 13, 14, 15]
        ]
    )
)