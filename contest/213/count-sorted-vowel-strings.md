### [1641\. Count Sorted Vowel Strings](https://leetcode.com/problems/count-sorted-vowel-strings/)

Difficulty: **Medium**  

Related Topics: [Math](https://leetcode.com/tag/math/), [Dynamic Programming](https://leetcode.com/tag/dynamic-programming/), [Backtracking](https://leetcode.com/tag/backtracking/)


Given an integer `n`, return _the number of strings of length_ `n` _that consist only of vowels (_`a`_,_ `e`_,_ `i`_,_ `o`_,_ `u`_) and are **lexicographically sorted**._

A string `s` is **lexicographically sorted** if for all valid `i`, `s[i]` is the same as or comes before `s[i+1]` in the alphabet.

**Example 1:**

```
Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
```

**Example 2:**

```
Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
```

**Example 3:**

```
Input: n = 33
Output: 66045
```

**Constraints:**

*   `1 <= n <= 50` 


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const dp = Array(5).fill(1)
    for (let i = 2; i <= n; i += 1) {
        let sum = 0
        for (let j = 0; j < dp.length; j += 1) {
            sum += dp[j]
            dp[j] = sum
        }
    }
    return dp.reduce((sum, v) => sum + v, 0)
};
```