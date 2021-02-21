### [1771\. Maximize Palindrome Length From Subsequences](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/)

Difficulty: **Hard**  

Related Topics: [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/)


You are given two strings, `word1` and `word2`. You want to construct a string in the following manner:

*   Choose some **non-empty** subsequence `subsequence1` from `word1`.
*   Choose some **non-empty** subsequence `subsequence2` from `word2`.
*   Concatenate the subsequences: `subsequence1 + subsequence2`, to make the string.

Return _the **length** of the longest **palindrome** that can be constructed in the described manner._ If no palindromes can be constructed, return `0`.

A **subsequence** of a string `s` is a string that can be made by deleting some (possibly none) characters from `s` without changing the order of the remaining characters.

A **palindrome** is a string that reads the same forward as well as backward.

**Example 1:**

```
Input: word1 = "cacb", word2 = "cbba"
Output: 5
Explanation: Choose "ab" from word1 and "cba" from word2 to make "abcba", which is a palindrome.
```

**Example 2:**

```
Input: word1 = "ab", word2 = "ab"
Output: 3
Explanation: Choose "ab" from word1 and "a" from word2 to make "aba", which is a palindrome.
```

**Example 3:**

```
Input: word1 = "aa", word2 = "bb"
Output: 0
Explanation: You cannot construct a palindrome from the described method, so return 0.
```

**Constraints:**

*   `1 <= word1.length, word2.length <= 1000`
*   `word1` and `word2` consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var longestPalindrome = function(word1, word2) {
    const l1 = word1.length
    const l2 = word2.length
    
    const word = word1 + word2
    const dp = Array(word.length).fill().map(() => Array(word.length).fill(0))
    for (let l = 1; l <= word.length; l += 1) {
        for (let i = 0; i < word.length; i += 1) {
            const j = i + l - 1
            if (j >= word.length) break
            if (l === 1) {
                dp[i][j] = 1
                continue
            }
            
            if (word[i] === word[j]) {
                if (l === 2) {
                    dp[i][j] = 2
                } else {
                    dp[i][j] = dp[i + 1][j - 1] + 2
                }
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }
    
    let ans = 0
    for (let i = 0; i < l1; i += 1) {
        for (let j = 0; j < l2; j += 1) {
            if (word1[i] === word2[j]) {
               ans = Math.max(ans, dp[i + 1][l1 + j - 1] + 2)
            }
        }
    }
    
    return ans
};
```