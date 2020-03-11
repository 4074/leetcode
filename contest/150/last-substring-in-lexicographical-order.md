### [1163\. Last Substring in Lexicographical Order](https://leetcode.com/problems/last-substring-in-lexicographical-order/)

Difficulty: **Hard**


Given a string `s`, return the last substring of `s` in lexicographical order.

**Example 1:**

```
Input: "abab"
Output: "bab"
Explanation: The substrings are ["a", "ab", "aba", "abab", "b", "ba", "bab"]. The lexicographically maximum substring is "bab".
```

**Example 2:**

```
Input: "leetcode"
Output: "tcode"
```

**Note:**

1.  `1 <= s.length <= 4 * 10^5`
2.  <font face="monospace" style="display: inline;">s</font> contains only lowercase English letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {
    const base = 'a'.charCodeAt(0)
    let queue = []
    for (let i = 0; i < s.length; i += 1){
        queue.push(i)
    }
    
    let steps = 0
    while (queue.length > 1) {
        const nextCharsIndex = Array(27).fill().map(() => [])
        const set = new Set()
        for (const index of queue) {
            set.add(index)
            if (index + steps >= s.length) continue
            if (steps > 0 && set.has(index - steps)) continue
            nextCharsIndex[s.charCodeAt(index + steps) - base].push(index)
        }
        for (let i = 26; i >= 0; i -= 1){
            if (nextCharsIndex[i].length > 0) {
                queue = nextCharsIndex[i]
                break
            }
        }
        steps += 1
    }
    
    return s.substr(queue[0])
};
```