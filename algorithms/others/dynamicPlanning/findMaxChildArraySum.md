### 最大连续子序列之和

给定K个整数的序列{ N1, N2, ..., NK }，其任意连续子序列可表示为{ Ni, Ni+1, ..., Nj }，其中 1 <= i <= j <= K。最大连续子序列是所有连续子序中元素和最大的一个， 例如给定序列{ -2, 11, -4, 13, -5, -2 }，其最大连续子序列为{ 11, -4, 13 }，最大和为20。

#### 解决方案

- 最大连续子序列结束位置为 0~n-1
- 以i结束的最大子序列之和为 `sum[i] = max(sum[i-1] + a[i], a[i])`
- `result = max(sum[0~n-1])`

```
function findMaxChildArraySum(source) {
    const length = source.length
    if (length === 0) return null;

    let max_result = source[0], max_i = source[0]

    for (let i=1; i<length; i++) {
        max_i = Math.max(max_i + source[i], source[i])
        max_result = Math.max(max_result, max_i)
    }

    return max_result
}

findMaxChildArraySum([-2, 11, -4, 13, -5, -2])
```

```
function findMaxChildArraySum2(source) {
    const length = source.length
    if (length === 0) return null;

    let result = source[0], start = 0, end = 0, rest = 0

    for (let i=1; i<length; i++) {
        if (source[i] > (result + source[i])) {
            rest = 0
            result = source[i]
            start = i
            end = i
        } else {
            if (rest + source[i] > 0) {
                result += rest + source[i]
                end = i
                rest = 0
            } else {
                rest += source[i]
            }
        }
    }

    return [result, start, end]
}
```