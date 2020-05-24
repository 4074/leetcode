### [1449\. Form Largest Integer With Digits That Add up to Target](https://leetcode.com/problems/form-largest-integer-with-digits-that-add-up-to-target/)

Difficulty: **Hard**


Given an array of integers `cost` and an integer `target`. Return the **maximum** integer you can paint under the following rules:

*   The cost of painting a digit (i+1) is given by `cost[i]` (0 indexed).
*   The total cost used must be equal to `target`.
*   Integer does not have digits 0.

Since the answer may be too large, return it as string.

If there is no way to paint any integer given the condition, return "0".

**Example 1:**

```
Input: cost = [4,3,2,5,6,7,2,5,5], target = 9
Output: "7772"
Explanation:  The cost to paint the digit '7' is 2, and the digit '2' is 3\. Then cost("7772") = 2*3+ 3*1 = 9\. You could also paint "977", but "7772" is the largest number.
Digit    cost
  1  ->   4
  2  ->   3
  3  ->   2
  4  ->   5
  5  ->   6
  6  ->   7
  7  ->   2
  8  ->   5
  9  ->   5
```

**Example 2:**

```
Input: cost = [7,6,5,5,5,6,8,7,8], target = 12
Output: "85"
Explanation: The cost to paint the digit '8' is 7, and the digit '5' is 5\. Then cost("85") = 7 + 5 = 12.
```

**Example 3:**

```
Input: cost = [2,4,6,2,4,6,4,4,4], target = 5
Output: "0"
Explanation: It's not possible to paint any integer with total cost equal to target.
```

**Example 4:**

```
Input: cost = [6,10,15,40,40,40,40,40,40], target = 47
Output: "32211"
```

**Constraints:**

*   `cost.length == 9`
*   `1 <= cost[i] <= 5000`
*   `1 <= target <= 5000`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    const n = cost.length
    const dp = Array(target + 1).fill()
    
    function generalString(source, s) {
        for (let i = 0; i < source; i += 1) {
            if (source[i] <= s) {
                return source.substr(0, i) + s + source.substr(i)
            }
        }
        return source + s
    }
    
    function max(s1, s2) {
        if (!s1) return s2
        if (s1.length === s2.length) {
            return s1 > s2 ? s1 : s2
        } else if (s1.length < s2.length) {
            return s2
        }
        return s1
    }
    
    dp[0] = ['']
    for (let i = 0; i < n; i += 1) {
        const c = cost[i]
        for (let j = c; j <= target; j += 1) {
            if (dp[j - c] !== undefined) {
                const next = generalString(dp[j - c], `${i + 1}`)
                dp[j] = max(dp[j], next)
            }
        }
    }
    
    return dp[target] || '0'
};
```

```javascript
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    const n = cost.length
    const dp = Array(target + 1).fill()
    
    dp[0] = 0
    for (let i = 0; i < n; i += 1) {
        const c = cost[i]
        for (let j = c; j <= target; j += 1) {
            if (dp[j - c] !== undefined) {
                dp[j] = Math.max(dp[j] || 0, dp[j - c] + 1)
            }
        }
    }
    
    if (!dp[target]) return '0'
    
    let res = ''
    for (let i = n - 1; i >= 0; i--) {
        while (target >= cost[i] && dp[target] === dp[target - cost[i]] + 1) {
            res += i + 1
            target -= cost[i]
        }
    }
    
    return res
};
```

https://www.bilibili.com/video/BV19Q4y1A7Rf
```javascript
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
var largestNumber = function(cost, target) {
    const n = cost.length
    const dp = Array(target + 1).fill()
    
    dp[0] = [0, 0]
    for (let t = 1; t <= target; t += 1) {
        for (let i = 1; i <= 9; i += 1) {
            const c = cost[i - 1]
            if (c > t || dp[t - c] === undefined) continue
            if (!dp[t] || dp[t - c][0] + 1 >= dp[t][0]) dp[t] = [dp[t - c][0] + 1, i]
        }
    }
    
    if (!dp[target]) return '0'
    
    let ans = ''
    while (target) {
        ans += dp[target][1]
        target -= cost[dp[target][1] - 1]
    }
    
    return ans
};
```