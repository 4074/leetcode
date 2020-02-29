### [1191\. K-Concatenation Maximum Sum](https://leetcode.com/problems/k-concatenation-maximum-sum/)

Difficulty: **Medium**


Given an integer array `arr` and an integer `k`, modify the array by repeating it `k` times.

For example, if `arr = [1, 2]` and `k = 3` then the modified array will be `[1, 2, 1, 2, 1, 2]`.

Return the maximum sub-array sum in the modified array. Note that the length of the sub-array can be `0` and its sum in that case is `0`.

As the answer can be very large, return the answer **modulo** `10^9 + 7`.

**Example 1:**

```
Input: arr = [1,2], k = 3
Output: 9
```

**Example 2:**

```
Input: arr = [1,-2,1], k = 5
Output: 2
```

**Example 3:**

```
Input: arr = [-1,-2], k = 7
Output: 0
```

**Constraints:**

*   `1 <= arr.length <= 10^5`
*   `1 <= k <= 10^5`
*   `-10^4 <= arr[i] <= 10^4`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    const mod = 10 ** 9 + 7
    let leftMaxSum = 0
    let rightMaxSum = 0
    let insetMaxSum = 0
    let sum = 0
    let sum2 = 0
    
    const dp = Array(arr.length)
    for (let i = 0; i < arr.length; i += 1) {
        sum = sum + arr[i]
        sum2 = sum2 + arr[arr.length - 1 - i]
        
        leftMaxSum = Math.max(leftMaxSum, sum)
        rightMaxSum = Math.max(rightMaxSum, sum2)
        
        if (i === 0) {
            dp[i] = arr[i]
        } else {
            dp[i] = Math.max(arr[i], dp[i - 1] + arr[i])
        }
        insetMaxSum = Math.max(insetMaxSum, dp[i])
    }
    
    if (k === 1) return insetMaxSum
    if (sum <= 0) return Math.max(insetMaxSum, leftMaxSum + rightMaxSum)
    
    let ans = leftMaxSum + rightMaxSum
    let useInset = true
    for (let i = 0; i < k - 2; i += 1) {
        ans = (ans + sum)
        if (ans > insetMaxSum) {
            useInset = false
        }
        ans = ans % mod
    }
    
    return useInset ? insetMaxSum : ans
};
```

[https://www.bilibili.com/video/av68050148](https://www.bilibili.com/video/av68050148)
```javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var kConcatenationMaxSum = function(arr, k) {
    const mod = 10 ** 9 + 7
    
    function maxSum(r) {
        let dp = 0
        let max = 0
        for (let i = 0; i < r; i += 1) {
            for (const n of arr) {
                dp = Math.max(0, dp + n)
                max = Math.max(max, dp)
            }
        }
        return max
    }
    
    const max1 = maxSum(1)
    if (k === 1) return max1
    
    const max2 = maxSum(2)
    const sum = arr.reduce((s, v) => s + v, 0)
    return Math.max(max1, max2, max2 + (k - 2) * sum) % mod
};
```