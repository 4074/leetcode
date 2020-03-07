### [1316\. Distinct Echo Substrings](https://leetcode.com/problems/distinct-echo-substrings/)

Difficulty: **Hard**


Return the number of **distinct** non-empty substrings of `text` that can be written as the concatenation of some string with itself (i.e. it can be written as `a + a` where `a` is some string).

**Example 1:**

```
Input: text = "abcabcabc"
Output: 3
Explanation: The 3 substrings are "abcabc", "bcabca" and "cabcab".
```

**Example 2:**

```
Input: text = "leetcodeleetcode"
Output: 2
Explanation: The 2 substrings are "ee" and "leetcodeleetcode".
```

**Constraints:**

*   `1 <= text.length <= 2000`
*   `text` has only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} text
 * @return {number}
 */
var distinctEchoSubstrings = function(text) {
    // Rabin-Karp solution
    const n = text.length
    const h = Array(n).fill()
        .map(() => Array(n).fill(0))
    const base = 27
    const charCodeBase = 'a'.charCodeAt(0) - 1
    const mod = Math.pow(10, 9) + 7
    
    for (let i = 0; i < n; i += 1) {
        let power = base
        h[i][i] = text.charCodeAt(i) - charCodeBase
        for (let j = i + 1; j < n; j += 1) {
            h[i][j] = (h[i][j - 1] * base
                + text.charCodeAt(j) - charCodeBase) % mod
        }
    }
    
    const strings = new Set()
    for (let i = 0; i < n; i += 1) {
        for (let j = i + 1; j < n; j += 2) {
            const mid = (j - i + 1) / 2 + i
            if (h[i][mid - 1] === h[mid][j]) {
                strings.add(h[i][j])
            }
        }
    }
    
    return strings.size
};
```