### [1358\. Number of Substrings Containing All Three Characters](https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/)

Difficulty: **Medium**


Given a string `s` consisting only of characters _a_, _b_ and _c_.

Return the number of substrings containing **at least** one occurrence of all these characters _a_, _b_ and _c_.

**Example 1:**

```
Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
```

**Example 2:**

```
Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
```

**Example 3:**

```
Input: s = "abc"
Output: 1
```

**Constraints:**

*   `3 <= s.length <= 5 x 10^4`
*   `s` only consists of _a_, _b_ or _c _characters.


#### Solution

Language: **JavaScript**

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0
    let a = 0, b = 0, c = 0
    let left = 0, right = -1
    
    while (right < s.length) {
        if (a && b && c) {
            count += s.length - right
            if (s[left] === 'a') a -= 1
            if (s[left] === 'b') b -= 1
            if (s[left] === 'c') c -= 1
            left += 1
        } else {
            right += 1
            if (s[right] === 'a') a += 1
            if (s[right] === 'b') b += 1
            if (s[right] === 'c') c += 1
        }
    }
    
    return count
};
```