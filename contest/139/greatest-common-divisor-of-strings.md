### [1071\. Greatest Common Divisor of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)

Difficulty: **Easy**


For strings `S` and `T`, we say "`T` divides `S`" if and only if `S = T + ... + T`  (`T` concatenated with itself 1 or more times)

Return the largest string `X` such that `X` divides <font face="monospace" style="display: inline;">str1</font> and `X` divides <font face="monospace" style="display: inline;">str2</font>.

**Example 1:**

```
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
```

**Example 2:**

```
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
```

**Example 3:**

```
Input: str1 = "LEET", str2 = "CODE"
Output: ""
```

**Note:**

1.  `1 <= str1.length <= 1000`
2.  `1 <= str2.length <= 1000`
3.  `str1[i]` and `str2[i]` are English uppercase letters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1.length > str2.length) {
        const s = str1
        str1 = str2
        str2 = s
    }
    
    function isDivisor(str, d) {
        if (str.length % d.length) return false
        if (str.length === d.length) return str === d
        for (let i = 0; i < d.length; i += 1) {
            let j = i + d.length
            while (j < str.length) {
                if (str[j] !== str[j - d.length]) return false
                j += d.length
            }
        }
        return true
    }
    
    for (let l = str1.length; l > 0; l -= 1) {
        const d = str1.substr(0, l)
        if (isDivisor(str1, d) && isDivisor(str2, d)) return d
    }
    
    return ''
};
```