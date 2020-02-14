### [1297\. Maximum Number of Occurrences of a Substring](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/)

Difficulty: **Medium**


Given a string `s`, return the maximum number of ocurrences of **any** substring under the following rules:

*   The number of unique characters in the substring must be less than or equal to `maxLetters`.
*   The substring size must be between `minSize` and `maxSize` inclusive.

**Example 1:**

```
Input: s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4
Output: 2
Explanation: Substring "aab" has 2 ocurrences in the original string.
It satisfies the conditions, 2 unique letters and size 3 (between minSize and maxSize).
```

**Example 2:**

```
Input: s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3
Output: 2
Explanation: Substring "aaa" occur 2 times in the string. It can overlap.
```

**Example 3:**

```
Input: s = "aabcabcab", maxLetters = 2, minSize = 2, maxSize = 3
Output: 3
```

**Example 4:**

```
Input: s = "abcde", maxLetters = 2, minSize = 3, maxSize = 3
Output: 0
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   `1 <= maxLetters <= 26`
*   `1 <= minSize <= maxSize <= min(26, s.length)`
*   `s` only contains lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    const freq = new Map()
    
    for (let i = 0; i <= s.length - minSize; i += 1) {
        const count = new Set()
        let str = ''
        for (let j = i; j <= i + minSize; j += 1) {
            if (j === i + minSize) {
                freq.set(str, (freq.get(str) || 0) + 1)
            }
            count.add(s[j])
            if (count.size > maxLetters) break
            str += s[j]
        }
    }
    
    return Math.max(0, ...freq.values())
};
```