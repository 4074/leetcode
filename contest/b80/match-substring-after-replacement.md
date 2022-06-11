# [2301\. Match Substring After Replacement](https://leetcode.com/problems/match-substring-after-replacement/)

## Description

Difficulty: **Hard**  

Related Topics:


You are given two strings `s` and `sub`. You are also given a 2D character array `mappings` where mappings[i] = [old<sub>i</sub>, new<sub>i</sub>] indicates that you may **replace** any number of old<sub>i</sub> characters of `sub` with new<sub>i</sub>. Each character in `sub` **cannot** be replaced more than once.

Return `true` _if it is possible to make_ `sub` _a substring of_ `s` _by replacing zero or more characters according to_ `mappings`. Otherwise, return `false`.

A **substring** is a contiguous non-empty sequence of characters within a string.

**Example 1:**

```
Input: s = "fool3e7bar", sub = "leet", mappings = [["e","3"],["t","7"],["t","8"]]
Output: true
Explanation: Replace the first 'e' in sub with '3' and 't' in sub with '7'.
Now sub = "l3e7" is a substring of s, so we return true.
```

**Example 2:**

```
Input: s = "fooleetbar", sub = "f00l", mappings = [["o","0"]]
Output: false
Explanation: The string "f00l" is not a substring of s and no replacements can be made.
Note that we cannot replace '0' with 'o'.
```

**Example 3:**

```
Input: s = "Fool33tbaR", sub = "leetd", mappings = [["e","3"],["t","7"],["t","8"],["d","b"],["p","b"]]
Output: true
Explanation: Replace the first and second 'e' in sub with '3' and 'd' in sub with 'b'.
Now sub = "l33tb" is a substring of s, so we return true.

```

**Constraints:**

*   `1 <= sub.length <= s.length <= 5000`
*   `0 <= mappings.length <= 1000`
*   `mappings[i].length == 2`
*   old<sub>i</sub> != new<sub>i</sub>
*   `s` and `sub` consist of uppercase and lowercase English letters and digits.
*   old<sub>i</sub> and new<sub>i</sub> are either uppercase or lowercase English letters or digits.


## Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} sub
 * @param {character[][]} mappings
 * @return {boolean}
 */
var matchReplacement = function(s, sub, mappings) {
  const mp = Array(256).fill().map(() => Array(256).fill(0))
  for (const [o, n] of mappings) {
    mp[o.charCodeAt(0)][n.charCodeAt(0)] = 1
  }
  for (let i = 0; i < s.length - sub.length + 1; i += 1) {
    let j = 0;
    while (j < sub.length) {
      if (s[i + j] === sub[j] || mp[sub.charCodeAt(j)][s.charCodeAt(i + j)]) {
        j += 1
      } else {
        break
      }
    }
    if (j === sub.length) return true
  }
  return false
};
```