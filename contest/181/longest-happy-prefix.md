### [1392\. Longest Happy Prefix](https://leetcode.com/problems/longest-happy-prefix/)

Difficulty: **Hard**


A string is called a _happy prefix_ if is a **non-empty** prefix which is also a suffix (excluding itself).

Given a string `s`. Return the **longest happy prefix** of `s` .

Return an empty string if no such prefix exists.

**Example 1:**

```
Input: s = "level"
Output: "l"
Explanation: s contains 4 prefix excluding itself ("l", "le", "lev", "leve"), and suffix ("l", "el", "vel", "evel"). The largest prefix which is also suffix is given by "l".
```

**Example 2:**

```
Input: s = "ababab"
Output: "abab"
Explanation: "abab" is the largest prefix which is also suffix. They can overlap in the original string.
```

**Example 3:**

```
Input: s = "leetcodeleet"
Output: "leet"
```

**Example 4:**

```
Input: s = "a"
Output: ""
```

**Constraints:**

*   `1 <= s.length <= 10^5`
*   `s` contains only lowercase English letters.


#### Solution

Language: **JavaScript**

KMP
```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPrefix = function(s) {
    const result = Array(s.length).fill(0)
    let k = 0
    for (let i = 1; i < s.length; i += 1) {
        if (s[i] === s[k]) {
            k += 1
            result[i] = k
        } else {
            if (k) {
                k = result[k - 1]
                i -= 1
            } else {
                result[i] = 0
            }
        }
    }
    return s.substr(0, result[s.length - 1])
};
```