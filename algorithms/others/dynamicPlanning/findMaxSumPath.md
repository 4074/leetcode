### 数塔问题

从顶层走到底层，每一步只能走到相邻节点，求经过节点的数字之和最大是多少

#### 解决方案

- sum[i] = max(a[left], a[right]) + a[i]

```
function findMaxSumPath(source) {
    let sum_result = 0
    for (let i=0, len=source.length - 1; i<len; i++) {
        console.log(i)
        for (let j=0, jlen=source[i].length; j<jlen; j++) {
            source[i+1][j] = source[i+1][j] + source[i][j]
            source[i+1][j + 1] = source[i+1][j + 1] + source[i][j]
            sum_result = Math.max(sum_result, Math.max(source[i+1][j], source[i+1][j + 1]))
        }
    }
    return sum_result
}

findMaxSumPath([
    [9],
    [12, 15],
    [10, 6, 8],
    [2, 18, 9, 5],
    [19, 7, 10, 4, 16]
])

```