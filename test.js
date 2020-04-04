function countSubArraySumEqualToTarget(arr, target) {
    const n = arr.length
    const sums = Array(n + 1).fill(0)
    const countMap = {}
    let result = 0
    
    for (let i = 1; i <= n; i += 1) {
        sums[i] = sums[i - 1] + arr[i - 1]
        result += countMap[sums[i] - target] || 0
        countMap[sums[i]] = (countMap[sums[i]] || 0) + 1
    }
    
    return result
}

console.log(
    countSubArraySumEqualToTarget([1,2,3,4,3,2,1], 9)
)