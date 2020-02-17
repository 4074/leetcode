### [1278\. Palindrome Partitioning III](https://leetcode.com/problems/palindrome-partitioning-iii/)

Difficulty: **Hard**


You are given a string `s` containing lowercase letters and an integer `k`. You need to :

*   First, change some characters of `s` to other lowercase English letters.
*   Then divide `s` into `k` non-empty disjoint substrings such that each substring is palindrome.

Return the minimal number of characters that you need to change to divide the string.

**Example 1:**

```
Input: s = "abc", k = 2
Output: 1
Explanation: You can split the string into "ab" and "c", and change 1 character in "ab" to make it palindrome.
```

**Example 2:**

```
Input: s = "aabbc", k = 3
Output: 0
Explanation: You can split the string into "aa", "bb" and "c", all of them are palindrome.
```

**Example 3:**

```
Input: s = "leetcode", k = 8
Output: 0
```

**Constraints:**

*   `1 <= k <= s.length <= 100`.
*   `s` only contains lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function(s, k) {
    const cost = Array(s.length).fill()
        .map(() => Array(s.length).fill(0))
    
    for (let l = 2; l <= s.length; l += 1) {
        for (let i = 0; i + l <= s.length; i += 1) {
            const j = i + l - 1
            cost[i][j] = cost[i + 1][j - 1] + (s[i] === s[j] ? 0 : 1)
        }
    }
    
    const dp = Array(s.length).fill()
        .map(() => Array(k + 1).fill(Infinity))
    
    for (let i = 0; i < s.length; i += 1) {
        dp[i][1] = cost[0][i]
        for (let g = 2; g <= k; g += 1) {
            for (let j = 0; j < i; j += 1) {
                dp[i][g] = Math.min(dp[i][g], dp[j][g-1] + cost[j + 1][i])
            }
        }
    }
    
    return dp[s.length - 1][k]
};
```