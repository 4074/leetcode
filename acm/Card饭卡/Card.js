function solution(balance, C) {
    const V = balance - 5

    const f = {}, chosen = {}, remaining = [0], n = C.length

    for (let i=0; i<=V; i++) {
        f[i] = 0
        chosen[i] = []
    }

    for (let i=0; i<n; i++) {
        for (let v=V; v>=C[i]; v--) {

            if (!f[v]) f[v] = 0;
            if (!f[v-C[i]]) f[v-C[i]] = 0;

            if (!chosen[v]) chosen[v] = [];
            if (!chosen[v-C[i]]) chosen[v-C[i]] = [];

            if (f[v] < f[v-C[i]] + C[i]) {
                f[v] = f[v-C[i]] + C[i]
                chosen[v] = chosen[v-C[i]].slice()
                chosen[v].push(i)
            }
        }
    }

    
    for (let j=0; j<n; j++) {
        if (chosen[V].indexOf(j) < 0) {
            remaining.push(C[j])
        }
    }

    return balance - f[V] - Math.max.apply(null, remaining)
}

console.log(
    solution(5, [50]),
    solution(50, [1, 2, 3, 2, 1, 1, 2, 3, 2, 1])
)