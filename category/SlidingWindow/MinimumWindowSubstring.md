### [76\. Minimum Window Substring](https://leetcode.com/problems/minimum-window-substring/)

Difficulty: **Hard**


Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

**Example:**

```
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
```

**Note:**

*   If there is no such window in S that covers all characters in T, return the empty string `""`.
*   If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map()
    let count = 0, result = '', left = 0
    
    // Count char times of `t`.
    for (const char of t) {
        map.set(
            char,
            (map.get(char) || 0) + 1
        )
        
        // Count unique char in t.
        if (map.get(char) === 1) {
            count += 1
        }
    }
​
    // Move `right` pointer to right.
    for (let right=0; right<s.length; right++) {
        
        // If char exists in t, times minus 1.
        if (map.has(s[right])) {
            const n = map.get(s[right]) - 1
            map.set(s[right], n)
            
            // If the char times in s equals in t, count minus 1.
            if (n === 0) {
                count -= 1
            }
        }
        
        // If all char times in s equals in t, set to result.
        while(count === 0) {
            if (!result || (right - left + 1) < result.length) {
                result = s.substr(left, right - left + 1)
            }
            
            // If char exists in t, times add 1.
            if (map.has(s[left])) {
                const n = map.get(s[left]) + 1
                
                map.set(s[left], n)
                
                // If the char times in s less than in t, count add 1.
                if (n === 1) {
                    count += 1
                }
            }
            
            // Move `left` pointer to right.
            left += 1
        }
    }
    
    return result
};
```