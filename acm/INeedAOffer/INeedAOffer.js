function solution(balance, costs, rates) {
    var store = {}
    for (let i=0; i<costs.length; i++) {
        for (let v=balance; v>=costs[i]; v--) {
            if (store[v] === undefined) store[v] = 1;
            if (store[v-costs[i]] === undefined) store[v-costs[i]] = 1;
            store[v] = Math.min(store[v], store[v-costs[i]] * (1 - rates[i]))
        }
    }

    return 1 - store[balance]
}

console.log(
    solution(10, [4, 4, 5, 0], [0.1, 0.2, 0.3, 0])
)