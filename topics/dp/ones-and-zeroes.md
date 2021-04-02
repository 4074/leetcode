### [474\. Ones and Zeroes](https://leetcode.com/problems/ones-and-zeroes/)

Difficulty: **Medium**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are given an array of binary strings `strs` and two integers `m` and `n`.

Return _the size of the largest subset of `strs` such that there are **at most**_ `m``0`_'s and_ `n``1`_'s in the subset_.

A set `x` is a **subset** of a set `y` if all elements of `x` are also elements of `y`.

**Example 1:**

```
Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
```

**Example 2:**

```
Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
```

**Constraints:**

*   `1 <= strs.length <= 600`
*   `1 <= strs[i].length <= 100`
*   `strs[i]` consists only of digits `'0'` and `'1'`.
*   `1 <= m, n <= 100`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))
  
  let ans = 0
  for (let i = 0; i < strs.length; i += 1) {
    let current = [0, 0, 0]
    let zero = 0
    let one = 0
    for (let k = 0; k < strs[i].length; k += 1) {
      if (strs[i][k] === '0') {
        zero += 1
      } else {
        one += 1
      }
    }
    if (zero > m || one > n) continue
    
    for (let j = m - zero; j >= 0; j -= 1) {
      for (let k = n - one; k >= 0; k -= 1) {
        dp[j + zero][k + one] = Math.max(dp[j + zero][k + one], dp[j][k] + 1)
        ans = Math.max(ans, dp[j + zero][k + one])
      }
    }
  }
  
  return ans
};
```