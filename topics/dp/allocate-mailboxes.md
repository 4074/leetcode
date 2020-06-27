### [1478\. Allocate Mailboxes](https://leetcode.com/problems/allocate-mailboxes/)

Difficulty: **Hard**


Given the array `houses` and an integer `k`. where `houses[i]` is the location of the ith house along a street, your task is to allocate `k` mailboxes in the street.

Return the **minimum** total distance between each house and its nearest mailbox.

The answer is guaranteed to fit in a 32-bit signed integer.

**Example 1:**

![](https://assets.leetcode.com/uploads/2020/05/07/sample_11_1816.png)

```
Input: houses = [1,4,8,10,20], k = 3
Output: 5
Explanation: Allocate mailboxes in position 3, 9 and 20.
Minimum total distance from each houses to nearest mailboxes is |3-1| + |4-3| + |9-8| + |10-9| + |20-20| = 5 
```

**Example 2:**

**![](https://assets.leetcode.com/uploads/2020/05/07/sample_2_1816.png)**

```
Input: houses = [2,3,5,12,18], k = 2
Output: 9
Explanation: Allocate mailboxes in position 3 and 14.
Minimum total distance from each houses to nearest mailboxes is |2-3| + |3-3| + |5-3| + |12-14| + |18-14| = 9.
```

**Example 3:**

```
Input: houses = [7,4,6,1], k = 1
Output: 8
```

**Example 4:**

```
Input: houses = [3,6,14,10], k = 4
Output: 0
```

**Constraints:**

*   `n == houses.length`
*   `1 <= n <= 100`
*   `1 <= houses[i] <= 10^4`
*   `1 <= k <= n`
*   Array `houses` contain unique integers.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    const n = houses.length
    houses.sort((a, b) => a - b)
    
    function getDistanceSum(start, end) {
        const mid = Math.floor((end + start) / 2)
        let sum = 0
        for (let i = start; i <= end; i += 1) {
            sum += Math.abs(houses[i] - houses[mid])
        }
        return sum
    }
    
    const cache = Array(n).fill().map(() => Array(k + 1).fill(-1))
    function dp(index, k) {
        if (index === n) return k === 0 ? 0 : Infinity
        if (k === 0) return Infinity
        
        if (cache[index][k] === -1) {
            cache[index][k] = Infinity
            for (let i = index; i < n; i += 1) {
                cache[index][k] = Math.min(cache[index][k], getDistanceSum(index, i) + dp(i + 1, k - 1))
            }
        }
        
        return cache[index][k]
    }
    
    return dp(0, k)
};
```

```javascript
/**
 * @param {number[]} houses
 * @param {number} k
 * @return {number}
 */
var minDistance = function(houses, k) {
    const n = houses.length
    houses.sort((a, b) => a - b)
    
    function getDistanceSum(start, end) {
        const mid = Math.floor((end + start) / 2)
        let sum = 0
        for (let i = start; i <= end; i += 1) {
            sum += Math.abs(houses[i] - houses[mid])
        }
        return sum
    }
    
    const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(Infinity))
    
    dp[0][0] = 0
    for (let i = 1; i <= n; i += 1) {
        for (let p = 1; p <= k; p += 1) {
            for (let j = 1; j <= i; j += 1) {
                dp[i][p] = Math.min(dp[i][p], dp[j - 1][p - 1] + getDistanceSum(j - 1, i - 1))
            }
            
        }
    }
    
    return dp[n][k]
};
```