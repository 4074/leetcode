### [1405\. Longest Happy String](https://leetcode.com/problems/longest-happy-string/)

Difficulty: **Medium**


A string is called _happy_ if it does not have any of the strings `'aaa'`, `'bbb'` or `'ccc'` as a substring.

Given three integers `a`, `b` and `c`, return **any** string `s`, which satisfies following conditions:

*   `s` is _happy _and longest possible.
*   `s` contains **at most** `a` occurrences of the letter `'a'`, **at most** `b` occurrences of the letter `'b'` and **at most** `c` occurrences of the letter `'c'`.
*   `s `will only contain `'a'`, `'b'` and `'c'` letters.

If there is no such string `s` return the empty string `""`.

**Example 1:**

```
Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
```

**Example 2:**

```
Input: a = 2, b = 2, c = 1
Output: "aabbc"
```

**Example 3:**

```
Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It's the only correct answer in this case.
```

**Constraints:**

*   `0 <= a, b, c <= 100`
*   `a + b + c > 0`


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let result = ''
    const mem = new Set()
    
    function dfs(counts, chars, s) {
        if (s.length) {
            let key = s.length[s.length - 1]
            const otherCounts = []
            for (let i = 0; i < counts.length; i += 1) {
                if (chars[i] !== key) otherCounts.push(counts[i])
            }
            otherCounts.sort()
            key += otherCounts.join(',')
            if (s.length >= 2 && s[s.length - 1] === s[s.length - 2]) {
                key += '-same'
            }
            if (mem.has(key)) return
            mem.add(key)
        }
        
        
        if (s.length > result.length) {
            result = s.join('')
        }
            
        for (let i = 0; i < counts.length; i += 1) {
            if (counts[i] > 0) {
                if (s.length < 2 || s[s.length - 1] !== chars[i] || s[s.length - 2] !== chars[i]) {
                    s.push(chars[i])
                    counts[i] -= 1
                    dfs(counts, chars, s)
                    counts[i] += 1
                    s.pop()
                }
            }
        }
    }
    
    dfs([a, b, c], ['a', 'b', 'c'], [])
    
    return result
};
```