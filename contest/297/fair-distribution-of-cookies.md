# [2305\. Fair Distribution of Cookies](https://leetcode.com/problems/fair-distribution-of-cookies/)

## Description

Difficulty: **Medium**  

Related Topics: [Backtracking](https://leetcode.com/tag/backtracking/)


You are given an integer array `cookies`, where `cookies[i]` denotes the number of cookies in the i<sup>th</sup> bag. You are also given an integer `k` that denotes the number of children to distribute **all** the bags of cookies to. All the cookies in the same bag must go to the same child and cannot be split up.

The **unfairness** of a distribution is defined as the **maximum** **total** cookies obtained by a single child in the distribution.

Return _the **minimum** unfairness of all distributions_.

**Example 1:**

```
Input: cookies = [8,15,10,20,8], k = 2
Output: 31
Explanation: One optimal distribution is [8,15,8] and [10,20]
- The 1st child receives [8,15,8] which has a total of 8 + 15 + 8 = 31 cookies.
- The 2nd child receives [10,20] which has a total of 10 + 20 = 30 cookies.
The unfairness of the distribution is max(31,30) = 31.
It can be shown that there is no distribution with an unfairness less than 31.
```

**Example 2:**

```
Input: cookies = [6,1,3,2,2,4,1,2], k = 3
Output: 7
Explanation: One optimal distribution is [6,1], [3,2,2], and [4,1,2]
- The 1st child receives [6,1] which has a total of 6 + 1 = 7 cookies.
- The 2nd child receives [3,2,2] which has a total of 3 + 2 + 2 = 7 cookies.
- The 3rd child receives [4,1,2] which has a total of 4 + 1 + 2 = 7 cookies.
The unfairness of the distribution is max(7,7,7) = 7.
It can be shown that there is no distribution with an unfairness less than 7.
```

**Constraints:**

*   `2 <= cookies.length <= 8`
*   1 <= cookies[i] <= 10<sup>5</sup>
*   `2 <= k <= cookies.length`


## Solution
Language: **JavaScript**

**DFS**
```javascript
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const n = cookies.length
  let ans = Infinity
  
  const dfs = (i, children) => {
    if (i === n) {
      ans = Math.min(ans, Math.max(...children))
    } else {
      for (let j = 0; j < k; j += 1) {
        const prev = children[j]
        if (prev + cookies[i] >= ans) continue
        children[j] += cookies[i]
        dfs(i + 1, children)
        children[j] = prev
      }
    }
  }
  
  dfs(0, Array(k).fill(0))
  return ans
};
```

**DP**
[https://www.bilibili.com/video/BV1aT41157bh?vd_source=6b3d69c685ac35809fb85a833c101e4c](https://www.bilibili.com/video/BV1aT41157bh?vd_source=6b3d69c685ac35809fb85a833c101e4c)
```javascript
/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
  const n = cookies.length
  const maxMask = 1 << n
  
  const sums = Array(maxMask).fill(0)
  for (let i = 1; i < maxMask; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i & (1 << j)) sums[i] += cookies[j]
    }
  }
  
  const dp = Array(k).fill().map(() => Array(maxMask).fill(0))
  dp[0] = sums
  for (let i = 1; i < k; i += 1) {
    for (let j = 1; j < maxMask; j += 1) {
      dp[i][j] = Infinity
      for (let s = j; s; s = (s - 1) & j) {
        dp[i][j] = Math.min(
          dp[i][j],
          Math.max(dp[i - 1][s], sums[s ^ j])
        )
      }
    }
  }
  return dp[k - 1][maxMask - 1]
};
```