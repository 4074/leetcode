### [2186\. Minimum Number of Steps to Make Two Strings Anagram II](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/)

Difficulty: **Medium**


You are given two strings `s` and `t`. In one step, you can append **any character** to either `s` or `t`.

Return _the minimum number of steps to make_ `s` _and_ `t` _**anagrams** of each other._

An **anagram** of a string is a string that contains the same characters with a different (or the same) ordering.

**Example 1:**

```
Input: s = "leetcode", t = "coats"
Output: 7
Explanation: 
- In 2 steps, we can append the letters in "as" onto s = "leetcode", forming s = "leetcodeas".
- In 5 steps, we can append the letters in "leede" onto t = "coats", forming t = "coatsleede".
"leetcodeas" and "coatsleede" are now anagrams of each other.
We used a total of 2 + 5 = 7 steps.
It can be shown that there is no way to make them anagrams of each other with less than 7 steps.
```

**Example 2:**

```
Input: s = "night", t = "thing"
Output: 0
Explanation: The given strings are already anagrams of each other. Thus, we do not need any further steps.
```

**Constraints:**

*   `1 <= s.length, t.length <= 2 * 10<sup>5</sup>`
*   `s` and `t` consist of lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  const base = 'a'.charCodeAt(0)
  const counts = Array(26).fill(0)
  
  for (let i = 0; i < s.length; i += 1) {
    counts[s.charCodeAt(i) - base] += 1
  }
  
  for (let i = 0; i < t.length; i += 1) {
    counts[t.charCodeAt(i) - base] -= 1
  }
  
  let result = 0
  for (let i = 0; i < counts.length; i += 1) {
    result += Math.abs(counts[i])
  }
  
  return result
};
```